

if (Meteor.isClient) {
  // This code only runs on the client

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
