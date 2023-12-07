import { ethers } from "hardhat";

async function main() {
  // Deploy SafeMath first
  const SafeMath = await ethers.getContractFactory("SafeMath");
  const safeMath = await SafeMath.deploy();
  await safeMath.waitForDeployment();

  console.log(`SafeMath deployed at: ${safeMath.target}`);

  //Deploy the main contract with library addresses
  const wRats = await ethers.getContractFactory("wRats");
  const wrats = await wRats.deploy();
  await wrats.waitForDeployment();

  console.log(`wRats deployed at: ${wrats.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//   SafeMath deployed at: 0xB1EA59521a88405D313d412f3f3EFCF4a329f2dc
// wRats deployed at: 0xf47fd57b08263Db11D9a039268b3b2975D0c3A36