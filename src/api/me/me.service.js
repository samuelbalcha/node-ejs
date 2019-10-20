'use strict';

module.exports = {
  login
};

function login() {
  return new Promise(() => {
    console.log('service ready');
  });
}
