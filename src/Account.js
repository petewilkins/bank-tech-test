"use strict";

function Account(balance=0){
  this.balance = balance;
  this.transactions = new Transactions();
}

Account.prototype.getBalance = function () {
  return this.balance;
};

Account.prototype.getAccountStatement = function () {
  console.log(this._printHeader());
  this.transactions.getStatement().forEach(function(item) {
    console.log(item);
  });
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  return this.transactions.newTransaction("credit", amount, this.balance);
};

Account.prototype.withdraw = function (amount) {
  if(this._insufficientFunds(amount)){
    throw new TypeError('Insufficient funds');
  } else {
    this.balance -= amount;
    return this.transactions.newTransaction("debit", amount, this.balance);
  }
};

Account.prototype._insufficientFunds = function (amount) {
  if(this.balance < amount) {return true;} else {return false;}
};

Account.prototype._printHeader = function () {
  return " Date || Type || Amount || Balance ";
};
