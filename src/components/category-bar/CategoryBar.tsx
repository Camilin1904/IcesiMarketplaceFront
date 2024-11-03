import { HomeIcon, PersonIcon, SearchIcon, PackageIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink2 } from "../active-link/ActiveLink";

const categories=[
    {name:'Tecnologia', path:''},
    {name:'Dulces', path:''},
    {name:'Salados', path:''},
    {name:'Ropa y Accesorios', path:''},
    {name:'Otros', path:''},

]
export function CategoryBar(){
    return(
        <nav className="flex bg-[#A5B68D] p-2 m-2 rounded-xl text-black w-3/4 justify-center align-center shadow-lg">    
            <div className="h-15 flex items-center">
                <div className="flex flex-1"></div>
                        {
                            categories.map(item => (
                                <ActiveLink2 key={item.name} {...item} />
                            ))
                        }
            </div>
                
        </nav>
    )
}