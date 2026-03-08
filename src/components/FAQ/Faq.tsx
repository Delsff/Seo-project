export const Faq = () => {
  return (
    <body className="bg-[#E4C3A4]">
      <header>
        <div className="flex flex-wrap m-auto max-w-[700px] justify-between">
          <img src="/img/Frame.png" alt="img" className="w-[300px] h-[150px]" />
          <img
            src="/img/FAQ.png"
            alt="img"
            className="w-[150px] h-[73px] mt-[40px]"
          />
        </div>
      </header>
      <main>
        <div className="flex flex-wrap max-w-[1420px] justify-between mt-[100px]">
          <div className="flex flex-col gap-[20px] text-left">
            <p className="max-w-[589px] h-[103px] bg-[] font-[Inter] font-[700] font-bold text-[#D43D27] text-[35px]">
              FAQ / Frequently Asked Questions
            </p>
            <div
              className="max-w-[540px] h-[90px] rounded-2xl p-4 w-full mb-[10px]"
              style={{
                backgroundImage: "linear-gradient(to right, #C9260B, #E8765A)",
              }}
            >
              <p className="font-[Rubik] font-[800] font-extrabold text-[26px] text-[#454545] flex flex-wrap gap-[20px]">
                <span className="text-[#E79F4A]">1.</span> is it safe to sign up
                our account? <img src="public\img\ArrowDown2.png" alt="img" />
              </p>
            </div>
            <div
              className="max-w-[540px] h-[90px] rounded-2xl p-4 w-full mb-[10px]"
              style={{
                backgroundImage: "linear-gradient(to right, #C9260B, #E8765A)",
              }}
            >
              <p className="font-[Rubik] font-[800] font-extrabold text-[26px] text-[#454545] flex flex-wrap gap-[20px]">
                <span className="text-[#E79F4A]">2.</span>the website manage our
                account? <img src="public\img\ArrowDown2.png" alt="img" />
              </p>
            </div>
            <div
              className="max-w-[640px] h-[90px] rounded-2xl p-4 w-full"
              style={{
                backgroundImage: "linear-gradient(to right, #C9260B, #E8765A)",
              }}
            >
              <p className="font-[Rubik] font-[800] font-extrabold text-[26px] text-[#454545] flex flex-wrap gap-[20px]">
                <span className="text-[#E79F4A]">3.</span>acess to the account
                or just couple of datas?
                <img src="/img/ArrowDown2.png" alt="img" />
              </p>
            </div>
          </div>
          <div>
            <img src="/img/image5.png" alt="img" />
          </div>
        </div>
      </main>
    </body>
  );
};
