/**
 * Function executeAll: Executes all update functions 
 */
function executeAll(){
  popSpreadSheet();
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
