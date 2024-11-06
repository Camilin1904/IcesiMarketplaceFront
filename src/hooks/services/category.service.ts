import axios, {AxiosInstance} from 'axios';
import Cookies from 'js-cookie';


export class CategoryService {
    private axios: AxiosInstance;

    public constructor(baseUrl: string) {
        const token = this.getAuthToken();
        this.axios = axios.create({
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            timeout: 10000, // Set a timeout of 10 seconds
        });
    }

    private getAuthToken(): string | null {
        const currentUser = Cookies.get('currentUser');
        if (currentUser) {
            const user = JSON.parse(currentUser);
            return user.token;
        }
        return null;
    }

    private getAuthHeaders() {
        const token = this.getAuthToken();
        if (token) {
            return {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };
        }
        return {};
    }

    public async getAllCategories() {
        try {
            const token = this.getAuthToken();
            const response = await this.axios.get("/categories", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching categories', error);
            throw error;
        }
    }

    public async getCategoryById(id: string) {
        try {
            const token = this.getAuthToken();

            const response = await this.axios.get(`/categories/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            return response.data;
        } catch (error) {
            console.error(`Error fetching category with id ${id}`, error);
            throw error;
        }
    }
/*
    public async createCategory(category: any) {
        try {
            const response = await axios.post(this.baseUrl, category, this.getAuthHeaders());
            return response.data;
        } catch (error) {
            console.error('Error creating category', error);
            throw error;
        }
    }

    public async updateCategory(id: string, category: any) {
        try {
            const response = await axios.put(`${this.baseUrl}/${id}`, category, this.getAuthHeaders());
            return response.data;
        } catch (error) {
            console.error(`Error updating category with id ${id}`, error);
            throw error;
        }
    }

    public async deleteCategory(id: string) {
        try {
            const response = await axios.delete(`${this.baseUrl}/${id}`, this.getAuthHeaders());
            return response.data;
        } catch (error) {
            console.error(`Error deleting category with id ${id}`, error);
            throw error;
        }
    }
        */
    public async getCategoriesByProductId(productId: string) {
        try {
            const token = this.getAuthToken();
            console.log(token);
            const response = await this.axios.get(
                `/categories/product/${productId}`,{
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            return response.data;
        } catch (error) {
            console.error(`Error fetching categories for product with id ${productId}`, error);
            if (axios.isAxiosError(error)) {
                console.error(error.response?.data);
            }
            throw error;
        }
    }

}
