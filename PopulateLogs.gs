/**
 * Function populateLogs: Insert into the Parses table of the database
 */
function populateLogs() {
  // Sets the current data in Date format 
  var currentDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

  // Creates a statement and sets it equal to stmt
  var stmt = conn.createStatement();

  // While the row (x) and first columns value is not empty
  while (activeSheet.getRange(x, 1).getValue() != "") {

    // Sets characterName equal to the row (x) and the first columns value
    var characterName = "'" + activeSheet.getRange(x, 1).getValue() + "'";

    // Sets normalParse equal to the row (x) and the sixth columns value
    var normalParse = "'" + activeSheet.getRange(x, 6).getValue() + "'";

    // Sets heroicParse equal to the row (x) and the seventh columns value
    var heroicParse = "'" + activeSheet.getRange(x, 7).getValue() + "'";

    // Sets mythicParse equal to the row (x) and the eighth columns value
    var mythicParse = "'" + activeSheet.getRange(x, 8).getValue() + "'";

    // Sets currentDates equal to the currentDate 
    var currentDates = "'" + currentDate + "'";

    // Creates an SQL statement to insert into the Parses table
    var sql = "INSERT INTO Parses(characterID, normalParse, heroicParse, mythicParse, lastUpdate) SELECT characterID" + ', ' + normalParse + ', ' + heroicParse + ', ' + mythicParse + ', ' + currentDates + " FROM Characters WHERE name=" + characterName;

    // Executes the SQL statement
    stmt.execute(sql, 1);

    //Gets the generated keys 
    var rs = stmt.getGeneratedKeys();

    // Increments the row (x)
    x++;
  }
  // Closes the connections
  rs.close();
  stmt.close();
  conn.close();
} // End function
