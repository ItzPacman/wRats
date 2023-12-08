import Navbar from "./Navbar";
import Header from "./Header";
import Features from "./Features";
import Faq from "./Faq";
import Description from "./Description";


type Props = {};

const Container = (props: Props) => {
    // dark:bg-[#015235]
    return (
        <div className="bg-[#1E202Dff] " >
            <Navbar />
            <Header />
        <Description/>
            < Features />
            <Faq />
        </div>

    );
};

export default Container;