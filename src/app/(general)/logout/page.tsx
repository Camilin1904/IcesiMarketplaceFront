"use client";
import { useRouter } from "next/navigation";
import {useState, useEffect} from "react";
import { useLogout } from "@/hooks/auth/useLogout";
import { log } from "console";
import { remove } from "@/store/user/userSlice"

export default function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const {logout} = useLogout();

    useEffect(() => {
        logout();
        remove();
        router.push("/login");
    }, [logout, router]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-black">
            Loggin out...

        </div>
    )
}