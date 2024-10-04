import semesterData from "@/data/semesters.json"; // Ensure path is correct
import SemesterCard from "./SemesterCard";

// TypeScript minimal typing for semester data
type Semester = {
  semester: string;
  subjects: string[];
};

const SemesterWiseNotes = () => {
  return (
    <div>
      <div className="border border-green-600 m-10">
        <h1 className="text-[42px] text-center font-bold">
          Semester Wise <span className="text-green-600">CSIT Notes</span>
        </h1>
        <p className="text-center text-[18px] mt-2">
          Complete semester wise notes for CSIT
        </p>
      </div>
      <div className="flex justify-evenly p-4 gap-8 flex-wrap">
        {semesterData.map((semesterItem, index) => (
          <SemesterCard
            key={index}
            sem={semesterItem.sem} // Make sure SemesterCard uses 'sem' and 'sub'
            sub={semesterItem.sub}
          />
        ))}
      </div>
    </div>
  );
};

export default SemesterWiseNotes;
