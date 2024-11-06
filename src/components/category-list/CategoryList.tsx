"use client"
import { useGetByProduct } from "@/hooks/category/useGetByProduct"
import { Category } from "@/interface/Category"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

interface props{
    id:string
}

export  function CategoryList({id}:props){
    var categories:Category[] | null =  [];
    useGetByProduct(id).then((data)=>{
        categories = data;
    })
    console.log(categories)
    return(
        <>
            {
                 categories?.map((category: any)=> {
                    return(
                        <div className="flex bg-white text-black rounded-2xl h-10 w-48 justify-center items-center mt-5">  
                            {category.name}
                        </div>
                    )
                })
            }
        </>
    )
}