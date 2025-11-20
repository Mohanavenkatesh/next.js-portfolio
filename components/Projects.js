"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Projects() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    const project = [
        {
            title: ". Bite (Bitetoothpastebits.com Clone)",
            description: `A full-featured clone of the bitetoothpastebits.com website. Built with HTML, CSS, and JavaScript, this project focuses on responsive layouts, clean UI, and smooth user experience, closely mirroring the original site's design and functionality.`,
            imageSrc: '/project-1.avif',
            herf: 'https://mohanavenkatesh.github.io/Bite/'
        },
        {
            title: ". Spotify Premium Landing Page Clone",
            description: `A pixel-perfect recreation of the Spotify Premium landing page using only HTML and CSS. This project demonstrates my attention to detail and ability to translate complex designs into code, while practicing layout and modern CSS techniques.`,
            imageSrc: '/project-2.avif',
            herf: 'https://spotify-project-clone.netlify.app/'
        },
        {
            title: ". JavaScript Mini Projects Collection",
            description: `A curated set of interactive JavaScript mini-projects, each highlighting a different concept or feature. This collection showcases my skills in building engaging web components and dynamic UI using vanilla JavaScript.`,
            imageSrc: '/project-3.avif',
            herf: 'https://javascript-mini-projects1.netlify.app/'
        },
        {
            title: ". Botanical Store (Plant Shop Website)",
            description: `A modern, responsive e-commerce website for a fictional plant shop. Built with HTML, CSS, and JavaScript, this project features product listings, a shopping cart UI, and a clean, nature-inspired design.`,
            imageSrc: '/project-4.avif',
            herf: 'https://plant-shop-website1.netlify.app/'
        },
        {
            title: ". Medical Treatment Landing Page",
            description: `A professional landing page for a medical treatment service. This project demonstrates my ability to design and implement clean, accessible layouts with a focus on clarity and user trust.`,
            imageSrc: '/project-5.avif',
            herf: 'https://medical-treatment.netlify.app/'
        },
    ]

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {project.map((items, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent>
                                    <span className="">{index + 1}</span>
                                    <span className="">{items.title}</span>
                                    <p className="pt-3">{items.description}</p>
                                    <Image className='w-full py-3' src={items.imageSrc} width={400} height={300} alt='project-1-img' />
                                    <a
                                        href={items.herf}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className="w-full"
                                    >
                                        <Button className='' variant="outline">View</Button>
                                    </a>

                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='hidden md:inline-flex' />
            <CarouselNext className='hidden md:inline-flex' />
        </Carousel >
    )
}
