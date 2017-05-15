"use strict";

function Account(balance=0){
  this.balance = balance;
}

Account.prototype.getBalance = function () {
  return this.balance;
};

Account.prototype.deposit = function (amount) {
  this.balance += amount;
};

Account.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
