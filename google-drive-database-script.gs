// =========================================================================
// OFFCOMFRT — GOOGLE DRIVE DATABASE BACKEND SCRIPT
// Free, private, zero-setup Google Drive database for your Control Room.
// =========================================================================

var DATABASE_FILE = "coo_cxo_database.json";

/**
 * Handles GET requests:
 * Reads the latest database JSON file directly from your Google Drive.
 */
function doGet(e) {
  var files = DriveApp.getFilesByName(DATABASE_FILE);
  if (files.hasNext()) {
    var file = files.next();
    var content = file.getBlob().getDataAsString("UTF-8");
    return ContentService.createTextOutput(content)
      .setMimeType(ContentService.MimeType.JSON);
  }
  return ContentService.createTextOutput(JSON.stringify({ status: "empty" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Handles POST requests:
 * Writes/overwrites the database JSON file in your Google Drive.
 */
function doPost(e) {
  var data = e.postData.contents;
  var files = DriveApp.getFilesByName(DATABASE_FILE);
  var file;
  if (files.hasNext()) {
    file = files.next();
    file.setContent(data);
  } else {
    file = DriveApp.createFile(DATABASE_FILE, data, MimeType.PLAIN_TEXT);
  }
  return ContentService.createTextOutput(JSON.stringify({
    status: "success",
    timestamp: new Date().toISOString(),
    fileId: file.getId()
  })).setMimeType(ContentService.MimeType.JSON);
}
