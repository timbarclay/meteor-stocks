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

    if(Meteor.isClient){
      // Stub to simulate action happening immediately
      Stocks.insert({
          symbol: symbol,
          owner: Meteor.userId()
        });
    } else if(Meteor.isServer){
      // Actual call
      Meteor.call("symbolExists", symbol, function(error, result){
        if(result){
          Stocks.insert({
            symbol: symbol,
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
