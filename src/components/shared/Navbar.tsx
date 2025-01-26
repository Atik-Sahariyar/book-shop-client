import  {  useState } from "react";
import { FaSearch, FaRegUser } from "react-icons/fa";
import {  Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";

import { useForm } from "react-hook-form";
import useBaseRoute from "../hooks/useBaseRoute";

const Navbar = () => {
  const { register, handleSubmit , reset} = useForm();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const email = localStorage.getItem("email")


  const handleSearchFunc = async (data) => {
      navigate(`/product?searchTerm=${data?.searchTerm}`);
      reset()
  }

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 w-full">
      <div className=" container mx-auto flex justify-between items-center h-16 px-4">
        {/* Logo */}
        <div className=" flex gap-2 items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo-image h-10 w-10  rounded-tl-md rounded-br-md" />
          </Link>
          <p className=" hidden md:block text-xl font-semibold">Pathshala</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 font-semibold hover:text-black">
            Home
          </Link>
          <div className="relative group">
            <button className="text-gray-700 font-semibold hover:text-black">
              Category
            </button>
            {/* Dropdown */}
        <div className="absolute left-0 hidden group-hover:block bg-white shadow-md p-5 w-64 md:w-96">
          <div className="grid grid-cols-2 gap-6">
     
                </div>
              </div>
            </div>

          <Link to="/product" className="text-gray-700 font-semibold hover:text-black">
            Shop
          </Link>
    
          <Link to="/about" className="text-gray-700 font-semibold hover:text-black">
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <form onSubmit={handleSubmit(handleSearchFunc)} className="hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search entire store here..."
              {...register("searchTerm")}
              className="border-b border-gray-400 focus:outline-none focus:border-black px-2 py-1 text-sm"
            />
            <button  type="submit" className="font-semibold text-lg">
              <FaSearch />
            </button>
          </form>

          {/* User Dropdown */}
          {/* <div className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="p-2 relative flex items-center justify-center">
             { 
              !email ? 
              <span className="relative inline-flex text-lg rounded-full h-4 w-4 bg-red">
              <span className="animate-ping absolute inline-flex h-full w-full bg-red rounded-full"></span>
              <FaRegUser className="text-midnight text-2xl" />
            </span>
            : 
            <img src={currentUser?.profilePicture} alt={currentUser?.name} className="w-8 h-8 rounded-full object-cover" />
          }
            </button>
            {isDropdownOpen && (
              !currentUser ?
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-10">
              <Link
                to="/login"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Signup
              </Link>
            </div>
            :
            <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg w-48 z-10">
            <h2
          
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              { currentUser?.name}
            </h2>
            <Link
              to={baseRoute}
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Dashboard
            </Link>
          </div>
            )}
          </div> */}

   
  
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-700 font-semibold hover:text-black">
              Home
            </Link>
            <Link to="/product" className="text-gray-700 font-semibold hover:text-black">
              Shop
            </Link>
            <Link to="#" className="text-gray-700 font-semibold hover:text-black">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 font-semibold hover:text-black">
              About
            </Link>
          </div>
        </div>
      )}


    </nav>
  );
};

export default Navbar;
