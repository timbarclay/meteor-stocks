Template.body.helpers({
  stocks: function () {
    return Stocks.find({}, {sort: ["symbol", "asc"]});
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
  }
});
