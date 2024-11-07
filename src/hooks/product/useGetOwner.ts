import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { useState, useEffect } from 'react';
import { Product } from '@/interface/Product';
import { User } from '@/interface/user';

export const useGetOwner = (id:string) => {
    const [products, setProducts] = useState<User | null>(null);

    useEffect(() => {
        const prod = async () => {
            const service = new ProductService('http://localhost:8000');
            const products = await service.getSeller(id);
            setProducts(products);
            console.log(products);
        }
        prod();
    }, []); // Empty dependency array ensures this runs only once

    return products;
}