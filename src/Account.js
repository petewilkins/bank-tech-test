"use strict";

function Account(balance=0){
  this.balance = balance;
  this.transactions = new Transactions();
}

Account.prototype.getBalance = function () {
  return this.balance;
};

Account.prototype.deposit = function (amount) {
  this.transactions.newTransaction("credit", amount);
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  this.transactions.newTransaction("debit", amount);
  this.balance -= amount;
};
