import { EyeIcon, TrashIcon } from "@primer/octicons-react";

const users = [
    { name: 'Carlos Perez', type: 'comprador' },
    { name: 'Ana Gomez', type: 'vendedor' },
    { name: 'Jorge Martinez', type: 'comprador' },
    { name: 'Lucia Fernandez', type: 'vendedor' },
    { name: 'Miguel Torres', type: 'comprador' },
    { name: 'Valentina Sanchez', type: 'vendedor' },
    { name: 'Sofia Lopez', type: 'comprador' },
    { name: 'Diego Ramirez', type: 'vendedor' },
    { name: 'Isabel Ortega', type: 'comprador' },
    { name: 'Ricardo Diaz', type: 'vendedor' }
];

export default function AdminPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <label className="font-serif text-[100px] text-black font-light">Administrador</label>
            <div className="w-3/4 h-96 m-10 
                overflow-x-hidden
                rounded-2xl shadow-lg
                rounded-r-none
                overflow-y-auto
                [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-r-2xl
                [&::-webkit-scrollbar-thumb]:rounded-2xl
                [&::-webkit-scrollbar-track]:bg-gray-100
                [&::-webkit-scrollbar-thumb]:bg-gray-300
                dark:[&::-webkit-scrollbar-track]:bg-[#A5B68D]
                dark:[&::-webkit-scrollbar-thumb]:bg-[#C1CFA1]">
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
                        {users.map(user => (
                            <tr key={user.name} className="w-full text-center bg-white rounded-lg shadow-md">
                                <td className="text-center p-5">{user.name}</td>
                                <td className="text-center p-5">{user.type}</td>
                                <td className="text-center p-5 flex justify-center space-x-4">
                                    <EyeIcon size={24} className="cursor-pointer text-blue-500" />
                                    <TrashIcon size={24} className="cursor-pointer text-red-500" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}