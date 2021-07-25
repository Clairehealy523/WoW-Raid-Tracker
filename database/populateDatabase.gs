var server="sql3.freemysqlhosting.net";
var name="sql3419212";
var username="sql3419212";
var password="aj3H8gKf6a";
var port= 3306
var app = SpreadsheetApp;
var activeSheet = app.getActive().getActiveSheet();
var x = 3;
var url = "jdbc:mysql://" + server + ":" + port + "/" + name;
var conn = Jdbc.getConnection(url, username, password); 

function populateDatabase() {
var stmt = conn.createStatement();
 while (activeSheet.getRange(x, 1).getValue() != "") {
   var characterName = "'" + activeSheet.getRange(x, 1).getValue() + "'";
   var classes = "'" + activeSheet.getRange(x, 2).getValue() + "'";
   var roles = "'" + activeSheet.getRange(x, 3).getValue() + "'";
   var armorTypes = "'" + activeSheet.getRange(x, 5).getValue() + "'";
   var covenants = "'" + activeSheet.getRange(x, 9).getValue() + "'";
   var covenantLeves = "'" + activeSheet.getRange(x, 10).getValue() + "'";
   var team = "'" + "Red" + "'";
   var sql = "INSERT INTO Characters(name, class, role, armorType, covenant, covenantLevel, team) "
   + " VALUES (" + characterName + ', ' + classes + ', ' + roles + ', ' + armorTypes + ', ' + covenants + ', ' + covenantLeves + ', ' + team + ')'; 
   "'" + activeSheet.getRange(x, 1).getValue() + "'" + ', ' + activeSheet.getRange(x, 2).getValue() + ', ' + activeSheet.getRange(x, 3).getValue() + ', '
   + activeSheet.getRange(x, 5).getValue() + ', ' + activeSheet.getRange(x, 9).getValue() + ', ' + parseInt(activeSheet.getRange(x, 10).getValue()) + ')';

var count = stmt.execute(sql, 1); 
var rs = stmt.getGeneratedKeys(); 

x++;
 }
rs.close();
stmt.close();
conn.close();
}
function populateItemLevel(){
var currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
var stmt = conn.createStatement();

 while (activeSheet.getRange(x, 1).getValue() != "") {

   var itemLevels = "'" + activeSheet.getRange(x, 4).getValue() + "'";
   var characterName = "'" + activeSheet.getRange(x, 1).getValue() + "'";
   var currentDates = "'" + currentDate + "'";
   var sql = "INSERT INTO ItemLevel(characterID, itemLevel, lastUpdate) SELECT characterID" + ', ' + itemLevels + ', ' + currentDates + " FROM Characters WHERE name=" + characterName;
   stmt.execute(sql, 1);
   var rs = stmt.getGeneratedKeys(); 
  x++;
 }
rs.close();
stmt.close();
conn.close();
}

function populateParses(){
var currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
   var currentDates = "'" + currentDate + "'";
var stmt = conn.createStatement();

 while (activeSheet.getRange(x, 1).getValue() != "") {
   var normalParse  = "'" + activeSheet.getRange(x, 6).getValue() + "'";
   var heroicParse = "'" + activeSheet.getRange(x, 7).getValue() + "'";
   var mythicParse = "'" + activeSheet.getRange(x, 8).getValue() + "'";
   var characterName = "'" + activeSheet.getRange(x, 1).getValue() + "'";
   var currentDates = "'" + currentDate + "'";
   var sql = "INSERT INTO Parses(characterID, normalParse, heroicParse, mythicParse, lastUpdate) SELECT characterID" + ', ' + normalParse + ', ' + heroicParse +  ', ' + mythicParse + ', ' +
  currentDates + " FROM Characters WHERE name=" + characterName;
   console.log(sql);
   stmt.execute(sql, 1);
   var rs = stmt.getGeneratedKeys(); 
  x++;
 }
rs.close();
stmt.close();
conn.close();
}
function populateMythicPlus(){
  var currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
  var currentDates = "'" + currentDate + "'";
  var stmt = conn.createStatement();
   while (activeSheet.getRange(x, 1).getValue() != "") {
  var characterName = "'" + activeSheet.getRange(x, 1).getValue() + "'";
  var weeklyHighest = "'" + activeSheet.getRange(x, 11).getValue() + "'";
  var totalKeys = "'" + activeSheet.getRange(x, 12).getValue() + "'";
  var score = "'" + activeSheet.getRange(x, 13).getValue() + "'";
  var sql = "INSERT INTO MythicPlus(characterID, weeklyHighest, totalKeys, score, lastUpdate) SELECT characterID" + ', ' + weeklyHighest + ', ' + totalKeys +  ', ' + score + ', ' +
  currentDates + " FROM Characters WHERE name=" + characterName;
   console.log(sql);
   stmt.execute(sql, 1);
   var rs = stmt.getGeneratedKeys(); 
  x++;
 }
x++;
}
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Spreadsheet Updater')
    .addItem('Update Parses', 'populateParses')
    .addItem('Update Item Level', 'populateItemLevel')
    .addItem('Update Database', 'popluateDatabase')
    .addItem('Update Mythic+ Score', 'populateMythicPlus')
    .addToUi();
}
