// src/app/page.js

import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import LearningTips from "@/components/home/LearningTips";
import TopInstructors from "@/components/home/TopInstructors";
import NewReleases from "@/components/home/NewReleases";

async function getCourses() {
const res = await fetch(
  `${process.env.NEXT_PUBLIC_APP_URL}/courses.json`,
  {
    cache: "no-store",
  }
);

  return res.json();
}

export default async function Home() {
  const courses = await getCourses();

  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <Hero />
      <PopularCourses courses={topCourses} />
      <NewReleases />
      <LearningTips />
      <TopInstructors />
      
    </div>
  );
}