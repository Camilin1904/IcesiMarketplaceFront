import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';

export const useLogin = () =>{
    const login = async(email: string, password:string) =>{
        const authService = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await authService.check()
        const user = await authService.login(email, password);
        if(user){
            Cookies.set('currentUser', JSON.stringify(user));
        }
        else {
            throw new Error('Invalid credentials');
        }
        return user;
    }

    return {login}
}