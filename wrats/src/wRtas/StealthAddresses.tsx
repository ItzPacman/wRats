import { useEffect, useState } from "react";
import { base58, keccak256 } from "ethers/lib/utils.js";
import EllipticCurve from "elliptic";
import { ec as EC } from "elliptic";
import "notyf/notyf.min.css";
import { useLocation } from 'react-router-dom';


const ec = new EllipticCurve.ec("secp256k1");

const GenerateStealthAddress = () => {


    const location = useLocation();


    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const key = searchParams.get('key');

        if (key) {
            setwratsKey(key);

        }
    }, [location.search,]);





    let x_cordinate: string | null ;
    let y_cordinate: string | null;
    let sharedSecret: string | null;

    
    let shared_wratsKey: EC.KeyPair | any;



    //ec keypair use to generate private numbers and public stealth address
    let keypair: EC.KeyPair = ec.genKeyPair();

    //one time ephemeral public key to be published in logs directory contract

    let ephemeralkey: any = keypair.getPublic();



    const [wratsKey, setwratsKey] = useState<string | "">("");
    const [error, seterror] = useState<string | "">("");
    let receipentAddress: string;



    const validatingWratsKey = (event: any) => {


        const key = event.target.value;

        if (key !== '') {
            if (
                (key.slice(0, 6).toLowerCase() !== "wRats-" && (key.length > 53 || key.length < 53))) {
                seterror("Invalid address");
                setTimeout(() => {
                    seterror("");
                }, 600);
            }
        }


        setwratsKey(key);




    };




    const validatewratsKey = async () => {

        /*
           removing the prefix "fk" of the forus key 
      */


        try {




            if (wratsKey.slice(0, 6).toLowerCase() === "wrates-") {
                const _wratsKey = wratsKey.slice(2);

                /*
                 removing the one bytes suffix from the forus key then decoding it to generate an stealth address
            */
                let decode_wratsKey = base58.decode(_wratsKey);

                const decodedkey = decode_wratsKey.subarray(0, 33);
                shared_wratsKey = ec.keyFromPublic(decodedkey, "hex");

            } else {
                seterror("Invalid key");
            }


        } catch (e: any) {
            seterror(e.message);
        }
    }





    const setUpStealthAddress = async () => {


        validatewratsKey()
        /*
             Generating the stealth address by doing some elliptic curve calculation here
          */

        try {
            const calculateSecret = keypair.derive(shared_wratsKey.getPublic());
            const hashedSecret = ec.keyFromPrivate(keccak256(calculateSecret.toArray()));
            const publicKey = shared_wratsKey?.getPublic()?.add(hashedSecret.getPublic())?.encode("array", false);

            //P = H(r*A) * G + B

            //generating wallet address from public key

            const _publicKey = publicKey?.splice(1) || []

            const address = keccak256(_publicKey);

            const _HexAddress = address.slice(-40);

            receipentAddress = "0x" + _HexAddress;


            //x and y co-ordinate of ephemeral public key
            x_cordinate = "0x" + ephemeralPkey?.getX().toString(16, 64) || "";
            y_cordinate = "0x" + ephemeralPkey?.getY().toString(16, 64) || "";

            // 2byets shared secret prefixed with ephemeral public key

            sharedSecret = "0x" + calculateSecret.toArray()[0].toString(16)

        } catch (e) {
            console.log("error", e);
        }

        return true;
    };

    return(

        <>
        <Transfer/>
        
        </>
    )


}

export default GenerateStealthAddress;

