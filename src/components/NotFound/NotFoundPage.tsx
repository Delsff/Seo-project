import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <body className="bg-[black] flex justify-center m-auto flex-col mt-[200px]">
      <h1 className="text-[50px] text-[white]">404</h1>
      <br />
      <p className="text-[40px] text-[white]">not found</p>
      <p>Return to home page</p> <br />
      <Link to={"/"} className="text-[white]">
        Home page
      </Link>
    </body>
  );
};
