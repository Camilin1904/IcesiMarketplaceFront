"use client";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogout";

const user = {name: 'Carlos Perez', type: 'Comprador', phone: '1234567890', email: 'carlosperez@gmail.com'};

export default function Profile(){
    const {user:currentUser} = useCurrentUser();
    const {logout} = useLogout();
    return(
        <div className="flex flex-col mt-10 items-center align-top h-screen">
            <div className="grid grid-cols-2 gap-0 bg-[#A5B68D] rounded-2xl w-4/5 h-3/4 shadow-lg">
                <div className="grid grid-cols-1 w-full h-full mt-10 ml-10">
                    
                    <h1 className="font-bold text-lg h-1/">Nombre
                        <h1 className="font-normal text-base mt-1">{user.name}</h1>
                    </h1>
                    
                    <h1 className="font-bold text-lg h-1/2">Tipo de Usuario
                        <h1 className="font-normal text-base mt-1">{user.type}</h1>
                    </h1>
                    
                    <h1 className="font-bold text-lg h-1/2">Teléfono
                        <h1 className="font-normal text-base mt-1">{user.phone}</h1>
                    </h1>

                    <h1 className="font-bold text-lg h-1/2">Correo
                        <h1 className="font-normal text-base mt-1">{user.email}</h1>
                    </h1>
                    
                </div>
                <div className="grid grid-cols-1 w-full h-full mt-10 ml-10">
                    <h1 className="font-bold text-lg h-1/">Nombre
                        <h1 className="font-normal text-base mt-1">{user.name}</h1>
                    </h1>
                </div>
            </div>
            <button
                onClick={()=> logout}>
                    Logout
                </button>
        </div>
    )
    

}