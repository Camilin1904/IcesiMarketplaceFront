"use client";
import { useGetByProduct } from "@/hooks/category/useGetByProduct"

interface props{
    id:string
}

export async function CategoryList({id}:props){
    const categories = useGetByProduct(id)
    return(
        <>
            {
                (await categories).map((category, index) => {
                    return(
                        <div key={index} className="flex bg-white text-black rounded-2xl h-10 w-48 justify-center items-center mt-5">  
                            {category.name}
                        </div>
                    )
                })
            }
        </>
    )
}