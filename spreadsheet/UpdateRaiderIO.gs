/**
 * Function updateRaiderIO: Updates the Weekly M+, Keys/Week and M+ Score columns of the spreadsheet
 */

function updateRaiderIO(activeSheets) {
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

  // While the row (x) and first columns value is not empty
  while (activeSheet.getRange(x, 1).getValue() != "") {

    // If the row (x) and first column is not a merged cell 
    if (!activeSheet.getRange(x, 1).isPartOfMerge()) {

      // Set characterName equal to the value of x row and column 1
      var characterName = activeSheet.getRange(x, 1).getValue();

      // Set realm equal to the value of x row and column 14 
      var realm = activeSheet.getRange(x, 14).getValue();

      // Initializes the variable count and sets it equal to 0 
      var count = 0;

      // Initializes an empty array called mPlus
      var mPlus = [];

      // Tries to make the API call
      try {
        // Calls UrlFetchApp.fetch() based on the realm and characters name
        var mPlusResponse = UrlFetchApp.fetch("raider.io/api/v1/characters/profile?region=us&realm=" + realm + "&name=" + characterName + "&fields=mythic_plus_scores_by_season%3Acurrent%2Cmythic_plus_weekly_highest_level_runs");
      }
      // Catch any WebExceptions and increment the row (x)
      catch (WebException) {
        x++;
      }

      // Using the mPlusResonse get the ContentText
      var mPlusJSON = mPlusResponse.getContentText();

      // Parse the mPlusJSON into JSON and set it equal to the mPlusData variable
      var mPlusData = JSON.parse(mPlusJSON);
      // If mythic plus weekly highest level runs is undefined or empty set maxMPlus equal to 0
      if (mPlusData["mythic_plus_weekly_highest_level_runs"] === undefined || mPlusData["mythic_plus_weekly_highest_level_runs"].length == 0) {
        maxMPlus = 0;
      }

      // Else while mythic plus weekly highest level runs is not equal to null
      else {
        while (mPlusData["mythic_plus_weekly_highest_level_runs"][count] != null) {

          // Push the highest level runs into the mPlus array
          mPlus.push(mPlusData["mythic_plus_weekly_highest_level_runs"][count]["mythic_level"])

          // Increment count 
          count++;
        }
      }
      // Initializes mythicPlusScore
      var mythicPlusScore = 0;

      // Sets mPlusScores equal to the mythic plus scores by season JSON element
      var mPlusScores = mPlusData.mythic_plus_scores_by_season;

      // If the row (x) and column three (role) values are equal to Tank
      if (activeSheet.getRange(x, 3).getValue() == "Tank") {

        // Pull the tank mythic plus scores and set it equal to mythicPlusScore
        mythicPlusScore = mPlusScores[0]["scores"]["tank"]
      }
      // Else if the row (x) and column three (role) values are equal to Healer
      else if (activeSheet.getRange(x, 3).getValue() == "Healer") {

        // Pull the healer mythic plus scores and set it equal to mythicPlusScore
        mythicPlusScore = mPlusScores[0]["scores"]["healer"]
      }
      // Else the role is DPS
      else {
        // Pull the dps mythic plus scores and set it equal to mythicPlusScore
        mythicPlusScore = mPlusScores[0]["scores"]["dps"]
      }

      // Sets maxMPlus equal to 0
      maxMPlus = 0;

      // For loop to iterate through mPlus array and find the highest 
      for (i = 0; i < mPlus.length; i++) {

        // If current mPlus value is greater than maxMPlus value
        if (mPlus[i] > maxMPlus) {

          // Set maxMPlus equal to current mPlus value
          maxMPlus = mPlus[i];
        }
      }

      // Sets the value for row (x) and column 11 equal to the max mythic plus score
      activeSheet.getRange(x, 11).setValue(maxMPlus);

      // Sets the value for row (x) and column 12 equal to the number of mythic keystones achieved that week
      activeSheet.getRange(x, 12).setValue(mPlus.length);

      // Sets the value for row (x) and column 13 equal to characters mythic plus score
      activeSheet.getRange(x, 13).setValue(mythicPlusScore);
      x++;
    }

    // Else there was a merged cell and increment the row (x)
    else {
      x++;
    }
  } // End while loop
} // End function
