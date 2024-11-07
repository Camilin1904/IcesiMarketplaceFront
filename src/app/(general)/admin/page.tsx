import { AdminTable } from "@/components/admin-table/AdminTable";
import { EyeIcon, TrashIcon } from "@primer/octicons-react";


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
                    <AdminTable/>
            </div>
        </div>
    );
}