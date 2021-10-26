require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike cruise night social hunt drive equal gentle'; 
let testAccounts = [
"0x72c06451800d494a42b28d91a9414b7ce9aa216d82f21755f180106e9f5846e4",
"0xa18729e031607bd7384157fb0caaf256c5b79a79e7a551c15f9ea6f639556035",
"0x31070a2216361e8de2ddfc0ce4e1476aa166f875593f7d05e3cb5e634ed43a09",
"0x83f2ee8bcc1565f2ce5128fb448c87e5d9b8f91de95aca4a3de5517ac8040d05",
"0x1a4bddcc2b3e1a6171634c176d7bed7f56ff9c53006f54e40a564f0bcca3787c",
"0x0416ab5fab2adfced628f92c2f84f4e0daad0878dc66283bc1cad955ee010de1",
"0xff644866c6123422ba2c41986e5e748cc92cb052f8d5ab1c21af4f0214009f8a",
"0x667179bc898aab9ca88536db55eb74f21dd57893100a661e2c989f5cd4fc69f9",
"0x980179377f8838ef0ca2df42415edca3173aceecb11630aad263a07d36e0fae9",
"0xfbfdde4b875d7445d2caf3eb420097ddc78380f1e4c05cf0cb2eeae7a1499a0f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


