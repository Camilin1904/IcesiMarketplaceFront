import axios, { AxiosInstance } from 'axios'

export class AuthService{
    protected readonly axios: AxiosInstance;

    public constructor(url: string){
        this.axios = axios.create({
            baseURL:url,
            headers:{
                'Content-Type' : 'application/json'
            },
            timeout: 3000

        });


    }
    public async login(email: string, password: string){
        //try{
            const response = await this.axios.post('login', {email, password});
            return response.data;
        /*}catch(error){
            console.log(error);
            return null;
        }*/
    }
}