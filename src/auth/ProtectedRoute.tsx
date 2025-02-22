import { Navigate, Outlet } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const getUserRole = (): string | null => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const decoded: any = jwtDecode(token);
        return decoded.role; // Assuming JWT contains { role: "admin" }
    } catch (error) {
        return null;
    }
};

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
    const role = getUserRole();

    return role && allowedRoles.includes(role) ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
