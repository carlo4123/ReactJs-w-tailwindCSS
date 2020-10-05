import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import {useAxiosGet} from '../hooks/httpRequest'


function Product(){
 
    const {id}=useParams()

    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`
    let product = useAxiosGet(url)

    let content = null

        if(product.error){
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
               
            if(product.loading){
                content =    <Loader></Loader>
            }
    
        if(product.data){ 
            console.log(product.data)
            content = 
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}true
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text-xl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
        }
    
        return (
       
            <div className="container mx-auto">
                {content}
                
            </div>
        )
}
export default Product