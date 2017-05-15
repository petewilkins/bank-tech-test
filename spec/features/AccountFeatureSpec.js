describe('Account', function() {
  var account;
  var transactions;

  beforeEach(function() {
    account = new Account();
  });

  describe('transaction history', function() {
    it('add a transaction to history for deposits with date, type and amount', function() {
      var todaysDate = account.transactions._date();
      account.deposit(10);
      expect(account.transactions.history).toEqual([{date: todaysDate, type: "credit", amount: 10, balance: 10}]);
    });

    it('add a transaction to history for withdrawals with date, type and amount', function() {
      var todaysDate = account.transactions._date();
      account.deposit(10);
      account.withdraw(5);
      var lastTransaction = account.transactions.history[account.transactions.history.length-1];
      expect(lastTransaction).toEqual({date: todaysDate, type: "debit", amount: 5, balance: 5});
    });
  });
});
