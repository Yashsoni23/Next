import Navbar from "../Navbar";
import Footer from "../Footer";

export const getStaticPaths = async () => {
    const res = await fetch("https://blogapi.adaptable.app/blogs/all_blogs");
    const data = await res.json();
    const paths = data.map((curElem) => {
        return {
            params: {
                blog: `${curElem._id.toString()}`
            }
        };
    });
    return {
        paths,
        fallback: false
    }
    
}

export const getStaticProps = async (context) => {
    const id = context.params.blog;
    const res = await fetch(`https://blogapi.adaptable.app/blogs/${id}`);
    const data  = await res.json();
    return{
        props:{
            data
        }
    }

}



const Blog = ({data}) => {
    const {subject,short_description,short_description_para_1,short_description_para_2,short_description_para_3,short_description_para_4  } = data[0];

    return (
        <>
            <div className="flex  bg-blue-700 flex-col items-center w-screen h-screen gap-8 text-justify">
                <Navbar />

                <div className="flex font-bold flex-col gap-8 items-center lg:w-4/5 lg:h-4/5 w-11/12 h-full main  overflow-y-auto p-8   text-justify bg-white shadow-3xl rounded-xl">
                    <h1 className="text-4xl  text-red-600">{subject}</h1>
                    <h1 className="text-lg first-letter:text-3xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{short_description}</h1>
                    <h1 className="text-lg first-letter:text-3xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{short_description_para_1}</h1>
                    <h1 className="text-lg first-letter:text-3xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{short_description_para_2}</h1>
                    <h1 className="text-xl first-letter:text-3xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{short_description_para_3}</h1>
                    <h1 className="text-xl first-letter:text-3xl pb-6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{short_description_para_4}</h1>

                    <h1 className="text-4xl  text-red-600">Happy Codding!!</h1>

                </div>
                <div className="relative w-full  mt-10">
                    <Footer />
                </div>
            </div>

        </>

    )
}

export default Blog