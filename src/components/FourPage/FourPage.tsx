import { Link } from "react-router-dom";

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

      <body className="bg-[#E4C3A4]">
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
                <Link to={"/ThreePage"}>clan wars analyse</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/FourPage"} className="visited:text-[#5a5858]">
                  frindes activity
                </Link>
              </li>
            </ul>
            <button className="w-[127px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[Medium] text-[20px] cursor-pointer hover:bg-[#bd803a]">
              sign up
            </button>
          </nav>
        </header>
        <main>
          <h1 className="anim-title font-[inter] font-[800] font-extrabold text-[50px] text-left ml-[220px] mt-[35px]">
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
          <div className="flex flex-wrap gap-[30px] mt-[80px] mr-[100px]">
            <p className="anim-name font-[inter] font-[800] text-[35px] text-[#C9260B] mr-[20px]">
              dark Phonix <br />
              <span className="relative top-[50px]">DarkMan</span>
            </p>
            <div className="anim-stats flex flex-wrap relative bottom-[40px] gap-[100px]">
              <p className="font-[inter] font-[800] text-[28px] ">
                <span className="relative bottom-[10px]">attacks</span>
                <span className="relative top-[10px]">
                  <br />6 <br />
                  <span className="relative top-[50px]">2</span>
                </span>
              </p>
              <p className="font-[inter] font-[800] text-[28px]">
                <span className="relative bottom-[10px]">stars</span>
                <span className="relative top-[10px]">
                  <br /> 18 <br />
                  <span className="relative top-[52px]">6</span>
                </span>
              </p>
              <p className="font-[inter] font-[800] text-[28px]">
                <span className="relative bottom-[10px]">
                  last time onlining
                </span>
                <br />
                <span className="relative top-[10px]">
                  21:53 <br />
                  <span className="relative top-[50px]">22:10</span>
                </span>
              </p>
            </div>
            <img
              src="/img/image4.png"
              alt="img"
              className="anim-image w-[300px] h-[500px] relative left-[50px] bottom-[200px]"
            />
            <div className="anim-notice flex flex-wrap relative bottom-[220px] ml-[150px] gap-[60px]">
              <p className="font-[inter] font-[800] text-[38px] text-[#C9260B]">
                notice :
              </p>
              <p className="font-[inter] font-[400] text-[35px] relative bottom-[20px]">
                if you add a friend after 5 minuts <br /> your friend will add
                to website
              </p>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};
