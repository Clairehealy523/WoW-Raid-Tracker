//Declares the activeSheet
var activeSheet; 

// Sets redData equal to the Team Red spreadsheet 
var redData = SpreadsheetApp.getActive().getSheetByName('Team Red');

//Sets birdData equal to the Team Bird spreadsheet
var birdData = SpreadsheetApp.getActive().getSheetByName('Team Bird');

//Sets mojitoData equal to the Team Mojito spreadsheet
var mojitoData = SpreadsheetApp.getActive().getSheetByName('Team Mojito');

//Sets allData equal to the All Data spreadsheet
var allData = SpreadsheetApp.getActive().getSheetByName('All Data');

//Sets createGraphics equal to the Create Charts spreadsheet 
var createGraphics = SpreadsheetApp.getActive().getSheetByName('Create Charts');

// Declares an Array called sheets
var sheets = [];

// Pushes redData, mojitoData and birdData to the sheets array
sheets.push(redData, mojitoData, birdData);

  //Tries to connect to the database
  try {

    // Gets the properties of my script and sets it equal to properties
    var properties = PropertiesService.getScriptProperties();

    // Gets the server, port and name properties and then sets it equal to the url variable
    var url = "jdbc:mysql://" + properties.getProperty("server") + ":" + properties.getProperty("port") + "/" + properties.getProperty("name");

    // Gets the url then the username and password properties then sets it equal to the conn variable
    var conn = Jdbc.getConnection(url, properties.getProperty("username"), properties.getProperty("password"));
    
    //Creates a statement
    var stmt = conn.createStatement();

  //Catches any exceptions 
  } catch (Exception) {
  }
