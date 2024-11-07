import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthService } from "../services/auth.service";
import { User } from "@/interface/user";
import { ProductService } from "../services/product.service";
import { Product } from "@/interface/Product";

export const useCurrentUser = () =>{
    const [user,setCurrentUser] = useState<User|null>(null);

    useEffect(()=>{
        const user = Cookies.get('currentUser');
        if(user){
            setCurrentUser(JSON.parse(user));
        }
    },[]);

    return {user}
}

export const useSubscribedProducts = () =>{
    const [products,setProducts] = useState<Product[]>([]);
    const [loading,setLoading] = useState<boolean>(true);

    useEffect(()=>{
        const service = new ProductService('http://localhost:8000');
        service.check().then((response)=>{
            if(response){
                service.getSubscribedProducts().then((products)=>{
                    if(products) {
                        setProducts(products);
                    }
                    setLoading(false);
                })
            } else {
                setLoading(false);
            }
        })
    },[])

    return {products,loading}
}