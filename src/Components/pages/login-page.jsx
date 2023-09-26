import { useNavigate } from "react-router-dom";
import auth from "../../utils/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const admin = {
    username: "admin",
    password: "admin",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    if (admin.username == username && admin.password == password) {
      const { token } = admin;
      auth.storeAuthCredential(token);
      return navigate("/profil");
    } else {
      alert("Username or Password is wrong ...");
      return navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://hips.hearstapps.com/hmg-prod/images/hoshinoya-tokyo-entrance-02-1550007340.jpg?crop=1xw:1xh;center,top&resize=980:*')] bg-cover">
      <div className="backdrop-blur-sm bg-white/20 p-6 rounded-xl shadow-xl w-[300px] text-sm sm:mx-3">
        <h1 className="text-3xl font-semibold mb-4 text-center font-roboto">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="username"
              placeholder="admin"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="passWord"
              name="password"
              className="mt-1 px-4 py-2 w-full border rounded-md focus:ring focus:ring-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#ad9372] text-white py-2 rounded-md hover:bg-[#b19242]"
          >
            Log In
          </button>
          <div className="my-4 text-center">
            <span>
              Not an admin?
              <a
                href="#"
                className="text-primary-blue font-semibold hover:text-[#b19242] hover:underline"
              >
                Sign Up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
