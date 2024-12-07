import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <Card
      className="flex flex-col h-full max-w-lg transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      <img
        src={course.imageUrl}
        alt={course.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
          {course.description}
        </p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">
            {course.duration}
          </span>
          <Button
            onClick={() => navigate(`/courses/${course.id}`)}
            variant="primary"
            size="sm"
          >
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;