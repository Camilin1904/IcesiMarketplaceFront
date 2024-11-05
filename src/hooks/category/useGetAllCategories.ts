import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { CategoryService } from '../services/category.service';

export const useGetAllCategories = () =>{
    const categories = () =>{
        const authService = new CategoryService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        const categories =  authService.getAllCategories();
        return categories;
    }

    return categories();
}