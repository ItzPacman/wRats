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

  // SafeMath deployed at: 0x9152D9eF04Bf00BE1A408C2b2FE78a87cD9CdcC7
  // wRats deployed at: 0x2f5Fa595c66d3bB73f18B5932246430772300641