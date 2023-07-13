import React from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate();
  function handleSubmit(){
navigate("/")
  }
  return (
    <section className="login">
      <motion.button initial={{ y: "-100vh" }} animate={{ y: 0 }} onClick={handleSubmit}>
        Login with Google
        <FcGoogle />
      </motion.button>
    </section>
  );
};

export default Login;
