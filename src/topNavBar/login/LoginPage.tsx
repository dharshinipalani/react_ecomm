import { Controller, useForm } from "react-hook-form";
import {
  LoginPageContainer,
  LoginFormContainer,
} from "/home/dharshu/learning/react/react_ecomm/src/styles/LoginStyles.tsx";
import {
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  Button,
} from "@mui/material";

interface FormInputs {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  age: number;
  mobile: number;
  password: string;
  confirmPassword: string;
}

function LoginPage() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInputs>(
    {mode: "onChange",}
  );

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <LoginPageContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LoginFormContainer>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            rules={{ required: "First Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                variant="outlined"
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
              />
            )}
          />
          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            rules={{ required: "Last Name is required" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Last Name"
                variant="outlined"
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Enter a valid email address",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            )}
          />
          <FormControl component="fieldset" error={!!errors.gender}>
            <FormLabel component="legend">Gender</FormLabel>
            <Controller
              name="gender"
              control={control}
              defaultValue=""
              rules={{ required: "Gender is required" }}
              render={({ field }) => (
                <RadioGroup {...field} row>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              )}
            />
            {errors.gender && (
              <span style={{ color: "red" }}>{errors.gender.message}</span>
            )}
          </FormControl>
          <Controller
            name="age"
            control={control}
            defaultValue={0}
            rules={{
              required: "Age is required",
              min: {
                value: 15,
                message: "You must be at least 15 years old",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Age"
                variant="outlined"
                type="number"
                error={!!errors.age}
                helperText={errors.age ? errors.age.message : ""}
              />
            )}
          />
          <Controller
            name="mobile"
            control={control}
            rules={{
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit mobile number",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Mobile"
                variant="outlined"
                type="tel"
                error={!!errors.mobile}
                helperText={errors.mobile ? errors.mobile.message : ""}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                variant="outlined"
                type="password"
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: "Please confirm your password",
              validate: (value) => {
                const password = getValues("password");
                return value === password || "Passwords do not match";
              },
            }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Confirm Password"
                variant="outlined"
                type="password"
                error={!!errors.confirmPassword}
                helperText={
                  errors.confirmPassword ? errors.confirmPassword.message : ""
                }
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </LoginFormContainer>
      </form>
    </LoginPageContainer>
  );
}

export default LoginPage;
