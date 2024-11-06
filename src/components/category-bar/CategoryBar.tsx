"use client";
import { HomeIcon, PersonIcon, SearchIcon, PackageIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink2 } from "../active-link/ActiveLink";
import { Category } from "@/interface/Category";
import { useGetAllCategories } from "@/hooks/category/useGetAllCategories";
import path from "path";
import { useAppDispatch } from "@/store";
import { initFilter } from "@/store/filter/filterSlice";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";


/*
const categories=[
    {name:'Tecnologia', path:''},
    {name:'Dulces', path:''},
    {name:'Salados', path:''},
    {name:'Ropa y Accesorios', path:''},
    {name:'Otros', path:''},

]*/
export async function CategoryBar(){
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [categories, setCategories] = useState<Category[] | null>(null);

    useEffect(() => {
        async function fetchCategories() {
            const categoriesData = await useGetAllCategories();
            setCategories(categoriesData);
        }
        fetchCategories();
    }, []);

    const defineFilter = (category: string) => {
        dispatch(initFilter(`/categories=${category}`));
        Cookies.set('filter', `/categories=${category}`, {expires: 1, sameSite: 'strict'});
        router.push(`/find`);
    };

    return(
        <nav className="flex bg-[#A5B68D] p-2 m-2 rounded-xl text-black w-3/4 justify-center align-center shadow-lg">    
            <div className="h-15 flex items-center">
                <div className="flex flex-1 overflow-x-scroll"></div>
                        {
                            categories?.map(item => {
                                const props = {path: item.id, name: item.name}
                                return (
                                    <button value={item.id} onClick={()=>defineFilter(item.name)} className="flex justify-center align-center w-40 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] p-2 m-2 mr-5 ml-5 text-black rounded-3xl hover:text-white">
                                        {item.name}
                                    </button>
                                )
                            })
                        }
            </div>
                
        </nav>
    )
}