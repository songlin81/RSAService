// Author: Lin, Song
// Date: 2016.09.07
// Usage of RSA encryption Lib ursa

'use strict';

var fs = require('fs')
  , ursa = require('ursa')
  , crt
  , key
  , msg = 'YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouYouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan WebYouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan WebZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service ResponouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messages..YouZan Web Service Responding messagesding messages...'
  , relMsg;

console.log(msg.length);
key = ursa.createPrivateKey(fs.readFileSync('./keypair/my-server.key.pem'));
crt = ursa.createPublicKey(fs.readFileSync('./keypair/my-server.pub'));

console.log('Encrypt with Public');
relMsg = crt.encrypt(msg, 'utf8', 'base64');
console.log('encrypted', relMsg, '\n');

console.log('Decrypt with Private');
msg = key.decrypt(relMsg, 'base64', 'utf8');
console.log('decrypted', msg, '\n');


console.log('############################################');
console.log('Reverse Public -> Private, Private -> Public');
console.log('############################################\n');


console.log('Encrypt with Private (called public)');
relMsg = key.privateEncrypt(msg, 'utf8', 'base64');
console.log('encrypted', relMsg, '\n');

console.log('Decrypt with Public (called private)');
msg = crt.publicDecrypt(relMsg, 'base64', 'utf8');
console.log('decrypted', msg, '\n');
