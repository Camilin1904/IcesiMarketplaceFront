"use client";
import { useState } from "react";
import { ListItem } from "@/components/list-item/ListItem";
import { SellerItem } from "@/components/list-item/SellerItem";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogout";

const user = {name: 'Carlos Perez', type: 'Comprador', phone: '1234567890', email: 'carlosperez@gmail.com'};

export default function Profile(){
    const {user:currentUser} = useCurrentUser();
    const {logout} = useLogout();
    const [showSellerItems, setShowSellerItems] = useState(false);

    return(
        <div className="flex flex-col mt-10 items-center align-top h-screen">
            <div className="grid grid-cols-2 gap-0 bg-[#A5B68D] rounded-2xl w-4/5 h-3/4 shadow-lg">
                <div className="grid grid-cols-1 w-full h-full mt-10 ml-10">
                    <h1 className="font-bold text-lg h-1/">Nombre
                        <h1 className="font-normal text-base mt-1">{user.name}</h1>
                    </h1>
                    <h1 className="font-bold text-lg h-1/">Tipo
                        <h1 className="font-normal text-base mt-1">{user.type}</h1>
                    </h1>
                    <h1 className="font-bold text-lg h-1/">Teléfono
                        <h1 className="font-normal text-base mt-1">{user.phone}</h1>
                    </h1>
                    <h1 className="font-bold text-lg h-1/">Email
                        <h1 className="font-normal text-base mt-1">{user.email}</h1>
                    </h1>
                </div>
                
                <div className="grid grid-cols-1 w-2/3 h-5/6 mt-10 ml-10 overflow-hidden">
                <button
                        onClick={() => setShowSellerItems(!showSellerItems)}
                        className="bg-[#C1CFA1] text-white py-2 px-4 rounded mt-4 shadow-lg"
                    >
                        {showSellerItems ? "Productos" : "Historial"}
                </button>
                <div className="grid grid-cols-1 w-full h-full mt-10 overflow-scroll overflow-x-hidden gap-12 
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-2xl
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:rounded-2xl
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-[#A5B68D]
                dark:[&::-webkit-scrollbar-thumb]:bg-[#C1CFA1]
                ">
                    {showSellerItems ? (
                        <>
                            <SellerItem image="" name="Seller Item 1" cost={12500}/>
                            <SellerItem image="" name="Seller Item 2" cost={12500}/>
                            <SellerItem image="" name="Seller Item 3" cost={12500}/>
                            <SellerItem image="" name="Seller Item 4" cost={12500}/>
                            <SellerItem image="" name="Seller Item 5" cost={12500}/>
                        </>
                    ) : (
                        <>

                        </>
                    )}
                </div>
                </div>
            </div>
        </div>
    );
}