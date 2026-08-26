import * as yup from "yup";

export type FormData = {
  name: string;
  password: string;
};

export const schem = yup
  .object({
    name: yup
      .string()
      .required("This field is required")
      .min(4, "The name must be at least 4 letters"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "The password must be at least 8 letters")
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
