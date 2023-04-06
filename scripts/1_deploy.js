// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

async function main() {
  //First step is to fetch the contracts that we want to deploy.
  const Token = await ethers.getContractFactory("Token")

  //next we deploy the token
  await Token.deploy()
  //now we create a way to read the info that we just deployed
  const token = Token.deploy()
  //now we print out that info use back ticks for variables in strings for js
  console.log(`Token has been deployed to ${token.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
