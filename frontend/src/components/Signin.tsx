import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SigninInput, signinInput } from "@fatimabibi/medium-common"
import axios from "axios"


export default function Signin() {
    const [inputs,setInputs] = useState<SigninInput>({
        email:'',
        password:''
    })
    const navigate = useNavigate()
async function sendRequest(){
    try {
        const response = await axios.post("https://backened.bibimemoona2017.workers.dev/api/v1/signin",inputs)
        const jwt = response.data;
        localStorage.setItem("token",jwt)
        navigate('/blogs')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className="grid grid-cols-2">       
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    Login to your account</h2>
                <h3 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-600">
                    Don't have an account?<Link to='/Signup' className="underline">Signup</Link></h3>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-left text-2xl font-semibold leading-9 tracking-tight text-black">
                    Email</h2>
            <input placeholder="Enter Email" type="text" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(e) => setInputs({
                ...inputs,
                email : e.target.value
             })}/>
             
             <h2 className="mt-10 text-left text-2xl font-semibold leading-9 tracking-tight text-black">
                    Password</h2>
            <input placeholder="Enter Password" type="password" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(e) => setInputs({
                ...inputs,
                password : e.target.value
             })}/>
             <br/>
            <button onClick={sendRequest}
            className="flex w-full justify-center rounded-md
                 bg-black px-3 py-1.5 text-sm font-semibold leading-6
                  text-white shadow-sm
                  hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" 
                  >Login</button>
            <br/><br/>
            </div>
        </div>
        <div className="justify-center px-10 mt-20 sm:mx-auto sm:w-full sm:max-w-sm invisible md:visible bg-slate-200">
                <p className='font-bold text-2xl'>"The customer services I recieved was execptional. The support team went above and beyond to address my concerns."</p>
                <p className="font-semibold text-2xl text-gray-800">Julles Winnfield</p>
                <p className="text-gray-600">CEO, Acme Innc</p>
            </div>
        </div>
)}

