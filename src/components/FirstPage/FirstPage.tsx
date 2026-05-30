import { Link } from "react-router-dom";
import { ModalWindow, OpenWindowButton } from "../Window/openWindow";

export const FirstPage = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .anim-nav     { animation: fadeInDown  0.6s ease 0.0s both; }
        .anim-text    { animation: fadeInLeft  0.7s ease 0.2s both; }
        .anim-buttons { animation: fadeInLeft  0.7s ease 0.4s both; }
        .anim-image   { animation: fadeInRight 0.7s ease 0.3s both; }
      `}</style>
      <header className="bg-[#E4C3A4] w-full min-h-[800px]">
        <div className="w-full max-w-[1250px] m-auto px-4">
          <nav className="anim-nav flex flex-col md:flex-row items-center justify-center mx-auto gap-4 md:gap-[40px] py-6 md:h-[157px]">
            <img src="/img/Frame.png" alt="logo" className="md:mr-[20px]" />
            <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-[80px]">
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/"} className="visited:text-[#5a5858]">
                  Home
                </Link>
              </li>
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/SecondPage"}>News</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/ThreePage"}>clan wars analyse</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/FourPage"}>frindes activity</Link>
              </li>
            </ul>
            <OpenWindowButton />
          </nav>
        </div>
        <ModalWindow />
        <div className="flex flex-col md:flex-row gap-8 md:gap-[150px] mt-[40px] md:mt-[100px] justify-center items-center px-6">
          <div className="anim-text text-center md:text-left flex flex-col gap-[20px] md:gap-[30px]">
            <p className="text-[#D43D27] font-[Inter] font-[700] text-[28px] md:text-[40px]">
              sign up to unlock <br /> all features !
            </p>
            <p className="font-[Inter] font-[600] text-[18px] md:text-[26px]">
              here you can see every thing <br /> about your <br /> clash of
              clans account. like <br /> clan wars , frindes activity <br />
              and every thing. but you need <br /> to sign up first.
            </p>
            <div className="anim-buttons flex flex-wrap justify-center md:justify-start gap-[20px]">
              <button className="w-[130px] md:w-[147px] h-[50px] md:h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[20px] md:text-[25px] cursor-pointer hover:bg-[#bd803a] p-0 overflow-hidden">
                <Link
                  to={"/Faq"}
                  className="w-full h-full flex items-center justify-center gap-[5px]"
                >
                  FAQ
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 md:w-6 md:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                    />
                  </svg>
                </Link>
              </button>
              <button className="w-[130px] md:w-[147px] h-[50px] md:h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[17px] md:text-[20px] cursor-pointer hover:bg-[#bd803a]">
                <a
                  href="https://supercell.com/en/games/clashroyale/"
                  className="w-full h-full flex items-center justify-center"
                >
                  get the app
                </a>
              </button>
            </div>
          </div>
          <div className="anim-image">
            <img
              src="/img/image.png"
              alt="img"
              className="md:relative md:bottom-[50px] w-[400px] md:max-w-[500px]"
            />
          </div>
        </div>
      </header>
    </>
  );
};
