import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {SignupInput} from '@fatimabibi/medium-common'

export default function Signup(){
    const navigate = useNavigate()
    const [inputs,setInputs] = useState<SignupInput>({
        name:'',
        email:'',
        password:''
    })
    async function sendRequest(){
        // const response = await axios.post("https://backened.bibimemoona2017.workers.dev/api/v1/signup",inputs)
        
            const response = await axios.post("https://backened.bibimemoona2017.workers.dev/api/v1/signup",inputs)
            const jwt = response.data;
            localStorage.setItem("token",jwt)
            navigate('/blogs')
            console.log(response)
        
    }
    return (
        <div className="grid grid-cols-2">       
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                    Create an account</h2>
                <h3 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-600">
                    Already have an account?<Link to='/' className="underline">Signin</Link></h3>
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
                email : e.target.value})}/>

            <h2 className="mt-10 text-left text-2xl font-semibold leading-9 tracking-tight text-black">
                    Username</h2>
            <input placeholder="Enter Username" type="text" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(e) => setInputs({
                ...inputs,
                name : e.target.value})}/>
             
             <h2 className="mt-10 text-left text-2xl font-semibold leading-9 tracking-tight text-black">
                    Password</h2>
            <input placeholder="Enter Password" type="password" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset
            ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
             focus:ring-indigo-600 sm:text-sm sm:leading-6"
             onChange={(e) => setInputs({
                ...inputs,
                password : e.target.value})}/>
             <br/>
            <button className="flex w-full justify-center rounded-md
                 bg-black px-3 py-1.5 text-sm font-semibold leading-6
                  text-white shadow-sm
                  hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2" 
                  onClick={sendRequest}>Create Account</button>
            <br/><br/>
            </div>
        </div>
        <div className="justify-center px-10 pt-10 h-screen max-w-lg sm:mx-auto sm:w-full sm:max-w-sm invisible md:visible bg-slate-200">
                <p className='font-bold text-2xl'>"The customer services I recieved was execptional. The support team went above and beyond to address my concerns."</p>
                <p className="font-semibold text-2xl text-gray-800">Julles Winnfield</p>
                <p className="text-gray-600">CEO, Acme Innc</p>
            </div>
        </div>
    )
}