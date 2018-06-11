var EventCashOut = artifacts.require("EventCashOut");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(EventCashOut);
};