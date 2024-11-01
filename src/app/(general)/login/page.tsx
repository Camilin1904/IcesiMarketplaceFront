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
        <div className="flex flex-col items-center justify-center w-full h-full text-black">
            <h1 className="mt-20 mb-20 text-black font-serif text-[75px] leading-[32px]">Ingreso</h1>
            <div className="flex flex-col items-center justify-center w-full h-full text-white bg-[#A5B68D] max-w-96 h-96 rounded-xl">
                <label className="mt4 mb-4">Correo</label>
                <input type="text" className="w-80 h-8 px-2 border border-solid border-white rounded text-black rounded-xl bg-[#A5B68D] mb-4" 
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label className="mt4 mb-4">Contraseña</label>
                <input type="text" className="w-80 h-8 px-2 border border-solid border-white rounded text-black rounded-xl bg-[#A5B68D] mb-4" 
                value={password} onChange={(e)=>setPassword(e.target.value)}/>


                <button className="mt-4 p-2 bg-[#F5F1E6] text-black rounded-xl hover:bg-[#899a71] transition duration-150 ease-in-out hover:text-white hover:border-[#F5F1E6] w-28"
                onClick={onSubmit}>
                    Ingresar
                </button>
            </div>
            
        </div>
    )
}