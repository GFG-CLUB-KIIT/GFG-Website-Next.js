import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/logo.png';
import Image from 'next/image';
import {useTheme} from 'next-themes';
import useIsMounted from '../hooks/useIsMounted'



export const Navbar = () => {
  const isMounted = useIsMounted();

  const [active, setActive] = useState(false);

  const {theme, setTheme} = useTheme();

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-gray-100 dark:bg-purple-900 dark:lg:border-b-2 dark:border-blue-600 '>
        <div className="lg:pl-10 sm:pl-8 md:pl-8 md:p-3">
        <Link href='/'>
        <Image src={logo} width={67} height={50} alt="Picture of the author" />
        </Link>
        </div>
        <button
          className=' inline-flex p-3 m-2 hover:bg-gray-600 rounded lg:hidden text-black ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center  items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex  lg:w-32 hover:lg:border-b-4 hover:border-red-300 md:w-screen sm:w-screen px-3 py-2 h-20 square text-black font-medium items-center justify-center hover:bg-red-100 hover:text-black dark:hover:bg-purple-300 dark:hover:border-blue-600'>
                Home
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-32 hover:lg:border-b-4 hover:border-red-300 md:w-screen sm:w-screen px-3 py-2 h-20 square text-black font-medium items-center justify-center hover:bg-red-100 hover:text-black dark:hover:bg-purple-300 dark:hover:border-blue-600'>
                Events
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-32 hover:lg:border-b-4 hover:border-red-300 md:w-screen sm:w-screen px-3 py-2 h-20 square text-black font-medium items-center justify-center hover:bg-red-100 hover:text-black dark:hover:bg-purple-300 dark:hover:border-blue-600'>
                Projects
              </a>
            </Link>
            
            <Link href='/'>
              <a className='lg:inline-flex lg:w-32 hover:lg:border-b-4 hover:border-red-300  md:w-screen sm:w-screen px-3 py-2 h-20 square  text-black font-medium items-center justify-center hover:bg-red-100 hover:text-black dark:hover:bg-purple-300 dark:hover:border-blue-600'>
                Members
              </a>
            </Link>
            
            {/* <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="lg:inline-flex lg:w-16 md:w-screen sm:w-screen px-3 py-2 h-20 square  text-black font-medium items-center justify-center hover:text-black"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {isMounted.current && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-6 w-6 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
             */}
          </div>
        </div>
      </nav>
    </>
  );
};
