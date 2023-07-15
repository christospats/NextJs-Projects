"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const router = useRouter();
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent'>
            <Link href="/" className='flex justify-center items-center'>
                <Image src="./home.svg" alt="home" width={30} height={18} className='object-contain'/>
            </Link>
            <CustomButton 
                title="Test 1"
                btnStyle = "button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                handleClick={() => (router.push('/test1'))}
            />
            <CustomButton
                title='Test 2'
                btnStyle = "button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                handleClick={() => (router.push("/test2"))}
            />
            <CustomButton
                title='Test 3'
                btnStyle = "button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                handleClick={() => (router.push("/test3"))}
            />
            <CustomButton
                title='Test 4'
                btnStyle = "button"
                containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                handleClick={() => (router.push("/test4"))}
            />
        </nav>
    </header>
  )
}

export default Navbar