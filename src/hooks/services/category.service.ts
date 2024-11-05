import { Category } from '@/interface/Category';
import { Product } from '@/interface/Product';
import axios, { AxiosInstance } from 'axios'

export class CategoryService{
    protected readonly axios: AxiosInstance;

    public constructor(url: string){
        this.axios = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000
        })
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


    public async getAll(): Promise<Category[] | null> {
        try {
            const response = await this.axios.get('/categories', {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async findById(id: string): Promise<Category | null> {
        try {
            const response = await this.axios.get('/categories/'+id, {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async findbyProduct(id: string): Promise<Category | null> {
        try {
            const response = await this.axios.get('/categories/product/'+id, {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }
}