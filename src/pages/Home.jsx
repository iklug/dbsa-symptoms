import SidebarButton from "../components/SidebarButton";
import StartNewMonth from "../components/StartNewMonth";

const Home = () => {
  return (
    <div className=" h-screen w-screen bg-gray-50 flex justify-center">
      <div className=" h-screen w-3/4 bg-white flex justify-center items-center">
        <div className=" h-5/6 w-5/6 bg-white">
          <SidebarButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
