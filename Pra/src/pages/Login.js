import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";
import axios from "axios";

// function Login() {
//   const { setAuth } = useContext(AuthContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//   }

//   return (
//     <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
//       <div class="sm:mx-auto sm:w-full sm:max-w-sm">
//         <img class="mx-auto h-20 w-auto" src="logo.png" alt="Your Company" />
//         <h2 class="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//           Sign in to your account
//         </h2>
//       </div>

//       <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//         <form class="space-y-6" onSubmit={handleSubmit}>
//           <div>
//             <label
//               for="email"
//               class="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Email address
//             </label>
//             <div class="mt-2">
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <div class="flex items-center justify-between">
//               <label
//                 for="password"
//                 class="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Password
//               </label>
//               <div class="text-sm">
//                 <Link
//                   to="/forgetPassword"
//                   class="font-semibold text-indigo-600 hover:text-indigo-500"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>
//             <div class="mt-2">
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Log in
//             </button>
//           </div>
//         </form>

//         <p class="mt-10 text-center text-sm text-gray-500">
//           Not a member?
//           <span> </span>
//           <Link
//             to="/signup"
//             class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//           >
//             sign up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

function Login() {
  const { setAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const user = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(
        "http://127.0.0.1:9000/api/v1/users/login",
        user
      );
      setIsLoading(false);
      setAuth({ user: res.data.user, token: res.data.token });
      setType(res.data.status);
      setMessage("Login successful");
      navigate("/");
      setEmail("");
      setPassword("");
    } catch (err) {
      setType("error");
      setMessage(err.response.data.message);
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="logo.png"
          alt="Your Company"
        />
        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <Link
                  to="/forgetPassword"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>
          </div>
        </form>

        {message && (
          <p
            className={`mt-5 text-center text-sm ${
              type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <span> </span>
          <Link
            to="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
