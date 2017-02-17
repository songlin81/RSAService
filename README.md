# RSAService
Node service to test out RSA

--Node Revision
<1> require 'fs', fs.readFileSync, 
<2> require 'ursa', ursa.createPublichKey, 
<3> public key: crt.encrypt -> private key: key.decrypt
<4> private key: key.privateEncrypt -> public key: crt.publicDecrypt

--Bash Revision
<1> if [ -f "$pubKey" ]
<2> 
