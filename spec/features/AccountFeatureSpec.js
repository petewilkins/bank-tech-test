describe('Account', function() {
  var account;
  var transactions;

  beforeEach(function() {
    account = new Account();
    account.deposit(10);
  });

  describe('transaction history', function() {
    it('add a transaction to history for deposits with date, type and amount', function() {
      expect(account.transactions.history).toEqual([{date: DateToday(), type: "credit", amount: 10, balance: 10}]);
    });

    it('add a transaction to history for withdrawals with date, type and amount', function() {
      account.withdraw(5);
      var lastTransaction = account.transactions.history[account.transactions.history.length-1];
      expect(lastTransaction).toEqual({date: DateToday(), type: "debit", amount: 5, balance: 5});
    });
  });
});
