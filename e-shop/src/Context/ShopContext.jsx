import React, { createContext } from 'react'
import AllProducts from "../Components/Assets/AllProducts.js"

export const ShopContext = createContext(null);

const ShopContextProvider =(props)=>{

    const contextValue ={AllProducts};

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;