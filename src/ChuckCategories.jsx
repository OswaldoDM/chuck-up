import { useEffect, useState } from "react";

import * as API from '../src/services/getChuck';

import { AllCategories } from "./components/AllCategories";
import { Logo } from "./components/Logo";


export function ChuckCategories() {

    const [ categories, setCategories ] = useState( [] );
    

    useEffect(() => {
      
    API.getChuckCategories()
        .then( setCategories )
        .catch( console.error )
      
    }, []);    
    

  return (
    <>
    <section>
    <div className="container app">

     <Logo />

      <h1 className="font-04B">Choose a Category</h1>
      
      <div className="cat-container">        

        <AllCategories categories = { categories }/>
    
      </div>
      
    </div>
    </section>
    </>
    )
}

        