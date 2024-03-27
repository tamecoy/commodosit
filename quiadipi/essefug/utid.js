const ethers = require('ethers');

// Assuming walletSigner is already instantiated from ethers.Wallet
// and connected to a provider

const transaction = {
  to: '0x1234567890123456789012345678901234567890',
  // Using ethers.js utility function to convert Ether to Wei
  value: ethers.utils.parseEther('1.0'), // 1 Ether
  gasLimit: ethers.utils.hexlify(21000), // Hexadecimal representation
  // Using Big Number for better handling of large numbers in JS
  gasPrice: ethers.BigNumber.from('10000000000'), // 10 Gwei
};

async function signAndSendTransaction(transaction) {
  try {
    const signedTransaction = await walletSigner.signTransaction(transaction);
    // Assuming a provider is set up to send the transaction
    const txResponse = await walletSigner.provider.sendTransaction(signedTransaction);
    console.log('Transaction sent! Hash:', txResponse.hash);
    return txResponse;
  } catch (error) {
    console.error('Transaction signing failed:', error);
  }
}

// Call the function with the transaction object
signAndSendTransaction(transaction);
