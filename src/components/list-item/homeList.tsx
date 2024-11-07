"use client";
import { useGetAllProducts } from "@/hooks/product/useGetAllProducts";
import { ListItem } from "./ListItem";

export function HomeList() {
    const products = useGetAllProducts();
    return(
        <div className="
            flex flex-row items-center justify-center mt-2 w-3/4 h-96 bg-[#C1CFA1] rounded-2xl rounded-r-lg  
            overflow-x-hidden
            overflow-y-scroll
            shadow-lg
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-2xl
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-2xl
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-[#C1CFA1]
            dark:[&::-webkit-scrollbar-thumb]:bg-[#A5B68D]">
                <div className="grid grid-cols-3 gap-12 mt-96">
                    {
                        products?.map(product=>{
                            const image = product.image;
                            const name = product.name;
                            const cost = product.cost;
                            const id = product.id;  
                            const all = {id, image, name, cost}
                            return (
                                <ListItem key={product.id} {...all} />
                            )
                        })
                    }
                </div>
            </div>
    )
}