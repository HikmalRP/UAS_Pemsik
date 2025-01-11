import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../Redux/AuthSlice";

const AdminLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    Swal.fire({
      icon: "success",
      title: "Berhasil Log Out",
    });
    navigate("/");
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-indigo-900 w-64 text-white flex-shrink-0 shadow-lg">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center tracking-wider">
            Ingfokan Longsor ID
          </h1>
          <nav className="mt-10">
            <ul className="space-y-4">
              <li>
                <a
                  href="/admin"
                  className="block px-4 py-2 text-lg hover:bg-indigo-700 rounded transition duration-200"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/admin/laporan"
                  className="block px-4 py-2 text-lg hover:bg-indigo-700 rounded transition duration-200"
                >
                  Laporan
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-indigo-900">Admin</h2>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-gray-700 font-medium">
              Selamat datang, Admin {user.name} ({user.email})
            </p>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow p-6 bg-gray-50">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-indigo-900 text-white text-center py-3 shadow-md">
          <p className="text-sm">&copy; Aku Admin</p>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
