import axios from "axios"
import { useEffect, useState } from "react"
import { User, Clock } from 'lucide-react'
import Appbar from "./Appbar";
import Skeleton from "./Skeleton";
import {BACKEND_URL} from '../../url'

interface Blogs {
    id: string;
    title: string;
    content: string;
    authorId: string;
    author: {
        name: string;
        email: string;
    };
}

export default function Blogs(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<React.ReactNode[]>()
    
    useEffect(() => {
        function callback2(data){  
          console.log('data',data)      
            for (let i in data){
              setData(data[i].map(x => 
              (
                <div key={x.id} className="max-w-4xl mx-auto my-6">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <div className="flex items-center space-x-3 text-gray-600">
                            <span className="font-medium">{x.author.name || 'Anonymous'}</span>
                            <span className="text-sm flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                Dec 10, 2024
                            </span>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-3"> 
                        {x.title}
                      </h2>
                      <p className="text-gray-700 leading-relaxed"> 
                        {x.content}
                      </p>
                    </div>
                  </div>
                </div>
                )
              ))
            }
          }

          function callback1(res){
            res.json().then(callback2)
            setLoading(false)
          }
        fetch(`${BACKEND_URL}/blog/bulk`,{method:'GET'}).then(callback1)
    },[])
    
    if (loading){
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      )
    }
    
    return (
        <div className="bg-gray-50 min-h-screen">
          <Appbar />
          <div className="container mx-auto px-4 py-6">
            {data}
          </div>
        </div>
    )
}