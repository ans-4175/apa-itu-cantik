function pieChart(idtag, title, allData, genderData) {
  //inisiasi charts
  var name = idtag
  var mainData = []
  var drillData = []
  _.forEach(allData, function(v, k) {
    //mainData
    mainData.push({
      name: k,
      y: v,
      drilldown: name + "_" + k
    })
    //drillDown
    var detailsData = _.map(genderData, function(val, key) {
      var label = (key == 0) ? "Pria" : "Wanita"
      var value = (typeof val[k] != "undefined") ? val[k] : 0
      return [label, value]
    })
    var details = {
      name: name + "_" + k,
      id: name + "_" + k,
      data: detailsData
    }
    drillData.push(details)
  })
  //create charts
  var chart = new Highcharts.Chart({
    chart: {
      type: 'pie',
      renderTo: idtag
    },
    title: {
      text: title
    },
    subtitle: {
      text: 'Klik bagian, untuk informasi rinci'
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          format: '{point.name}: {point.y}'
        }
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>'
    },
    series: [{
      name: name,
      colorByPoint: true,
      data: mainData
    }],
    drilldown: {
      series: drillData
    }
  });
  //return val
  return {
    draw: function() {
      chart
    }
  }
}