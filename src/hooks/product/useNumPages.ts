import Cookies from 'js-cookie'
import { AuthService } from '../services/auth.service';
import { ProductService } from '../services/product.service';
import { useState, useEffect } from 'react';

export const useNumPages = () => {
    const [pages, setPages] = useState<number>(1);

    useEffect(() => {
        const isSubbed = async () => {
            const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
            setPages(await service.numPages());
        };
        isSubbed();
    }, []);

    return pages;
};