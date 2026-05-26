import { Link } from "react-router-dom";

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

      <body className="bg-[#E4C3A4]">
        <header>
          <nav className="anim-nav flex items-center w-[1300px] h-[157px] gap-[80px] justify-center relative right-[80px]">
            <img src="/img/Frame.png" alt="logo" />
            <ul className="flex flex-wrap gap-[80px]">
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/"} className="visited:text-[#5a5858]">
                  Home
                </Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/SecondPage"}>News</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/ThreePage"}>clan wars analyse</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/FourPage"}>frindes activity</Link>
              </li>
            </ul>
            <button className="w-[127px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[Medium] text-[20px] cursor-pointer hover:bg-[#bd803a]">
              sign up
            </button>
          </nav>
          <div className="flex flex-wrap gap-[150px] mt-[100px]">
            <div className="anim-text text-left flex flex-col gap-[30px]">
              <p className="text-[#D43D27] font-[Inter] font-[700] text-[Medium] text-[40px]">
                sign up to unlock <br /> all features !
              </p>
              <p className="font-[Inter] font-[600] text-[Medium] text-[26px]">
                here you can see every thing <br /> about your <br /> clash of
                clans account. like <br /> clan wars , frindes activity <br />
                and every thing. but you need <br /> to sign up first.
              </p>
              <div className="anim-buttons flex flex-wrap gap-[20px]">
                <button className="w-[147px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[25px] cursor-pointer hover:bg-[#bd803a] p-0 overflow-hidden">
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
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </Link>
                </button>
                <button className="w-[147px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[Medium] text-[20px] cursor-pointer hover:bg-[#bd803a]">
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
                className="relative bottom-[50px]"
              />
            </div>
          </div>
        </header>
      </body>
    </>
  );
};
