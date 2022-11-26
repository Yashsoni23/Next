import Navbar from "./Navbar";
import Footer from "./Footer";
export const getStaticProps = async () => {
  const res = await fetch("https://blogapi.adaptable.app/blogs/all_blogs");
  const data = await res.json();
  return {
    props: {
      data,
    }
  };
};
const Blogs = ({ data }) => {
  return (
    <>
      <div className="flex flex-col lg:h-screen h-full">
        <Navbar />

        <div className="flex  pt-5 pb-20 flex-col bg-blue-400 h-full items-center">

          <div className="flex flex-col justify-center gap-5 items-center bg-slate-200 shadow-4xl p-4 w-4/5 h-4/5 lg:h-full rounded-2xl">
            <h1 className="font-bold text-4xl p-2 border-b-8  rounded-full shadow-3xl clear-both bg-white hover:text-red-600  border-blue-400 text-slate-700">&nbsp; Blogs &nbsp;</h1>
            <div onClick={()=>window.open(`Blogs/${data[0]._id}`,"_self")} className="flex bg-slate-50 flex-wrap p-6   rounded-full hover:text-red-600 cursor-pointer shadow-3xl hover:bg-slate-50 font-bold text-blue-500 gap-2 justify-center items-center text-lg text-center lg:text-3xl">
              <div className="flex shadow-4xl bg-white text-red-600 w-[40px] h-[40px] justify-center items-center rounded-full">1</div>
              <h1>{data[0].subject}</h1>
            </div>
            <div onClick={()=>window.open(`Blogs/${data[1]._id}`,"_self")} className="flex bg-slate-50 flex-wrap p-4   rounded-full hover:text-red-600 cursor-pointer shadow-3xl hover:bg-slate-50 font-bold text-blue-500 gap-2 justify-center items-center text-lg text-center lg:text-3xl">
              <div className="flex shadow-4xl bg-white text-red-600 w-[40px] h-[40px] justify-center items-center rounded-full">2</div>
              <h1>{data[1].subject}</h1>
            </div>
            <div onClick={()=>window.open(`Blogs/${data[2]._id}`,"_self")} className="flex bg-slate-50 flex-wrap p-3   rounded-full hover:text-red-600 cursor-pointer shadow-3xl hover:bg-slate-50 font-bold text-blue-500 gap-2 justify-center items-center text-lg text-center lg:text-3xl">
              <div className="flex shadow-4xl bg-white text-red-600 w-[40px] h-[40px] justify-center items-center rounded-full">3</div>
              <h1>{data[2].subject}</h1>
            </div>

          </div>

        </div>

        <div className="relative bg-slate-900">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Blogs