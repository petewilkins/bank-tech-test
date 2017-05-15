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
      expect(account.transactions.history).toEqual([{date: todaysDate, type: "credit", amount: 10}]);
    });

    it('add a transaction to history for withdrawals with date, type and amount', function() {
      var todaysDate = account.transactions._date();
      account.withdraw(5);
      expect(account.transactions.history).toEqual([{date: todaysDate, type: "debit", amount: 5}]);
    });
  });
});
