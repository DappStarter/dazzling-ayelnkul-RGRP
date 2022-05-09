require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain connect grace gloom onion type'; 
let testAccounts = [
"0x621c8a5c35064d184665b2fbe99778374c8825a72c5a9598c12c79ae7d81b419",
"0x8041ce01d0a21be143e9abe9f089a4e2aba8bc51363802c757454df0f225847d",
"0x65f82b3ca5fea05010946f03beb8f578237327126d27b8b582e82246bc233dab",
"0xb7fc8bc635546b03b03e6f1616cb352a1c3ffd629e86575304f6a49eb4494d02",
"0xa1d19c2037fc1fbac1094b48d45d3ed73b55bcb83eb0bcafbf465f58b70b0e4e",
"0xa4fe2b07501767e8af0833b210c44076cd5c8a2e3274aa82436770d80fa32b54",
"0xca0647ace6c933f9c8dfafc365f169651589ca1e2b3e59725e652e503120936e",
"0x084b9e4afa0ece8993aa4083d58f0abf0fe7c433040dcc7ef363f02af8f7e56a",
"0x9bcc8f857ef7749483191c382858686a6afd28c86c13935a8ba89285d560bf75",
"0xa8f7ec6cc44dee243fd5f5f55329006506aec82e7be4e553913e35587a89299e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

