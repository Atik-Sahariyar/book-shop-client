import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [ isShowPass, setIsShowPass] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const navigate  = useNavigate();
  const [ login ] = useLoginMutation();

 // handle login user
 const handleLoginWithEmailPass = async(data: { email: string, password: string }) =>{
   try{
     const toastId  = toast.loading('Logging in');
     const res = await login(data);
     if(res?.data?.success){
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        reset();
        navigate("/");
     } else if (res?.error){
        toast.error(res?.error?.data?.message , { id: toastId, duration: 2000 });
     }
   } catch(err){
    toast.error(err?.message,  { id: toastId, duration: 2000 })
   }
 }


  return (
 
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>

          {/* Login Form */}
          <form onSubmit={handleSubmit(handleLoginWithEmailPass)}>
            {/* Email Field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true})}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className="mb-4 ">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <div className=" relative">
              <input
                type={isShowPass ? "text" : "password"}
                {...register("password", { required:true})}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
               
               <button 
               onClick={() => setIsShowPass(!isShowPass)}
               className=" absolute right-5 top-3 z-20 text-xl opacity-60 hover:opacity-80" >
                 {
                  isShowPass ?   <FaEyeSlash /> : <FaEye />
                 }
               </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-blue-500 text-center inline-block text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <p className="text-sm text-gray-500 mx-4">OR</p>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Register Link */}
          <p className="text-sm text-gray-600 mt-4 text-center">
           {" Don't have an account? "}
            <Link
              to="/register"
              className="text-blue-500 hover:underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
 
  );
};

export default Login;
