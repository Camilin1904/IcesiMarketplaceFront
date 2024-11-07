import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { AuthService } from "../services/auth.service";
import { User } from "@/interface/user";
import { ProductService } from "../services/product.service";
import { Product } from "@/interface/Product";

export const useGetUsers = () => {
    const [users, setUsers] = useState<User[] | null>(null);

    useEffect(() => {
        const service = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        service.check().then(() => {
            service.getAllUsers().then((users) => {
                if (users) {
                    setUsers(users);
                }
            })
        })
    }, []);

    return users;
}