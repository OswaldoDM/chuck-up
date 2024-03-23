

export async function getJokeByCategory ( category ) {

    const api = `https://api.chucknorris.io/jokes/random?category=${ category }`
    const resp = await fetch( api )
    const data = await resp.json()
      

    return {
        categoryStr: data.categories[0],        
        joke: data.value
    };  
    
};

export async function getChuckCategories () {

    const api = `https://api.chucknorris.io/jokes/categories`
    const resp = await fetch( api )
    const data = await resp.json()
      

    return data;
    
};
    
       