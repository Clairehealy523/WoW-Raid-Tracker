/**
 * Function mojitoGroupComp: Creates a Pie chart for Group comp and adds it to the Create Charts sheet. For more in code comments
 * look to the AllTeamsCharts which are creating similar types of charts for more insight to how these functions work
 */
function mojitoGroupComp() {
  var groupCompChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Group Composition')
    .setOption('colors', ['#fff2cc', '#ffe599', '#bf9000', '#f1c232'])
    .addRange(mojitoData.getRange("O16:R17"))
    .setOption('backgroundColor', "#00000000")
    .setTransposeRowsAndColumns(true)
    .setPosition(1, 1, 0, 0)
    .build();
  createGraphics.insertChart(groupCompChart)
}
/**
 * Function mojitoClasses: Creates a Pie chart for Classes and adds it to the Create Charts sheet
 */
function mojitoClasses() {
  var classesChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Classes')
    .setOption('colors', ['#dd7e6b', '#8e7cc3', '#f6b26b', '#6aa84f', '#9fc5e8', '#00ffff', '#f4cccc', '#ffffff', '#fff2cc', '#6d9eeb', '#d9d2e9', '#cca677'])
    .addRange(mojitoData.getRange("O3:P14"))
    .setOption('pieHole', 0.3)
    .setOption('backgroundColor', "#00000000")
    .setPosition(1, 7, 0, 0)
    .build();
  createGraphics.insertChart(classesChart);
}
/**
 * Function mojitoArmorType: Creates a Pie chart for Armor Type and adds it to the Create Charts sheet
 */
function mojitoArmorType() {
  var armorType = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Armor Type')
    .setOption('colors', ['#fff2cc', '#ffe599', '#bf9000', '#f1c232'])
    .addRange(mojitoData.getRange("O19:R20"))
    .setOption('backgroundColor', "#00000000")
    .setTransposeRowsAndColumns(true)
    .setPosition(1, 13, 0, 0)
    .build();
  createGraphics.insertChart(armorType)
}
/**
 * Function mojitoILevelParse: Creates a Scatter chart for Item level parses and adds it to the Create Charts sheet
 */
function mojitoILevelParse() {
  var iLevelParseChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.SCATTER)
    .setOption('title', 'Item Level vs Parses')
    .setOption('colors', ['#bf9000', '#f1c232'])
    .addRange(mojitoData.getRange("D2:D"))
    .addRange(mojitoData.getRange("F2:G"))
    .setOption('backgroundColor', "#00000000")
    .setNumHeaders(1)
    .setPosition(19, 1, 0, 0)
    .build();
  createGraphics.insertChart(iLevelParseChart)
}
/**
 * Function mojitoCovenants: Creates a Pie chart for Covenants and adds it to the Create Charts sheet
 */
function mojitoCovenants() {
  var covenantsChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Covenants')
    .setOption('colors', ['#fff2cc', '#ffe599', '#bf9000', '#f1c232'])
    .addRange(mojitoData.getRange("O22:R23"))
    .setOption('backgroundColor', '#00000000')
    .setTransposeRowsAndColumns(true)
    .setPosition(19, 7, 0, 0)
    .build();
  createGraphics.insertChart(covenantsChart);
}
/**
 * Function mojitoMythicPlusScore: Creates a Scatter chart for Mythic+ score and adds it to the Create Charts sheet
 */
function mojitoMythicPlusScore() {
  var mythicPlusScoreChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.SCATTER)
    .setOption('title', 'Mythic+ Score')
    .setOption('colors', ['#bf9000', '#f1c232'])
    .addRange(mojitoData.getRange("M2:M"))
    .setOption('backgroundColor', '#00000000')
    .setPosition(19, 13, 0, 0)
    .build();
  createGraphics.insertChart(mythicPlusScoreChart);
}
/**
 * Function mojitoMPlusKeys: Creates a Column chart for the highest Weekly M+ keys and total keys and adds it to the Create Charts sheet
 */
function mojitoMPlusKeys() {
  var mPlusKeysChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.COLUMN)
    .setOption('title', 'Weekly Highest M+ vs Total Keys per Week')
    .setOption('colors', ['#bf9000'])
    .addRange(mojitoData.getRange("O27:P28"))
    .setTransposeRowsAndColumns(true)
    .setOption('backgroundColor', '#00000000')
    .setPosition(37, 1, 0, 0)
    .build();
  createGraphics.insertChart(mPlusKeysChart);
}
/**
 * Function mojitoProgression: Creates a Pie chart for progression and adds it to the Create Charts sheet
 */
function mojitoProgression() {
  var progressionChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.PIE)
    .setOption('title', 'Highest Raid Progression')
    .setOption('colors', ['#fff2cc', '#f1c232'])
    .addRange(mojitoData.getRange("Q30:R31"))
    .setTransposeRowsAndColumns(true)
    .setOption('backgroundColor', '#00000000')
    .setPosition(37, 7, 0, 0)
    .build();
  createGraphics.insertChart(progressionChart);
}
/**
 * Function mojitoCovenantLvls: Creates a Bar chart for covenant levels and adds it to the Create Charts sheet
 */
function mojitoCovenantLvls() {
  var covenantLvlsChart = createGraphics.newChart()
    .setChartType(Charts.ChartType.BAR)
    .setOption('title', 'Covenant Levels')
    .setOption('colors', ['#ffe599'])
    .addRange(mojitoData.getRange("O24:R25"))
    .setTransposeRowsAndColumns(true)
    .setOption('backgroundColor', '#00000000')
    .setPosition(37, 13, 0, 0)
    .build();
  createGraphics.insertChart(covenantLvlsChart);
}
