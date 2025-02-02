import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {SignupInput} from '@fatimabibi/medium-common'
import { Mail, Lock, ArrowRight,UserRound } from 'lucide-react';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Signup(){
    const navigate = useNavigate()
    const [inputs,setInputs] = useState<SignupInput>({
        name:'',
        email:'',
        password:''
    })
    async function sendRequest(){
        try {
            const response = await axios.post("https://backened.bibimemoona2017.workers.dev/api/v1/signup",inputs)
            const jwt = response.data;
            localStorage.setItem("token",jwt)
            navigate('/blogs')
            toast.success("Signup successful!", {
                position: "top-right",
                autoClose: 3000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
              });
            console.log('response',response)
        }catch(error){
            console.log(error)
            toast.error("Signup failed. Please try again.", {position: "top-right"});
        }        
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-[1.01]">
                <div className="max-w-md mx-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Create an account</h2>
                  <p className="text-gray-600 mb-8">Already have an account?<Link to='/' className="underline">Signin</Link></p>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="abcd@example.com"
                          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <UserRound className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="username"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="abcd"
                          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                        />
                      </div>
                    </div>
    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="password"
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your password"
                          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                      </div>
                    </div>
    
                    <div className="flex items-center justify-between"/>
                    
                    <button
                      onClick={sendRequest}
                      className="w-full flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transform transition-all active:scale-95"
                    >
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
    
                    <p className="text-center text-sm text-gray-600">
                      Already have an account?{' '}
                      <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Login
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
    
              <div className="hidden md:block bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                <div className="h-full flex flex-col justify-center">
                  <div className="mb-8">
                    <svg className="h-12 w-12 text-white opacity-25" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-xl font-medium mb-6">
                    The customer service I received was exceptional. The support team went above and beyond to address my concerns.
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold">Jules Winnfield</p>
                    <p className="text-indigo-100">CEO, Acme Inc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
)}