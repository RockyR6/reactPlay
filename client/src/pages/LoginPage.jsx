import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    if (currState === "Sign up" && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }
    login(currState === "Sign up" ? "signup" : "login", { fullName, email, password, bio });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8">
        <form onSubmit={onSubmitHandler} className="space-y-5">
          <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white mb-6">
            {currState}
            {isDataSubmitted && (
              <img
                onClick={() => setIsDataSubmitted(false)}
                src="/path/to/back-icon.svg"
                alt="Go back"
                className="w-5 cursor-pointer inline-block ml-2"
              />
            )}
          </h2>
          {currState === "Sign up" && !isDataSubmitted && (
            <input
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-transparent dark:text-white"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Enter your full name"
            />
          )}
          {/* Email */}
          {!isDataSubmitted && (
            <>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-transparent dark:text-white"
              />
              {/* Password */}
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none bg-transparent dark:text-white"
              />
            </>
          )}
          {currState === "Sign up" && isDataSubmitted && (
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              className="w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-transparent dark:text-white"
              placeholder="Provide a short bio..."
              required
            ></textarea>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-200 cursor-pointer"
          >
            {currState === "Sign up" ? "Create Account" : "Login Now"}
          </button>
        </form>

        {/* Extra text */}
        <div className="flex flex-col gap-2">
          {currState === "Sign up" ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <span
                className="font-medium text-violet-500 cursor-pointer"
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Create an account{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className="font-medium text-violet-500 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;