import Footer from "./Footer";
import Navbar from "./Navbar";
import Home from './Home'
export const getStaticProps = async () => {
  const res = await fetch("https://profiler.adaptable.app/profile/all_profile");
  const data = await res.json();
  return {
    props: {
      data,
    }
  };
};
const Main = ({ data }) => {
  return (
    <>
      {/* <Navbar/> */}
      <Home data={data}/>
      {/*  */}
    </>
  )
};
export default Main;
