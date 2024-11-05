import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';

export const useSignUp = () =>{
    const signUp = async(name: string, email: string, password:string) =>{
        const authService = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await authService.check()
        const user = await authService.signUp(name, email, password);
        if(user){
            Cookies.set('currentUser', JSON.stringify(user));
        }
        else {
            throw new Error('Invalid credentials');
        }
        return user;
    }

    return {signUp}
}