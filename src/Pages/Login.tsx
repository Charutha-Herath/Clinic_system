import { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Select, SelectItem } from "../components/ui/select";
import { Checkbox } from "../components/ui/checkbox";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("admin");
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Email and password are required");
            return;
        }

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, role, rememberMe }),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await response.json();
            localStorage.setItem("token", data.token);
            navigate("/dashboard");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <Card className="w-96 p-6 shadow-lg">
                <CardContent>
                    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label>Password</Label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <Label>Role</Label>
                            <Select value={role} onChange={(e) => setRole(e.target.value)}>
                                <SelectItem value="admin">Admin</SelectItem>
                                <SelectItem value="doctor">Doctor</SelectItem>
                                <SelectItem value="receptionist">Receptionist</SelectItem>
                            </Select>
                        </div>
                        {/*<div className="flex items-center space-x-2">
                            <Checkbox checked={rememberMe} onCheckedChange={setRememberMe} />
                            <Label>Remember me</Label>
                        </div>*/}
                        <Button type="submit" className="w-full">Login</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
