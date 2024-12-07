import React from 'react';
import Button from '../components/common/Button';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
          Welcome to Our Learning Platform
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Discover a world of knowledge with our curated courses and expert instructors.
          Start your learning journey today!
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <Button variant="primary" size="lg">
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;