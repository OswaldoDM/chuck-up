import { Link } from "react-router-dom";
import { 
    animalIcon, 
    careerIcon, 
    celebrityIcon, 
    devIcon, 
    explicitIcon, 
    fashionIcon, 
    foodIcon, 
    historyIcon, 
    moneyIcon, 
    movieIcon, 
    musicIcon, 
    politicalIcon, 
    religionIcon, 
    scienceIcon, 
    sportIcon, 
    travelIcon} from "../helpers/icons";


export function AllCategories( {categories} ) {    
    
  return (
    <>
    {  (categories.length === 0)  
        ?
        <div className="spinner-3"></div>       

        :        
        categories.map( category =>        

          <Link key={ category } to={`/jokes/${ category }`}>
              <button>
                  {
                  category === 'animal' 
                  ? `${ category}${animalIcon}`
                  : category === 'dev'
                  ? `${category}${devIcon}`
                  : category === 'career'
                  ? `${category}${careerIcon}`
                  : category === 'explicit'
                  ? `${category}${explicitIcon}`
                  : category === 'food'
                  ? `${category}${foodIcon}`
                  : category === 'history'
                  ? `${category}${historyIcon}`
                  : category === 'celebrity'
                  ? `${category}${celebrityIcon}`
                  : category === 'movie'
                  ? `${category}${movieIcon}`
                  : category === 'travel'
                  ? `${category}${travelIcon}`
                  : category === 'money'
                  ? `${category}${moneyIcon}`
                  : category === 'sport'
                  ? `${category}${sportIcon}`
                  : category === 'political'
                  ? `${category}${politicalIcon}`
                  : category === 'music'
                  ? `${category}${musicIcon}`
                  : category === 'fashion'
                  ? `${category}${fashionIcon}`
                  : category === 'religion'
                  ? `${category}${religionIcon}`
                  : category === 'science'
                  && `${category}${scienceIcon}`                  
                  }                 
              </button>
          </Link>
      )      
    }
    </>
  )
}
