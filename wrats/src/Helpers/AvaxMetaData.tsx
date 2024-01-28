import USDT from '../assets/usdt.png'
import Area from "../assets/Area.png"




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
        name: "Areon Network Testnet", contract: '0xf47fd57b08263Db11D9a039268b3b2975D0c3A36', chainId: "0x1ce", symbol: Area, currency: { symbol: "TAREA", decimals: 18 }, rpcs: ['https://testnet-rpc.areon.network'], url: "https://areonscan.com", 
        tokens: [

            { name: "TAREA", address: "", symbol: Area },
            { name: "USDT", address: "0x36160274b0ed3673e67f2ca5923560a7a0c523aa", symbol: USDT },

        ]
    },

];


