import { BrowserRouter, Router, RouterProvider, Routes,Route } from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Blogs from "./components/Blogs"
import Createblogs from "./components/Createblogs"

function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blogs" element={<Blogs />}/>
            <Route path="/createBlogs" element={<Createblogs/>}/>
          </Routes>
      </BrowserRouter>
        
    </div>
  )
}

export default App
