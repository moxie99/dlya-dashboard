import { Box, Typography, useTheme } from "@mui/material";
import Header from "components/Header";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import logo from "../../assets/DLYA.png";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phone, setPhone] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const onSubmit = async () => {
    const url = "https://dlyabackend.uc.r.appspot.com/user/login-users";
    const data = { username: phone, password: password };

    setIsLoading(true);
    axios
      .post(url, data)
      .then((response) => {
        const token =
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiYmxvY2tlZCI6eyJwb3N0IjpbXSwic3RhdHVzIjpbXSwidXNlciI6W119LCJfaWQiOiI2NDVmOWI4MDcwMzgwNGJlZmM3MjA4NTUiLCJ1c2VybmFtZSI6IkBCYXIyMDIzIiwiZmlyc3RfbmFtZSI6IkRhdmlkIiwibGFzdF9uYW1lIjoiQmFycnkiLCJmdWxsbmFtZSI6IkJhcnJ5IERhdmlkIiwiZW1haWwiOiJCYXIyMDIzQGdtYWlsLmNvbSIsInBob25lX251bWJlciI6IisxNjc4OTA5ODc2NSIsImFnZSI6IkREL01NL1lZIiwicm9sZSI6InVzZXIiLCJiaW8iOiJIaSwgSSdtIHVzaW5nIERMWUEgYXBwIiwicGFzc3dvcmQiOiIkMmIkMTAkdXRxY0hlMEZTUVY2d2NGM1d2clE2dW1nZHNDUGxsTk54S0IwWElQbGdBYldocWRvd2YzOVciLCJpZGUiOiJlN2ZhZjQ5Ny1hOTE2LTQwNDYtOGEzZS0wYWRmZWQ2YjhhMWMiLCJub3RpZmljYXRpb25zX3JlYWQiOnRydWUsIm5vdGlmaWNhdGlvbnMiOltdLCJjcmVhdGVkQXQiOiIyMDIzLTA1LTEzVDE0OjE1OjI4Ljg2MFoiLCJ2ZXJpZmllZCI6dHJ1ZSwiQ29udGFjdElzc3VlIjpmYWxzZSwiZW5hYmxlX2VtYWlsIjp0cnVlLCJlbmFibGVTbXMiOiJ0cnVlIiwiZW1haWxfaXNWZXJpZmllZCI6ZmFsc2UsIm51bWJlcl9pc1ZlcmlmaWVkIjpmYWxzZSwiYWRkcmVzcyI6Ik5vIGFkZHJlc3MgeWV0Iiwic3RhdGUiOiJObyBzdGF0ZSIsImNpdHkiOiJObyBjaXR5IiwiemlwQ29kZSI6IjAwMDAiLCJpbWFnZSI6bnVsbCwiYWRkZWRCeUFkbWluIjpmYWxzZSwiY291cnNlcyI6W10sImV2ZW50UmVnaXN0ZXJlZCI6W10sIl9fdiI6MX0sImlhdCI6MTY4NDk3Njc3MywiZXhwIjoxODExMTIwNzczfQ.yHblowmABk3CI9Un4_qZ64gU9TN17ssN3pY0swrhgsE";
        localStorage.setItem("access_token", token);
        toast.success(response.data.message, {
          position: "top-center",
          style: {
            width: "320px",
            height: "100px",
            backgroundColor: "#fff",
            color: "#61181E",
            fontSize: 18,
            fontWeight: "bold",
          },
          icon: "👏",
          duration: 3000,
          iconTheme: {
            primary: "#000",
            secondary: "#61181E",
          },
        });
        navigate("/dashboard");
      })
      .catch((error) => {
        setisError(error);
        toast.error(error.response.data.message, {
          position: "top-center",
          style: {
            width: "600",
            height: "100px",
            backgroundColor: "#fff",
            color: "#61181E",
            fontSize: 18,
            fontWeight: "bold",
          },
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const theme = useTheme();

  return (
    <Box
      m="1.5rem 2.5rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        sx={{ backgroundColor: theme.palette.primary[500] }}
        borderRadius={"20px"}
        padding={"40px 50px"}
      >
        {" "}
        <Typography
          fontWeight="bold"
          fontSize="2rem"
          textAlign={"center"}
          sx={{ color: theme.palette.secondary[800] }}
          marginBottom={"20px"}
        >
          Welcome
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          // alignItems="center"
          gap={"100px"}
        >
          <Header
            title="LOG IN"
            subtitle="Provide your email and password to login to dashboard"
          />
          <Box
            component="img"
            alt="profile"
            src={logo}
            width="60px"
            height="60px"
            borderRadius="50%"
            sx={{ objectFit: "cover" }}
            backgroundColor="lightgrey"
            padding={"10px"}
          />
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box marginTop={"50px"}>
            <label
              style={{ display: "block", marginBottom: "10px" }}
              htmlFor="phone"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              style={{
                width: "50rem",
                height: "50px",
                borderRadius: "5rem",
                paddingLeft: "20px",
                outline: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              {...register("phone", { required: true })}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <span>This field is required</span>}
          </Box>
          <Box marginTop={"50px"}>
            <label
              style={{ display: "block", marginBottom: "10px" }}
              htmlFor="password"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              style={{
                width: "50rem",
                height: "50px",
                borderRadius: "3rem",
                paddingLeft: "10px",
                outline: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              {...register("password", { required: true })}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span>This field is required</span>}
          </Box>
          <Box display="flex" alignItems="center" justifyContent={"center"}>
            <button
              type="submit"
              disabled={isLoading}
              style={{
                display: "block",
                marginTop: "40px",
                width: "30rem",
                height: "50px",
                borderRadius: "5rem",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            {isError && (
              <span style={{ color: "red" }}>
                Error logging in. Please try again.
              </span>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
