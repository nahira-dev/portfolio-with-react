import logo from "../assets/image/nahira.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import auth from "../utils/auth";

function PrivateRoute() {
  const navigate = useNavigate();
  const logout = () => {
    auth.logout();
    navigate("/");
  };
  // true jika sudah login
  if (auth.isAuthenticated()) {
    return (
      <>
        <div>
          <header className="flex justify-between items-center bg-primary-blue p-4 text-secondary-gray h-[67.33px] min-w-[270px]">
            <div className="flex flex-col sm:flex-row justify-between sm:w-11/12 lg:w-full">
              <img className="w-32 ml-4" src={logo} alt="NAHIRA" />
              <div className="flex items-center">
                <p className="sm:text-xl ml-8 mr-2">admin</p>
                <button
                  onClick={logout}
                  title="keluar"
                  className="hover:text-hover-blue lg:mx-2"
                >
                  <i className="ri-logout-circle-r-line text-xl"></i>
                </button>
              </div>
            </div>
            <div className="lg:hidden">
              <button id="open-sidebar" className="text-3xl">
                <i className="ri-menu-line"></i>
              </button>
            </div>
          </header>
          <div
            id="container"
            className="flex h-[calc(100vh-67.33px)] min-w-[270px]"
          >
            <div
              id="sidebar-overlay"
              className="hidden lg:hidden bg-black h-screen w-screen absolute top-0 left-0 opacity-90"
            ></div>
            <aside
              id="sidebar"
              className="p-4 hidden lg:block text-secondary-gray font-medium lg:w-[250px] h-screen lg:h-full absolute lg:static top-0 left-0 bg-white shrink-0 overflow-auto w-[300px]"
            >
              <h4 className="mb-3 font-semibold">Menu</h4>
              <div className="space-y-2">
                <details open className="space-y-2">
                  <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2">
                    <i className="ri-building-4-line mr-2"></i>MyProfil
                    <i className="ri-arrow-drop-down-line"></i>
                  </summary>
                  <div className="pl-6">
                    <Link to="/profil" className="hover:text-secondary-blue">
                      <i className="ri-user-line mr-2"></i>MyProfil
                    </Link>
                  </div>
                </details>
                <details open className="space-y-2">
                  <summary className="hover:text-secondary-blue cursor-pointer list-none space-y-2">
                    <i className="ri-settings-5-fill mr-2"></i>Pengaturan
                    <i className="ri-arrow-drop-down-line"></i>
                  </summary>
                  <div className="pl-6">
                    <Link to="/gallery" className="hover:text-secondary-blue">
                      <i className="ri-image-add-line mr-2"></i>
                      Gallery
                    </Link>
                  </div>
                  <div className="pl-6">
                    <Link to="/myskill" className="hover:text-secondary-blue">
                      <i className="ri-award-line mr-2"></i>
                      MySkill
                    </Link>
                  </div>
                  <div className="pl-6">
                    <Link to="/message" className="hover:text-secondary-blue">
                      <i className="ri-chat-3-line mr-2"></i>Message
                    </Link>
                  </div>
                </details>
              </div>
            </aside>
            <button
              id="close-sidebar"
              className="absolute top-[-3px] left-[260px] text-6xl hidden"
            >
              <i className="ri-arrow-left-circle-fill bg-white rounded-full"></i>
            </button>
            <Outlet />
          </div>
        </div>
      </>
    );
  }
}

export default PrivateRoute;
