import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [currentState, setCurrentState] = useState("Login");
  const [showPassword, setShowPassword] = useState(false);
  const [token, setToken] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState == "Sign Up") {
        const response = await axios.post(backendUrl + "/api/agent/register", {
          name,
          email,
          phone,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);
          toast.success("Agent Created");
          localStorage.setItem("token", response.data.token);
          setName("");
          setEmail("");
          setPhone("");
          setPassword("");
        } else {
          toast.error(response.data.message);
          setName("");
          setEmail("");
          setPhone("");
          setPassword("");
        }
      } else {
        const response = await axios.post(backendUrl + "/api/agent/login", {
          email,
          password,
        });
        if (response.data.success) {
          setToken(response.data.token);

          toast.success(`Welcome ${response.data.name}`);

          localStorage.setItem("token", response.data.token);

          setEmail("");
          setPassword("");
        } else {
          toast.error(response.data.message);
          setPassword("");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

    return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="parata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="w-full px-3 py-2 border rounded-md border-gray-800 "
            placeholder="Name"
            required
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            type="tel"
            className="w-full px-3 py-2 border rounded-md border-gray-800"
            placeholder="Phone Number"
            required
          />
        </div>
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border rounded-md border-gray-800"
        placeholder="Email"
        required
      />

      <div className="relative">
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? "text" : "password"}
          className="w-full px-3 py-2 pr-40 border rounded-md border-gray-800"
          placeholder="Password"
          required
        />

        <button
          type="button"
          className="absolute inset-y-0 right-0  pr-3 flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-base-content/40" />
          ) : (
            <Eye className="h-5 w-5 text-base-content/40" />
          )}
        </button>
      </div>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="pl-1 cursor-pointer">Forgot Password</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="pr-1 cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="pr-1 cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white rounded-md cursor-pointer font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
