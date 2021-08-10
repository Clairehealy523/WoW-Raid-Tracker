/**
 * Function executeRedCharts: Calls all the functions in the RedTeamCharts.gs file
 */
function executeRedCharts() {
  deleteCharts();
  redGroupComp();
  redClasses();
  redArmorType();
  redILevelParse();
  redCovenants();
  redMythicPlusScore();
  redMPlusKeys();
  redProgression();
  redCovenantLvls();
}
/**
 * Function executeMojitoCharts: Calls all the functions in the MojitoTeamCharts.gs file
 */
function executeMojitoCharts() {
  deleteCharts();
  mojitoGroupComp();
  mojitoClasses();
  mojitoArmorType();
  mojitoILevelParse();
  mojitoCovenants();
  mojitoMythicPlusScore();
  mojitoMPlusKeys();
  mojitoProgression();
  mojitoCovenantLvls();
}
/**
 * Function executeBirdCharts: Calls all the functions in the BirdTeamCharts.gs file
 */
function executeBirdCharts() {
  deleteCharts();
  birdGroupComp();
  birdClasses();
  birdArmorType();
  birdILevelParse();
  birdCovenants();
  birdMythicPlusScore();
  birdMPlusKeys();
  birdProgression();
  birdCovenantLvls();
}
/**
 * Function executeAllCharts: Calls all the functions in the AllTeamsCharts.gs file
 */
function executeAllCharts(){
  deleteCharts();
  allGroupComp();
  allClasses();
  allArmorType();
  allParse();
  allCovenants();
  allMythicPlusScore();
  allMPlusKeys();
  allMembers();
  allCovenantLvls();
}
