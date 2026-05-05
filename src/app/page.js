// src/app/page.js

import Hero from "@/components/home/Hero";
import PopularCourses from "@/components/home/PopularCourses";
import LearningTips from "@/components/home/LearningTips";
import TopInstructors from "@/components/home/TopInstructors";
import NewReleases from "@/components/home/NewReleases";

async function getCourses() {
  const res = await fetch("http://localhost:3000/courses.json", {
    cache: "no-store",
    //no-store for now
    //force-cache for final version

  });

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