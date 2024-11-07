import axios, { AxiosInstance } from 'axios'
import Cookies from 'js-cookie';

export class AuthService{
    
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


    public async login(email: string, password: string): Promise<any> {
        try {
            const response = await this.axios.post('/auth/login', {"email":email, "password":password})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }
    
    public async getProfile(): Promise<any> {
        try {
            const token = this.getAuthToken();
            const response = await this.axios.get('/auth/info', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response);
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }

    public async signUp(name: string, email: string, password: string): Promise<any> {
        try {
            const response = await this.axios.post('/auth/register', {"name":name, "email":email, "password":password})
            return response.data 
        } catch (error) {
            console.log(error)
            return null   
        }
    }
}