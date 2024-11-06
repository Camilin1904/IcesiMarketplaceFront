import { useEffect, useState } from 'react';
import { CategoryService } from '../services/category.service';
import { Category } from '@/interface/Category';

export const useGetCategoryById = (id: string) => {
    const [categories, setCategories] = useState<Category>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoryService = new CategoryService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
                const fetchedCategories = await categoryService.getCategoryById(id);
                setCategories(fetchedCategories);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [id]);

    return { categories, loading, error };
};
