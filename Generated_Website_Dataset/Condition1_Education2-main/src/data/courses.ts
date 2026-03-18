import courseThumb1 from "@/assets/course-thumb-1.jpg";
import courseThumb2 from "@/assets/course-thumb-2.jpg";
import courseThumb3 from "@/assets/course-thumb-3.jpg";
import courseThumb4 from "@/assets/course-thumb-4.jpg";
import courseThumb5 from "@/assets/course-thumb-5.jpg";
import courseThumb6 from "@/assets/course-thumb-6.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";

export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar: string;
  thumbnail: string;
  rating: number;
  reviewCount: number;
  enrolled: number;
  price: number;
  isFree: boolean;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  description: string;
  lessonsCount: number;
}

export const courses: Course[] = [
  {
    id: "web-dev-bootcamp",
    title: "The Complete Web Development Bootcamp",
    instructor: "Marcus Chen",
    instructorAvatar: instructor1,
    thumbnail: courseThumb1,
    rating: 4.8,
    reviewCount: 12450,
    enrolled: 89200,
    price: 49.99,
    isFree: false,
    duration: "42 hours",
    level: "Beginner",
    category: "Web Development",
    description: "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
    lessonsCount: 64,
  },
  {
    id: "python-data-science",
    title: "Python for Data Science",
    instructor: "Dr. Sarah Mitchell",
    instructorAvatar: instructor2,
    thumbnail: courseThumb2,
    rating: 4.7,
    reviewCount: 8930,
    enrolled: 67500,
    price: 39.99,
    isFree: false,
    duration: "24 hours",
    level: "Intermediate",
    category: "Data Science",
    description: "Master Python for data analysis, visualization, and machine learning fundamentals.",
    lessonsCount: 32,
  },
  {
    id: "ux-design-fundamentals",
    title: "UX Design Fundamentals",
    instructor: "Marcus Chen",
    instructorAvatar: instructor1,
    thumbnail: courseThumb3,
    rating: 4.6,
    reviewCount: 5210,
    enrolled: 34800,
    price: 29.99,
    isFree: false,
    duration: "18 hours",
    level: "Beginner",
    category: "UX Design",
    description: "Learn user research, wireframing, prototyping, and usability testing from scratch.",
    lessonsCount: 28,
  },
  {
    id: "business-strategy",
    title: "Business Strategy & Analytics",
    instructor: "Dr. Sarah Mitchell",
    instructorAvatar: instructor2,
    thumbnail: courseThumb4,
    rating: 4.5,
    reviewCount: 3840,
    enrolled: 22100,
    price: 44.99,
    isFree: false,
    duration: "20 hours",
    level: "Advanced",
    category: "Business",
    description: "Strategic thinking and data-driven decision making for business leaders.",
    lessonsCount: 24,
  },
  {
    id: "photography-masterclass",
    title: "Photography Masterclass",
    instructor: "Marcus Chen",
    instructorAvatar: instructor1,
    thumbnail: courseThumb5,
    rating: 4.9,
    reviewCount: 6720,
    enrolled: 45300,
    price: 0,
    isFree: true,
    duration: "12 hours",
    level: "Beginner",
    category: "Photography",
    description: "From camera basics to advanced composition — capture stunning photos.",
    lessonsCount: 18,
  },
  {
    id: "advanced-react",
    title: "Advanced React Patterns & Performance",
    instructor: "Marcus Chen",
    instructorAvatar: instructor1,
    thumbnail: courseThumb6,
    rating: 4.8,
    reviewCount: 4560,
    enrolled: 28900,
    price: 54.99,
    isFree: false,
    duration: "16 hours",
    level: "Advanced",
    category: "Web Development",
    description: "Master advanced React patterns, state management, and performance optimization.",
    lessonsCount: 22,
  },
];

export const categories = [
  "Web Development",
  "Data Science",
  "UX Design",
  "Business",
  "Photography",
];
