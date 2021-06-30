function executeAll(){
  popSpreadSheet();
  updateLogs();
  updateRaiderIO();
}
function onOpen() {
  var ui = SpreadsheetApp.getUi()
  ui.createMenu('Spreadsheet Updater')
    .addItem('Populate Spreadsheet', 'executeAll')
    .addSubMenu(SpreadsheetApp.getUi().createMenu('Update')
        .addItem('Update Spreadsheet', 'popSpreadSheet')
        .addItem('Update Warcraftlogs', 'updateLogs')
        .addItem('Update Raider.io', 'updateRaiderIO'))
    .addSeparator()
    .addItem('Update Database', 'PopulateDatabase')
    .addToUi();
}
