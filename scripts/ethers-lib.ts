const { ethers } = require('ethers');
const fs = require('fs');

const privateKey = "0xprivate_key";

const bscProvider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s3.binance.org:8545', { name: 'Tbinance', chainId: 97 }) //testnet


/**
 * Deploy the given contract
 * @param {string} contractName name of the contract to deploy
 * @param {Array<any>} args list of constructor' parameters
 * @param {Number} accountIndex account index from the exposed account
 * @return {Contract} deployed contract
 */
export const deploy = async (contractName: string, args: Array<any>, accountIndex?: number): Promise<ethers.Contract> => {    

    console.log(`deploying ${contractName}`)
    // Note that the script needs the ABI which is generated from the compilation artifact.
    // Make sure contract is compiled and artifacts are generated
    const artifactsPath = `../contracts/artifacts/${contractName}.json` // Change this for different path

    const metadata = JSON.parse(fs.readFileSync(artifactsPath))
    const signer = new ethers.Wallet(privateKey, bscProvider); 

    const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)

    const contract = await factory.deploy(...args)   

    // The contract is NOT deployed yet; we must wait until it is mined
    await contract.deployed()
    return contract
}
