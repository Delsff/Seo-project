import { Link } from "react-router-dom";

export const ThreePage = () => {
  return (
    <>
      <body className="bg-[#E4C3A4]">
        <header>
          <nav className="flex items-center w-[1300px] h-[157px] gap-[80px] justify-center relative right-[80px]">
            <img src="/img/Frame.png" alt="logo" />
            <ul className="flex flex-wrap gap-[80px]">
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer ">
                <Link to={"/ThreePage"} className="visited:text-[#5a5858]">
                  News
                </Link>
              </li>
              <li className="font-[Inter] font-[500] text-[Medium] text-[26px] hover:text-[#4d4a4a] cursor-pointer">
                <Link to={"/SecondPage"}>clan wars analyse</Link>
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
        <main>
          <div className="flex flex-wrap mt-[100px] gap-[100px] justify-center">
            <div className="w-[436px] h-[650px] border-solid bg-[#EECA50] border-none rounded-md items-center text-left">
              <img
                src="
                /img/Frame256.png"
                alt="img"
                className="m-auto mt-[20px]"
              />
              <p className="font-[Inter] font-[800] text-[#454181] text-[28px] pl-[60px] mt-[10px]">
                town hall 15 is here
              </p>
              <br />
              <p className="text-[#6661A8] font-[Inter] font-[600] pl-[60px] text-[18px]">
                you can download this update now <br />
                from google play and enjoy all new <br /> feathers
              </p>
              <p className="text-[#BB2E25] font-[Inter] font-[700] pl-[60px] mt-[10px] text-[20px]">
                author : Ali
              </p>
              <button className="w-[147px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[Medium] text-[20px] cursor-pointer hover:bg-[#bd803a] ml-[45px] mt-[15px]">
                Learn More
              </button>
            </div>
            <div className="w-[436px] h-[650px] border-solid bg-[#EECA50] border-none rounded-md items-center text-left">
              <img
                src="
                /img/image6.png"
                alt="img"
                className="m-auto mt-[20px]"
              />
              <p className="font-[Inter] font-[800] text-[#454181] text-[28px] pl-[60px] mt-[10px]">
                What is clan capital?
              </p>
              <br />
              <p className="text-[#6661A8] font-[Inter] font-[600] pl-[60px] text-[18px]">
                if you have some problems on clan <br /> capital this article
                can help you!
              </p>
              <p className="text-[#BB2E25] font-[Inter] font-[700] pl-[60px] mt-[20px] text-[20px]">
                author : unknow user
              </p>
              <button className="w-[147px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[Medium] text-[20px] cursor-pointer hover:bg-[#bd803a] ml-[45px] mt-[35px]">
                Learn More
              </button>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};
