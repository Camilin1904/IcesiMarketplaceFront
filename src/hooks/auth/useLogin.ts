import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { useAppDispatch, useAppSelector } from "@/store";
import { initUser } from "@/store/user/userSlice";

export const useLogin = () =>{
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const login = async(email: string, password:string) =>{
        const authService = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        await authService.check()
        const user = await authService.login(email, password);
        if(user){
            // Ensure the cookie is set correctly
            Cookies.set('currentUser', JSON.stringify(user), {expires: 1, sameSite: 'strict'});
            console.log(Cookies.get('currentUser'));
            console.log(user.roles);
            window.dispatchEvent(new Event('userLogin'));
            dispatch(initUser(user.roles));
        }
        else {
            throw new Error('Invalid credentials');
        }
        return user;
    }

    return {login}
}