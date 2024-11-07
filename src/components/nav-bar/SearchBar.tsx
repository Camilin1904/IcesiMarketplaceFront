"use client";
import { SearchIcon, PackageIcon } from "@primer/octicons-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
    const router = useRouter();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchValue = (e.target as HTMLFormElement).searchbar.value;
        Cookies.set('filter', '/name=' + searchValue, {expires: 1, sameSite: 'strict'});
        router.push('/find');
    }

    return (
        <div className="flex align-middle justify-center h-9 rounded-2xl bg-[#A5B68D] shadow-lg">
            <SearchIcon className="m-1" size={24} />
            <form onSubmit={onSubmit}>
                <input id='searchbar' type="text" className="bg-[#A5B68D] appearance-none border-none mr-3 py-1 px-2 leading-tight focus:outline-none placeholder-black" placeholder="Buscar" />
            </form>
            <label className="text-[25px]">|</label>
            <PackageIcon className="m-1" size={24} />
        </div>
    );
}