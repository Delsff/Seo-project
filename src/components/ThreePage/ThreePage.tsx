import { Link } from "react-router-dom";

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
          from { opacity: 0; transform: scale(0.8); }
          to   { opacity: 1; transform: scale(1); }
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
          <nav className="anim-nav flex items-center w-[1300px] h-[157px] gap-[80px] justify-center relative right-[80px]">
            <img src="/img/Frame.png" alt="logo" />
            <ul className="flex flex-wrap gap-[80px]">
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer ">
                <Link to={"/SecondPage"}>News</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/ThreePage"} className="visited:text-[#5a5858]">
                  clan wars analyse
                </Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/FourPage"}>frindes activity </Link>
              </li>
            </ul>
            <button className="w-[127px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[Medium] text-[20px] cursor-pointer hover:bg-[#bd803a]">
              sign up
            </button>
          </nav>
        </header>
        <div className="flex gap-30 flex justify-center mt-[50px]">
          <div className="anim-left flex flex-col gap-2 text-[26px] font-medium">
            <span>clans name</span>
            <span>starts</span>
            <span>successed</span>
            <span>failed</span>
            <span>all attacks</span>
            <span>persent</span>
            <span>best attack</span>
            <span>worst attack</span>
          </div>
          <div className="anim-divider flex flex-col items-center justify-between text-[26px] relative right-[50px]">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
          <div className="anim-left-val flex flex-col gap-2 text-[26px] font-medium relative right-[50px]">
            <span>Team 7</span>
            <span>15</span>
            <span>5</span>
            <span>0</span>
            <span>5</span>
            <span>100%</span>
            <span>Hitman</span>
            <span>-----</span>
          </div>
          <div className="anim-vs text-[85px] font-medium relative bottom-[30px]">
            VS
          </div>
          <div className="anim-right flex flex-col gap-2 text-[26px] font-medium">
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
