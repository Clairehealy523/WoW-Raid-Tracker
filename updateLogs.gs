/**
 * Function updateLogs: Updates the N Avg. Parse, H Avg. Parse, and M Avg. Parse columns of the spreadsheet
 */
function updateLogs() {

  // Gets the properties of my script and sets it equal to properties
  var properties = PropertiesService.getScriptProperties();

  // Gets the active spreadsheet and sets it equal to activeSheet
  var activeSheet = SpreadsheetApp.getActive().getActiveSheet();

  // Initializes the row (x) equal to 3
  var x = 3;

  // Sets the tokenURL equal the the access token URL
  var tokenURL = 'https://www.warcraftlogs.com/oauth/token';

  // Retrieves the client_id and client_secret and sets the payload
  var formData = {
    'client_id': properties.getProperty('warcraftlogs_client_id'),
    'client_secret': properties.getProperty('warcraftlogs_client_secret'),
    'grant_type': 'client_credentials'
  }

  // HTTP request to generate a new access token
  var tokenResponse = UrlFetchApp.fetch(tokenURL, {
    method: 'POST',
    payload: formData,
  })

  // Using the tokenResponse get the ContentText
  var tokenJSON = tokenResponse.getContentText();

  // Parse the tokenJSON into JSON and set it equal to the accessToken variable
  var accessToken = JSON.parse(tokenJSON);

  // Sets the token equal the JSON access token
  var token = accessToken.access_token;

  // While the row (x) and first columns value is not empty
  while (activeSheet.getRange(x, 1).getValue() != "") {

    // Set realm equal to the value of x row and column 14 
    var realm = activeSheet.getRange(x, 14).getValue();

    // Set characterName equal to the value of x row and column 1
    var characterName = activeSheet.getRange(x, 1).getValue();

    // If the value of the third column is equal to Tank, DPS (Melee) or DPS (Ranged) 
    if (activeSheet.getRange(x, 3).getValue() == "Tank" || 
        activeSheet.getRange(x, 3).getValue() == "DPS (Melee)" || 
        activeSheet.getRange(x, 3).getValue() == "DPS (Ranged)") {

      // Query based on the characters name, realm and metric being dps then set response equal to warcraftLogsApi
      var warcraftLogsApi = 'https://www.warcraftlogs.com/api/v2/client?query={characterData{character(name:"' 
      + characterName + '",serverSlug:"' + realm + '",serverRegion:"us"){normal: zoneRankings(difficulty:3, metric: dps)heroic: zoneRankings(difficulty:4, metric: dps)mythic: zoneRankings(difficulty: 5, metric: dps)}}}'
    }
    // Else the value of the third column is equal to healer
    else {
      // Query based on the characters name, realm and metric being hps then set response equal to warcraftLogsApi
      var warcraftLogsApi = 'https://www.warcraftlogs.com/api/v2/client?query={characterData{character(name:"' 
      + characterName + '",serverSlug:"' + realm + '",serverRegion:"us"){normal: zoneRankings  (difficulty:3, metric: hps)heroic: zoneRankings(difficulty:4, metric: hps)mythic: zoneRankings(difficulty: 5, metric: hps)}}}'
    }
    // Calls the encodeURI function on the warcraftLogsApi variable
    var url = encodeURI(warcraftLogsApi);
    // Sets the headers of the HTTP request
    var headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
    // Calls UrlFetchApp.fetch() to get the HTTP request response
    var parseResponse = UrlFetchApp.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })

    // Using the parseResponse get the ContenText
    var parseJSON = parseResponse.getContentText();

    // Parse the parseJSON into JSON and set it equal to the parses variable
    var parses = JSON.parse(parseJSON);

    // If the character is not equal to null
    if (parses.data.characterData.character != null) {

      // If the best performance average for normal JSON element equals null
      if (parses.data.characterData.character.normal.bestPerformanceAverage == null) {

        // Set bestNormalParse equal to 0
        bestNormalParse = "0"
      }

      // Else best performance average for normal not equal to null
      else {

        // Set bestNormalParse equal to the best performance average element for normal
        var bestNormalParse = parses.data.characterData.character.normal.bestPerformanceAverage;
      }

      // If the best performance average for heroic JSON element equals null
      if (parses.data.characterData.character.heroic.bestPerformanceAverage == null) {

        // Set bestHeroicParse equal to 0
        bestHeroicParse = "0"
      }

      // Else best performance average for heroic not equal to null
      else {

        // Set bestHeroicParse equal to the best performance average element for heroic
        var bestHeroicParse = parses.data.characterData.character.heroic.bestPerformanceAverage;
      }

      // If the best performance average for mythic JSON element equals null
      if (parses.data.characterData.character.mythic.bestPerformanceAverage == null) {

        // Set bestMythicParse equal to 0
        bestMythicParse = "0"
      }
      // Else best performance average for mythic not equal to null
      else {

        // Set bestMythicParse equal to the best performance average element for mythic
        var bestMythicParse = parses.data.characterData.character.mythic.bestPerformanceAverage;
      }

      // Sets the value for row (x) and column 6 equal to the best normal parse
      activeSheet.getRange(x, 6).setValue(bestNormalParse);

      // Sets the value for row (x) and column 7 equal to the best heroic parse
      activeSheet.getRange(x, 7).setValue(bestHeroicParse);

      // Sets the value for row (x) and column 8 equal to the best mythic parse
      activeSheet.getRange(x, 8).setValue(bestMythicParse);

      // Increments x and goes to the next row. 
      x++;
    }
    // Else there was a merged cell and increment the row (x)
    else {
      x++;
    }
  } // End while loop
} // End function
