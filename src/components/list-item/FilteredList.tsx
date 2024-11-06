"use client";
import { useFilterProducts, useGetAllProducts } from "@/hooks/product/useProduct"
import { ListItem } from "@/components/list-item/ListItem"
import { useAppSelector } from "@/store";


export function FilteredList() {
    const filter = useAppSelector(state=>state.category);
    const products = useFilterProducts(filter.category)

    return (
        <>
            {
                products.then(products=>products.map(product=>{
                    const name = product.name;
                    const cost = product.cost;
                    const id = product.id;  
                    const all = {id, name, cost}
                    return (
                        <ListItem key={product.id} {...all} />
                    )
                }
                    
                )
                )
            }
        </>
    )
}