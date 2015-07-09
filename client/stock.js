Template.stock.events({
  "click .toggle-favourite": function() {
    Meteor.call("setFavourite", this._id, !this.favourite);
  },

  "click .delete": function() {
    Meteor.call("removeStock", this._id);
  },

  "click .stockListing": function() {
    var name = this.name;
    var symbol = this.symbol;
    Meteor.call("getData", this.symbol, function(error, result){
      if(result){
        var currentPrice = result[result.length-1].close.toFixed(2);
        SelectedStock.set({
          name: name,
          symbol: symbol,
          data: result,
          price: currentPrice
        });
      }
    });
  }
});

Template.stock.helpers({
  count: function() {
    return Stocks.find({symbol: this.symbol}).count();
  }
});
