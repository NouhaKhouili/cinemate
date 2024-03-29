import React from 'react'
import pagenotfound from "../assets/images/pagenotfound.png"
import { Link } from 'react-router-dom'
import { Button } from '../components/Button'
import { useTitle } from '../hooks/useTitle'

export const PageNotFound = ({title}) => {
   //eslint-disable-next-line
  const pageTitle = useTitle(`${title}`);
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p  className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404 , Oops!</p>
          <div className='max-w-lg'>
            <img src={pagenotfound} alt='404 page not found' className='rounded'></img>
          </div>
          <div className='flex justify-center my-4'>
            <Link to="/">
              <Button>Back To Cinemate</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
