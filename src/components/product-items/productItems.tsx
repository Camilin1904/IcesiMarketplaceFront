"use client";

import { useGetProductById } from "@/hooks/product/useProduct";
import { useGetByProduct } from "@/hooks/category/useGetByProduct";
import { useGetAllCategories } from "@/hooks/category/useGetAllCategories";
import { CategoryList } from "@/components/category-list/CategoryList";
import { SubscribeButton } from "@/components/subscibe-button/SubscribeButton";
import { CommentDiscussionIcon } from "@primer/octicons-react";

interface props {
    id: string;
}

export default function ProductItems({ id }: props) {
    const product = useGetProductById(id);


    return (
        <>
        {
            product.then((product) => {
                return(
                    <div className="flex flex-col bg-[#A5B68D] rounded-2xl w-4/5 items-center justify-center shadow-lg">
                        <div className="flex">
                            <div className="flex flex-col justify-center items-center mt-4">
                                <img src={product ? product.image : "https://via.placeholder.com/150"} className="w-80 m-5 rounded-2xl" />
                                <SubscribeButton key={id} {...{ pId: id }} />
                            </div>
                            <div className="flex flex-col ml-20 mt-12">
                                <h2 className="text-3xl font-bold mb-36">{product?.name}</h2>
                                <label className="text-xl mb-5">Precio</label>
                                <button className="bg-[#E7CCCC] rounded-2xl w-48 h-10 text-black">${product?.cost} COP</button>
                            </div>
                            <div className="mt-14 ml-20">
                                <div className="flex mb-36">
                                    <h3 className="mr-5 text-lg">Placeholder name</h3>
                                    <div className="flex flex-col bg-[#F5F1E6] w-10 items-center justify-center rounded-2xl">
                                        <CommentDiscussionIcon size={24} className="text-[#A5B68D]" />
                                    </div>
                                </div>
                                <label className="text-xl">Categorias</label>
                                <CategoryList key={id} {...{ id }} />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex w-4/5 h-48 m-8 justify-center
                            overflow-y-auto
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:rounded-2xl
                            [&::-webkit-scrollbar-track]:bg-gray-100
                            [&::-webkit-scrollbar-thumb]:rounded-2xl
                            [&::-webkit-scrollbar-thumb]:bg-gray-300
                            dark:[&::-webkit-scrollbar-track]:bg-[#A5B68D]
                            dark:[&::-webkit-scrollbar-thumb]:bg-[#C1CFA1]">
                                {product?.description}
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
        
    );
}