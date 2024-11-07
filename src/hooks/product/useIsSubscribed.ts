import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { useState, useEffect } from 'react';

export const useIsSubscribed = (id: string) => {
    const [subscribed, setSubscribed] = useState<boolean>(false);

    useEffect(() => {
        const isSubbed = async () => {
            const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
            setSubscribed(await service.isSubscribed(id));
        };
        isSubbed();
    }, [id]);

    return subscribed;
};