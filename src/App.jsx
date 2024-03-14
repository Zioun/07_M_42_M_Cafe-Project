import './App.css'
import Blog from './Components/Blog';
import Blogs from './Components/Blogs'
import { useEffect } from "react";
import { useState } from "react";
function App() {
  const [blogs, setBlogs] = useState([]);
  const [countB, setCountB] = useState([]);
  const [countT, setCountT] = useState(0);
  useEffect(()=>{
    fetch("Blogs.json")
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  const countBlogs = (blogs) => {
    const existingBlog = countB.find(blog => blog.title === blogs.title);
    if (!existingBlog) {
      setCountB(prevBlogs => [...prevBlogs, blogs]);
    } else {
      <button className="btn" onClick={my_modal_3.showModal()}>open modal</button>
    }
  };
  const countTime = (blogs) =>{
      setCountT(countT + blogs.reading_time);
  }
  const delteItem = () =>{
    <button className="btn" onClick={my_modal_4.showModal()}>open modal</button>
  }
  return (
    <>
      <section>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='flex justify-center'>
            <img className='w-[100px]' src="https://i.ibb.co/n3mVFN5/delete-1.png" alt="oops" />
          </div>
          <h3 className="font-bold text-lg text-center mt-5 text-[25px] px-5 text-[#F44336]">Do you want to delete?</h3>
          <div className='flex justify-center mt-5 font-semibold'>
            <button className='px-7 py-3 bg-[#F44336] text-white rounded-[8px]'>Yes</button>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className='flex justify-center'>
            <img className='w-[100px]' src="https://i.ibb.co/XJJ90ct/7188144.png" alt="oops" />
          </div>
          <h3 className="font-bold text-lg text-center mt-5 text-[25px] px-5 text-[#E91E63]">Blog with the same title already exists!</h3>
        </div>
      </dialog>
      </section>
      <section className="max-w-[1280px] m-auto">
        <div className=" border-b-2 flex justify-between items-center py-5">
          <h1 className="text-[40px] font-bold">Knowledge Cafe</h1>
          <img className="h-[60px]" src="../src/assets/image/profile.png" alt="profile" />
        </div>
        <div className='grid grid-cols-12 gap-[24px] mt-[32px]'>
          <div className='col-span-7'>
            {
              blogs.map(blogs => <Blogs key={blogs.title} countTime={countTime} countBlogs={countBlogs} blogs={blogs}></Blogs>)
            }
          </div>
          <div className='col-span-5'>
            <div>
              <h1 className="text-[24px] font-bold text-center py-[21px] text-[#6047EC] rounded-[8px] border-2 border-[#6047EC] bg-[#EFEDFD]">Spent time on read : {countT} min</h1>
            </div>
            <div className="text-[24px] font-bold px-[32px] py-[21px] text-[#111111] rounded-[8px] border-2 border-[#F3F3F3] bg-[#F3F3F3] mt-[24px]">
              <h1 className="">Bookmarked Blogs : {countB.length}</h1>
              <div>
                {
                  countB.map(blog => <Blog blog={blog} delteItem={delteItem}></Blog>)
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
