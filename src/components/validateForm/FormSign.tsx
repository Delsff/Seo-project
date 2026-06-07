import { useForm, type SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  name: string;
  password: string;
};

export const schem = yup
  .object({
    name: yup
      .string()
      .required("This field is required")
      .min(4, "the name must be of at least 4 letters"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "the password must be of at least 8 letters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must contain uppercase, lowercase, number and special character",
          excludeEmptyString: true,
        },
      ),
  })
  .required();

export default function FormSign() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schem) });

  const onSubmit: SubmitHandler<FormData> = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-[400px] mx-auto px-2"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex justify-center text-[#454181]">
            Sign Up
          </h1>
          <div className="w-full">
            <div className="flex flex-col gap-[5px] pt-[20px]">
              <h5 className="text-left text-[#c94519] text-[16px] font-[600]">
                User Name:
              </h5>
              <input
                id="name"
                {...register("name")}
                placeholder="Enter your User Name"
                className="w-full h-[50px] border border-black rounded-full pl-[25px] bg-[orange] placeholder:text-[#5c5656] outline-none focus:border-2"
              />
              <p className="text-[red] text-center min-h-[20px] text-[13px] mt-1">
                {errors.name?.message}
              </p>
            </div>
            <div className="flex flex-col gap-[5px] pt-[5px]">
              <h5 className="text-left text-[#c94519] text-[16px] font-[600]">
                Password:
              </h5>
              <input
                id="password"
                type="password"
                {...register("password")}
                placeholder="Enter your password"
                className="w-full h-[50px] border border-black rounded-full pl-[25px] bg-[orange] placeholder:text-[#5c5656] outline-none focus:border-2"
              />
              <p className="text-[red] text-center min-h-[20px] text-[13px] mt-1 px-2 leading-tight">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-[15px] w-full text-[15px]">
              <label className="flex items-center gap-[10px] cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-[18px] h-[18px] cursor-pointer"
                />
                Remember me
              </label>
              <a
                href="#"
                className="text-[#454181] hover:underline whitespace-nowrap"
              >
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="font-[Poppins] cursor-pointer text-black text-[18px] font-[500] w-[200px] h-[45px]
                rounded-full bg-[#de8818] hover:bg-[#a65f0d] mt-[25px] transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
