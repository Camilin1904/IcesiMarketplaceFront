"use client";
import { useGetAllProducts } from "@/hooks/product/useGetAllProducts"
import { useFilterProducts } from "@/hooks/product/useFilterProduct"
import { ListItem } from "@/components/list-item/ListItem"
import { useAppSelector } from "@/store";
import Cookies from 'js-cookie';
import { Product } from "@/interface/Product";

export function FilteredList() {
    const filter = Cookies.get('filter');
    console.log(filter);
    const products = useFilterProducts(filter ? filter : '');

    return (
        <>
            {
                products?.map((product: Product) => {
                    const name = product.name;
                    const cost = product.cost;
                    const id = product.id;  
                    const all = { id, name, cost }
                    return (
                        <ListItem key={product.id} {...all} />
                    )
                })
            }
        </>
    )
}