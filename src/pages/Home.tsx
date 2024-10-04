import SearchBar from "@/components/customComponents/SearchBar";
import Header from "@/layouts/Header";
import Hero from "@/assets/images/hero.svg";
import This from "@/assets/images/this.png";
import SemesterWiseNotes from "./SemesterWiseNotes";

const Home = () => {
  return (
    <>
      <div className=" bg-slate-100">
        <div className="landingpage flex justify-evenly max-w-[1380px] mx-auto">
          <div className="contentbox gap-20 m-8  grow">
            <p className="text-2xl mt-8">Embark on a New Learning Adventure</p>
            <h1 className="font-extrabold text-[48px] my-6 leading-tight">
              Best learning{" "}
              <span className="text-green-600">
                platform <br /> to Prepare
              </span>{" "}
              for CSIT
              <br /> Semester Exams
            </h1>
            <p className="text-xl">
              Complete resources to help you excel in B.Sc. CSIT.
            </p>
            <SearchBar />
          </div>
          <div className="  ">
            <img src={Hero} className="w-[650px] h-auto " />
          </div>
        </div>

        {/* Semester wise notes section */}
        <div className="border-4 border-red-700 max-w-[1380px] mx-auto">
          <SemesterWiseNotes />
        </div>
      </div>
    </>
  );
};

export default Home;
