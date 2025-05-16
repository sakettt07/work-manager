"use client";
import Link from 'next/link';
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-red-800 py-3 h-16 px-5 flex items-center justify-between '>
        <div>
            <h1 className='text-black text-2xl'>WorkManager</h1>
        </div>
        <div>
            <ul className='flex gap-3'>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/add-task'}>AddTask</Link>
                </li>
                <li>
                    <Link href={'/show-task'}>ShowTasks</Link>
                </li>
            </ul>
        </div>
        <div>
            <ul className='flex gap-3'>
                <li>
                    <a href="">Login</a>

                </li>
                <li>
                    <a href="">SignUp</a>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar