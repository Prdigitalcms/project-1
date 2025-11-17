
// src/pages/Login.jsx

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { loginUserApi } from "../features/actions/AuthAction";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data) => {
    try {
      const result = await dispatch(loginUserApi(data));

      if (result?.success) {
        console.log("logged in");
        reset();
        navigate("/user-dashboard"); // now happens AFTER state is updated
        console.log("Login form data:", data);
      } else {
        // optional: show invalid credentials message
        console.log("Login failed");
      }
    } catch (error) {
      console.log("Login error:", error);
      // here you can show a toast or error message
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="
        bg-white rounded-2xl shadow-xl overflow-hidden
        w-full max-w-md sm:max-w-lg md:max-w-xl
      ">
        <div className="w-full p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
            Sign In
          </h2>

          {/* (Optional) Social button — purely UI */}
          <button
            type="button"
            className="w-full bg-white border border-gray-300 text-black py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 mb-5"
          >
            <img
              src="https://app.getbeamer.com/pictures?id=78777-77-9Fu-_ve-_ve-_vXhFKyEyBykT77-9V1hJ77-9YVI077-977-977-9MQRd77-977-9AHHvv70.&v=4"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="mb-2">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Forgot link */}
            <p className="text-sm text-right text-gray-600 mb-4">
              <Link to="/forgot-password" className="hover:underline">
                Forgot password?
              </Link>
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          {isSubmitSuccessful && (
            <p className="mt-4 text-green-600 text-sm text-center">
              Submitted! Check your console for the collected data.
            </p>
          )}

          <p className="text-sm text-center mt-6 text-gray-700">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
