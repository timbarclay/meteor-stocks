Template.stock.events({
  "click .toggle-favourite": function() {
    Meteor.call("setFavourite", this._id, !this.favourite);
  },

  "click .delete": function() {
    Meteor.call("removeStock", this._id);
  },

  "click .stockListing": function() {
    var name = this.name;
    Meteor.call("getData", this.symbol, function(error, result){
      SelectedStock.set({
        name: name,
        data: result
      });
    });
  }
});

Template.stock.helpers({
  count: function() {
    return Stocks.find({symbol: this.symbol}).count();
  }
});
