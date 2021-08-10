/**
 * Function projectSetUp: In order to set up everything for your new spreadsheeet select from
 * the drop down menu "projectSetUp" and click run
 */
function projectSetUp() {
  //Sets the properties of the project
  setProperties();

  //Creates the OnOpen menu trigger
  createOnOpenTrigger();

  //Creates a timer trigger to send data to the database
  createPopulateDatabaseTrigger();

  //Creates a timer trigger to update each spreadsheet
  createSpreadsheetUpdateTrigger();

  //Creates a timer trigger to update the All Data spreadsheet 
  createDatabaseTableTrigger();
}
