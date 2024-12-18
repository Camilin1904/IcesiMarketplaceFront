import { Product } from '@/interface/Product';
import { User } from '@/interface/user';
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
            const page = Cookies.get('page');
            const response = await this.axios.get(`/products${page?`?offset=${page}&`:''}`, {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async myProducts(): Promise<Product[] | null> {
        try {
            const response = await this.axios.get('/products/myProducts', {
                headers: {
                    Authorization: `Bearer ${this.getAuthToken()}`
                }
            })
            console.log(response);
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

            const pages = Cookies.get('page');

            const response = await this.axios.get(`/products?${pages?`offset=${pages}&`:''}${queryString}`, {})
            console.log(response)
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async getSubscribedProducts(): Promise<Product[] | null> {
        try {
            const token = this.getAuthToken();
            console.log(token);
            const response = await this.axios.get('/products/psubscribed', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async getSubscribedProducts2(id:string): Promise<Product[] | null> {
        try {
            const token = this.getAuthToken();
            console.log(token);
            const response = await this.axios.get(`/products/psubscribed/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async isSubscribed(id: string): Promise<boolean> {
        try {
            const token = this.getAuthToken();
            const response = await this.axios.get(`/products/isSubscribed/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data 
        } catch (error) {
            console.log(error)
            return false   
        }
    }

    public async subscribe(id: string): Promise<any> {
        try {
            const token = this.getAuthToken();
            const response = await this.axios.post(`/products/subscribe`, {productId:id}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async numPages(): Promise<number> {
        try {
            const response = await this.axios.get('/products/numpages', {})
            return response.data 
        } catch (error) {
            console.log(error)
            return 0   
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

    public async getSeller(id:string): Promise<User | null> {
        try {
            const response = await this.axios.get(`/products/seller/${id}`, {
                headers: {
                    Authorization: `Bearer ${this.getAuthToken()}`
                }
            })
            return response.data 
        }
        catch (error) {
            console.log(error)
            return null   
        }
    }

}