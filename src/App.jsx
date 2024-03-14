import './App.css'
import Blog from './Components/Blog';
import Blogs from './Components/Blogs'
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [countB, setCountB] = useState([]);
  useEffect(()=>{
    fetch("Blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  const countBlogs = (blogs) => {
    const sendBlogs = [...countB, blogs];
    setCountB(sendBlogs);
  };
  console.log(countB.title)
  return (
    <>
      <section className="max-w-[1280px] m-auto">
        <div className=" border-b-2 flex justify-between items-center py-5">
          <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
          <img className="h-[60px]" src="../src/assets/image/profile.png" alt="profile" />
        </div>
        <div className='grid grid-cols-12 gap-[24px] mt-[32px]'>
          <div className='col-span-8'>
            {
              blogs.map(blogs => <Blogs key={blogs.title} countBlogs={countBlogs} blogs={blogs}></Blogs>)
            }
          </div>
          <div className='col-span-4'>
            <div>
              <h1 className="text-[24px] font-bold text-center py-[21px] text-[#6047EC] rounded-[8px] border-2 border-[#6047EC] bg-[#EFEDFD]">Spent time on read : 177 min</h1>
            </div>
            <div className="text-[24px] font-bold px-[32px] py-[21px] text-[#111111] rounded-[8px] border-2 border-[#F3F3F3] bg-[#F3F3F3] mt-[24px]">
              <h1 className="">Bookmarked Blogs : {countB.length}</h1>
              <div>
                {
                  countB.map(blog => <Blog blog={blog}></Blog>)
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
