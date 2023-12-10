import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex p-4 w-full ">
      <ul className="flex space-x-8 items-center m-auto">
        <li className="text-[#ee6f08]">
          <a href="">
            <FaDiscord size={24} />
          </a>
        </li>
        <li className="text-gray-300">
          <a href="">
            <FaGithub size={24} />
          </a>
        </li>
        <li className="text-[#ee6f08]">
          <a href="">
            <FaTwitter size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
