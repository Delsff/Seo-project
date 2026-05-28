import { useEffect } from "react";
import { useStoreWindow } from "../Store/store";
export const OpenWindowButton = () => {
  const { openWindow } = useStoreWindow();
  return (
    <div>
      <button
        className="w-[127px] h-[60px] rounded-xl bg-[#E79F4A] font-[Inter] font-[500] text-[Medium] text-[20px] cursor-pointer hover:bg-[#bd803a]"
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
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModel]);

  if (!isModel) return null;
  return (
    <>
      <style>
        {`@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease;
}`}
      </style>
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 animate-fadeIn">
        <div className="w-[500px] h-[500px] bg-[#deb241] rounded-2xl shadow-2xl p-5 relative">
          <button
            onClick={closeWindow}
            className="absolute top-3 right-3 text-[red] text-[18px] cursor-pointer hover:text-[#a70202]"
          >
            ✕
          </button>
          <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
        </div>
      </div>
    </>
  );
};
