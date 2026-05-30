import { useEffect } from "react";
import { useStoreWindow } from "../Store/store";
import FormSign from "../validateForm/FormSign";

export const OpenWindowButton = () => {
  const { openWindow } = useStoreWindow();
  return (
    <div>
      <button
        className="w-[127px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[20px] cursor-pointer hover:bg-[#bd803a]"
        onClick={openWindow}
      >
        sign up
      </button>
    </div>
  );
};
export const ModalWindow = () => {
  const { isModel, closeWindow } = useStoreWindow();

  useEffect(() => {
    if (isModel) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModel]);

  if (!isModel) return null;
  return (
    <>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4 animate-fadeIn">
        <div className="w-full max-w-[500px] min-h-[500px] bg-[#deb241] rounded-2xl shadow-2xl p-5 relative">
          <button
            onClick={closeWindow}
            className="absolute top-3 right-3 text-[red] text-[18px] cursor-pointer hover:text-[#a70202]"
          >
            ✕
          </button>
          <FormSign />
        </div>
      </div>
    </>
  );
};
