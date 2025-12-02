import { useState } from "react";
import { login } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { signInWithGoogle } from "../api/auth";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };
  //googl log in
  const handleGoogleLogin = async () => {
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
        backgroundImage: `url('/formBg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Smoke effect */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-cover opacity-30 animate-[smoke_60s_linear_infinite]"></div>
      </div>

      {/* Frosted Glass Card */}
      <div className="relative w-full max-w-sm bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.15)] z-10">
        {/* Glowing Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-300/40 via-blue-400/50 to-blue-300/40 blur-xl opacity-60 pointer-events-none"></div>

        {/* Icon Circle */}
        <div className="w-20 h-20 rounded-full mx-auto mb-8 bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-inner">
          <FaUser className="text-blue-700 text-3xl opacity-80" />
        </div>

        <h2 className="text-center text-2xl font-semibold text-white mb-6">
          Login
        </h2>

        {error && (
          <p className="text-red-400 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="relative mb-6">
            <FaUser className="absolute top-3 left-3 text-blue-700 opacity-75" />
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/30 placeholder-white/60 text-white border border-white/20 shadow-inner backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-6">
            <FaLock className="absolute top-3 left-3 text-blue-700 opacity-75" />
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/30 placeholder-white/60 text-white border border-white/20 shadow-inner backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-blue-600/80 hover:bg-blue-700/90 text-white rounded-xl font-semibold shadow-lg transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <button
          onClick={handleGoogleLogin}
          type="button"
          className="w-full mt-4 py-2 bg-white/40 backdrop-blur-lg border border-white/50 
             rounded-xl text-blue-900 font-semibold shadow hover:bg-white/60
             flex items-center justify-center gap-3"
        >
          <FcGoogle size={26} />
          Continue with Google
        </button>

        {/* Signup link */}
        <p className="text-center text-sm mt-5 text-white/80">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-blue-400 font-bold cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>

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
