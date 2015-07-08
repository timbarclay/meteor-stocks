Template.stock.events({
  "click .toggle-favourite": function() {
    Meteor.call("setFavourite", this._id, !this.favourite);
  },

  "click .delete": function() {
    Meteor.call("removeStock", this._id);
  },

  "click .stockListing": function() {
    SelectedStock.set({symbol: this.symbol});
  }
});

Template.stock.helpers({
  count: function() {
    return Stocks.find({symbol: this.symbol}).count();
  }
});
