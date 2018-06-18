pragma solidity 0.4.24;
contract EventCashOut {

    //public or external? -- TODO
    function () public payable {

    }

    function cashOut (address addressToPay) {
      addressToPay.transfer(address(this).balance);
    }
}
