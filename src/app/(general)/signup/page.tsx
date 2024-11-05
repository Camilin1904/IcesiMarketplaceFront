"use client";
import { useRouter } from "next/navigation";
import {useState} from "react";
import { useSignUp } from "@/hooks/auth/useSignUp";

export default function LoginPage(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const router = useRouter();
    const {signUp} = useSignUp();

    const onSubmit = ()=>{
        if(!username||!password){
           alert('Please enter Username.')
        }
        else{
            signUp(name, username, password)
                .then(()=>router.push("/login"))
                .catch((e:Error) => {
                    setUsername("");
                    setPassword("");
                    alert("Invalid data")
                })
        }
    }
    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-black">
            <h1 className="mt-20 mb-20 text-black font-serif text-[75px] leading-[32px]">Registro</h1>
            <div className="flex flex-col items-center justify-center w-1/2 h-96 text-white bg-[#A5B68D] rounded-xl shadow-lg">
                <label className="mt4 mb-4">Nombre</label>
                <input type="text" className="w-80 h-8 px-2 border border-solid border-white text-white rounded-xl bg-[#A5B68D] mb-4 focus:outline-none" 
                value={name} onChange={(e)=>setName(e.target.value)}/>
                <label className="mt4 mb-4">Correo</label>
                <input type="text" className="w-80 h-8 px-2 border border-solid border-white text-white rounded-xl bg-[#A5B68D] mb-4 focus:outline-none" 
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label className="mt4 mb-4">Contraseña</label>
                <input type="text" className="w-80 h-8 px-2 border border-solid border-white text-white rounded-xl bg-[#A5B68D] mb-4 focus:outline-none" 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className="mt-4 p-2 bg-[#F5F1E6] text-black rounded-xl hover:bg-[#A5B68D] transition duration-150 ease-in-out hover:text-white hover:border-[#F5F1E6] w-28"
                onClick={onSubmit}>
                    Registrarse
                </button>
            </div>    
        </div>
    )
}