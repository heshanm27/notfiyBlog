
import BlogList from "./ComponentTemplate/BlogList";
import useFetch from "./fetch/useFetch";

const Home = () => {
  
const {data:blogs,isPending,error} = useFetch('https://dojoblogapp.herokuapp.com/getBlogs')
  
console.log(blogs)

  return (
    <div className="home">
    {error && <div>{error}</div>}
   {isPending && <div><h2>Loading..</h2></div>}
   {blogs && <BlogList blogs={blogs} title="All BLogs" />  }
    {blogs && <BlogList blogs={blogs.filter(blog=>blog.author==='mario')} title="Mario BLogs" />} 
   
    </div>
  );
}
 //using props
export default Home;