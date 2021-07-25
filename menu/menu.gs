/**
 * function onOpen: Creates a menu on the opened spreadsheet
 */
function onOpen() {
  try {
    // Tries to call getUi() function
    app = SpreadsheetApp.getUi();

    // If there's an error catch it and log error message
  } catch (error) {
    console.log(error)
  }

  if (app != null) {
    // Creates a menu called Spreadsheet Updater
    app.createMenu("Spreadsheet Updater")
      // Adds the executeAll function to the menu
      .addItem('Populate Spreadsheet', 'executeAll')
      // Adds a sub menu called Update
      .addSubMenu(SpreadsheetApp.getUi().createMenu('Update')
        // Adds updateSpreadsheet, updateLogs and updateRaiderIO to the sub menu
        .addItem('Update Spreadsheet', 'updateSpreadsheet')
        .addItem('Update Warcraftlogs', 'updateLogs')
        .addItem('Update Raider.io', 'updateRaiderIO'))
      // Adds a seperator to the menu
      .addSeparator()
      // Adds item to call the executeAllDatabase function
      .addItem('Populate Database', 'executeAllDatabase')
      // Adds the menu to the spreadsheets UI
      .addToUi();
  }
}
