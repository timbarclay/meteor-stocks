function createChart() {
  var stock = SelectedStock.get();
  var series;

  if(Session.get(stock.symbol)){
    series = [{
      type: 'ohlc',
      name: stock.name,
      data: stock.data.map(function(item){
        return {
          x: item.date,
          open: item.open,
          high: item.high,
          low: item.low,
          close: item.close
        }
      }),
      tooltip: {
        valueDecimals: 2
      }
    }]
  } else {
    series = [{
      type: 'line',
      name: 'Close',
      data: stock.data.map(function(item){
        return {
          x: item.date,
          y: item.close
        };
      }),
      tooltip: {
        valueDecimals: 2
      }
    }]
  }

  $('#container-area').highcharts('StockChart', {
    rangeSelector: {
      enabled: false
    },
    navigator: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    series: series
  });
}

Template.stockDetail.rendered = function() {
  Tracker.autorun(function () {
    createChart();
  });
}

Template.stockDetail.events({
  "click .chart-toggle": function() {
    Session.set(this.symbol, !Session.get(this.symbol));
  }
})
