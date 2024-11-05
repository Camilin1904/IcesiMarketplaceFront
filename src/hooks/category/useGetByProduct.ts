import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

export const useGetByProduct = (id: string) =>{
    const categories = async() =>{
        const service = new CategoryService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await service.check()
        const categories = await service.findbyProduct(id);
        if(!categories){
            throw new Error('Unexpected error');
        }
        return categories;
    }

    return categories();
}