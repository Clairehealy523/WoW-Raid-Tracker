// Set activeSheet equal to the spreadsheets active sheet
var activeSheet = SpreadsheetApp.getActive().getActiveSheet();

// Initializes the row (x) equal to 3
var x = 3;

// Gets the properties of my script and sets it equal to properties
var properties = PropertiesService.getScriptProperties();

// Gets the server, port and name properties and then sets it equal to the url variable
var url = "jdbc:mysql://" + properties.getProperty("server") + ":" + properties.getProperty("port") + "/" + properties.getProperty("name");

// Gets the url then the username and password properties then sets it equal to the conn variable
var conn = Jdbc.getConnection(url, properties.getProperty("username"), properties.getProperty("password"));

/**
 * Function populateDatabase: Retrieves data from the spreadsheet then populates the Characters table in the database
 */
function populateDatabase() {
  // Creates a statement and sets it equal to stmt
  var stmt = conn.createStatement();

  // While the row (x) and first columns value is not empty
  while (activeSheet.getRange(x, 1).getValue() != "") {

    // Sets characterName equal to the row (x) and the first columns value
    var characterName = "'" + activeSheet.getRange(x, 1).getValue() + "'";

    // Sets classes equal to the row (x) and the second columns value
    var classes = "'" + activeSheet.getRange(x, 2).getValue() + "'";

    // Sets roles equal to the row (x) and the third columns value
    var roles = "'" + activeSheet.getRange(x, 3).getValue() + "'";

    // Sets armorTypes equal to the row (x) and the fifth columns value
    var armorTypes = "'" + activeSheet.getRange(x, 5).getValue() + "'";

    // Sets covenants equal to the row (x) and the ninth columns value
    var covenants = "'" + activeSheet.getRange(x, 9).getValue() + "'";

    // Sets covenantLevels equal to the row (x) and the tenth columns value
    var covenantLevels = "'" + activeSheet.getRange(x, 10).getValue() + "'";

    // Sets team equal to Red
    var team = "'" + "Red" + "'";

    // Creates an SQL statement
    var sql = "INSERT INTO Characters(name, class, role, armorType, covenant, covenantLevel, team) "
      + " VALUES (" + characterName + ', ' + classes + ', ' + roles + ', ' + armorTypes + ', ' + covenants + ', ' + covenantLevels + ', ' + team + ')';
    "'" + activeSheet.getRange(x, 1).getValue() + "'" + ', ' + activeSheet.getRange(x, 2).getValue() + ', ' + activeSheet.getRange(x, 3).getValue() + ', '
      + activeSheet.getRange(x, 5).getValue() + ', ' + activeSheet.getRange(x, 9).getValue() + ', ' + parseInt(activeSheet.getRange(x, 10).getValue()) + ')';

    // Executes the SQL statement
    stmt.execute(sql, 1);

    //Gets the generated keys 
    var rs = stmt.getGeneratedKeys();

    // Increments the row (x)
    x++;
  }
  // Closes connections
  rs.close();
  stmt.close();
  conn.close();
}
