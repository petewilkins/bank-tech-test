describe('Account', function() {
  var account;
  beforeEach(function() {
    account = new Account();
  });

  it('has a default balance of £0', function() {
    expect(account.getBalance()).toEqual(0);
  });

  it('can be given a different default balance', function() {
    account = new Account(100);
    expect(account.getBalance()).toEqual(100);
  });

  describe('depositing', function() {
    it('£10 increase account balance by £10', function() {
      account.deposit(10);
      expect(account.getBalance()).toEqual(10);
    });
  });

  describe('withdrawing', function() {
    it('£10 decreases account balance by £10', function() {
      account.deposit(20);
      account.withdraw(10);
      expect(account.getBalance()).toEqual(10);
    });

    it('raises an error if balance is too low', function() {
      expect(function(){account.withdraw(10);}).toThrowError('Insufficient funds');
    });
  });

  describe('account statement', function() {
    xit('returns a statement with all recent transactions', function() {
      account.deposit(20);
      account.withdraw(10);
      var statement = account.getAccountStatement();
      expect(statement).toEqual('15/05/2017 || credit || 20\n15/05/2017 || debit  || 10');
    });
  });
});
