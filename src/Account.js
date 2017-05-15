"use strict";

function Account(balance=0){
  this.balance = balance;
  this.transactions = new Transactions();
}

Account.prototype.getBalance = function () {
  return this.balance;
};

Account.prototype.getAccountStatement = function () {
  console.log(" Date || Type || Amount || Balance ");
  console.log("-----------------------------------");
  this.transactions.getStatement().forEach(function(item) {
    console.log(item);
  });
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.newTransaction("credit", amount, this.balance);
  return this.balance;
};

Account.prototype.withdraw = function (amount) {
  if(this.balance < amount){
    throw new TypeError('Insufficient funds');
  } else {
    this.balance -= amount;
    this.transactions.newTransaction("debit", amount, this.balance);
    return this.balance;
  }
};
