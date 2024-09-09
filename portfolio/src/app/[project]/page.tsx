// src/app/[project]/page.tsx
'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  image: string
  description: string
  details: string
}

export default function ProjectDetail({ params }: { params: { project: string } }) {
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Simulating data fetch. In a real app, you'd fetch this from an API or database
    const fetchedProject: Project = {
      id: parseInt(params.project),
      title: `Project ${params.project}`,
      image: `/project${params.project}.jpg`,
      description: `Short description for Project ${params.project}`,
      details: `Detailed information about Project ${params.project}. This is where you'd put a longer description, technical details, challenges faced, solutions implemented, etc.`
    }
    setProject(fetchedProject)
    setIsVisible(true)
  }, [params.project])

  if (!project) return null

  return (
    <div className={`fixed inset-0 bg-white z-50 overflow-auto transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 py-8">
        <button onClick={() => { setIsVisible(false); setTimeout(() => router.push('/'), 500) }} className="mb-4 bg-black text-white px-4 py-2 rounded">
          Back to Projects
        </button>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image src={project.image} alt={project.title} width={1200} height={600} className="w-full object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl mb-4">{project.description}</p>
            <div className="prose max-w-none">
              <p>{project.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}