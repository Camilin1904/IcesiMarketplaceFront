"use client";
import { useState, useEffect } from "react";
import { useSubscribedProducts, useSubscribedProducts2 } from "@/hooks/auth/useCurrentUser";
import { ListItem } from "./ListItem";
import { Product } from "@/interface/Product";

interface Props {
    id?: string;
}

export function SellerList({ id }: Props) {
    const [showSellerItems, setShowSellerItems] = useState(false);
    const { products: subscribedProducts } = useSubscribedProducts();
    const { products: subscribedProducts2 } = useSubscribedProducts2(id || "");

    const subscribedItems = id ? subscribedProducts2 : subscribedProducts;

    return (
        <div className="grid grid-cols-1 w-2/3 h-5/6 mt-10 ml-10 overflow-hidden">
            <button
                onClick={() => setShowSellerItems(!showSellerItems)}
                className="bg-[#C1CFA1] text-white py-2 px-4 rounded mt-4 shadow-lg"
            >
                {showSellerItems ? "Productos Subscritos" : "Historial Subscripciones"}
            </button>
            <div className="grid grid-cols-1 w-full h-fit mt-10 overflow-y-scroll overflow-x-hidden gap-12 
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
                            const image = item.image;
                            const name = item.name;
                            const cost = item.cost;
                            const id = item.id;
                            const all = { id, name, cost, image };
                            return <ListItem key={id} {...all} />;
                        })}
                    </>
                ) : (
                    <>
                    </>
                )}
            </div>
        </div>
    );
}


