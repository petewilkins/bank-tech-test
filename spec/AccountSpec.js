describe('Account', function(){

  var account;
  beforeEach(function(){
    account = new Account();
  });

  it('has a default balance of £0', function() {
    expect(account.getBalance()).toEqual(0);
  })
});
