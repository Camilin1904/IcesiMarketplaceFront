import { CategoryService } from "../services/category.service";

export const useCreateCategory = (category: any) => {
    const createCategory = async() => {
        const service = new CategoryService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        const categories = await service.createCategory(category);
        return categories;
    }

    return createCategory();
}

export const useUpdateCategory = (id: string, category: any) => {
    const updateCategory = async() => {
        const service = new CategoryService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        const categories = await service.updateCategory(id, category);
        return categories;
    }

    return updateCategory();
}

export const useDeleteCategory = (id: string) => {
    const deleteCategory = async() => {
        const service = new CategoryService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        const categories = await service.deleteCategory(id);
        return categories;
    }

    return deleteCategory();
}