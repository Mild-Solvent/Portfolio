'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import LandingPage from '../components/LandingPage';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer'; // Assuming Footer is a separate component

interface Project {
  id: number;
  title: string;
  image: string;
}

interface Category {
  id: string;
  title: string;
  color: string;
  projects: Project[];
}

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Simulating fetching categories and their projects
    // Replace this with actual API calls in a real application
    const fetchedCategories: Category[] = [
      { id: '3d', title: '3D Art', color: 'bg-emerald-900', projects: [] },
      { id: '2d', title: '2D Art', color: 'bg-sky-600', projects: [] },
      { id: 'traditional', title: 'Traditional Art', color: 'bg-purple-900', projects: [] },
      { id: 'coding', title: 'Coding Projects', color: 'bg-orange-600', projects: [] },
    ];

    // Simulating fetching projects for each category
    const fetchProjects = async () => {
      const updatedCategories = await Promise.all(fetchedCategories.map(async (category) => {
        // Replace this with actual API call to fetch projects for each category
        const projects = await fetchProjectsForCategory(category.id);
        return { ...category, projects };
      }));
      setCategories(updatedCategories);
    };

    fetchProjects();
  }, []);

  return (
    <>
      {showLanding ? (
        <LandingPage onEnter={() => setShowLanding(false)} />
      ) : (
        <>
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-center">Portfolio Categories</h1>
            <div className="flex justify-between gap-4">
              {categories.map((category) => (
                <Link href={`/category/${category.id}`} key={category.id} className="w-1/4">
                  <Card title={category.title} icon={<CategoryIcon />} projects={category.projects}>
                    <CanvasRevealEffect
                      animationSpeed={3}
                      containerClassName={category.color}
                      colors={[[255, 255, 255]]}
                      dotSize={2}
                    />
                    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  projects,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  projects: Project[];
}) => {
  const [hovered, setHovered] = React.useState(false);
  const projectImage = projects.length > 0 ? projects[0].image : '/src/storage/test.png';

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] w-full mx-auto p-4 relative h-64 sm:h-80 md:h-96"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
            <Image
              src={projectImage}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="opacity-50"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-100 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const CategoryIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

// Simulated function to fetch projects for a category
async function fetchProjectsForCategory(categoryId: string): Promise<Project[]> {
  // Replace this with actual API call in a real application
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'Project 1', image: '/project1.jpg' },
        { id: 2, title: 'Project 2', image: '/project2.jpg' },
        // Add more projects as needed
      ]);
    }, 500);
  });
}
