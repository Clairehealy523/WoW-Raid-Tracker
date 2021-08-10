
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
* **Update**:
  * **Update Spreadsheet**: Updates the Role, iLevel, Armor Type, Covenant, and Covenant Lvl columns of the current active spreadsheet.
  * **Update WarcraftLogs**: Updates the N Avg Parse, H Avg Parse and M Avg Parse columns of the current active spreadsheet.
  * **Update Raider.io**: Updates the Weekly M+, Total Keys/Wekk and M+ Score columns of the current active spreadsheet. 
* **Populate Database**: Pushes data from each of the raid team spreadsheets to the database.
* **Populate All Data**: Pulls data from the database and populates the **All Data** spreadsheet.
* **Generate Charts**:
  * **Red Team**: Generates charts in the **Create Charts** sheet for Red team.
  * **Mojito Team**: Generates charts in the **Create Charts** sheet for Mojito team.
  * **Bird Team**: Generates charts in the **Create Charts** sheet for Bird team.
  * **All Teams**: Generates charts in the **Create Charts** sheet for all teams. 
  * 
## How Do I Change my Team Names? 
1. Right click on the tab you would like to change the name of.
2. Select **Rename** and rename your team.
3. Select the **Tools** option on the top of the spreadsheet then select **Script Editor**.
4. Once in the script editor select the **Variables.gs** file.
5. Once in this file make the following changes the the code: 
6. 'var redData = SpreadsheetApp.getActive().getSheetByName('Your-name-here'); 

## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Clairehealy523/WoW-Raid-Tracker/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Clairehealy523/WoW-Raid-Tracker/settings/pages). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
