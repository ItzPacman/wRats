import USDT from '../assets/usdt.png'
import avax from "../assets/avax.png"
import pego from "../assets/pego.png"


interface Token {
    name: string;
    address: string;
    symbol: string;
}


interface chain {
    name: string;
    contract: string;
    chainId: string;
    symbol: string;
    currency: {
        symbol: string;
        decimals: number;

    }
    | any;
    rpcs: string[];
    url: string
    tokens: Token[]
}

export const AvaxMetaData: chain[] = [
  
    {
        name: "Avalanche Fuji", contract: '0xf47fd57b08263Db11D9a039268b3b2975D0c3A36', chainId: "0xa869", symbol: avax, currency: { symbol: "AVAX", decimals: 18 }, rpcs: ['https://api.avax-test.network/ext/bc/C/rpc'], url: "https://testnet.avascan.info/blockchain/c/tx/", 
        tokens: [

            { name: "AVAX", address: "", symbol: avax },
            { name: "USDT", address: "0x36160274b0ed3673e67f2ca5923560a7a0c523aa", symbol: USDT },

        ]
    },
      {
        name: "PEGO Mainnet", contract: '0x8668FE1fEa5963b52fbecbeE02ADED9F13f2B47C', chainId: "0x1343e3e", symbol: pego, currency: { symbol: "PG", decimals: 18 }, rpcs: ['https://pegorpc.com'], url: "https://scan.pego.network/tx/", tokens: [

            { name: "PG", address: "", symbol: pego },
            { name: "USDT", address: "0x211554151f2f00305f33530fdd3a5d0354927a65", symbol: USDT },



        ]
    },

];


