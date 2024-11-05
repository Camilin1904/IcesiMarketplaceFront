"use client";
import { HomeIcon, PersonIcon, SearchIcon, PackageIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink2 } from "../active-link/ActiveLink";
import { Category } from "@/interface/Category";
import { useGetAllCategories } from "@/hooks/category/useGetAllCategories";
import path from "path";


/*
const categories=[
    {name:'Tecnologia', path:''},
    {name:'Dulces', path:''},
    {name:'Salados', path:''},
    {name:'Ropa y Accesorios', path:''},
    {name:'Otros', path:''},

]*/
export async function CategoryBar(){

    const categories: Category[] | null = await useGetAllCategories();

    return(
        <nav className="flex bg-[#A5B68D] p-2 m-2 rounded-xl text-black w-3/4 justify-center align-center shadow-lg">    
            <div className="h-15 flex items-center">
                <div className="flex flex-1 overflow-x-scroll"></div>
                        {
                            categories?.map(item => {
                                const props = {path: item.id, name: item.name}
                                return (
                                    <ActiveLink2 key={props.path} {...props} />
                                )
                            })
                        }
            </div>
                
        </nav>
    )
}