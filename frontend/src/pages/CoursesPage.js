import React, { useState, useEffect } from "react";
import CourseGrid from "../components/courses/CourseGrid";
import { CircularProgress } from "@mui/material";
import { getAllCourse } from "../services/apiCourses";

const getCourses = async () => {
  // Simulating a delay to mimic an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          title: "React Basics",
          description:
            "Learn the fundamentals of React, including components, state, and props.",
          duration: "3 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=React+Basics",
        },
        {
          id: "2",
          title: "Advanced JavaScript",
          description:
            "Deep dive into advanced concepts of JavaScript for modern web development.",
          duration: "5 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=Advanced+JS",
        },
        {
          id: "3",
          title: "Node.js API Development",
          description:
            "Build and deploy APIs using Node.js, Express, and MongoDB.",
          duration: "4 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=Node.js+API",
        },
        {
          id: "1",
          title: "React Basics",
          description:
            "Learn the fundamentals of React, including components, state, and props.",
          duration: "3 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=React+Basics",
        },
        {
          id: "2",
          title: "Advanced JavaScript",
          description:
            "Deep dive into advanced concepts of JavaScript for modern web development.",
          duration: "5 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=Advanced+JS",
        },
        {
          id: "3",
          title: "Node.js API Development",
          description:
            "Build and deploy APIs using Node.js, Express, and MongoDB.",
          duration: "4 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=Node.js+API",
        },
        {
          id: "2",
          title: "Advanced JavaScript",
          description:
            "Deep dive into advanced concepts of JavaScript for modern web development.",
          duration: "5 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=Advanced+JS",
        },
        {
          id: "3",
          title: "Node.js API Development",
          description:
            "Build and deploy APIs using Node.js, Express, and MongoDB.",
          duration: "4 hours",
          imageUrl: "https://via.placeholder.com/400x300?text=Node.js+API",
        },
      ]);
    }, 1000); // 1-second delay
  });
};

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { course } = await getAllCourse();
        setCourses(course);
      } catch (err) {
        console.error("Error details:", err);
        setError("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        Available Courses
      </h1>
      <CourseGrid courses={courses} cols={4} />
    </div>
  );
};

export default CoursesPage;
