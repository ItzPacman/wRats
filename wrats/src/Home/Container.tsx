import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import Faq from "./Faq";


type Props = {};

const Container = (props: Props) => {
    // dark:bg-[#015235]
    return (
        <div className="bg-[#e9e9f3] " >
            <Navbar />
            <Header />
            < Features />
            <Faq />
        </div>

    );
};

export default Container;