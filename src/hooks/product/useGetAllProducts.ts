import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';

export const useGetAllProducts = () =>{
    const products = async() =>{
        const authService = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await authService.check()
        const products = await authService.getAll();
        if(!products){
            throw new Error('Unexpected error');
        }
        return await products;
    }

    return products();
}