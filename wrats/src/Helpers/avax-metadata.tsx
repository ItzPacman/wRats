import USDT from '../assets/usdt.png'
import avax from "../assets/avax.png"


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

export const chainOptions: chain[] = [
  
    {
        name: "Avalanche Fuji", contract: '', chainId: "0xa869", symbol: avax, currency: { symbol: "AVAX", decimals: 18 }, rpcs: ['https://api.avax-test.network/ext/bc/C/rpc'], url: "https://testnet.avax.network", tokens: [

            { name: "AVAX", address: "", symbol: avax },
            { name: "USDT", address: "0x36160274b0ed3673e67f2ca5923560a7a0c523aa", symbol: USDT },

        ]
    },

];


