import { useState, useEffect } from 'react';
import { ProductService } from '../services/product.service';

export const useFilterProducts = (filter: string) => {
    const [products, setProducts] = useState<any>([]);
    
    useEffect(() => {
        const service = new ProductService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        service.filter(filter).then((products) => {  
            setProducts(products);
        });
    }, [filter]);

    return products;
}
