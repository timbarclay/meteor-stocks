Meteor.methods({
  symbolExists: function(symbol){
      var data = YahooFinance.snapshot({
        symbols: [symbol],
        fields: ['n']
      });
      return data[symbol].name;
  },

  getData: function(symbol){
    var end = new Date();
    var start = new Date(end);
    start.setDate(start.getDate() - 30);

    return YahooFinance.historical({
      symbol: symbol,
      from: start,
      to: end
    });
  }
});
