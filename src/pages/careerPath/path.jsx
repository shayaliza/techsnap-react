// import React from "react";

// function CourseCard({ number, title, description, lessons, practices }) {
//   return (
//     <div className="flex items-center space-x-4">
//       <div className="relative flex flex-col items-center">
//         <div className="rounded-full bg-gray-900 text-lg font-bold text-center p-2 w-12 h-12 flex items-center justify-center">
//           {number}
//         </div>
//         <div className="flex-grow border-l-2 border-dotted border-gray-400 h-full"></div>
//       </div>
//       <div className="flex flex-col items-start p-8 rounded-lg shadow-md bg-gray-800 text-white w-full">
//         <div className="flex flex-col">
//           <span className="font-bold">{lessons} Lessons</span>
//           <span>{practices} Practices</span>
//         </div>
//         <h2 className="text-2xl font-bold mt-4">{title}</h2>
//         <p className="mt-2">{description}</p>
//       </div>
//     </div>
//   );
// }

// function Path() {
//   const courses = [
//     {
//       number: 1,
//       title: "Stellar JavaScript for the React Universe",
//       description:
//         "This course is an exciting step towards understanding necessary JavaScript basics and ES6 specifically, which are essential to leverage the power of React. Learn about...",
//       lessons: 4,
//       practices: 21,
//     },
//     {
//       number: 2,
//       title: "Galactic Gateway to React",
//       description:
//         "Extend your JavaScript knowledge by exploring React components. Learn to outline functional components, handle their lifecycle, and interact dynamically with user...",
//       lessons: 7,
//       practices: 35,
//     },
//     {
//       number: 3,
//       title: "Stellar Explorations in React",
//       description:
//         "Extend your JavaScript knowledge by exploring React components. Learn to handle components lifecycle, and interact dynamically with user interaction.",
//       lessons: 6,
//       practices: 32,
//     },
//   ];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold text-center mb-8">React Courses</h1>
//       <div className="space-y-4">
//         {courses.map((course, index) => (
//           <CourseCard
//             key={course.number}
//             number={course.number}
//             title={course.title}
//             description={course.description}
//             lessons={course.lessons}
//             practices={course.practices}
//             isLast={index === courses.length - 1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Path;

import React from "react";

function CourseCard({
  number,
  title,
  description,
  lessons,
  practices,
  isLast,
}) {
  return (
    <div className="flex items-start space-x-4 relative">
      <div className="flex flex-col items-center relative">
        <div className="mt-20 z-10 rounded-full text-white bg-gray-900 text-lg font-bold text-center p-2 w-12 h-12 flex items-center justify-center">
          {number}
        </div>
        {/* {!isLast && ( */}
        <div className="absolute top-0 h-48 bottom-0  w-px border-l-2 border-dotted border-gray-400"></div>
        {/* )} */}
      </div>
      <div className="flex flex-col items-start p-8 rounded-lg shadow-md bg-gray-800 text-white w-full">
        <div className="flex flex-row gap-4">
          <span className="font-bold">{lessons} Lessons</span>
          <span>{practices} Practices</span>
        </div>
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}

function Path() {
  const courses = [
    {
      number: 1,
      title: "Stellar JavaScript for the React Universe",
      description:
        "This course is an exciting step towards understanding necessary JavaScript basics and ES6 specifically, which are essential to leverage the power of React. Learn about...",
      lessons: 4,
      practices: 21,
    },
    {
      number: 2,
      title: "Galactic Gateway to React",
      description:
        "Extend your JavaScript knowledge by exploring React components. Learn to outline functional components, handle their lifecycle, and interact dynamically with user...",
      lessons: 7,
      practices: 35,
    },
    {
      number: 3,
      title: "Stellar Explorations in React",
      description:
        "Extend your JavaScript knowledge by exploring React components. Learn to handle components lifecycle, and interact dynamically with user interaction.",
      lessons: 6,
      practices: 32,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="relative space-y-8">
        {courses.map((course, index) => (
          <CourseCard
            key={course.number}
            number={course.number}
            title={course.title}
            description={course.description}
            lessons={course.lessons}
            practices={course.practices}
            isLast={index === courses.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Path;
