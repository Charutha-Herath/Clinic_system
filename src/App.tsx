import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Login";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";
import AdminDash from "./pages/AdminDash.tsx";
import DoctorDash from "./pages/DoctorDash.tsx";
import ReceptionistDash from "./pages/ReceptionistDash.tsx";
import AdminDoctorManage from "./pages/AdminManage/AdminDoctorManage.tsx"
import {Provider} from "react-redux";
import {store} from "./store/store.tsx";


function App() {

  return (
    <Provider store={store}>


      <Router>
        <Routes>

          {/* Public Route */}
          <Route path="/login" element={<Login />} />

            {/*============================== Without token for testing purposes ===============================*/}
            <Route path="/admin" element={<AdminDash />} />
            <Route path="/doctor" element={<DoctorDash />} />
            <Route path="/receptionist" element={<ReceptionistDash />} />
            <Route path="/manage-doctors" element={<AdminDoctorManage/>} />

           {/*Protected Routes Based on Role
          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<AdminDash />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["receptionist"]} />}>
            <Route path="/receptionist" element={<ReceptionistDash />} />
          </Route>

          <Route element={<ProtectedRoute allowedRoles={["doctor"]} />}>
            <Route path="/doctor" element={<DoctorDash />} />
          </Route>*/}


          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;




/*import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router";
import Login from "./pages/Login.tsx";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element :<Login/>
    },
    {
      path : '/home',
      element : isAuthenticated ? <Homepage/> : <Navigate to='/login'/>,
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App*/
