import { LibraWallet, LibraClient } from 'kulap-libra';

// please don't use this mnemonic outside of this sample code
// also mnemonics are optional. If you don't specify one a random mnemonic is generated and used.
const wallet = new LibraWallet({
        mnemonic: 'upgrade salt toy stable drop paddle'
      });

// generate a new account
const account = wallet.newAccount();

// or if you have your secret key you can create an account from it
// const secretKey = 'pub-hex-secret-key-here' 
// const account = LibraAccount.fromSecretKey(secretKey);


// you can see your address by:
console.log(account.getAddress().toHex());
