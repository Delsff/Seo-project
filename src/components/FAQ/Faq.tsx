import { Link } from "react-router-dom";

export const Faq = () => {
  return (
    <div className="bg-[#E4C3A4] min-h-screen w-full">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .anim-header { animation: fadeInDown 0.6s ease-out forwards; }
        .anim-img { animation: fadeInScale 0.8s ease-out 0.4s both; }
        .anim-item { 
          opacity: 0; 
          animation: fadeInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.25s; }
        .delay-3 { animation-delay: 0.4s; }
        .delay-4 { animation-delay: 0.55s; }
      `}</style>
      <header className="anim-header px-4">
        <div className="flex flex-wrap m-auto max-w-[700px] justify-between">
          <img
            src="/img/Frame.png"
            alt="img"
            className="w-[200px] md:w-[300px] h-auto"
          />
          <img
            src="/img/FAQ.png"
            alt="img"
            className="w-[120px] md:w-[150px] h-auto mt-[20px] md:mt-[40px]"
          />
        </div>
        <div>
          <Link
            to={"/"}
            className="flex items-center justify-center text-[20px] md:text-[25px] text-[#454545] cursor-pointer w-[90px] md:w-[100px] h-[45px] md:h-[50px] bg-[#D43D27] font-[500] font-[Inter] rounded-full hover:bg-[#ac3421] ml-[20px] md:ml-[80px] mt-[30px] md:relative md:bottom-[80px]"
          >
            Home
          </Link>
        </div>
      </header>
      <main>
        <div className="flex flex-col md:flex-row max-w-[1420px] justify-between mt-[40px] md:mt-[100px] mx-auto px-4 gap-[40px] items-center md:items-start">
          <div className="flex flex-col gap-[20px] text-left w-full md:w-auto">
            <p className="anim-item delay-1 font-[Inter] font-[700] font-bold text-[#D43D27] text-[26px] md:text-[35px]">
              FAQ / Frequently Asked Questions
            </p>
            <div
              className="anim-item delay-2 rounded-2xl p-4 w-full md:max-w-[540px] mb-[10px]"
              style={{
                backgroundImage: "linear-gradient(to right, #C9260B, #E8765A)",
              }}
            >
              <p className="font-[Rubik] font-[800] font-extrabold text-[20px] md:text-[26px] text-[#454545] flex flex-wrap gap-[20px]">
                <span className="text-[#E79F4A]">1.</span> is it safe to sign up
                our account? <img src="/img/ArrowDown2.png" alt="img" />
              </p>
            </div>
            <div
              className="anim-item delay-3 rounded-2xl p-4 w-full md:max-w-[540px] mb-[10px]"
              style={{
                backgroundImage: "linear-gradient(to right, #C9260B, #E8765A)",
              }}
            >
              <p className="font-[Rubik] font-[800] font-extrabold text-[20px] md:text-[26px] text-[#454545] flex flex-wrap gap-[20px]">
                <span className="text-[#E79F4A]">2.</span>the website manage our
                account? <img src="/img/ArrowDown2.png" alt="img" />
              </p>
            </div>
            <div
              className="anim-item delay-4 rounded-2xl p-4 w-full md:max-w-[640px]"
              style={{
                backgroundImage: "linear-gradient(to right, #C9260B, #E8765A)",
              }}
            >
              <p className="font-[Rubik] font-[800] font-extrabold text-[20px] md:text-[26px] text-[#454545] flex flex-wrap gap-[20px]">
                <span className="text-[#E79F4A]">3.</span>acess to the account
                or just couple of datas?
                <img src="/img/ArrowDown2.png" alt="img" />
              </p>
            </div>
          </div>
          <div className="anim-img">
            <img
              src="/img/image5.png"
              alt="img"
              className="w-[280px] md:w-auto"
            />
          </div>
        </div>
      </main>
    </div>
  );
};
