import { Link } from "react-router-dom";
import { ModalWindow, OpenWindowButton } from "../WIndow/openWindow";

export const FourPage = () => {
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
        .anim-nav    { animation: fadeInDown  0.6s ease 0.0s both; }
        .anim-title  { animation: fadeInLeft  0.6s ease 0.2s both; }
        .anim-name   { animation: fadeInLeft  0.6s ease 0.3s both; }
        .anim-stats  { animation: fadeInLeft  0.6s ease 0.4s both; }
        .anim-image  { animation: fadeInRight 0.7s ease 0.3s both; }
        .anim-notice { animation: fadeIn      0.7s ease 0.5s both; }
      `}</style>
      <div className="bg-[#E4C3A4] min-h-screen w-full">
        <header>
          <nav className="anim-nav flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[80px] py-6 md:h-[157px] px-8">
            <img src="/img/Frame.png" alt="logo" />
            <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-[80px]">
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/SecondPage"}>News</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/ThreePage"}>clan wars analyse</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
                <Link to={"/FourPage"} className="visited:text-[#5a5858]">
                  frindes activity
                </Link>
              </li>
            </ul>
            <OpenWindowButton />
          </nav>
          <ModalWindow />
        </header>
        <main className="flex flex-col items-center px-6 pb-10">
          <h1 className="anim-title font-[inter] font-[800] font-extrabold text-[50px] mt-[30px]">
            <span
              className="font-black bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #C9260B, rgba(201,38,11,0))",
              }}
            >
              today&nbsp;
            </span>
            <span
              className="font-black bg-clip-text text-transparent inline-block"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #4A90C4, rgba(74,144,196,0))",
              }}
            >
              activity
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-[30px] md:gap-[60px] mt-[40px] w-full max-w-[1100px]">
            <div className="anim-name flex flex-col gap-[10px]">
              <span className="font-[inter] font-[800] text-[32px] text-[#C9260B] mt-[20px]">
                dark Phonix
              </span>
              <span className="font-[inter] font-[800] text-[32px] text-[#C9260B] mt-[25px]">
                Dark Man
              </span>
            </div>
            <div className="anim-stats flex gap-[40px] md:gap-[80px]">
              <div className="font-[inter] font-[800] text-[28px] flex flex-col gap-[8px]">
                <span>attacks</span>
                <span>6</span>
                <span>2</span>
              </div>
              <div className="font-[inter] font-[800] text-[28px] flex flex-col gap-[8px]">
                <span>stars</span>
                <span>18</span>
                <span>6</span>
              </div>
              <div className="font-[inter] font-[800] text-[28px] flex flex-col gap-[8px]">
                <span className="whitespace-nowrap">last time onlining</span>
                <span>21:53</span>
                <span>22:10</span>
              </div>
            </div>
            <img
              src="/img/image4.png"
              alt="img"
              className="anim-image w-[250px] md:w-[300px] md:h-[500px] object-contain"
            />
          </div>
          <div className="anim-notice flex flex-col md:flex-row items-center md:items-start gap-[10px] md:gap-[40px] w-full max-w-[1100px]">
            <p className="font-[inter] font-[800] text-[38px] text-[#C9260B] whitespace-nowrap">
              notice :
            </p>
            <p className="font-[inter] font-[400] text-[28px] md:text-[35px] text-center md:text-left">
              if you add a friend after 5 minuts <br /> your friend will add to
              website
            </p>
          </div>
        </main>
      </div>
    </>
  );
};
