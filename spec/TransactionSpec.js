describe('Transaction', function() {
  var transactions;

  beforeEach(function() {
    transactions = new Transactions();
    transactions.newTransaction("credit", 1000, 1050);
  });

  it('stores new transactions in history', function() {
    expect(transactions.history).toEqual([{date: DateToday(), type: "credit", amount: 1000, balance: 1050}]);
  });

  describe('getStatement', function() {
    it('arranges the history into transaction lines', function() {
      expect(transactions.getStatement()).toEqual([DateToday() + " || credit || £1000 || £1050"]);
    });
  });
});
