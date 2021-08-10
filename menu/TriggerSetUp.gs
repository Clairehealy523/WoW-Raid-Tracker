/**
 * Function createOnOpenTrigger: Creates a new menu when the spreadsheet is opened
 */
function createOnOpenTrigger() {

  //Defines a new trigger for the onOpen function
  ScriptApp.newTrigger('onOpen')

    // For the current Spreadsheet
    .forSpreadsheet(SpreadsheetApp.getActive())
    
    //That triggers on open
    .onOpen()

    //Creates the trigger
    .create();

  Logger.log('Trigger Created Successfully!')
}
/**
 * Function createSpreadsheetUpdateTrigger: Creates an timer trigger which 
 * updates all of the teams data from new data pulled in from several APIs 
 */
function createSpreadsheetUpdateTrigger() {

  // Defines a new trigger for the executeAll function
  ScriptApp.newTrigger('executeAll')

    //Sets it up as time based
    .timeBased()

    //Runs at 12am
    .atHour(12)

    //Every 1 day
    .everyDays(1)

    //From the PST timezone
    .inTimezone('America/Los_Angeles')

    //Creates the trigger
    .create();

  Logger.log('Trigger Created Successfully!')
}

/**
 * Function createPopulateDatabaseTrigger: Creates a timer trigger which
 * pushes character data for each team to the database. 
 */
function createPopulateDatabaseTrigger() {

  // Defines a new trigger for the populateDatabase function
  ScriptApp.newTrigger('populateDatabase')

    //Sets it up as time based
    .timeBased()

    //Runs at 2am
    .atHour(2)

    //Every 1 day
    .everyDays(1)

    //From the PST timezone
    .inTimezone('America/Los_Angeles')

    //Creates the trigger
    .create();

  Logger.log('Trigger Created Successfully!')
}
/**
 * Function createDatabaseTableTrigger: Creates a timer trigger which
 * pulls data from the database and imports it into the All Data table
 */
function createDatabaseTableTrigger() {

  //Creates a new trigger for the createDatabaseTable function
  ScriptApp.newTrigger('createDatabaseTable')

    // Sets it up as time based
    .timeBased()

    //Runs at 3am
    .atHour(3)

    //Every 1 day
    .everyDays(1)

    //From the PST timezone
    .inTimezone('America/Los_Angeles')

    //Creates the trigger
    .create();
    
  Logger.log('Trigger Created Successfully!')
}

