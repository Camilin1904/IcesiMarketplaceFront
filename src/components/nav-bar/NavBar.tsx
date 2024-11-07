"use client"
import Cookies from 'js-cookie'
import { HomeIcon, PersonIcon, SearchIcon, PackageIcon, SignOutIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { useAppSelector } from "@/store";
import { useEffect, useState } from 'react';

const navItems=[
    {name:'Administrar', path:'/admin', role: 'admin'},
    {name:'¿Quienes Somos?', path:'/about', role: 'user'},
    {name:'Únetenos', path:'/join', role: 'user'},
    {name:'Mis productos', path:'/seller', role: 'seller'},
    {name:'Contacto', path:'/contact', role: 'user'},
]

export function NavBar(){
    const [roles, setRoles] = useState<string[]>([]);
    const appRoles = useAppSelector(state => state.user.roles);

    const updateRoles = () => {
        let currentRoles = appRoles;
        if(!currentRoles || currentRoles.length === 0){
            const user = Cookies.get('currentUser');
            if(user){
                currentRoles = JSON.parse(user).roles;
            }else{
                currentRoles = ['user'];
            }
        }
        setRoles(currentRoles);
    };

    useEffect(() => {
        updateRoles();
        window.addEventListener('userLogin', updateRoles);
        window.addEventListener('userLogout', updateRoles);

        return () => {
            window.removeEventListener('userLogin', updateRoles);
            window.removeEventListener('userLogout', updateRoles);
        };
    }, [appRoles]);

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
                    <Link data-key="profile" href="/profile" className="p-2 m-2 text-black">
                        <PersonIcon className="mr-2" size={24} />
                    </Link>
                </div>
                <div className="flex justify-center w-3/5">
                    {
                        navItems
                            .filter(item => roles.includes(item.role))
                            .map(item => (
                                <ActiveLink data-key={item.path} key={item.path} {...item} />
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