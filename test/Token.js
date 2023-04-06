//import ethers.js
const { expect } = require('chai');
const { ethers } = require('hardhat');
//We are going to list through each thing we need to check like this and provide the code to test it inside each frame.
//We break it done into steps, first we have to write code to fetch the token from chain
//next we have to read the name
//see it its correct


const tokens = (number) => {
    return ethers.utils.parseUnits(number.toString(), 'ether')
};

describe('Token', () => {
    let token
    //Any tests go in here, this uses matcha chai and waffle the describe function is from waffle

    beforeEach(async () => {
        //fetch token from chain
        const Token = await ethers.getContractFactory('Token');
        token = await Token.deploy('a rug pull', 'DAPP', '1000000')
    });

    describe('Deployment', () => {
        const name = 'a rug pull'
        const symbol = 'DAPP'
        const totalSupply = tokens(1000000)

        it('Has the correct name', async () => {
            //Read Token Name
            //Check name is correct
            expect(await token.name()).to.equal(name)
        });
    
        it('Has the correct symbol', async () => {
            //Read Token Symbol
            //Check Symbol is correct
            expect(await token.symbol()).to.equal(symbol)
        });
    
        it('Has the correct number of decimals', async () => {
            expect(await token.decimals()).to.equal(18);
        });
    
        it('has the correct total supply', async () => {
            expect(await token.totalSupply()).to.equal(totalSupply)
        });
    })
});

