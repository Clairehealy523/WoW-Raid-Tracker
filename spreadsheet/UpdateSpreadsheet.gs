/**
 * Function updateSpreadsheet: Updates the Class, iLevel, Armor Type, Covenant and Renown Lvl columns of the spreadsheet
 */
function updateSpreadsheet(activeSheets) {

  //If activeSheets isn't null
  if (activeSheets != null) {

    //Set activeSheet equal to activeSheets
    activeSheet = activeSheets;
  }

  //Else activeSheets is null
  else {
    
    // Gets the current active spreadsheet and sets it equal to activeSheet
    var activeSheet = SpreadsheetApp.getActive().getActiveSheet();
  }
  
  // Initializes the row (x) equal to 3
  var x = 3;

  // Sets the tokenURL equal the the access token URL
  var tokenURL = properties.getProperty('wowURL');

  // Retrieves the client_id and client_secret and sets the payload
  var formData = {
    'client_id': properties.getProperty('client_id'),
    'client_secret': properties.getProperty('client_secret'),
    'grant_type': properties.getProperty('grant_type')
  }

  // HTTP request to generate a new access token
  try{
  var tokenResponse = UrlFetchApp.fetch(tokenURL, {
    method: 'POST',
    payload: formData,
  })
  }catch(WebException){
    console.log('Error while generating Bearer token')
  }

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
        var ilevelResponse = UrlFetchApp.fetch('https://us.api.blizzard.com/profile/wow/character/' + realm.toLowerCase() + '/' + characterName.toLowerCase() + '?namespace=profile-us&locale=en_US&access_token=' + accessToken.access_token)

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
      var color; 

      if(characterClass == "Death Knight"){
        armorType = "Plate";
        color = "#dd7e6b";
      }
      else if(characterClass == "Demon Hunter"){
        armorType = "Leather";
        color = "#8e7cc3";
      }
      else if(characterClass == "Druid"){
        armorType = "Leather";
        color = "#f6b26b";
      }
      else if(characterClass == "Hunter"){
        armorType = "Mail";
        color = "#6aa84f";
      }
      else if(characterClass == "Mage"){
        armorType = "Cloth";
        color = "#9fc5e8";
      }
      else if(characterClass == "Monk"){
        armorType = "Leather";
        color = "#00ffff";
      }
      else if(characterClass == "Paladin"){
        armorType = "Plate";
        color = "#f4cccc";
      }
      else if(characterClass == "Priest"){
        armorType = "Cloth";
        color = "#ffffff";
      }
      else if(characterClass == "Rogue"){
        armorType = "Leather";
        color = "#fff2cc";
      }
      else if(characterClass == "Shaman"){
        armorType = "Mail";
        color = "#6d9eeb";
      }
      else if(characterClass == "Warlock"){
        armorType = "Cloth";
        color = "#d9d2e9";
      }
      else if(characterClass == "Warrior"){
        armorType = "Plate";
        color = "#cca677";
      }
      else{
        armorType = "INVALID";
        color="#ffffff"
      }

      // Sets the value for row (x) and column 2 to the characters class
      activeSheet.getRange(x, 2).setValue(characterClass);

      // Sets the background color for row(x) and column 2
      activeSheet.getRange(x, 2).setBackground(color);

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

