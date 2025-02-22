import jwtDecode from "jwt-decode";

export const getUserRole = (): string | null => {
    const token = localStorage.getItem("token");
    if (!token) return null;

    try {
        const decoded: any = jwtDecode(token);
        return decoded.role; // Assuming token contains `{ role: "admin" }`
    } catch (error) {
        return null;
    }
};
