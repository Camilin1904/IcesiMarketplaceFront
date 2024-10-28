"use client";
import { useRouter } from "next/navigation";
import {useState} from "react";
import { useLogin } from "@/hooks/auth/useLogin";

export default function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const {login} = useLogin();

    const onSubmit = ()=>{
        if(!username||!password){
           alert('Please enter Username.')
        }
        else{
            login(username, password)
                .then(()=>router.push("/profile"))
                .catch((e:Error) => {
                    setUsername("");
                    setPassword("");
                    alert("Invalid Credentials")
                })
        }
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <h1>Login Page</h1>
            <label className="mt4">Login</label>
            <input type="text" className="w-80 h-8 px-2 border border-solid border-block rounded text-black" 
            value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <label className="mt4">Password</label>
            <input type="text" className="w-80 h-8 px-2 border border-solid border-block rounded text-black" 
            value={password} onChange={(e)=>setPassword(e.target.value)}/>


            <button className="mt-4 p-2 bg-gray-100 text-black rounded hover:bg-gray-600 transition-all"
            onClick={onSubmit}>
                Login
            </button>
        </div>
    )
}