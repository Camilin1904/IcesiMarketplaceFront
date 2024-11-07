import { useEffect } from "react"
import { AuthService } from "../services/auth.service"

const useBecomeSeller = (phone: string, location:string) =>{

        console.log(phone,location);

        const service = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        service.becomeSeller(phone,location);
    }
export {useBecomeSeller};