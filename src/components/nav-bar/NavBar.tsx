import { HomeIcon, PersonIcon, SearchIcon, PackageIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems=[
    {name:'¿Quienes Somos?', path:'/about'},
    {name:'Únetenos', path:'/pricing'},
    {name:'Contacto', path:'/contact'},

]
export function NavBar(){
    return(
        <nav className="flex  bg-opacity-30 p-2 m-2 rounded text-black ">
                <Link href="/" className="p-2 m-2 text-black">
                    <HomeIcon className="mr-2" size={24} />
                </Link>
                <Link href="/" className="p-2 m-2 text-black">
                    <PersonIcon className="mr-2" size={24} />
                </Link>
                
                <div className="flex flex-1"></div>
                {
                    navItems.map(item=>(
                        <ActiveLink key={item.path}{...item}/>
                    ))
                }
                <div className="h-9 mt-2 rounded-2xl bg-[#A5B68D]">
                    <SearchIcon className="mr-2 mt-1 ml-1" size={24} />
                    <input type="text" className="bg-[#A5B68D]" />
                    <label className="text-[25px]">|</label>
                    <PackageIcon className="mr-2 ml-1" size={24} />
                </div>
                
            </nav>
    )
}