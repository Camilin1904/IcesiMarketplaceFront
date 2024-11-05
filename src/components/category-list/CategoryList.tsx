"use client"
import { useGetByProduct } from "@/hooks/category/useGetByProduct"
import { Category } from "@/interface/Category"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

interface props{
    id:string
}

export async function CategoryList({id}:props){
    const categories:Category[] | null = await useGetByProduct(id)
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