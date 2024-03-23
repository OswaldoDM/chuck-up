import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChuckCategories } from "./ChuckCategories"
import { ChuckJoke } from "./ChuckJoke"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"


export function ChuckApp() {  
    
    
    return (
    <>  
        <Navbar />
               
        <BrowserRouter
        basename={import.meta.env.DEV ? '/' : '/chuck-jokes-app/'} 
        >

        <Routes>
            <Route path="/" element={ <ChuckCategories /> }></Route>
            <Route path="jokes/:category" element= { <ChuckJoke /> }></Route>
        </Routes>
        
        </BrowserRouter>

        <Footer />
    </>
    )
};