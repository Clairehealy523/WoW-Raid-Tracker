/**
 * Function executeAll: Executes all update functions 
 */
function executeAll(){
  updateSpreadsheet();
  updateLogs();
  updateRaiderIO();
}

/**
 * Function executeAllDatabase: Executes all database functions
 */
function executeAllDatabase(){
  populateItemLevel()
  populateParses()
  populateMythicPlus()

}
