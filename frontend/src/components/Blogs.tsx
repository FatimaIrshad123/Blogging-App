import axios from "axios"
import { useEffect, useState } from "react"
import Appbar from "./Appbar";
import Skeleton from "./Skeleton";

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
    const [loading, setloading] = useState(true)
    const [data,setData] = useState()
    
    useEffect(() => {
        function callback2(data){        
            for (let i in data){
              setData(data[i].map(x => 
              {return (
                <div key={x.id} >
                  <div className='justify-center m-8 border-2 rounded-lg shadow-lg p-5 ml-4'>
                    <div className="flex">
                        <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute w-8 h-8 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                      <h3 className="mr-6 text-slate-500"> {x.author.name || 'Anonymus'}</h3>
                      <h3 className = 'text-slate-500'>Dec,10,2024</h3>
                    </div>      
                    <h4 className="text-3xl font-bold"> {x.title}</h4>
                    <h5 className="text-2xl text-slate-600"> {x.content}</h5>
                    <br></br>
                  </div>
                </div>
                )}
              ))
            }
          }

          function callback1(res){
            res.json().then(callback2)
            setloading(false)
          }
        fetch('https://backened.bibimemoona2017.workers.dev/api/v1/blog/bulk',{method:'GET'}).then(callback1)
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
        <div>
          <Appbar />
            {data}
        </div>
    )
}