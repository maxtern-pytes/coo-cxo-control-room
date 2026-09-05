# Offcomfrt — COO / CXO Control Room Dashboard

An executive control room dashboard tailored for a leader simultaneously managing **Operations (COO)** (Supply Chain, Warehouse & Fulfillment, Logistics & Carriers, Quality Assurance) and **Customer Experience (CXO)** (Support Operations, Post-Purchase Delight, Escalations, CSAT/NPS, Returns).

---

## Key Features

### 1. 🔍 Real-Time Order Activity Verifier & Timestamp Log (New!)
- **Cross-Platform Chronological Activity Stream**:
  - The AI inspects every connected panel (**Shopify Storefront**, **Delhivery One**, **Shiprocket**, and your **Custom Return & Exchange Panel**) for any order ID or carrier AWB.
  - Automatically correlates and stitches together a single, strictly chronological **Timestamp-Based Multi-Panel Activity Log** showing exactly what happened, when, on which panel, and who acted.
- **Pinpointing Discrepancies by Exact Timestamp**:
  - Catches fake courier Non-Delivery Reports (NDRs) down to the minute (e.g. rider marking door locked while customer was messaging support, with telephony logs confirming 0s call duration).
  - Unmasks volumetric weight overcharges (dead weight 0.84 kg billed in 2.0 kg slab).
  - Flags reverse return bottlenecks (carrier delivered reverse parcel to warehouse gate, but return panel left un-inwarded for >40h).
- **🔒 Strict Read-Only Policy**:
  - The AI **only inspects, verifies, and provides factual data**. It has zero write/mutation permissions on your live platforms (no automated cancellations, status changes, or unauthorized tampering).

---

### 2. 🔌 Extensible Shipping Partners & Custom In-House Platforms Registry (New!)
- **Add Any Shipping Partner via API**:
  - Easily connect additional 3PL carriers (**Blue Dart Express**, **Xpressbees**, **Shadowfax**, **DTDC**, **Amazon Shipping**, etc.) with custom API Base URLs, Read-Only Bearer Tokens, and Tracking query patterns.
- **Add Custom-Built In-House Platforms**:
  - Register proprietary internal systems (**Custom WMS Barcode Engine**, **Custom OMS**, **Factory QC Portal**, **Sourcing Portal**).
  - Supports both **REST API (Read-Only)** and **CSV / Manual Data Ingestion** for platforms without APIs.
- **📥 Custom Return & Exchange Ingestion (No API / Webhook Needed)**:
  - Drag-and-drop or paste CSV/table exports from your custom return panel.
  - The AI automatically extracts Order IDs, Return IDs, Reverse AWBs, and Return Reasons, linking them to forward orders for live cross-verification.
- **Full Cloud Persistence**:
  - All registered platforms, custom carriers, and ingested return logs sync automatically to your **Google Drive Database**.

---

### 3. 🤖 AI Executive Copilot Chat
- Ask natural-language queries in chat (e.g. *"Verify order #10842"*, *"Check order #10844 and related exchange"*, *"Audit AWB DEL-908124"*).
- The AI automatically executes the multi-panel cross-audit and prints the complete, color-coded, timestamped activity card directly in the chat bubble.

---

### 4. ☁️ Google Drive as a Database (Cloud Sync & Backup)
- Connect your personal Google Drive to store, sync, and persist your entire dashboard state () automatically across all devices.
- Free, private, and zero Google Cloud Console / billing setup required.

---

### 5. 👤 Profile & Team Customization
- **Edit Your Profile & Brand**: Click **"Edit Profile"** in the topbar or the Brand header to change your name, role, company name, and capacity.
- **Manage Team Members**: Add, edit, or remove team members in the **Team** view with automatic task reassignment.

---

### 6. 📋 14 Core Executive Views
1. **Home**: Executive priority, top P0/P1 tasks, real-time KPI strip, friction matrix, today's standups, team capacity, and at-risk programs.
2. **My Day**: Personal execution queue.
3. **Tasks**: Master task database with multi-field filtering.
4. **Team**: At a Glance, Capacity Planner (utilization hours), Directory, Org Structure, and Shifts.
5. **Projects**: 6 core strategic programs with milestone tracks and risk logs.
6. **Meetings & 1:1s**: Daily Ops Standup, Carrier SLA Reviews, and 1:1s with 1-click action item to task conversion.
7. **Delegation & Follow-ups**: Delegated work tracking, Waiting Room, and Carrier/Supplier follow-ups.
8. **Blocked & Stale**: Monitor for SLA breaches, stalled tasks, and dependency heatmap.
9. **Approvals**: Executive sign-offs for carrier contracts, warehouse capex, factory quality waivers, and customer claims.
10. **Deadlines & Calendar**: Grouped chronological queues + full interactive monthly calendar.
11. **Goals**: 3-tier strategy tree linking strategic objectives to frontline deliverables.
12. **SOPs**: Operational SOP library.
13. **Insights**: Weekly Execution Review, Scorecard, Systemic Bottlenecks, Audit Log, and 1-click text report exporter.
14. **AI Assistant**: Order Activity Verifier, Copilot Chat, Multi-Dashboard Reconciler, and Platforms Registry.

---

## Connecting Google Drive as Your Database (2 Minutes)

1. Open your dashboard and click the **"Drive DB"** button in the top navigation bar.
2. In the modal, copy the provided Google Apps Script code (also available in `google-drive-database-script.gs`).
3. Go to [script.google.com](https://script.google.com/home/start) (or in Google Drive: click **New + → More → Google Apps Script**).
4. Name the project `ControlRoomDB`, erase any default code, and paste the script.
5. Click **Deploy** (top right) → **New deployment**:
   - Click the ⚙️ icon next to "Select type" → choose **Web app**.
   - Set **Execute as**: **Me** (`your-email@gmail.com`).
   - Set **Who has access**: **Anyone**.
6. Click **Deploy**, authorize permissions with your Google account, and copy the generated **Web app URL**.
7. Paste your Web App URL into the dashboard modal and click **"Save & Connect"**.

---

## Deployment on Render (100% Free & Always Online)

### Method 1: 1-Click Blueprint Deployment (Easiest)
This repository includes a pre-configured `render.yaml` blueprint:
1. Log in to your [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** (top right) → **Blueprint**.
3. Connect your GitHub repository: `https://github.com/maxtern-pytes/coo-cxo-control-room`.
4. Render will automatically detect `render.yaml` and configure the static web service.
5. Click **Apply**. Your dashboard will deploy within seconds at your custom Render URL (`https://coo-cxo-control-room.onrender.com`).

---

### Method 2: Manual Static Site Deployment (Recommended & Instant CDN)
1. In [Render Dashboard](https://dashboard.render.com/), click **New +** → **Static Site**.
2. Connect your GitHub repository: `maxtern-pytes/coo-cxo-control-room`.
3. Configure the following fields:
   - **Name**: `coo-cxo-control-room` (or your preferred project name)
   - **Branch**: `main`
   - **Root Directory**: leave blank (or `./`)
   - **Build Command**: leave blank
   - **Publish Directory**: `.` (or `./`)
4. Click **Create Static Site**.
5. Your dashboard will be live within 30 seconds on Render's global CDN with automatic SSL, zero cold starts, and instant deploys on every git push!

---

### Method 3: Node.js Web Service
If you prefer running the included Node.js server (`server.js`):
1. In [Render Dashboard](https://dashboard.render.com/), click **New +** → **Web Service**.
2. Connect your repository.
3. Configure:
   - **Runtime**: `Node`
   - **Build Command**: `npm install` (or leave empty)
   - **Start Command**: `npm start` (or `node server.js`)
   - **Plan**: `Free`
4. Click **Create Web Service**.
