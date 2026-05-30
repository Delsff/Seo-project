import { Link } from "react-router-dom";
import { ModalWindow, OpenWindowButton } from "../Window/openWindow";

export const ThreePage = () => {
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .anim-nav      { animation: fadeInDown  0.6s ease 0.0s both; }
        .anim-left     { animation: fadeInLeft  0.7s ease 0.2s both; }
        .anim-divider  { animation: fadeIn      0.5s ease 0.3s both; }
        .anim-left-val { animation: fadeInLeft  0.7s ease 0.3s both; }
        .anim-vs       { animation: fadeIn      0.8s ease 0.4s both; }
        .anim-right    { animation: fadeInRight 0.7s ease 0.3s both; }
      `}</style>
      <div className="bg-[#E4C3A4] min-h-screen w-full">
        <header>
          <nav className="anim-nav flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[80px] py-6 md:h-[157px] px-8">
            <img src="/img/Frame.png" alt="logo" />
            <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-[80px]">
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/SecondPage"}>News</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/ThreePage"} className="visited:text-[#5a5858]">
                  clan wars analyse
                </Link>
              </li>
              <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/FourPage"}>frindes activity</Link>
              </li>
            </ul>
            <OpenWindowButton />
          </nav>
          <ModalWindow />
        </header>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-[40px] md:mt-[50px] px-4 pb-10 gap-6 md:gap-[50px]">
          <div className="anim-left flex flex-col gap-3 text-[18px] md:text-[26px] font-medium">
            <span>clans name</span>
            <span>starts</span>
            <span>successed</span>
            <span>failed</span>
            <span>all attacks</span>
            <span>persent</span>
            <span>best attack</span>
            <span>worst attack</span>
          </div>
          <div className="anim-divider hidden md:flex flex-col gap-3 text-[26px] text-[black]">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <div className="anim-left-val flex flex-col gap-3 text-[18px] md:text-[26px] font-medium">
            <span>Team 7</span>
            <span>15</span>
            <span>5</span>
            <span>0</span>
            <span>5</span>
            <span>100%</span>
            <span>Hitman</span>
            <span>-----</span>
          </div>
          <div className="anim-vs text-[60px] md:text-[85px] font-medium flex items-center">
            VS
          </div>
          <div className="anim-right flex flex-col gap-3 text-[18px] md:text-[26px] font-medium">
            <span>best friends</span>
            <span>3</span>
            <span>3</span>
            <span>6</span>
            <span>9</span>
            <span>32.5%</span>
            <span>-----</span>
            <span>-----</span>
          </div>
        </div>
      </div>
    </>
  );
};
