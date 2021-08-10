/**
 * Function deleteCharts: Removes all charts from the Create Charts spreadsheet 
 */
function deleteCharts() {
  // Gets the number of charts in this spreadsheet
  var n = createGraphics.getCharts().length;

  // If the number of charts is greater than 0
  if (n > 0) {

    // For loop to iterate through each chart
    for (var i = n - 1; i >= 0; i--) {

      // Calls the removeChart function to remove the current chart
      createGraphics.removeChart(createGraphics.getCharts()[i]);
    }
  }
}
/**
 * Function executeAll: Executes all update functions 
 */
function executeAll() {
  //Iterates over the sheets array
  for (activeSheets of sheets) {

    //Calls updateSpreadsheet
    updateSpreadsheet(activeSheets);

    //Calls updateLogs
    updateLogs(activeSheets);

    //Calls updateRaiderIO
    updateRaiderIO(activeSheets);

    //Increments the activeSheets by 1
    activeSheets++;
  }
}
/**
 * Function setProperties: Pulls data from a specific Google Drive json 
 * file and parses that data then sets each up as a property in Google Apps Script
 */
function setProperties() {
  //Tries to get the file
  try {
    //Gets the file by ID
    var file = DriveApp.getFileById('1SHdDkhb0Xiq2DtcS2gbZDpXlnqMcClWA');

    //Sets file data as a string
    var files = file.getBlob().getDataAsString();

    //Parses the file data into JSON
    var json = JSON.parse(files);

  for(var i=0; i < Object.keys(json).length; i++){
    properties.setProperty(Object.keys(json)[i], Object.values(json)[i]);
  }

    //Catches any exceptions
  } catch (Exception) {
    Logger.log("Failed to read in file")
  }
}
