import { useState } from "react";
import { signup } from "../api/auth";
import { useNavigate } from "react-router-dom";
import formBg from "/formBg.jpg"; // adjust the path to where your image is
import { signInWithGoogle } from "../api/auth";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  //google sign up 

  const handleGoogleSignup = async () => {
  try {
    await signInWithGoogle();
    navigate("/dashboard");
  } catch (err) {
    setError(err.message);
  }
};


  return (
    <div
      className="relative flex justify-center items-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${formBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Smoke effect */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-cover opacity-30 animate-[smoke_60s_linear_infinite]"></div>
      </div>

      {/* Glassmorphic form */}
      <form
        onSubmit={handleSignup}
        className="relative w-full max-w-sm bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg z-10"
      >
        <h2 className="text-2xl font-bold mb-6 text-white">Create an Account</h2>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <label className="block mb-2 text-sm text-white">Email</label>
        <input
          type="email"
          required
          className="w-full px-3 py-2 mb-4 rounded bg-white/30 placeholder-white/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="block mb-2 text-sm text-white">Password</label>
        <input
          type="password"
          required
          className="w-full px-3 py-2 mb-6 rounded bg-white/30 placeholder-white/60 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600/80 hover:bg-blue-700/90 text-white py-2 rounded-lg transition"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-sm mt-4 text-white/80">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
  <button
          onClick={handleGoogleSignup}
          type="button"
          className="w-full mt-4 py-2 bg-white/40 backdrop-blur-lg border border-white/50 
             rounded-xl text-blue-900 font-semibold shadow hover:bg-white/60
             flex items-center justify-center gap-3"
        >
          <FcGoogle size={26} />
           Sign up with Google
        </button>
      </form>
      {/* Smoke animation keyframes */}
      <style>
        {`
          @keyframes smoke {
            0% { transform: translateY(0) translateX(0); }
            50% { transform: translateY(-20px) translateX(10px); }
            100% { transform: translateY(0) translateX(0); }
          }
        `}
      </style>
    </div>
  );
}
