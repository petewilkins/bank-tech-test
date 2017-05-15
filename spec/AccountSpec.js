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
    it('prints header', function() {
      expect(account._printHeader()).toEqual(" Date || Type || Amount || Balance ");
    });
  });
});
