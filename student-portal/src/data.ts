export interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
}

export const courses: Course[] = [
  { id: 1, title: "Web Development", instructor: "John Doe", description: "Learn HTML, CSS, and JS" },
  { id: 2, title: "React Basics", instructor: "Jane Smith", description: "Introduction to React and Hooks" },
  { id: 3, title: "Advanced TypeScript", instructor: "Alice Johnson", description: "Master TS types and interfaces" },
  { id: 4, title: "Data Science", instructor: "Bob Brown", description: "Data analysis with Python" }
];

export const getCourseById = (id: number): Course | undefined => {
  return courses.find(course => course.id === id);
};