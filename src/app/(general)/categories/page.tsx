"use client"
import { EyeIcon, PencilIcon, TrashIcon } from "@primer/octicons-react";
import { useGetAllCategories } from "@/hooks/category/useGetAllCategories";
import { useEffect, useState } from "react";
import { Category } from "@/interface/Category";
import { useCreateCategory, useUpdateCategory, useDeleteCategory } from "@/hooks/category/useCategories";

export default function AdminPage() {

    const [categories, setCategories] = useState<Category[]>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [newCategory, setNewCategory] = useState({ name: '', description: '' });
    const [currentCategory, setCurrentCategory] = useState<Category | null>(null);

    useEffect(() => {
        const res = useGetAllCategories();
        res.then((categories) => {
            if (categories) {
                setCategories(categories);
            }
        });
    }, [isModalOpen, isEditModalOpen]);

    const handleCreateCategory = () => {
        useCreateCategory(newCategory).then(() => setIsModalOpen(false));
    };

    const handleEditCategory = () => {
        if(currentCategory){
            useUpdateCategory(currentCategory.id, {"name": currentCategory.name, "description": currentCategory.description}).then(() => setIsEditModalOpen(false));
        }
    };

    const handleDeleteCategory = (categoryId: string) => {
        useDeleteCategory(categoryId).then(() => {
            setCategories(categories?.filter(category => category.id !== categoryId));
        });
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <label className="font-serif text-[100px] text-black font-light">Administrador</label>
            <button 
                className="bg-[#E7CCCC] rounded-2xl w-48 h-10 text-black"
                onClick={() => setIsModalOpen(true)}
            >
                Crear Categoria
            </button>
            
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-xl mb-4 text-[#A5B68D]">Crear Nueva Categoria</h2>
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            value={newCategory.name}
                            onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                            className="border p-2 mb-4 w-full text-[#A5B68D]"
                        />
                        <input 
                            type="text" 
                            maxLength={50}
                            placeholder="Descripción" 
                            value={newCategory.description}
                            onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                            className="border p-2 mb-4 w-full text-[#A5B68D]"
                        />
                        <button 
                            className="bg-blue-500 text-white p-2 rounded"
                            onClick={handleCreateCategory}
                        >
                            Crear
                        </button>
                        <button 
                            className="bg-red-500 text-white p-2 rounded ml-2"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}

            {isEditModalOpen && currentCategory && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg">
                        <h2 className="text-xl mb-4 text-[#A5B68D]">Editar Categoria</h2>
                        <input 
                            type="text" 
                            placeholder="Nombre" 
                            value={currentCategory.name}
                            onChange={(e) => setCurrentCategory({ ...currentCategory, name: e.target.value })}
                            className="border p-2 mb-4 w-full text-[#A5B68D]"
                        />
                        <input 
                            type="text" 
                            maxLength={50}
                            placeholder="Descripción" 
                            value={currentCategory.description}
                            onChange={(e) => setCurrentCategory({ ...currentCategory, description: e.target.value })}
                            className="border p-2 mb-4 w-full text-[#A5B68D]"
                        />
                        <button 
                            className="bg-blue-500 text-white p-2 rounded"
                            onClick={handleEditCategory}
                        >
                            Guardar
                        </button>
                        <button 
                            className="bg-red-500 text-white p-2 rounded ml-2"
                            onClick={() => setIsEditModalOpen(false)}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            )}
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
                            <th className="w-1/3 text-center m-5">Descripción</th>
                            <th className="w-1/3 text-center m-5">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories?.map(category => (
                            <tr key={category.name} className="w-full text-center bg-white rounded-lg shadow-md">
                                <td className="text-center p-5">{category.name}</td>
                                <td className="text-center p-5">{category.description}</td>
                                <td className="text-center p-5 flex justify-center space-x-4">
                                    <button
                                    onClick={() => {
                                        setCurrentCategory(category);
                                        setIsEditModalOpen(true);
                                    }}
                                    >
                                        <PencilIcon size={24} className="cursor-pointer text-blue-500" />
                                    </button>
                                    <button
                                    onClick={() => handleDeleteCategory(category.id)}
                                    >
                                        <TrashIcon size={24} className="cursor-pointer text-red-500" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}