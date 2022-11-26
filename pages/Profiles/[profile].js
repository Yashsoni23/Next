import Navbar from "../Navbar";
import Footer from "../Footer";

export const getStaticPaths = async () => {
    const res = await fetch("https://profiler.adaptable.app/profile/all_profile");
    const data = await res.json();
    const paths = data.map((curElem) => {
        return {
            params: {
                profile: `${curElem._id.toString()}`
            },
        };
    });
    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async (context) => {
    const id = context.params.profile
    const res = await fetch(`https://theprofiler26.adaptable.app/profile/${id}`);
    const data = await res.json();
    return {
        props: {
            data,
        }
    };
};



const Profile = ({ data }) => {
    
    return (
        <>

            <div className="flex  bg-slate-100 flex-col items-center w-screen h-screen gap-8 text-justify">
                <Navbar />

                <div className="flex font-bold flex-col items-center lg:w-4/5 lg:h-4/5 w-full h-full main  overflow-y-auto p-8 pb-0  text-justify bg-cyan-200 shadow-4xl rounded-xl">
                    <img src={data[0].url} alt="Profile-img" className="w-[10rem]" width={300} height={300} />
                    <h1 className="text-3xl p-2">{data[0].name}</h1>
                    <h1 className="text-lg">{data[0].gender}</h1>
                    <h1 className="text-lg">{data[0].email}</h1>
                    <h1 className="text-lg">{data[0].category}</h1>
                    <h1 className="text-xl first-letter:text-3xl pb-10">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data[0].about}</h1>
                </div>
                <div className="relative w-full  mt-10">
                    <Footer />
                </div>
            </div>

        </>
    )
}

export default Profile