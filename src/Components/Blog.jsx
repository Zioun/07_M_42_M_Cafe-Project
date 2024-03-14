import { MdDeleteOutline } from "react-icons/md";
const Blog = ({blog, delteItem}) => {
    return (
        <div className="flex bg-[#FFFFFF] p-[20px]  rounded-[8px] mt-[18px] gap-[10px] items-center">
            <img src={blog.image} className="w-[120px] rounded-[8px] object-cover" alt="item-image"/>
            <h1 className="text-[16px] font-semibold">{blog.title}</h1>
            <button onClick={()=>delteItem()} className="text-white bg-[#E91E63] rounded-full p-[5px]" ><MdDeleteOutline /></button>
        </div>
    );
};

export default Blog;