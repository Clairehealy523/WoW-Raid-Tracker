/**
 * Function allGroupComp: Creates a Pie chart for Group Composition and Embeds it into the Create Charts sheet
 */
function allGroupComp() {
  //Creates a new chart called groupCompChart
  var groupCompChart = createGraphics.newChart()

    //Sets the ChartType to a Pie chart
    .setChartType(Charts.ChartType.PIE)

    //Sets the title
    .setOption('title', 'Group Composition')

    //Sets the data colors
    .setOption('colors', ['#ead1dc', '#c27ba0', '#d5a6bd', '#a64d79'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("P15:S16"))

    //Sets the background color to transparent 
    .setOption('backgroundColor', "#00000000")

    //Inverts the rows and columns
    .setTransposeRowsAndColumns(true)

    //Sets the position 
    .setPosition(1, 1, 0, 0)

    //Builds the chart
    .build();

  //Inserts the chart into the Create Charts spreadsheet
  createGraphics.insertChart(groupCompChart)
}

/**
 * Function allClasses: Creates a Pie chart for Classes and Embeds it into the Create Charts sheet
 */
function allClasses() {

  //Creates a new chart called classesChart
  var classesChart = createGraphics.newChart()
    
    //Sets the ChartType to a Pie chart
    .setChartType(Charts.ChartType.PIE)

    //Sets the title 
    .setOption('title', 'Classes')

    //Sets the data colors
    .setOption('colors', ['#dd7e6b', '#8e7cc3', '#f6b26b', '#6aa84f', '#9fc5e8', '#00ffff', 
    '#f4cccc', '#ffffff', '#fff2cc', '#6d9eeb', '#d9d2e9', '#cca677'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("P2:Q13"))

    //Sets the background color to transparent
    .setOption('backgroundColor', "#00000000")

    //Adds a pieHole to the chart 
    .setOption('pieHole', 0.3)

    //Sets the position
    .setPosition(1, 7, 0, 0)

    //Builds the chart
    .build();
    
  //Inserts the chart into the Create Charts sheet
  createGraphics.insertChart(classesChart);
}
/**
 * Function allArmorType: Creates a Pie chart for Armor Type and Embeds it into the Create Charts sheet
 */
function allArmorType() {

  //Creates a new chart called armorTypeChart
  var armorTypeChart = createGraphics.newChart()

    //Sets the ChartType to a Pie chart
    .setChartType(Charts.ChartType.PIE)

    //Sets the title
    .setOption('title', 'Armor Type')
    //Sets the data colors
    .setOption('colors', ['#ead1dc', '#c27ba0', '#d5a6bd', '#a64d79'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("P18:S19"))

    //Sets the background color to transparent
    .setOption('backgroundColor', "#00000000")

    //Inverts rows and columns
    .setTransposeRowsAndColumns(true)

    //Sets the position
    .setPosition(1, 13, 0, 0)
    
    //Builds the chart
    .build();
  
  //Inserts the chart into the Create Charts sheet
  createGraphics.insertChart(armorTypeChart)
}

/**
 * Function allParse(): Creates a Scatter chart for Parses and Embeds it into the Create Charts sheet
 */
function allParse() {

  //Creates a new chart called parseChart
  var parseChart = createGraphics.newChart()

    //Sets the ChartType to a Scatter chart
    .setChartType(Charts.ChartType.SCATTER)

    //Sets the title
    .setOption('title', 'Heroic and Normal Parses')

    //Sets the data colors
    .setOption('colors', ['#a2c4c9', '#45818e',  '#e06666', '#990000', '#bf9000', '#f1c232'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("G:G"))

    //Takes in range from birdData and adds it 
    .addRange(birdData.getRange("F3:G28"))

    //Takes in range from redData and adds it
    .addRange(redData.getRange("F3:G28"))

    //Takes in range from mojitoData and adds it
    .addRange(mojitoData.getRange("F3:G28"))

    //Sets the background color to transparent
    .setOption('backgroundColor', "#00000000")

    //Sets the position
    .setPosition(19, 1, 0, 0)

    //Builds the chart
    .build();

  //Inserts the chart into the Create Charts sheet
  createGraphics.insertChart(parseChart)
}
/**
 * Function allCovenants: Creates a Pie chart for Covenants and Embeds it into the Create Charts sheet
 */
function allCovenants() {

  //Creates a new chart called covenantsChart
  var covenantsChart = createGraphics.newChart()
    
    //Sets the ChartType to a Pie chart
    .setChartType(Charts.ChartType.PIE)

    //Sets the title
    .setOption('title', 'Covenants')

    //Sets the data colors
    .setOption('colors', ['#ead1dc', '#c27ba0', '#d5a6bd', '#a64d79'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("P21:R22"))

    //Sets the background color to transparent
    .setOption('backgroundColor', '#00000000')

    //Inverts rows and columns
    .setTransposeRowsAndColumns(true)

    //Sets the position
    .setPosition(19, 7, 0, 0)

    //Builds the chart
    .build();

  // Inserts the chart into the Create Charts sheet 
  createGraphics.insertChart(covenantsChart);
}
/**
 * Function allMythicPlusScore: Creates a Scatter chart for Mythic+ Score and Embeds it into the Create Charts sheet
 */
function allMythicPlusScore() {

  //Creates a new chart called mythicPlusScoreChart
  var mythicPlusScoreChart = createGraphics.newChart()

    //Sets the chart type to a scatter chart
    .setChartType(Charts.ChartType.SCATTER)
    //Sets the title
    .setOption('title', 'Mythic+ Score')

    //Sets the data colors
    .setOption('colors', ['#a2c4c9', '#e06666', '#bf9000'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("M2:M"))

    //Takes in range from redData and adds it 
    .addRange(redData.getRange("M3:M"))

    //Takes in range from birdData and adds it 
    .addRange(birdData.getRange("M3:M"))

    //Takes in range from mojitoData and adds it 
    .addRange(mojitoData.getRange("M3:M"))

    //Sets the background color to transparent
    .setOption('backgroundColor', '#00000000')

    //Sets the position
    .setPosition(19, 13, 0, 0)

    //Builds the chart
    .build();

  //Inserts the chart into the Create Charts spreadsheet
  createGraphics.insertChart(mythicPlusScoreChart);
}
/**
 * Function allMPlusKeys: Creates a Column chart for M+ keys and total keys per week and adds it to the Create Charts sheet
 */
function allMPlusKeys() {

  //Creates a new chart called mPlusKeysChart 
  var mPlusKeysChart = createGraphics.newChart()

    //Sets the ChartType to a column chart
    .setChartType(Charts.ChartType.COLUMN)

    //Sets the title
    .setOption('title', 'Weekly Highest M+ vs Total Keys per Week')

    //Sets the data colors
    .setOption('colors', ['#d5a6bd'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("P26:Q27"))

    //Inverts rows and columns
    .setTransposeRowsAndColumns(true)

    //Sets the background color to transparent
    .setOption('backgroundColor', '#00000000')

    //Sets the position
    .setPosition(37, 1, 0, 0)

    //Builds the chart
    .build();

  //Inserts the chart into the Create Charts sheet 
  createGraphics.insertChart(mPlusKeysChart);

}
/**
 * Function allMembers: Creates a Pie chart for all Members and adds it to the Create Charts sheet
 */
function allMembers() {
  //Creates a new chart called membersChart
  var membersChart = createGraphics.newChart()

    //Sets the ChartType to a Pie chart
    .setChartType(Charts.ChartType.PIE)

    //Sets the title
    .setOption('title', 'Members per Team')

    //Sets the data colors 
    .setOption('colors', ['#a2c4c9', '#e06666', '#bf9000'])

    //Takes in range from allData and adds it 
    .addRange(allData.getRange("Q29:S30"))

    //Inverts rows and columns
    .setTransposeRowsAndColumns(true)

    //Sets the background color to transparent
    .setOption('backgroundColor', '#00000000')

    //Sets the position
    .setPosition(37, 7, 0, 0)

    //Builds the chart
    .build();

  //Inserts the chart into the Create Charts sheet 
  createGraphics.insertChart(membersChart);
}
/**
 * Function allCovenantLvls: Creates a Bar chart for Covenant levels and adds it to the Create Charts sheet
 */
function allCovenantLvls() {
  var covenantLvlsChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.BAR)
    .setOption('title', 'Covenant Levels')
    .setOption('colors', ['#d5a6bd'])
    .addRange(allData.getRange("P23:S24"))
    .setTransposeRowsAndColumns(true)
    .setOption('backgroundColor', '#00000000')
    .setPosition(37, 13, 0, 0)
    .build();
  createGraphics.insertChart(covenantLvlsChart);
}
