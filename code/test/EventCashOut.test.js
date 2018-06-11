const EventCashOut = artifacts.require("EventCashOut");

contract('1st EventCashOut test', async (accounts) => {
  
  beforeEach( async () => {

    eco = await EventCashOut.new({from: accounts[0]})

  });
  
  
  it("can be paid into", async () => {
    web3.eth
    .sendTransaction({from: accounts[0], value: web3
      .toWei(1, "ether"), to: eco.address })
    const expected_wei = 1000000000000000000
    expect(await web3.eth.getBalance(eco.address).toNumber()).to.eq(expected_wei);

  });
});