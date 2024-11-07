import { useState } from "react";
import { AuthService } from "../services/auth.service";
import { User } from "@/interface/user";

export const useDeleteUser = () => {
    const [user, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const deleteUser = async (id: string) => {
        setLoading(true);
        const service = new AuthService('https://fixed-bellanca-icesi-11a012a9.koyeb.app');
        const user = await service.deleteUser(id);
        setCurrentUser(user);
        setLoading(false);
    }

    return { deleteUser, user, loading };
}