import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';

export const useProfile = () =>{
    const getProfile = async () =>{
        const authService = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await authService.check()
        const user = await authService.getProfile();
        return user;
    }

    return {getProfile}
}