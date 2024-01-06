import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Backup from '../assets/images/backup.png'
import { Rating } from 'flowbite-react';
import { useTitle } from '../hooks/useTitle';


export const MovieDetail = () => {
const params= useParams();
console.log(params);
 const [movie,setMovie]=useState({}); 
 const image= movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup
  //eslint-disable-next-line
 const pageTitle = useTitle(`${movie.title}`);

useEffect(()=> {
  async function fetchMovie (){
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`);
    const json = await response.json();
    setMovie(json);
    console.log(json)
  }
  fetchMovie();
},[params.id])

  return (
    <main>
    <section className='flex justify-around flex-wrap py-4'>
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={movie.title} />
        </div>  
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className='font-bold text-4xl text-center lg:text-left'>{movie.title}</h1>
          <p className='my-4'>{movie.overview}</p>
          
          {movie.genres ? (<p  className='flex flex-wrap gap-2 my-7'>
            {movie.genres.map((genre)=>(
               <span className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2'key={genre.id}>{genre.name}</span>
            ))}
           
          </p>): ''}


{/* <div className="flex items-center">
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">4.95</p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <Link to="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
       {movie.vote_count} 73 reviews
      </Link>
    </div> */}

    <Rating>
      <Rating.Star style={{ color: 'yellow' }}  />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average} </p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <Link to="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
      {movie.vote_count}  reviews
      </Link>
    </Rating>

    <p className='my-4'>
      <span className='mr-2 font-bold'>Runtime :</span>
      <span className='mr-2'>{movie.runtime}</span>
    </p>

    <p className='my-4'>
      <span className='mr-2 font-bold'>Budget :</span>
      <span className='mr-2'>{movie.budget}</span>
    </p>

    <p className='my-4'>
      <span className='mr-2 font-bold'>Revenue :</span>
      <span className='mr-2'>{movie.revenue}</span>
    </p>

    <p className='my-4'>
      <span className='mr-2 font-bold'>Release :</span>
      <span className='mr-2'>{movie.release_date}</span>
    </p>

    <p className='my-4'>
      <span className='mr-2 font-bold'>IMDB Code :</span>
      <Link to={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'rel='noreferrer' className='mr-2'>{movie.imdb_id}</Link>
    </p>

        </div>
    </section>
  </main>
  )
}
