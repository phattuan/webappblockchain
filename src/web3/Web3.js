/**
 *  Written by Thanh Le
 */

const Web3 = require('web3');
const { CONTRACT_ADDRESS } = require('./constant');
const Valuation = require('./contracts/Valuation.json')

//const web3 = new Web3('http://127.0.0.1:7545');
//const smartContract = new web3.eth.Contract(Valuation.abi, CONTRACT_ADDRESS);
class Web3Connection {
    constructor () {
        this.web3 = new Web3('http://127.0.0.1:8545');
        this.smartContract =  new this.web3.eth.Contract(Valuation.abi, CONTRACT_ADDRESS);
    }

    /**  Write into Blockchain  **/

    async register (name, address) {
        await this.smartContract.methods.register(name).send({from: address, gas: 3000000})
        .then((data) => {
            console.log(data);
            console.log('====Created a transaction====')
        })
        .catch((error) => {
            console.error(error);
            console.log('====Fail====')
        }); 
    }

    async createProduct (productName,hashImg, address) {
        const productHash = this.web3.utils.sha3(hashImg);
        await this.smartContract.methods.createProduct(productHash, productName).send({from: address, gas: 3000000})
        .then((data) => {
            console.log(data);
            console.log('====Created a transaction====')
        })
        .catch((error) => {
            console.error(error);
            console.log('====Fail====')
        });
    }

    async createValuation (productHash, timeSet, address) {
        await this.smartContract.methods.createValuation(productHash, timeSet).send({from: address, gas: 3000000})
        .then((data) => {
            console.log(data);
            console.log('====Created a transaction====')
        })
        .catch((error) => {
            console.error(error);
            console.log('====Fail====')
        });
    }

    async addPrice (productHash, price, address) {
        await this.smartContract.methods.addPrice(productHash, price).send({from: address, gas: 3000000})
        .then((data) => {
            console.log(data);
            console.log('====Created a transaction====')
        })
        .catch((error) => {
            console.error(error);
            console.log('====Fail====')
        });
    }

    async calculateFinalPrice (productHash, address) {
        await this.smartContract.methods.caculateFinalPrice(productHash).send({from: address, gas: 3000000})
        .then((data) => {
            console.log(data);
            console.log('====Created a transaction====')
        })
        .catch((error) => {
            console.error(error);
            console.log('====Fail====')
        });
    }

    async closeValuation (productHash, address) {
        await this.smartContract.methods.closeValuation(productHash).send({from: address, gas: 3000000})
        .then((data) => {
            console.log(data);
            console.log('====Created a transaction====')
        })
        .catch((error) => {
            console.error(error);
            console.log('====Fail====')
        });
    }
    
    /**   Read into Blockchain  **/

    async getCalculateFinalPrice (productHash, address) {
        return await this.smartContract.methods.caculateFinalPrice(productHash).call({from: address, gas: 3000000});
    }
    async userInfo(address) {
        return await this.smartContract.methods.users(address).call();
    }

    async productInfo(productHash) {
        return await this.smartContract.methods.products(productHash).call();
    }

    async adminInfo() {
        return await this.smartContract.methods.administrator().call();
    }

    async isAdministrator(address) {
        return await this.smartContract.methods.isAdministrator(address).call();
    }
   
  }
module.exports = Web3Connection









