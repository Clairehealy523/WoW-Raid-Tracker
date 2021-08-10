# WoW-Raid-Tracker
This repository is a comprehensive raid tracker addon for World of Warcraft that is meant to be ran and implemented in Google Sheets. This program automatically populates data from several different API's including the following:
* World of Warcraft Character Data API's 
* Raider.io API's 
* WarcraftLogs API's 
Once data in the spreadsheet is populated the statistics panel on the right will display key information on your raid group such as the group composition, armor type, covenant information and more. In addition to automatically populating the spreadsheet, this addon offers many more features including the ability to programmatically create charts in the Create Charts spreadsheet in order to view charts on your raid teams performance and all of the raid teams in your guilds performance. Through the use of the Spreadsheet Updater menu you can choose to update data in the spreadsheet whenever you like, but triggers are also set up to update the spreadsheet automatically every day at 12am Pacific Standard Time (PST). These triggers also upload data to the the database and update the All Data spreadsheet so data will be updated after each day. For information on how to setup up your own team with this addon please reference the instructions section below:

## Instructions
1. Make a copy of the [WoW Raid Team Updater](https://docs.google.com/spreadsheets/d/1yW9cnvedqgJvrbbQxqKqn-X0ZnT6tPKRI8z3FcERCR8/edit?usp=sharing) Spreadsheet
2. Fill out the **Character**, **Role**, and **Realm** columns, ensuring that everything is spelled properly
   **NOTE:** Make sure roles are filled out properly to specific constraints. Valid roles are the following and must be in this format:
   1. Tank
   2. Healer
   3. DPS (Ranged)
   4. DPS (Melee)
3. Hover over the **Tools** drop-down menu and select **Script Editor**
4. Once in the Script Editor, view the files section to the left of the editor and open the **ProjectSetUp.gs** file.
5. Once the **ProjectSetUp.gs** file is open press the **Run** button and this will set up the properties for the project and create custom triggers. 
6. Exit out of the Script Editor and go back to your spreadsheet then refresh the web page and a new menu will appear titled **Spreadsheet Updater**.
7. Select the option you would like to run in the **Spreadsheet Updater** menu, you can view what each option does in the **Menu Items** section below. 

## Menu Options
* **Populate Spreadsheet**: Populates all spreadsheets (except All Data and Create Charts) with new information pulled from several different API's. Before running this option make sure you fill out the **Character**, **Role** and **Realm** columns with accurate data. 
* **Update**
  *  
