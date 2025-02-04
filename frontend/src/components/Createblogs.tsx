import { CreateBlogInput } from "@fatimabibi/medium-common";
import { useState } from "react";
import axios from "axios";
import Appbar from "./Appbar";
import { Send } from "lucide-react";

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
            <div className="min-h-screen bg-gray-50 py-8">
            <Appbar />
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Create a Story</h1>
                
                <div className="space-y-6">
                    <input 
                        placeholder="Title" 
                        className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                        onChange={(e) => setPostInputs({...postInputs, title: e.target.value})}
                    />
                    
                    <textarea 
                        placeholder="Tell your story..." 
                        className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm h-64 resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all" 
                        onChange={(e) => setPostInputs({...postInputs, content: e.target.value})}
                    />
                    
                    <button 
                        className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
                        onClick={sendRequest}
                    >
                        <Send className="mr-2 h-4 w-4" />
                        Publish
                    </button>
                </div>
            </div>
        </div>
        
    )
}