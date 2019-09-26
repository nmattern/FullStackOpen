import React from "react";

const Header = ({ course }) => <h2>{course}</h2>;

// map the attributes of the parts to their correct values from the course object
const Content = ({ parts }) => (
  <>
    {parts.map(part => (
      <Part key={part.id} name={part.name} exercises={part.exercises} />
    ))}
  </>
);

const Part = ({ name, exercises }) => (
  <p>
    {name} {exercises}
  </p>
);

// use reduce to sum up the values of the exercises in the course parts array
// It will only grab the exercises from each (a is accumulator, b is currentValue)
const Course = ({ course }) => {
  const total = course.parts.reduce((a, b) => ({
    exercises: a.exercises + b.exercises
  }));
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <strong>total of {total.exercises} exercises</strong>
    </>
  );
};

export default Course;
