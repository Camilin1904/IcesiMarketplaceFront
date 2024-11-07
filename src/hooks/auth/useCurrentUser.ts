import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthService } from "../services/auth.service";
import { User } from "@/interface/user";
import { ProductService } from "../services/product.service";
import { Product } from "@/interface/Product";

export const useCurrentUser = () => {
    const [user, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const user = Cookies.get('currentUser');
        if (user) {
            setCurrentUser(JSON.parse(user));
        }
        setLoading(false);
    }, []); // No dependencies, runs once on mount

    return { user, loading };
}

export const useSubscribedProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        service.check().then((response) => {
            if (response) {
                service.getSubscribedProducts().then((products) => {
                    if (products) {
                        setProducts(products);
                    }
                    setLoading(false);
                })
            } else {
                setLoading(false);
            }
        })
    }, []); // No dependencies, runs once on mount

    return { products, loading }
}

export const useSubscribedProducts2 = (id:string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        service.check().then((response) => {
            if (response) {
                service.getSubscribedProducts2(id).then((products) => {
                    if (products) {
                        setProducts(products);
                    }
                    setLoading(false);
                })
            } else {
                setLoading(false);
            }
        })
    }, [id]); // Add id as dependency to run when id changes

    return { products, loading }
}
