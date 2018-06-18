const EventCashOut = artifacts.require("EventCashOut");

contract('EventCashOut receivable and payable tests', async (accounts) => {

  beforeEach( async () => {
    eco = await EventCashOut.new({from: accounts[0]})
    web3.eth
    .sendTransaction({from: accounts[9], value: web3
      .toWei(1, "ether"), to: eco.address })
  });

  it("can be paid into", async () => {
    const expected_wei = web3.toWei(1, "ether") //1000000000000000000
    expect(await web3.eth.getBalance(eco.address).toNumber()).to.eq(parseInt(expected_wei));
  });

  it('can be paid out of', async () => {
    const expected_wei = await web3.eth.getBalance(accounts[8]).plus(web3.toWei(1, "ether")) //1000000000000000000
    await eco.cashOut(accounts[8])
    expect(await web3.eth.getBalance(accounts[8]).toNumber()).to.eq(expected_wei.toNumber());
    expect(await web3.eth.getBalance(eco.address).toNumber()).to.eq(0);
  });
  // Next steps
  // Hey, Stu look at this
  // Money can only be paid out to certain accounts
});
