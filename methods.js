Meteor.methods({
  addStock: function(symbol){
    if(!Meteor.userId()){
      throw new Meteor.Error("not-authorized");
    }
    symbol = symbol.toUpperCase();

    // Don't allow duplicates
    if(Stocks.findOne({symbol: symbol, owner: Meteor.userId()})){
      return;
    }

    if(Meteor.isServer){
      // Actual call
      Meteor.call("getName", symbol, function(error, result){
        if(result !== "N/A"){
          Stocks.insert({
            symbol: symbol,
            name: result,
            owner: Meteor.userId()
          });
        }
      });
    }
  },

  removeStock: function(stockId){
    Stocks.remove(stockId);
  },

  setFavourite: function(stockId, favourite){
    Stocks.update(stockId, {$set: {favourite: favourite}});
  }
});
