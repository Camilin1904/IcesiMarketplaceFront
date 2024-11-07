import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { useState, useEffect } from 'react';
import { Product } from '@/interface/Product';

export const useGetAllProducts = () => {
    const [products, setProducts] = useState<Product[] | null>([]);

    useEffect(() => {
        const prod = async () => {
            const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
            const products = await service.getAll();
            setProducts(products);
        }
        prod();
    }, []); // Empty dependency array ensures this runs only once

    return products;
}