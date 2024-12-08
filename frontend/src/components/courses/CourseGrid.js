import React from "react";
import CourseCard from "./CourseCard";

const CourseGrid = ({ courses, cols }) => {
  console.log(courses);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${cols} gap-6`}
    >
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default CourseGrid;
