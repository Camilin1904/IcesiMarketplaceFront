"use client";
import { useDeleteUser } from "@/hooks/auth/useDeleteUser";
import { useGetUsers } from "@/hooks/auth/useGetUsers";
import { EyeIcon, TrashIcon } from "@primer/octicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AdminTable = () => {  
    const router = useRouter();
    const users = useGetUsers();
    const { deleteUser } = useDeleteUser();

    const del = (id: string) => {
        deleteUser(id);
        router.push('/admin');
    }

    return (
        <table className="
        w-full table-auto text-black 
        bg-[#A5B68D]
        border-separate border-spacing-y-10
        ">
            <thead>
                <tr className="w-full text-center rounded-2xl">
                    <th className="w-1/3 text-center m-5">Nombre</th>
                    <th className="w-1/3 text-center m-5">Tipo de Usuario</th>
                    <th className="w-1/3 text-center m-5">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {users?.map(user => (
                    <tr key={user.name} className="w-full text-center bg-white rounded-lg shadow-md">
                        <td className="text-center p-5">{user.name}</td>
                        <td className="text-center p-5">{user.roles.join(', ')}</td>
                        <td className="text-center p-5 flex justify-center space-x-4">
                            <Link href={`/admin/user/${user.id}`}>
                                <EyeIcon size={24} className="cursor-pointer text-blue-500 hover:text-blue-700" />
                            </Link>
                            <button onClick={() => del(user.id)}>
                                <TrashIcon size={24} className="cursor-pointer text-red-500" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}