"use client";
import { BookIcon } from "@primer/octicons-react";
import { useProfile } from "@/hooks/auth/useProfile";
import Link from "next/link";
import { useState, useEffect } from "react";

export const AdminButton = () => {

    const [isAdmin, setIsAdmin] = useState(false);
    
    const roles = useProfile()?.roles;

    useEffect(() => {
        if (roles && roles.includes("admin")) {
            setIsAdmin(true);
        }
    }, [roles]);

    return (
        <>
            {isAdmin && (
                <Link href="/admin" className="p-2 m-2 text-black">
                    <BookIcon className="mr-2" size={24} />
                </Link>
            )}
        </>
    );
}