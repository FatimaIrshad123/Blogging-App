import { Link } from "react-router-dom"

export default function Appbar(){
    return (
        <div className="flex justify-between p-5 border-b">
            <div className="font-semibold">
                Medium
            </div>
            <div className="flex mx-4">
                <div className="mr-5">
                    <button className="rounded-lg bg-lime-500 p-2 px-4 text-white"
                    onClick={() => {localStorage.removeItem('token')}}><Link to='/'>Logout</Link></button>
                </div>
                <div className="mr-5">
                    <button className="rounded-lg p-2 px-4 text-white bg-lime-500"
                    ><Link to='/createBlogs'>Publish</Link></button>
                </div>
                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <svg className="absolute w-12 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
        </div>
    )
}