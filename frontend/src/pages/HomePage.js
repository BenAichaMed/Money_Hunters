import Slider from '../components/art/Slider';
import React, { useState, useEffect } from 'react';
import CourseGrid from '../components/courses/CourseGrid';


// we need to change this so it filter the courses by popularity in the backend
const getCourses = async () => {
  // Simulating a delay to mimic an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'React Basics',
          description: 'Learn the fundamentals of React, including components, state, and props.',
          duration: '3 hours',
          imageUrl: 'https://via.placeholder.com/400x300?text=React+Basics',
        },
        {
          id: '2',
          title: 'Advanced JavaScript',
          description: 'Deep dive into advanced concepts of JavaScript for modern web development.',
          duration: '5 hours',
          imageUrl: 'https://via.placeholder.com/400x300?text=Advanced+JS',
        },
        {
          id: '3',
          title: 'Node.js API Development',
          description: 'Build and deploy APIs using Node.js, Express, and MongoDB.',
          duration: '4 hours',
          imageUrl: 'https://via.placeholder.com/400x300?text=Node.js+API',
        },
        {
          id: '1',
          title: 'React Basics',
          description: 'Learn the fundamentals of React, including components, state, and props.',
          duration: '3 hours',
          imageUrl: 'https://via.placeholder.com/400x300?text=React+Basics',
        },
        {
          id: '2',
          title: 'Advanced JavaScript',
          description: 'Deep dive into advanced concepts of JavaScript for modern web development.',
          duration: '5 hours',
          imageUrl: 'https://via.placeholder.com/400x300?text=Advanced+JS',
        },
        {
          id: '3',
          title: 'Node.js API Development',
          description: 'Build and deploy APIs using Node.js, Express, and MongoDB.',
          duration: '4 hours',
          imageUrl: 'https://via.placeholder.com/400x300?text=Node.js+API',
        },
        
      ]);
    }, 1000); // 1-second delay
  });
};

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        setError('Failed to fetch courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center w-full">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Welcome to Money <br/>   Hunters
        </h1>
        <Slider className='mt-5' />
        <p className="mt-3 max-w-md mx-auto text-base text-gray-800 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        Your Journey to Financial Freedom Starts Here - Let's Make <span className='font-bold'>Money</span> Work for You!
        </p>
      </div>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h1 className="mt-8 text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Popular courses
        </h1>
        <CourseGrid courses={courses} cols={3} />
      </div>
    </div>
  );
};

export default HomePage;