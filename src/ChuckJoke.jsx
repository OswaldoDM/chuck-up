import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import * as API from '../src/services/getChuck'
import { Logo } from "./components/Logo"


export function ChuckJoke() {

    const { category } = useParams()

    const [jokes , setJokes] = useState( {} )
    let   [update, setUpdate] = useState(false)

    const { categoryStr, joke } = jokes    
    
    useEffect(() => {
      
        API.getJokeByCategory( category )
            .then( setJokes )
            .catch( console.error )
      
    }, [update]);
    
    const handleClick = () => setUpdate(!update)
    
    
  return (
    <>
    <div className="container jokes">

        <Logo />

        {
            ( !joke ) 

            ?
            <div className="spinner-3"></div>
        
            :
            <div>
                <h1 className="category font-04B">{categoryStr}</h1>
                <p className="joke">{joke}</p>              
                <button onClick={handleClick}> Next </button>
            </div>
        }        

        <div>
            <Link to='/'>
                <h1 className="back font-04B">
                Back to categories
                </h1>
            </Link>
        </div>

    </div>    
    </>
  )
}
        
       
    
