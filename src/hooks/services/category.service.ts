import { Category } from '@/interface/Category';
import { Product } from '@/interface/Product';
import axios, { AxiosInstance } from 'axios'
import Cookies from "js-cookie";
import { useCurrentUser } from '../auth/useCurrentUser';
import { User } from '@/interface/user';


export class CategoryService{
    protected readonly axios: AxiosInstance;

    public constructor(url: string){
        const user = Cookies.get('currentUser');
        const csrfToken = user? JSON.parse(user).token:null;
        console.log(csrfToken)
        this.axios = axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${csrfToken}`
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
            const csrfToken = Cookies.get('csrftoken');
            const response = await this.axios.get('/categories', {
                headers: {
                    'bearer': csrfToken
                }
            })
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async findById(id: string): Promise<Category | null> {
        try {
            const csrfToken = Cookies.get('csrftoken');
            const response = await this.axios.get('/categories/'+id, {
                headers: {
                    'bearer': csrfToken
                }
            })
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public findbyProduct(id: string): Category[] | null {
        try {
            
            const response = this.axios.get('/categories/product/'+id, {}) 
            var result:Category[] = []; 
            response.then((res) => result = res.data)
            return result;
        } catch (error) {
            console.log(error)
            return null   
        }
    }
}