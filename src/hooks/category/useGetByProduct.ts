import Cookies from 'js-cookie';
import {CategoryService} from '../services/category.service';
import { Category } from '@/interface/Category';
import { get } from 'http';
import { useState } from 'react';

export const useGetByProduct =  (id: string):Promise<Category[] | null> => {
    const service = new CategoryService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
    const categories = service.getCategoriesByProductId(id);
    return categories;
};