import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"

const page = ({ children }) => {
  return (
    <>
      <div className='flex flex-col mx-6 items-start'>
        <h1 className='text-2xl font-semibold mb-4'>Contact Me</h1>
        <p className='mb-6'>
          I'd love to connect! Feel free to reach out to me through any of the platforms below.
          Whether you have a question, want to collaborate, or just want to say hi, my inbox is always open.
        </p>
        <div className='flex flex-col gap-3'>
          <div>
            <Link href='https://github.com/Mohanavenkatesh' target='_blank' rel='noopener noreferrer'>
              <Button variant="outline" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.178 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.195 22 16.444 22 12.021 22 6.484 17.523 2 12 2Z"
                  />
                </svg>
                Github
              </Button>
            </Link>
          </div>
          <div>
            <Link href='https://www.linkedin.com/in/mohanavenkatesh-a-3574382ab/' target='_blank' rel='noopener noreferrer'>
              <Button variant="outline" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 10v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="7" cy="7" r="1.1" fill="currentColor" />
                  <path d="M10.5 13.5V17h2v-2.1c0-.6.4-1.4 1.3-1.4s1.2.8 1.2 1.4V17h2v-2.7c0-1.7-1-2.5-2.3-2.5-1.1 0-1.6.6-1.9 1.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Linkedin
              </Button>
            </Link>
          </div>
          <div>
            <Link href='https://www.instagram.com/mohanavenkatesh.a/' target='_blank' rel='noopener noreferrer'>
              <Button variant="outline" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                </svg>
                Instagram
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default page