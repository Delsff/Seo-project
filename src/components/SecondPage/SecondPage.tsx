import { Link } from "react-router-dom";
import { ModalWindow, OpenWindowButton } from "../Window/openWindow";

export const SecondPage = () => {
  return (
    <>
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .anim-nav {
          animation: fadeInDown 0.6s ease both;
        }
        .anim-card-1 {
          animation: fadeInUp 0.6s ease 0.1s both;
        }
        .anim-card-2 {
          animation: fadeInUp 0.6s ease 0.3s both;
        }
      `}</style>
      <header className="bg-[#E4C3A4] w-full min-h-screen">
        <nav className="anim-nav flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[80px] py-6 md:h-[157px] px-8">
          <img src="/img/Frame.png" alt="logo" />
          <ul className="flex flex-col md:flex-row items-center gap-3 md:gap-[80px]">
            <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="font-[Inter] font-[500] text-[22px] md:text-[26px] hover:text-[#4d4a4a] cursor-pointer whitespace-nowrap">
              <Link to={"/SecondPage"} className="visited:text-[#5a5858]">
                News
              </Link>
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
        <ModalWindow />
        <div className="flex flex-col md:flex-row flex-wrap gap-[40px] md:gap-[100px] justify-center items-center mt-[50px] px-4 pb-10">
          <div className="anim-card-1 w-full max-w-[436px] min-h-[630px] bg-[#EECA50] rounded-md text-left">
            <img
              src="/img/Frame256.png"
              alt="img"
              className="m-auto mt-[20px]"
            />
            <p className="font-[Inter] font-[800] text-[#454181] text-[24px] md:text-[28px] pl-[40px] md:pl-[60px] mt-[10px]">
              town hall 15 is here
            </p>
            <br />
            <p className="text-[#6661A8] font-[Inter] font-[600] pl-[40px] md:pl-[60px] text-[16px] md:text-[18px]">
              you can download this update now <br />
              from google play and enjoy all new <br /> feathers
            </p>
            <p className="text-[#BB2E25] font-[Inter] font-[700] pl-[40px] md:pl-[60px] mt-[10px] text-[18px] md:text-[20px]">
              author : Ali
            </p>
            <button className="w-[147px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[20px] cursor-pointer hover:bg-[#bd803a] ml-[40px] md:ml-[45px] mt-[15px]">
              Learn More
            </button>
          </div>
          <div className="anim-card-2 w-full max-w-[436px] min-h-[630px] bg-[#EECA50] rounded-md text-left">
            <img src="/img/image6.png" alt="img" className="m-auto mt-[20px]" />
            <p className="font-[Inter] font-[800] text-[#454181] text-[24px] md:text-[28px] pl-[40px] md:pl-[60px] mt-[10px]">
              What is clan capital?
            </p>
            <br />
            <p className="text-[#6661A8] font-[Inter] font-[600] pl-[40px] md:pl-[60px] text-[16px] md:text-[18px]">
              if you have some problems on clan <br /> capital this article can
              help you!
            </p>
            <p className="text-[#BB2E25] font-[Inter] font-[700] pl-[40px] md:pl-[60px] mt-[20px] text-[18px] md:text-[20px]">
              author : unknow user
            </p>
            <button className="w-[147px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[20px] cursor-pointer hover:bg-[#bd803a] ml-[40px] md:ml-[45px] mt-[35px]">
              Learn More
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
