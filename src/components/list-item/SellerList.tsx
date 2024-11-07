"use client";
import { HomeIcon, PersonIcon, SearchIcon, PackageIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink2 } from "../active-link/ActiveLink";
import { SellerItem } from "./SellerItem";
import { useState } from "react";
import { get } from "http";
import { useSubscribedProducts } from "@/hooks/auth/useCurrentUser";
import { ListItem } from "./ListItem";


export function SellerList(){



    const [showSellerItems, setShowSellerItems] = useState(false); 

    const subscribedItems = useSubscribedProducts().products;
    console.log(subscribedItems);


    return(
        <div className="grid grid-cols-1 w-2/3 h-5/6 mt-10 ml-10 overflow-hidden">
            <button
                    onClick={() => setShowSellerItems(!showSellerItems)}
                    className="bg-[#C1CFA1] text-white py-2 px-4 rounded mt-4 shadow-lg"
                >
                    {showSellerItems ? "Productos Subscritos" : "Historial Subscripciones"}
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
                        {subscribedItems?.map((item) => {
                            const name = item.name;
                            const cost = item.cost;
                            const id = item.id;
                            const all = {id, name, cost};
                            return <ListItem key={id} {...all} />;
                        })}
                    </>
                ) : (
                    <>

                    </>
                )}
            </div>
        </div>
    )
}


