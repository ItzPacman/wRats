import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import * as dotenv from "dotenv";

dotenv.config();


const config: HardhatUserConfig = {
  solidity: "0.8.16",

  networks: {

    fuji: {
      url: process.env.AVAX_RPC_URL,
      accounts: [process.env.PRIVATE_KEY!],
      gasPrice: 225000000000,
      chainId: 43113,

    },

    pego: {
      url: process.env.PEGO_API_URL,
      accounts: [process.env.PRIVATE_KEY!]
    }
  }

}

export default config;
