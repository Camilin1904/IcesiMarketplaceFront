import { HomeIcon, PersonIcon, SearchIcon, PackageIcon, SignOutIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
const navItems=[
    {name:'¿Quienes Somos?', path:'/about'},
    {name:'Únetenos', path:'/pricing'},
    {name:'Mis productos', path:'/seller'},
    {name:'Contacto', path:'/contact'},

]


export function NavBar(){
    return(
        <nav className="flex  bg-opacity-30 p-2 m-2 rounded text-black ">

                <div className="flex items-center w-full">
                    <div className="flex justify-start w-1/5">
                        <Link href="/logout" className="p-2 m-2 text-black">
                            <SignOutIcon className="mr-2" size={24} />
                        </Link>
                        <Link href="/home" className="p-2 m-2 text-black">
                            <HomeIcon className="mr-2" size={24} />
                        </Link>
                        <Link href="/" className="p-2 m-2 text-black">
                            <PersonIcon className="mr-2" size={24} />
                        </Link>
                    </div>
                    <div className="flex justify-center w-3/5">
                        {
                            navItems.map(item=>(
                                <ActiveLink key={item.path}{...item}/>
                            ))
                        }
                    </div>
                    <div className="flex w-1/5 justify-end">
                        <div className="flex align-middle justify-center h-9 rounded-2xl bg-[#A5B68D] shadow-lg">
                            <SearchIcon className="m-1" size={24} />
                            <input type="text" className="bg-[#A5B68D] appearance-none border-none mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-black" placeholder="Buscar" />
                            <label className="text-[25px]">|</label>
                            <PackageIcon className="m-1" size={24} />
                        </div>
                    </div>
                </div>
                
                
            </nav>
    )
}