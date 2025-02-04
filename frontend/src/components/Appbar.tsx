import { Link, useNavigate } from "react-router-dom"
import { LogOut, Feather, Mail, User } from 'lucide-react'

export default function Appbar() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <nav className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-md p-2 max-w-4xl mx-auto my-6">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link 
                    to="/blogs" 
                    className="text-3xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
                >
                    Medium
                </Link>
                <div className="flex items-center space-x-4">
                    <Link 
                        to="/createBlogs"
                        className="flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all active:scale-95"
                    >
                        <Feather className="mr-2 h-4 w-4" />
                        Publish
                    </Link>
                    <button 
                        onClick={handleLogout}
                        className="flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transform transition-all active:scale-95"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </button>
                    <div className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-500" />
                    </div>
                </div>
            </div>
        </nav>
    )
}