import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from 'next/image'
import { Projects } from '../../components/Projects'


const page = ({ children }) => {
  return (
    <>

      <div className='mx-6'>
        <h1 className='text-2xl font-semibold mb-4'>My Projects</h1>
        <p className='mb-6'>
          A few projects highlighting my frontend skills and modern web tech.
        </p>
        <div>
          {/* <Carousel >
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>1. Bite (Bitetoothpastebits.com Clone)</CardTitle>
                    <CardDescription></CardDescription>

                  </CardHeader>
                  <CardContent>
                    Bite is a clone of the bitetoothpastebits.com website.
                    This project replicates the design and core functionality of the original site using HTML, CSS,
                    and JavaScript, focusing on responsive layouts, clean UI, and smooth user experience.
                  </CardContent>

                  <Image className='w-full px-5' src='/project-1.avif' width={400} height={300} alt='project-1-img' />


                  <CardFooter>
                    <a
                      href='https://mohanavenkatesh.github.io/Bite/'
                      target='_blank'
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline">View</Button>
                    </a>
                  </CardFooter>
                </Card>
              </CarouselItem>

              <CarouselItem>
                <Card>
                  <CardHeader>
                    <CardTitle>2. Spotify Premium Clone</CardTitle>
                    <CardDescription></CardDescription>

                  </CardHeader>
                  <CardContent>
                    <p>I cloned the Spotify Premium site as a beginner project using only HTML and CSS. This project helped me practice layout and styling by recreating the look and feel of the original Spotify Premium landing page. You can view the live project at the link below.</p>
                  </CardContent>
                  <Image className='w-full px-5' src='/project-2.avif' width={400} height={300} alt='project-2-img' />

                  <CardFooter>
                    <a
                      href='https://spotify-project-clone.netlify.app/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button variant="outline">View</Button>
                    </a>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className='hidden md:inline-flex' />
            <CarouselNext className='hidden md:inline-flex' />
          </Carousel> */}
          <Projects />
        </div>
      </div>



    </>
  )
}

export default page