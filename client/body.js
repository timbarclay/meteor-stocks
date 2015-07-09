Template.body.helpers({
  stocks: function () {
    var filter = Session.get("filterFavourites") || false;

    var find = filter ? {owner: Meteor.userId(), favourite: filter} :
      {owner: Meteor.userId()};
    var sort = {sort: ["symbol", "asc"]};

    return Stocks.find(find, sort);
  },

  hasStocks: function() {
    return Stocks.findOne({owner: Meteor.userId()});
  },

  selectedStock: function(){
    return SelectedStock.get();
  }
});

Template.body.events({
  "submit .add-stock": function(event) {
    event.preventDefault();

    var input = event.target.symbol;
    Meteor.call("addStock", input.value);
    input.value = "";
  },

  "click .fav-filter": function() {
    var oldValue = Session.get("filterFavourites") || false;
    Session.set("filterFavourites", !oldValue);
  }
});
