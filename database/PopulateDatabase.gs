/**
 * Function populateDatabase: Retrieves data from the spreadsheet then populates the Characters table in the database
 */
function populateDatabase() {

  // Sets x variable equal to 3 for starting row
  var x = 3;
  for (activeSheet of sheets) {
    // Creates a statement and sets it equal to stmt
    var stmt = conn.createStatement();

    // While the row (x) and first columns value is not empty
    while (activeSheet.getRange(x, 1).getValue() != "") {

      if (!activeSheet.getRange(x, 1).isPartOfMerge()) {
        // Sets characterName equal to the row (x) and the first columns value
        var characterName = "'" + activeSheet.getRange(x, 1).getValue() + "'";

        // Sets classes equal to the row (x) and the second columns value
        var classes = "'" + activeSheet.getRange(x, 2).getValue() + "'";

        // Sets roles equal to the row (x) and the third columns value
        var roles = "'" + activeSheet.getRange(x, 3).getValue() + "'";

        // Sets itemLevel equal to the row (x) and the fourth columns value
        var itemLevel = "'" + activeSheet.getRange(x, 4).getValue() + "'";

        // Sets armorTypes equal to the row (x) and the fifth columns value
        var armorTypes = "'" + activeSheet.getRange(x, 5).getValue() + "'";

        // Sets normalParse equal to the row (x) and the sixth columns value
        var normalParse = "'" + activeSheet.getRange(x, 6).getValue() + "'";

        // Sets heroicParse equal to the row (x) and the sixth columns value
        var heroicParse = "'" + activeSheet.getRange(x, 7).getValue() + "'";

        // Sets mythicParse equal to the row (x) and the sixth columns value
        var mythicParse = "'" + activeSheet.getRange(x, 8).getValue() + "'";

        // Sets covenants equal to the row (x) and the ninth columns value
        var covenants = "'" + activeSheet.getRange(x, 9).getValue() + "'";

        // Sets covenantLevels equal to the row (x) and the tenth columns value
        var covenantLevels = "'" + activeSheet.getRange(x, 10).getValue() + "'";

        // Sets covenantLevels equal to the row (x) and the tenth columns value
        var weeklyHighest = "'" + activeSheet.getRange(x, 11).getValue() + "'";

        // Sets covenantLevels equal to the row (x) and the tenth columns value
        var totalKeys = "'" + activeSheet.getRange(x, 12).getValue() + "'";

        // Sets covenantLevels equal to the row (x) and the tenth columns value
        var score = "'" + activeSheet.getRange(x, 13).getValue() + "'";

        // Sets team equal to the team name
        var team = "'" + activeSheet.getName().replace("Team ", "") + "'";

        // Sets currentDate equal to the current date
        var currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');
        
        // Sets lastUpdate equal to a string of the currentDate
        var lastUpdate = "'" + currentDate + "'";
        try {
          // Creates an SQL statement
          var sql = "INSERT INTO Characters(name, class, role, armorType, covenant, covenantLevel, team, itemLevel, weeklyHighest, totalKeys, score,  normalParse, heroicParse, mythicParse, lastUpdate) "
            + " VALUES (" + characterName + ', ' + classes + ', ' + roles + ', ' + armorTypes + ', ' + covenants + ', ' + covenantLevels + ', ' + team
            + ', ' + itemLevel + ', ' + weeklyHighest + ', ' + totalKeys + ', ' + score + ', ' + normalParse + ', ' + heroicParse + ', ' + mythicParse + ', ' + lastUpdate + ')';

          // Executes the SQL statement
          stmt.execute(sql, 1);

          //Gets the generated keys 
          var rs = stmt.getGeneratedKeys();

        } catch (SQLException) {
          console.log("Error while attempting to Insert to the Database");
        }
        // Increments the row (x)
        x++;
      }

      else {
        x++;
      }
    }//End While Loop

    //Sets x back to equal 3
    x = 3;

    //Increments the active sheet
    activeSheet++;
  }

  // Closes connections
  rs.close();
  stmt.close();
  conn.close();
}
