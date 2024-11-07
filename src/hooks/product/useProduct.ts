import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { useState, useEffect } from 'react';
import { Product } from '@/interface/Product';

export const useGetProductById = (id: string) =>{
    const product = async() =>{
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check()
        const products = await service.findById(id);
        if(!products){
            throw new Error('Unexpected error');
        }
        return   products;
    }

    return product();
}


export const useFilterProducts = (filter: string) =>{
    const products = async() =>{
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check()
        const products = await service.filter(filter);
        return await products;
    }

    return products();
}

export const useCreateProduct = (product: any) => {
    const createProduct = async() => {
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check();
        // Ensure price is an integer
        product.cost = parseInt(product.cost, 10);
        const products = await service.create(product);
        return products;
    }

    return createProduct();
}

export const useUpdateProduct = (product: any) => {
    const updateProduct = async() => {
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check();
        // Ensure price is an integer
        product.cost = parseInt(product.cost, 10);
        const products = await service.update(product);
        return products;
    }

    return updateProduct();
}

export const useMyProducts = () => {
    const [products, setProducts] = useState<Product[] | null>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
            await service.check();
            const products = await service.myProducts();
            setProducts(products);
            setLoading(false);
        };

        fetchProducts();
    }, []); // Empty dependency array ensures this runs only once

    return { products, loading };
}

export const useDeleteProduct = (id: string) => {
    const deleteProduct = async() => {
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check();
        const products = await service.delete(id);
        return products;
    }

    return deleteProduct();
}

export const useSubscribe = (id: string) =>{
    const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
    service.subscribe(id);
}


