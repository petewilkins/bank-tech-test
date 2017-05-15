"use strict";

function Transactions(){
  this.history = [];
}

Transactions.prototype.newTransaction = function (method, amount, balance) {
  this.history.push({date: DateToday(), type: method, amount: amount, balance: balance});
};

Transactions.prototype.getStatement = function () {
  var statement = [];
  for(var i=0; i<this.history.length; i++){
    statement.push(this.history[i].date + " || " + this.history[i].type + " || £" + this.history[i].amount + " || £" + this.history[i].balance);
  }
  return statement;
};
