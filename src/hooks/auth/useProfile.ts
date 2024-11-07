import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { User } from '@/interface/user';
import { useState, useEffect } from 'react';

export const useProfile = () => {
    const [profile, setProfile] = useState<User | null>(null);

    useEffect(() => {
        const getProfile = async () => {
            const authService = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
            await authService.check()
            const user = await authService.getProfile();
            setProfile(user);
        }
        getProfile();
    }, []); // Empty dependency array ensures this runs only once

    return profile;
}