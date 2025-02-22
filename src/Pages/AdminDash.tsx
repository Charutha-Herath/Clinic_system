import { useNavigate } from "react-router-dom";
import { FaUserMd, FaUserNurse, FaUserPlus, FaDollarSign } from "react-icons/fa";

function AdminDash() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-between min-h-screen bg-white-100 p-32">
            <div
                className="bg-gradient-to-r from-blue-400 to-purple-500 shadow-lg rounded-2xl p-8 w-full max-w-md text-center ">
                <h2 className="text-3xl font-bold text-white mb-1 animate-fadeIn">Admin Dashboard</h2>
                <h4>Hi Charutha</h4>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 w-full max-w-2xl pb-6">
                <button
                    onClick={() => navigate('/manage-doctors')}
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white text-lg font-semibold py-4 rounded-lg shadow-md hover:bg-blue-600 transform transition-transform duration-300 hover:scale-105">
                    <FaUserMd /> Manage Doctors
                </button>
                <button
                    onClick={() => navigate('/manage-receptionists')}
                    className="flex items-center justify-center gap-2 bg-green-500 text-white text-lg font-semibold py-4 rounded-lg shadow-md hover:bg-green-600 transform transition-transform duration-300 hover:scale-105">
                    <FaUserNurse /> Manage Receptionists
                </button>
                <button
                    onClick={() => navigate('/add-admin')}
                    className="flex items-center justify-center gap-2 bg-purple-500 text-white text-lg font-semibold py-4 rounded-lg shadow-md hover:bg-purple-600 transform transition-transform duration-300 hover:scale-105">
                    <FaUserPlus /> Add New Admin
                </button>
                <button
                    onClick={() => navigate('/view-revenue')}
                    className="flex items-center justify-center gap-2 bg-yellow-500 text-white text-lg font-semibold py-4 rounded-lg shadow-md hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-105">
                    <FaDollarSign /> View Revenue
                </button>
            </div>
        </div>
    );
}

export default AdminDash;
