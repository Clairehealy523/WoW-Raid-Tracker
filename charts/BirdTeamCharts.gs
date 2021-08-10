/**
 * Function birdGroupComp: Creates a Pie chart for Group comp and adds it to the Create Charts sheet. For more in code comments
 * look to the AllTeamsCharts which are creating similar types of charts for more insight to how these functions work
 */
function birdGroupComp() {
  var groupCompChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Group Composition')
    .setOption('colors', ['#d0e0e3', '#76a5af', '#a2c4c9', '#45818e'])
    .addRange(birdData.getRange("O16:R17"))
    .setOption('backgroundColor', "#00000000")
    .setTransposeRowsAndColumns(true)
    .setPosition(1, 1, 0, 0)
    .build();
  createGraphics.insertChart(groupCompChart)
}
/**
 * Function birdClasses: Creates a Pie chart for Classes and adds it to the Create Charts sheet
 */
function birdClasses() {
  var classesChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Classes')
    .setOption('colors', ['#dd7e6b', '#8e7cc3', '#f6b26b', '#6aa84f', '#9fc5e8', '#00ffff', '#f4cccc', '#ffffff', '#fff2cc', '#6d9eeb', '#d9d2e9', '#cca677'])
    .addRange(birdData.getRange("O3:P14"))
    .setOption('backgroundColor', "#00000000")
    .setOption('pieHole', 0.3)
    .setPosition(1, 7, 0, 0)
    .build();
  createGraphics.insertChart(classesChart);
}
/**
 * Function birdArmorType: Creates a Pie chart for Armor Type and adds it to the Create Charts sheet
 */
function birdArmorType() {
  var armorType = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Armor Type')
    .setOption('colors', ['#d0e0e3', '#76a5af', '#a2c4c9', '#45818e'])
    .addRange(birdData.getRange("O19:R20"))
    .setOption('backgroundColor', "#00000000")
    .setTransposeRowsAndColumns(true)
    .setPosition(1, 13, 0, 0)
    .build();
  createGraphics.insertChart(armorType)
}
/**
 * Function birdILevelParse: Creates a Scatter chart for Item level parses and adds it to the Create Charts sheet
 */
function birdILevelParse() {
  var iLevelParseChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.SCATTER)
    .setOption('title', 'Item Level vs Parses')
    .setOption('colors', ['#a2c4c9', '#45818e'])
    .addRange(birdData.getRange("D2:D"))
    .addRange(birdData.getRange("F2:G"))
    .setOption('backgroundColor', "#00000000")
    .setNumHeaders(1)
    .setPosition(19, 1, 0, 0)
    .build();
  createGraphics.insertChart(iLevelParseChart)
}
/**
 * Function birdCovenants: Creates a Pie chart for Covenants and adds it to the Create Charts sheet
 */
function birdCovenants() {
  var covenantsChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Covenants')
    .setOption('colors', ['#d0e0e3', '#76a5af', '#a2c4c9', '#45818e'])
    .addRange(birdData.getRange("O22:R23"))
    .setOption('backgroundColor', '#00000000')
    .setTransposeRowsAndColumns(true)
    .setPosition(19, 7, 0, 0)
    .build();
  createGraphics.insertChart(covenantsChart);
}
/**
 * Function birdMythicPlusScore: Creates a Scatter chart for Mythic+ score and adds it to the Create Charts sheet
 */
function birdMythicPlusScore() {
  var mythicPlusScoreChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.SCATTER)
    .setOption('title', 'Mythic+ Score')
    .setOption('colors', ['#a2c4c9', '#45818e'])
    .addRange(birdData.getRange("M2:M"))
    .setOption('backgroundColor', '#00000000')
    .setPosition(19, 13, 0, 0)
    .build();
  createGraphics.insertChart(mythicPlusScoreChart);
}
/**
 * Function birdMPlusKeys: Creates a Column chart for the highest Weekly M+ keys and total keys and adds it to the Create Charts sheet
 */
function birdMPlusKeys() {
  var mPlusKeysChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .setOption('title', 'Weekly Highest M+ vs Total Keys per Week')
    .setOption('colors', ['#a2c4c9'])
    .addRange(birdData.getRange("O27:P28"))
    .setTransposeRowsAndColumns(true)
    .setOption('backgroundColor', '#00000000')
    .setPosition(37, 1, 0, 0)
    .build();
  createGraphics.insertChart(mPlusKeysChart);
}
/**
 * Function birdProgression: Creates a Pie chart for progression and adds it to the Create Charts sheet
 */
function birdProgression() {
  var progressionChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Highest Raid Progression')
    .setOption('colors', ['#a2c4c9', '#45818e'])
    .addRange(birdData.getRange("Q30:R31"))
    .setTransposeRowsAndColumns(true)
    .setOption('backgroundColor', '#00000000')
    .setPosition(37, 7, 0, 0)
    .build();
  createGraphics.insertChart(progressionChart);
}
/**
 * Function birdCovenantLvls: Creates a Bar chart for covenant levels and adds it to the Create Charts sheet
 */
function birdCovenantLvls() {
  var covenantLvlsChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.BAR)
    .setOption('title', 'Covenant Levels')
    .setOption('colors', ['#a2c4c9'])
    .addRange(birdData.getRange("O24:R25"))
    .setTransposeRowsAndColumns(true)
    .setOption('backgroundColor', '#00000000')
    .setPosition(37, 13, 0, 0)
    .build();
  createGraphics.insertChart(covenantLvlsChart);
}
