import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  gpa?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  workExperience: WorkExperience[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Company',
      period: '2023 - Present',
      description: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Startup Inc.',
      period: '2022 - 2023',
      description: 'Built responsive user interfaces and implemented modern web development practices. Worked on improving user experience and performance optimization.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Git', 'Figma']
    },
    {
      id: 3,
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2021 - 2022',
      description: 'Assisted in developing web applications and learned industry best practices. Contributed to various client projects and internal tools.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL']
    }
  ];

  educationHistory: Education[] = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      period: '2018 - 2022',
      description: 'Studied computer science fundamentals, algorithms, data structures, and software engineering principles.',
      gpa: '3.8/4.0'
    },
    {
      id: 2,
      degree: 'High School Diploma',
      institution: 'High School Name',
      period: '2016 - 2018',
      description: 'Completed high school education with focus on mathematics and sciences.',
      gpa: '3.9/4.0'
    }
  ];

  trackByExperience(index: number, experience: WorkExperience): number {
    return experience.id;
  }

  trackByEducation(index: number, education: Education): number {
    return education.id;
  }
}
