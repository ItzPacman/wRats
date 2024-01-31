import Header from "./Header";
import Keys from "./Keys";
import Guide from "./Guide";
import Footer from "./Footer";
import Transactions from "./Transaction";
import React, { createContext, useState, useEffect, useMemo } from "react";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import abi from "../artifacts/contracts/wRats.sol/wRats.json";
import { ethers } from "ethers";
import { AreonMetaData } from "../Helpers/AreonMetaData"
import { ValidateChainData } from "../Helpers/ValidateChainData";
import { SwitchChain } from "../Helpers/SwitchChain"
import { IsConnected } from "../Helpers/IsConnected";


type Props = {};

interface ContextValue {
  show: string;
  setShow: React.Dispatch<React.SetStateAction<string | any>>;
  connectWallet(): void;
  userBalance: string;
  accountChecker(): void
  currentChain: string;
  totalfunds: number ;
  totalAddress: number;
  AreonMetaData: [] | any;
  handleChainChange(chainId: any): void | any;
}


export const AppContext = createContext<ContextValue | any>(null);

const Container = (props: Props) => {

  //start

  const notyf = new Notyf();

  const [show, setShow] = useState<string>("transfer");
  const [totalfunds, settotalfunds] = useState<number>(0);
  const [totalAddress, settotalAddress] = useState<number>(0);

  const currentChain: string | any = sessionStorage.getItem("chain");



  const ethereum = useMemo(() => {

    const { ethereum }: any = window;
    if (typeof ethereum !== 'undefined') {

      return ethereum;

    }
  }, []);


  const handleChainChange = async (chainId: any) => {

    AreonMetaData.map((chain: any) => {
      if (sessionStorage.getItem("chain") !== chain.name) {
        return false;
      } else {
        const customChain = {
          chainId: chain.chainId,
          chainName: chain.name,
          nativeCurrency: {
            name: chain.name,
            symbol: chain.currency.symbol,
            decimals: chain.currency.decimals,
          },
          rpcUrls: chain.rpcs,
        };

        // Add the custom chain to MetaMask

        SwitchChain(customChain, chain.chainId);
      }
    });
  };

  const fetchCurrentChainData = async () => {
    try {
      const chainId = await ethereum.request({ method: "eth_chainId" });
      const chain = AreonMetaData.find((option: any) => option.chainId === chainId);

      if (chain) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const theContract = new ethers.Contract(chain.contract, abi.abi, provider);
        const [totalAddresses, totalFunds] = await Promise.all([
          theContract.gettotalStealthAddresses(),
          theContract.getTotalVolume(),
        ]);

        settotalAddress(parseInt(totalAddresses));
        settotalfunds(parseInt(totalFunds) / 10 ** 18);
      }
    } catch (error) {
      console.error("Error fetching chain data:", error);
    }
  };


  const [userBalance, setUserBalance] = useState<string>("");

  const accountChecker = async () => {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    sessionStorage.setItem("address", accounts[0]);

    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const balance = await provider.getBalance(accounts[0]);
      setUserBalance(ethers.utils.formatEther(balance).toString().slice(0, 5) + " " + sessionStorage.getItem("symbol")
      );
    } catch (e: any) {
      console.log(e);
      notyf.error(e.message)
    }
  };



  useEffect(() => {


    accountChecker();
    fetchCurrentChainData()
    ValidateChainData();

  }, [ethereum]);

  useEffect(() => {
    if (ethereum) {
      ethereum.on("accountsChanged", (address: any) => {
        accountChecker();
        sessionStorage.setItem("address", address);
        window.location.reload();
      });

      ethereum.on("chainChanged", (chId: any) => {
        window.location.reload();
        ValidateChainData();
      });
    } else {
      notyf.error("Plz install metamask");
    }

  }, [ethereum])


  const connectWallet = async (): Promise<void> => {

    IsConnected()

    try {
      await accountChecker();
      ValidateChainData();

    } catch (e: any) {
      notyf.error(e);
    }
  };

  const ContextValue: ContextValue = {
    show,
    setShow,
    AreonMetaData,
    connectWallet,
    totalfunds,
    userBalance, 
    totalAddress,
    handleChainChange,
    currentChain,
    accountChecker
  };


  return (
    <AppContext.Provider value={ContextValue}>

      <div className=" bg-[#1E202Dff] relative w-full h-full">

        <div className=" max-h-max min-h-[100vh] ">


          <Header />

          <div
            className="md:w-[100%]  max-w-[1280px] mx-auto
            py-8 p-4"
          >
            <div className="relative m-auto lg:w-[94%] xl:w-[96%] w-[100%] h-full">
              <Keys />
            </div>
            <div
              className="flex lg:flex-row lg:justify-between justify-between 
          flex-col-reverse  pt-16 pb-6 "
            >
              <Guide />
              <Transactions />


            </div>
            <Footer />
          </div>
        </div>

      </div>
    </AppContext.Provider>
  );
};

export default Container;