import { HomeIcon, PersonIcon, SearchIcon, PackageIcon, SignOutIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { AdminButton } from "./AdminButton";
import { SearchBar } from "./SearchBar";
const navItems=[
    {name:'¿Quienes Somos?', path:'/about'},
    {name:'Únetenos', path:'/join'},
    {name:'Mis productos', path:'/seller'},
    {name:'Contacto', path:'/contact'},
]


export function NavBar(){

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    }

    return(
        <nav className="flex  bg-opacity-30 p-2 m-2 rounded text-black ">
            <div className="flex items-center w-full">
                <div className="flex justify-start w-1/5">
                    <Link data-key="logout" href="/logout" className="p-2 m-2 text-black">
                        <SignOutIcon className="mr-2" size={24} />
                    </Link>
                    <Link href="/home" className="p-2 m-2 text-black">
                        <HomeIcon className="mr-2" size={24} />
                    </Link>
                    <Link href="/profile" className="p-2 m-2 text-black">
                        <PersonIcon className="mr-2" size={24} />
                    </Link>
                    <AdminButton />
                </div>
                <div className="flex justify-center w-3/5">
                    {
                        navItems.map(item=>(
                            <ActiveLink key={item.path}{...item}/>
                        ))
                    }
                </div>
                <div className="flex w-1/5 justify-end">
                    <SearchBar />
                </div>
            </div>
        </nav>
    )
}