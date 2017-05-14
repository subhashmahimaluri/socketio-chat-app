const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  it('should add new users', () => {
    var users = new Users();
    var user = {
      id: '233',
      name: 'Subhash',
      room: 'Node Js'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
});
