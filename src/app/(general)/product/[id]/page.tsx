import { Metadata } from "next";
import { HeartIcon, CommentDiscussionIcon, HeartFillIcon } from "@primer/octicons-react";
import { use } from "react";
import { useGetProductById } from "@/hooks/product/useProduct";
import { useGetByProduct } from "@/hooks/category/useGetByProduct";
import { useGetAllCategories } from "@/hooks/category/useGetAllCategories";
import { CategoryList } from "@/components/category-list/CategoryList";
import { SubscribeButton } from "@/components/subscibe-button/SubscribeButton";
import ProductItems from "@/components/product-items/productItems";

interface Props {
    params: Promise<{id:string}>;

}

export async function generateMetadata({params}:Props): Promise<Metadata> {

    try{
        const {id} = await params;

        return{
            title: `#${id} - Product Detial`,
            description: `Product Detail ${id}`
        }
    }
    catch(error){
        return{
            title: `Error product`,
            description: `Product Detail error`
        }
    }
    
}


export default async function ProductDetail({params}:Props) {
    const id:string= (await params).id; 

    return (
        <div className="flex justify-center items-center">
            <ProductItems id={id}/>
        </div>
    )
    
}