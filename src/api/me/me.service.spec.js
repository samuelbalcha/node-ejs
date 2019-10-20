import test from 'ava';
const meService = require('./me.service');

test('Login: should login user', async t => {
  const result = await meService.login();
  t.truthy(result);
});
