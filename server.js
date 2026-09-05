const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const CONFIG_FILE = path.join(__dirname, 'control_room_config.json');
const STATE_FILE = path.join(__dirname, 'control_room_state.json');

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

function parseJsonBody(req, callback) {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
    if (body.length > 25 * 1024 * 1024) { // 25MB safety limit
      req.connection.destroy();
    }
  });
  req.on('end', () => {
    try {
      const data = body ? JSON.parse(body) : {};
      callback(null, data);
    } catch (e) {
      callback(e);
    }
  });
}

const server = http.createServer((req, res) => {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
  const pathname = parsedUrl.pathname;

  // --- API 1: /api/config (Multi-Device Auto-Sync for Drive DB URL & Gemini AI Key) ---
  if (pathname === '/api/config') {
    if (req.method === 'GET') {
      let config = {
        gdriveUrl: process.env.GDRIVE_DB_URL || '',
        apiKey: process.env.GEMINI_API_KEY || '',
        model: 'gemini-2.5-flash',
        provider: 'gemini'
      };
      if (fs.existsSync(CONFIG_FILE)) {
        try {
          const fileConfig = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8'));
          config = Object.assign(config, fileConfig);
        } catch (e) {}
      }
      return sendJson(res, 200, config);
    }

    if (req.method === 'POST') {
      parseJsonBody(req, (err, data) => {
        if (err) return sendJson(res, 400, { error: 'Invalid JSON payload' });
        try {
          let current = {};
          if (fs.existsSync(CONFIG_FILE)) {
            try { current = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf-8')); } catch (e) {}
          }
          const updated = Object.assign(current, data, { updatedAt: new Date().toISOString() });
          fs.writeFileSync(CONFIG_FILE, JSON.stringify(updated, null, 2), 'utf-8');
          return sendJson(res, 200, { success: true, config: updated });
        } catch (e) {
          return sendJson(res, 500, { error: e.message });
        }
      });
      return;
    }
  }

  // --- API 2: /api/state (Multi-Device State Persistence) ---
  if (pathname === '/api/state') {
    if (req.method === 'GET') {
      if (fs.existsSync(STATE_FILE)) {
        try {
          const stateData = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
          return sendJson(res, 200, stateData);
        } catch (e) {}
      }
      return sendJson(res, 200, { data: null, message: 'No server state stored yet' });
    }

    if (req.method === 'POST') {
      parseJsonBody(req, (err, data) => {
        if (err) return sendJson(res, 400, { error: 'Invalid JSON payload' });
        try {
          const payload = {
            data: data.data || data,
            lastUpdated: new Date().toISOString()
          };
          fs.writeFileSync(STATE_FILE, JSON.stringify(payload), 'utf-8');
          return sendJson(res, 200, { success: true, lastUpdated: payload.lastUpdated });
        } catch (e) {
          return sendJson(res, 500, { error: e.message });
        }
      });
      return;
    }
  }

  // Static File Serving
  const filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);
  const ext = path.extname(filePath) || '.html';

  const contentTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Fallback to index.html for SPA routing
        fs.readFile(path.join(__dirname, 'index.html'), (err2, indexContent) => {
          if (err2) {
            res.writeHead(500);
            res.end('Error loading dashboard');
          } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(indexContent, 'utf-8');
          }
        });
      } else {
        res.writeHead(500);
        res.end('Server Error: ' + err.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'application/octet-stream' });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('COO / CXO Control Room running on port ' + PORT);
});

