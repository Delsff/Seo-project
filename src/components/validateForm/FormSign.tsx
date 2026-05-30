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
      .min(4, "the name must be of at least 2 letters"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "the password must be of at least 2 letters")
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
      <form onSubmit={handleSubmit(onSubmit)} className="w-[450px]">
        <div>
          <h1 className="text-3xl font-bold flex justify-center">Sign Up</h1>
          <div>
            <div className="flex flex-col gap-[10px] pt-[30px]">
              <h5 className="text-left text-[#c94519] text-[16px]">
                User Name:
              </h5>
              <input
                id="name"
                {...register("name")}
                placeholder="Enter your User Name"
                className="w-[350px] h-[50px] border-1 border-[black] rounded-full pl-[30px] m-auto bg-[orange]"
              />
              <p className="text-[red] flex justify-center h-[20px] text-[14px]">
                {errors.name?.message}
              </p>
            </div>
            <div className="flex flex-col gap-[10px] pt-[10px]">
              <h5 className="text-left text-[#c94519] text-[16px]">
                Password:
              </h5>
              <input
                id="password"
                {...register("password")}
                placeholder="Enter your password"
                className="w-[350px] h-[50px] border-1 border-[black] rounded-full pl-[30px] m-auto bg-[orange]"
              />
              <p className="text-[red] flex justify-center h-[20px] text-[14px]">
                {errors.password?.message}
              </p>
            </div>
            <div className="flex justify-between mt-[30px] w-[450px]">
              <label className="flex items-center gap-[15px]">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] cursor-pointer"
                />
                Remember me
              </label>
              <a href="#" className="float-right mr-[20px]">
                Forgot password?
              </a>
            </div>
            <div className="flex justify-center">
              <button
                className="font-[Poppins] cursor-pointer text-[black] text-[19px] font-[500] w-[210px] h-[45px]
              rounded-full bg-[#de8818] hover:bg-[#a65f0d] mt-[30px]"
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
