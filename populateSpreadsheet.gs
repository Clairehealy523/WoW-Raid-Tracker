function popSpreadSheet() {
  var properties = PropertiesService.getScriptProperties();
  var app = SpreadsheetApp;
  var activeSheet = app.getActive().getActiveSheet();

  var x = 3;

      var tokenURL = 'https://us.battle.net/oauth/token';
    var formData = {
      'client_id': properties.getProperty('client_id'),
      'client_secret' : properties.getProperty('client_secret'),
      'grant_type' : 'client_credentials'
    }

     var tokenResponse = UrlFetchApp.fetch(tokenURL, {
      method: 'POST',
      payload: formData,
      })
          var tokenJSON = tokenResponse.getContentText();
          var accessToken = JSON.parse(tokenJSON);
    
  while (activeSheet.getRange(x, 1).getValue() != "") {
    
    var characterName = activeSheet.getRange(x, 1).getValue();
    var realm = activeSheet.getRange(x, 14).getValue();

  try{

    var ilevelResponse = UrlFetchApp.fetch('https://us.api.blizzard.com/profile/wow/character/' + realm.toLowerCase() + '/' + characterName.toLowerCase() + '?namespace=profile-us&locale=en_US&access_token=' +    accessToken.access_token)
    
  }
  catch(WebException){
  x++;
}
    var iLevelJSON = ilevelResponse.getContentText();
    var iLevel = JSON.parse(iLevelJSON);
    var characterCovenant = iLevel.covenant_progress.chosen_covenant.name;
    var covenantLevel = iLevel.covenant_progress.renown_level;
    var characterClass = iLevel.character_class.name;
    var characteriLevel = iLevel.equipped_item_level;

    activeSheet.getRange(x, 2).setValue(characterClass);
    if (characterClass == "Hunter" || characterClass == "Shaman") {
      armorType = "Mail";
    }
    else if (characterClass == "Death Knight" || characterClass == "Paladin" || characterClass == "Warrior") {
      armorType = "Plate";
    }
    else if (characterClass == "Monk" || characterClass == "Rogue" || characterClass == "Demon Hunter" || characterClass == "Druid") {
      armorType = "Leather"
    }
    else {
      armorType = "Cloth";
    }
    activeSheet.getRange(x, 4).setValue(characteriLevel);
    activeSheet.getRange(x, 5).setValue(armorType);
    activeSheet.getRange(x, 9).setValue(characterCovenant);
    activeSheet.getRange(x, 10).setValue(covenantLevel);
    x++;
  }
  
}

