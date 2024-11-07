import { Product } from '@/interface/Product';
import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie';


export class ProductService{

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
    public async check(): Promise<any>{
        try {
            const response = await this.axios.get('')
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async getAll(): Promise<Product[] | null> {
        try {
            const response = await this.axios.get('/products', {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async myProducts(): Promise<Product[] | null> {
        try {
            const response = await this.axios.get('/products/myProducts')
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async findById(id: string): Promise<any | null> {
        try {
            const response = await this.axios.get('/products/'+id, {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async filter(filter: string): Promise<Product[] | null> {
        try {
            console.log(filter)
            const filtersArray = filter.split('/');
            const categoryFilters = filtersArray.filter(f => f.startsWith('categories')).join('&');
            const nameFilters = filtersArray.filter(f => f.startsWith('name')).join('&');
            const costHighFilters = filtersArray.filter(f => f.startsWith('costHigh')).join('&');
            const costLowFilters = filtersArray.filter(f => f.startsWith('costLow')).join('&');
            const inStockFilters = filtersArray.filter(f => f.startsWith('inStock')).join('&');
            
            console.log(categoryFilters)
            const queryString = [categoryFilters, nameFilters, costHighFilters, costLowFilters, inStockFilters]
                .filter(f => f.length > 0)
                .join('&');

            const response = await this.axios.get(`/products?${queryString}`, {})
            console.log(response)
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async create(product: Product): Promise<Product | null> {
        try {
            const response = await this.axios.post('/products', product)
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async update(product: Product): Promise<Product | null> {
        try {
            const response = await this.axios.patch('/products/'+product.id, product)
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async delete(id: string): Promise<any | null> {
        try {
            const response = await this.axios.delete('/products/'+id)
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

}