import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

export const useGetByProduct = (id: string) =>{
    const categories = async() =>{
        const service = new CategoryService('http://localhost:8000');
        await service.check()
        const categories = await service.findbyProduct(id);
        if(!categories){
            throw new Error('Unexpected error');
        }
        return categories;
    }

    return categories();
}