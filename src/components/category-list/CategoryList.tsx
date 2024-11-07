"use client"
import { useGetByProduct } from "@/hooks/category/useGetByProduct"
import { Category } from "@/interface/Category"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

interface props{
    id:string
}

export  function CategoryList({id}:props){
    const categories = useGetByProduct(id);
    return(
        <>
            {
                 categories.then((categories)=>categories?.map((category: any)=> {
                    return(
                        <div key={category.id} className="flex bg-white text-black rounded-2xl h-10 w-48 justify-center items-center mt-5">  
                            {category.name}
                        </div>
                    )
                }))
            }
        </>
    )
}