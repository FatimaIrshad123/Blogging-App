import { CreateBlogInput } from "@fatimabibi/medium-common";
import { useState } from "react";
import axios from "axios";
import Appbar from "./Appbar";

export default function Createblogs(){
    const [postInputs, setPostInputs] = useState<CreateBlogInput>({
        title:'',
        content:''
    })
    async function sendRequest(){
        try {
            const response = await axios.post("https://backened.bibimemoona2017.workers.dev/api/v1/blog",postInputs,{
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${localStorage.getItem("token")}`
                }
            })
            localStorage.getItem("token")
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <Appbar />
            <div className="flex flex-col justify-center w-full">
                <h1 className="text-3xl font-bold text-center mt-5">Create Blogs</h1>
                <div className='w-full justify-center max-w-screen-lg'>
                    <input placeholder="Title" className="p-2 m-6 w-full bg-gray-100 border-2 rounded-lg" 
                    onChange={(e)=> {
                        setPostInputs({...postInputs,title: e.target.value})}}/>
                </div>
                
                <div className='w-full justify-center max-w-screen-lg'>
                    <input placeholder="Tell your story......." className="p-2 m-6 w-full bg-gray-100 border-2 rounded-lg"
                    onChange={(e)=> {
                    setPostInputs({...postInputs,content: e.target.value})}}/>
                    <button className="p-3 px-7 rounded-lg m-6 bg-lime-500 text-white" onClick={sendRequest}>Publish</button>
                </div>
            </div>
        </div>
    )
}