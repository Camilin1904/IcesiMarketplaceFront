import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthService } from "../services/auth.service";
import { User } from "@/interface/user";
import { ProductService } from "../services/product.service";
import { Product } from "@/interface/Product";
import { get } from "http";

export const useGetUserById = (id: string) => {
    const [user, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getUser = async () => {
            const service = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
            const user = await service.getUser(id);
            setCurrentUser(user);
            setLoading(false);
        }
        getUser(); 
    }, [id]); // Added id as a dependency

    return { user, loading };
}