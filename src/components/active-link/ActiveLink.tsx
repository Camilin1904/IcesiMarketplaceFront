"use client";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";
import Link from "next/link";
interface Props{
    path: string;
    name:string;
}

export const ActiveLink = ({path, name}:Props) =>{
    const pathname = usePathname();
    return (
        <Link href={path} className={`p-2 m-2 text-white ${style.link} ${pathname===path?style.active: ""}`}>
            {name}
        </Link>
    )

}