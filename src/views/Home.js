
import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import ProductCard from '../components/ProductCard'
import {useAxiosGet} from '../hooks/httpRequest'


function Home(){

    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products?page=1&limit=10`
    let products = useAxiosGet(url)

   
    
    let content = null



        if(products.error){
            console.log('error')
            content =  <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
        }
               
            if(products.loading){
                content =<Loader></Loader>
            }

            if(products.data){
                content = products.data.map((products,key)=>{
                  return  <div key={key}>
                        <ProductCard product={products}/>
                    </div>
                })
            }
    return(
        
        <div> 
        <h1 className="font-bold text-2xl mb-3">Best Seller</h1>
        <p>{content}</p>

        </div>
       
    )
}
export default Home