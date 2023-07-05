import { cn } from '@/lib/utils'

interface FileProps {
  className?: string
  width?: string
  height?: string
}

export function File({ className, width = '24', height = '24' }: FileProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      className={cn('', className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H13C13.5523 9 14 9.44772 14 10V14C14 14.5523 14.4477 15 15 15H21C21.5523 15 22 14.5523 22 14V10C22 9.44772 22.4477 9 23 9H25L29.8284 13.8284C30.5786 14.5786 31 15.596 31 16.6569V28C31 28.7956 30.6839 29.5587 30.1213 30.1213C29.5587 30.6839 28.7956 31 28 31H12C10.3431 31 9 29.6569 9 28V12C9 11.2044 9.31607 10.4413 9.87868 9.87868Z"
        fill="url(#paint0_linear_120_26898)"
        fillOpacity="0.24"
      ></path>
      <path
        d="M9 18V12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9H13C13.5523 9 14 9.44772 14 10V14C14 14.5523 14.4477 15 15 15H21C21.5523 15 22 14.5523 22 14V10C22 9.44772 22.4477 9 23 9H24.1716C24.702 9 25.2107 9.21071 25.5858 9.58579L29.8284 13.8284C30.5786 14.5786 31 15.596 31 16.6569V21V28C31 28.7956 30.6839 29.5587 30.1213 30.1213C29.5587 30.6839 28.7956 31 28 31H23"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M9 29.25C13.25 29.25 13.25 24 13.25 24C13.25 24 13.25 29.25 17.5 29.25C13.25 29.25 13.25 34.5 13.25 34.5C13.25 34.5 13.25 29.25 9 29.25Z"
        fill="white"
      ></path>
      <path
        d="M5 24.25C7.25 24.25 7.25 22 7.25 22C7.25 22 7.25 24.25 9.5 24.25C7.25 24.25 7.25 26.5 7.25 26.5C7.25 26.5 7.25 24.25 5 24.25Z"
        fill="white"
      ></path>
      <path
        d="M7 32.5H7.01M17.5 22H17.51M17.5 34.5H17.51M13.25 24C13.25 24 13.25 29.25 9 29.25C13.25 29.25 13.25 34.5 13.25 34.5C13.25 34.5 13.25 29.25 17.5 29.25C13.25 29.25 13.25 24 13.25 24ZM7.25 22C7.25 22 7.25 24.25 5 24.25C7.25 24.25 7.25 26.5 7.25 26.5C7.25 26.5 7.25 24.25 9.5 24.25C7.25 24.25 7.25 22 7.25 22Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <rect
        opacity="0.32"
        x="18"
        y="9"
        width="2"
        height="4"
        rx="0.5"
        fill="white"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear_120_26898"
          x1="20"
          y1="9"
          x2="20"
          y2="31"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0"></stop>
          <stop offset="1" stopColor="white"></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
