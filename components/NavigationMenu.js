"use client"

import * as React from "react"
import Link from "next/link"

import {
    NavigationMenu as NavigationMenuPrimitive,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

// Simple navigation: Home, Projects, Contact

export function NavigationMenu() {
    return (
        <div className='mx-2 mb-5'>
            <NavigationMenuPrimitive viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/">Home</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/projects">Projects</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/contact">Contact</Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenuPrimitive>
        </div>
    )
}

