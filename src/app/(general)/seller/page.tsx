"use client"
import { CategoryBar } from "@/components/category-bar/CategoryBar"
import { SellerItem } from "@/components/list-item/SellerItem"
import { FeedPlusIcon } from "@primer/octicons-react"
import { useMyProducts } from "@/hooks/product/useProduct"
import Link from 'next/link'

export default function SellerPage() {

    const products = useMyProducts().products;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-row items-center justify-center mb-0">
                <label className="font-serif text-[75px] text-black font-light mr-5">Tus Productos</label>
                <a href="/product/create">
                    <FeedPlusIcon className="text-[#A5B68D]" size={100}/>
                </a>
            </div>
            <div className="
            flex flex-row items-center justify-center w-3/4 h-96 bg-[#C1CFA1] rounded-2xl rounded-r-lg  
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
                <div className="grid grid-cols-3 mt-80">{
                        products?.map(product=>{
                            const image = product.image;
                            const name = product.name;
                            const cost = product.cost;
                            const id = product.id;  
                            const all = {id, image, name, cost}
                            return (
                                <SellerItem key={product.id} {...all} />
                            )
                        })
                    }
                </div>
        </div>
            
        </div>
    )
}