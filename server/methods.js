Meteor.methods({
  symbolExists: function(symbol){
      var data = YahooFinance.snapshot({
        symbols: [symbol],
        fields: ['n']
      });
      return data[symbol].name !== "N/A";
  }
});
