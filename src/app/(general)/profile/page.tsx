"use client";
import { useEffect, useState } from "react";
import { ListItem } from "@/components/list-item/ListItem";
import { SellerItem } from "@/components/list-item/SellerItem";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogout";
import { User } from "@/interface/user";
import { useProfile } from "@/hooks/auth/useProfile";
import { SellerList } from "@/components/list-item/SellerList";


export default function Profile(){
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const res = useProfile().getProfile();
        res.then((user) => setUser(user));
    }, []);

    

    return(
        <div className="flex flex-col mt-10 items-center align-top h-screen">
            <div className="grid grid-cols-2 gap-0 bg-[#A5B68D] rounded-2xl w-4/5 h-3/4 shadow-lg">
                <div className="grid grid-cols-1 w-full h-full mt-10 ml-10">
                    <div className="font-bold text-lg h-1/">Nombre
                        <h1 className="font-normal text-base mt-1">{user?.name}</h1>
                    </div>
                    <div className="font-bold text-lg h-1/">Tipo
                        <h1 className="font-normal text-base mt-1">{user?.roles.join(', ')}</h1>
                    </div>
                    <div className="font-bold text-lg h-1/">Teléfono
                        <h1 className="font-normal text-base mt-1">{user?.phone}</h1>
                    </div>
                    <div className="font-bold text-lg h-1/">Email
                        <h1 className="font-normal text-base mt-1">{user?.email}</h1>
                    </div>
                </div>
                <SellerList />
            </div>
        </div>
    );
}