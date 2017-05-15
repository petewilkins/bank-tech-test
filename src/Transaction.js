"use strict";

function Transactions(){
  this.history = [];
}

Transactions.prototype.newTransaction = function (method, amount) {
  var todaysDate = this._date();
  this.history.push({date: todaysDate, type: method, amount: amount});
};

Transactions.prototype._date = function () {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
    dd='0'+dd;
  }
  if(mm<10) {
    mm='0'+mm;
  }

  today = dd+'/'+mm+'/'+yyyy;
  return today;
};
