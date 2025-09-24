import { useState } from "react";

const gradeScale = {
  "A+": 4.0,
  A: 3.75,
  "A-": 3.5,
  "B+": 3.25,
  B: 3.0,
  "B-": 2.75,
  "C+": 2.5,
  C: 2.25,
  "C-": 2.0,
  "D+": 1.75,
  D: 1.5,
  "D-": 1.25,
  F: 0.0,
};

export default function GpaCal() {
  const [subjects, setSubjects] = useState([
    { grade: "A+", hours: 3 },
    { grade: "B", hours: 2 },
  ]);

  const calculateGpa = () => {
    let totalPoints = 0;
    let totalHours = 0;

    subjects.forEach((subj) => {
      const gradeValue = gradeScale[subj.grade] || 0;
      totalPoints += gradeValue * subj.hours;
      totalHours += subj.hours;
    });

    return totalHours === 0 ? 0 : totalPoints / totalHours;
  };

  const gpa = calculateGpa();

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">GPA Calculator</h2>

      {subjects.map((subj, index) => (
        <div key={index} className="flex gap-3 mb-2">
          <select
            value={subj.grade}
            onChange={(e) => {
              const newSubs = [...subjects];
              newSubs[index].grade = e.target.value;
              setSubjects(newSubs);
            }}
            className="border p-1 rounded"
          >
            {Object.keys(gradeScale).map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>

          <input
            type="number"
            min="1"
            max="6"
            value={subj.hours}
            onChange={(e) => {
              const newSubs = [...subjects];
              newSubs[index].hours = Number(e.target.value);
              setSubjects(newSubs);
            }}
            className="w-16 border p-1 rounded"
          />
          <span className="text-gray-500">hours</span>
        </div>
      ))}

      <button
        onClick={() => setSubjects([...subjects, { grade: "A", hours: 3 }])}
        className="mt-2 px-3 py-1 bg-indigo-600 text-white rounded"
      >
        + Add Subject
      </button>

      <div className="mt-4 text-lg">
        <strong>GPA:</strong> {gpa.toFixed(2)} / 4
      </div>
    </div>
  );
}
