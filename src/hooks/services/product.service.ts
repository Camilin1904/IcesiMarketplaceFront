import { Product } from '@/interface/Product';
import axios, { AxiosInstance } from 'axios'

export class ProductService{
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


    public async getAll(): Promise<Product[] | null> {
        try {
            const response = await this.axios.get('/products', {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async findById(id: string): Promise<Product | null> {
        try {
            const response = await this.axios.get('/products/'+id, {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }
}