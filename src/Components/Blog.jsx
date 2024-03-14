const Blog = ({blog}) => {
    return (
        <div>
            <h1 className="text-[18px] font-semibold p-[20px] bg-[#FFFFFF] rounded-[8px] mt-[18px]">{blog.title}</h1>
        </div>
    );
};

export default Blog;