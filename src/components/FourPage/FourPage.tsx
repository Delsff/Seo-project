import { Link } from "react-router-dom";

export const FourPage = () => {
  return (
    <>
      <body className="bg-[#E4C3A4]">
        <header>
          <nav className="flex items-center w-[1300px] h-[157px] gap-[80px] justify-center relative right-[80px]">
            <img src="public\img\Frame.png" alt="logo" />
            <ul className="flex flex-wrap gap-[80px]">
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer ">
                <Link to={"/ThreePage"}>News</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/SecondPage"}>clan wars analyse</Link>
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
          <h1 className="font-[inter] font-[800] font-extrabold text-[50px] text-left ml-[220px] mt-[35px]">
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
            <p className="font-[inter] font-[800] text-[35px] text-[#C9260B] mr-[20px]">
              dark Phonix <br />
              <span className="relative top-[50px]">DarkMan</span>
            </p>
            <div className="flex flex-wrap relative bottom-[40px] gap-[100px]">
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
              src="
            public\img\image4.png"
              alt="img"
              className="w-[300px] h-[500px] relative left-[50px] bottom-[200px]"
            />
            <div className="flex flex-wrap relative bottom-[220px] ml-[150px] gap-[60px]">
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
