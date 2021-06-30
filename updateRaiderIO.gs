function updateRaiderIO() {
  var app = SpreadsheetApp;
  var activeSheet = app.getActive().getActiveSheet();

  var x = 3;
  

  while (activeSheet.getRange(x, 1).getValue() != "") {
      var characterName = activeSheet.getRange(x, 1).getValue();
      var realm = activeSheet.getRange(x, 14).getValue();
      var count = 0;
      var mPlus = [];
try{
    var mPlusResponse = UrlFetchApp.fetch("raider.io/api/v1/characters/profile?region=us&realm=" + realm + "&name=" + characterName + "&fields=mythic_plus_scores_by_season%3Acurrent%2Cmythic_plus_weekly_highest_level_runs");
}
  catch(WebException){
  x++;
}
    var mPlusJson = mPlusResponse.getContentText();
    console.log(mPlusJson);
    var mPlusData = JSON.parse(mPlusJson);

    if (mPlusData["mythic_plus_weekly_highest_level_runs"] === undefined || mPlusData["mythic_plus_weekly_highest_level_runs"].length == 0) {
      maxMPlus = 0;
    }
    else {
      while (mPlusData["mythic_plus_weekly_highest_level_runs"][count] != null) {

        mPlus.push(mPlusData["mythic_plus_weekly_highest_level_runs"][count]["mythic_level"])
        count++;
      }
    }
    var mythicPlusScore = 0;
    var mPlusScores = mPlusData.mythic_plus_scores_by_season;
    if (activeSheet.getRange(x, 3).getValue() == "Tank") {
      mythicPlusScore = mPlusScores[0]["scores"]["tank"]
    }
    else if (activeSheet.getRange(x, 3).getValue() == "Healer") {
      mythicPlusScore = mPlusScores[0]["scores"]["healer"]
    }
    else {
      mythicPlusScore = mPlusScores[0]["scores"]["dps"]
    }
    maxMPlus = 0;
    for (i = 0; i < mPlus.length; i++) {
      if (mPlus[i] > maxMPlus) {
        maxMPlus = mPlus[i];
      }
    }
    activeSheet.getRange(x, 11).setValue(maxMPlus);
    activeSheet.getRange(x, 12).setValue(mPlus.length);
    activeSheet.getRange(x, 13).setValue(mythicPlusScore);
    x++;
  }  
  x++;
} 
