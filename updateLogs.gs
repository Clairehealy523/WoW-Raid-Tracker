function updateLogs() {
  var x = 3;
   var properties = PropertiesService.getScriptProperties();
  var app = SpreadsheetApp;
  var activeSheet = app.getActive().getActiveSheet();

  var x = 3;

      var tokenURL = 'https://www.warcraftlogs.com/oauth/token';
    var formData = {
      'client_id': properties.getProperty('warcraftlogs_client_id'),
      'client_secret' : properties.getProperty('warcraftlogs_client_secret'),
      'grant_type' : 'client_credentials'
    }

     var tokenResponse = UrlFetchApp.fetch(tokenURL, {
      method: 'POST',
      payload: formData,
      })
          var tokenJSON = tokenResponse.getContentText();
          var accessToken = JSON.parse(tokenJSON);
          var token = accessToken.access_token;
          
  while (activeSheet.getRange(x, 1).getValue() != "") {
    var realm = activeSheet.getRange(x, 14).getValue();

    var characterName = activeSheet.getRange(x, 1).getValue();
    if (activeSheet.getRange(x, 3).getValue() == "Tank" || activeSheet.getRange(x, 3).getValue() == "DPS (Melee)" || activeSheet.getRange(x, 3).getValue() == "DPS (Ranged)") {

      var warcraftLogsApi = 'https://www.warcraftlogs.com/api/v2/client?query={characterData{character(name:"' +    characterName + '",serverSlug:"' + realm + '",serverRegion:"us"){normal: zoneRankings(difficulty:3, metric: dps)heroic: zoneRankings(difficulty:4, metric: dps)mythic: zoneRankings(difficulty: 5, metric: dps)}}}'
    }
    else {
      var warcraftLogsApi = 'https://www.warcraftlogs.com/api/v2/client?query={characterData{character(name:"' + characterName + '",serverSlug:"' + realm + '",serverRegion:"us"){normal: zoneRankings  (difficulty:3, metric: hps)heroic: zoneRankings(difficulty:4, metric: hps)mythic: zoneRankings(difficulty: 5, metric: hps)}}}'
    }
    var url = encodeURI(warcraftLogsApi);
          var headers =  {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    var parseResponse = UrlFetchApp.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      }
    })

    var parseJSON = parseResponse.getContentText();
    var parses = JSON.parse(parseJSON);

  if(parses.data.characterData.character != null){
    if (parses.data.characterData.character.normal.bestPerformanceAverage == null) {
      bestNormalParse = "0"
    }
    else {
      var bestNormalParse = parses.data.characterData.character.normal.bestPerformanceAverage;
    }

    if (parses.data.characterData.character.heroic.bestPerformanceAverage == null) {
          bestHeroicParse = "0"
    }
    else {
      var bestHeroicParse = parses.data.characterData.character.heroic.bestPerformanceAverage;
    }

    if (parses.data.characterData.character.mythic.bestPerformanceAverage == null) {
      bestMythicParse = "0"
    }
    else {
      var bestMythicParse = parses.data.characterData.character.mythic.bestPerformanceAverage;
    }

    activeSheet.getRange(x, 6).setValue(bestNormalParse);
    activeSheet.getRange(x, 7).setValue(bestHeroicParse);
    activeSheet.getRange(x, 8).setValue(bestMythicParse);
    x++;
  }
  else{
    x++;
  }
  }

}
