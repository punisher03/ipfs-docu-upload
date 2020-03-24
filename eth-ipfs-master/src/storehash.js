import web3 from './web3';

//access our local copy to contract deployed on rinkeby testnet
//use your own contract address
const address = '0xc2Da4A44c3Da2C53C2Eca21e8F8187cD7Ce664b8';
//use the ABI from your contract
const abi = [
	{
		"constant": true,
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "sendHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
export default new web3.eth.Contract(abi, address);
