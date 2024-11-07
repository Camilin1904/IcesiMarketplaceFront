"use client";
import { SellerList } from "@/components/list-item/SellerList";
import { useGetUserById } from "@/hooks/auth/useGetUserById";

interface Props {
    id: string;
}

export const UserInfo = ({id}:Props) => {

    const user = useGetUserById(id).user;

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
                {user && <SellerList id={id}/>}
            </div>
        </div>
    );
}