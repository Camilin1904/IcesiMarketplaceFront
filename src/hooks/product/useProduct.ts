import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

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

export const useGetAllProducts = () =>{
    const products = async() =>{
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check()
        const products = await service.getAll();
        if(!products){
            throw new Error('Unexpected error');
        }
        return await products;
    }

    return products();
}

export const useFilterProducts = (filter: string) =>{
    const products = async() =>{
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check()
        const products = await service.filter(filter);
        if(!products){
            throw new Error('Unexpected error');
        }
        return await products;
    }

    return products();
}