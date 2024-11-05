"use client";
import { useRouter } from "next/navigation";
import {useState} from "react";
import { useLogout } from "@/hooks/auth/useLogout";
import { log } from "console";

export default function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const {logout} = useLogout();

    logout();
    router.push("/login");
    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-black">
            Loggin out...

        </div>
    )
}