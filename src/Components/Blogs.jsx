import { IoBookmarks } from "react-icons/io5";
const Blogs = ({blogs,countBlogs}) => {
    const {image, title, author, post_date, position, reading_time} = blogs
    return (
        <div className="border-b-2 mb-[40px]">
            <img className="w-full h-[450px] rounded-[8px]" src={image} alt="blog-image" />
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-[24px] mt-[32px] mb-[16px]">
                    <img className="w-[60px] h-[60px] rounded-full object-cover border-2" src={author.profile_pic} alt="profile-image" />
                    <div>
                        <h1 className="text-[24px] font-bold">{author.name}</h1>
                        <h3 className="text-[16px] font-semibold text-[#707070]">{post_date}</h3>
                    </div>
                </div>
                <div className="text-[20px] font-medium text-[#707070] flex gap-[8px] items-center">
                    <h1>{reading_time}</h1>
                    <button onClick={()=>countBlogs(blogs)}><IoBookmarks /></button>
                </div>
            </div>
            <h1 className="font-bold text-[40px] w-full">{title}</h1>
            <div className="text-[20px] font-medium text-[#707070] flex gap-[16px] mt-[16px] mb-[21px]">
                <h1># {author.job}</h1>
                <h3># {position}</h3>
            </div>
            <div>
                <button className="border-b-2 mb-[38px] text-[20px] font-semibold text-[#6047EC]">Mark as read</button>
            </div>
            
        </div>
    );
};

export default Blogs;