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


    public async getAll(): Promise<any> {
        try {
            const response = await this.axios.get('/product', {})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async findById(name: string, email: string, password: string): Promise<any> {
        try {
            const response = await this.axios.post('/auth/register', {"name":name, "email":email, "password":password})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }
}