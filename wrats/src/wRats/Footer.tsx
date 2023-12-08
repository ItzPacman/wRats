import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex p-4 w-full ">
      <ul className="flex space-x-8 items-center m-auto">
        <li className="text-[#ee6f08]">
          <a href="https://discord.gg/keQnv2K8HP">
            <FaDiscord size={24} />
          </a>
        </li>
        <li className="text-gray-300">
          <a href="https://github.com/TheForus">
            <FaGithub size={24} />
          </a>
        </li>
        <li className="text-[#ee6f08]">
          <a href="https://twitter.com/The_Forus">
            <FaTwitter size={24} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
