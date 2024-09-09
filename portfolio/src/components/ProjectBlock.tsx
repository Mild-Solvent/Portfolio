// src/components/ProjectBlock.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Cover } from './ui/cover'

interface ProjectProps {
  project: {
    id: number
    title: string
    image: string
    description: string
  }
}

export default function ProjectBlock({ project }: ProjectProps) {
  return (
    <Link href={`/project/${project.id}`}>
      <Cover className="h-full">
        <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105 h-full">
          <Image src={project.image} alt={project.title} width={300} height={200} className="w-full object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      </Cover>
    </Link>
  )
}