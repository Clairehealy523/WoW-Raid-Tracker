/**
 * Function updateSpreadsheet: Updates character information on the spreadsheet
 */
function updateSpreadsheet() {

  // Gets the properties of my script and sets it equal to properties
  var properties = PropertiesService.getScriptProperties();

  // Gets the active spreadsheet and sets it equal to activeSheet
  var activeSheet = SpreadsheetApp.getActive().getActiveSheet();

  //var activeSheet = app.getActive().getActiveSheet();

  // Initializes the row (x) equal to 3
  var x = 3;

  // Sets the tokenURL equal the the access token URL
  var tokenURL = 'https://us.battle.net/oauth/token';

  // Retrieves the client_id and client_secret and sets the payload
  var formData = {
    'client_id': properties.getProperty('client_id'),
    'client_secret': properties.getProperty('client_secret'),
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

  // While the row (x) and first columns value is not empty
  while (activeSheet.getRange(x, 1).getValue() != "") {

    // If the row (x) and first column is not a merged cell 
    if (!activeSheet.getRange(x, 1).isPartOfMerge()) {

      // Set characterName equal to the value of x row and column 1
      var characterName = activeSheet.getRange(x, 1).getValue();

      // Set realm equal to the value of x row and column 14 
      var realm = activeSheet.getRange(x, 14).getValue();

      // Try to make an API call 
      try {
        // Calls UrlFetchApp.fetch() based on the realm, characters name and generated access token
        var ilevelResponse = UrlFetchApp.fetch('https://us.api.blizzard.com/profile/wow/character/' 
                                               + realm.toLowerCase() + '/' + characterName.toLowerCase() 
                                               + '?namespace=profile-us&locale=en_US&access_token=' 
                                               + accessToken.access_token)

      }
      // Catch any WebExceptions and increment the row (x)
      catch (WebException) {
        x++;
      }
      // Using the ilevelResponse get the ContentText
      var iLevelJSON = ilevelResponse.getContentText();

      // Parse the iLevelJSON into JSON and set it equal to the iLevel variable
      var iLevel = JSON.parse(iLevelJSON);

      // Retrieves the covenant name from JSON and sets it equal to characterCovenant
      var characterCovenant = iLevel.covenant_progress.chosen_covenant.name;

      // Retrieves the renown level from JSON and sets it equal to covenantLevel
      var covenantLevel = iLevel.covenant_progress.renown_level;

      // Retrieves the characters class from JSON and sets it equal to characterClass
      var characterClass = iLevel.character_class.name;

      // Retrieves the characters item level from JSON and sets it equal to characteriLevel
      var characteriLevel = iLevel.equipped_item_level;

      // Sets the value for row (x) and column two to the characters class
      activeSheet.getRange(x, 2).setValue(characterClass);

      // If the characters class is Hunter or Shaman set armorType equal to Mail
      if (characterClass == "Hunter" || characterClass == "Shaman") {
        armorType = "Mail";
      }

      // Else if the characters class is Death Knight, Paladin or Warrior set armorType equal to Plate
      else if (characterClass == "Death Knight" || characterClass == "Paladin" || characterClass == "Warrior") {
        armorType = "Plate";
      }

      // Else if the characters class is Monk, Rogue, Demon Hunter or Druid set the armorType equal to Leather
      else if (characterClass == "Monk" || characterClass == "Rogue" || characterClass == "Demon Hunter" || characterClass == "Druid") {
        armorType = "Leather"
      }

      // Else set the armorType equal to cloth
      else {
        armorType = "Cloth";
      }

      // Sets the value for row (x) and column 4 equal to the characters item level
      activeSheet.getRange(x, 4).setValue(characteriLevel);

      // Sets the value for row (x) and column 5 equal to the characters armor type
      activeSheet.getRange(x, 5).setValue(armorType);

      // Sets the value for row (x) and column 9 equal to the characters covenant 
      activeSheet.getRange(x, 9).setValue(characterCovenant);

      // Sets the value for row (x) and column 10 equal to the characters covenant level
      activeSheet.getRange(x, 10).setValue(covenantLevel);

      // Increments x and goes to the next row. 
      x++;
    }
    // Else there was a merged cell and increment the row (x)
    else {
      x++;
    }

  } // End while loop
} // End function
