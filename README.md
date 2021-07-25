# WoW-Raid-Tracker
This repository is a comprehensive raid tracker addon that is meant to be ran in Google Sheets. This project automatically populates data from several API's including the following: 
* World of Warcraft Character Data API's 
* Raider.io API's 
* WarcraftLogs API's 

## Instructions
1. Make a copy of the [WoW Raid Team Updater](https://docs.google.com/spreadsheets/d/1yW9cnvedqgJvrbbQxqKqn-X0ZnT6tPKRI8z3FcERCR8/edit?usp=sharing) Spreadsheet
2. Fill out the **Character**, **Role**, and **Realm** columns, ensuring that everything is spelled properly
   **NOTE:** Make sure roles are filled out properly to specific constraints. Valid roles are the following and must be in this format:
   1. Tank
   2. Healer
   3. DPS (Ranged)
   4. DPS (Melee)
3. Hover over the **Tools** drop-down menu and select **Script Editor**
4. Once in the Script Editor, hover over the menu on the right then select the **Triggers** option. 
5. Once in the Triggers menu select the **Add Trigger** button and select the **onOpen** function, the **From spreadsheet** option while selecting an event source and select **On open** as your event type then click save.
6. You can then go back to the spreadsheet and select from the **Spreadsheet Updater** drop-down menu to update the Google Sheet.
