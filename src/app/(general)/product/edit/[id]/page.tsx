"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UploadButton } from "../../../../../utils/uploadthing";
import { useGetAllCategories } from "../../../../../hooks/category/useGetAllCategories";
import { useDeleteProduct, useGetProductById, useUpdateProduct } from "../../../../../hooks/product/useProduct";
import { useGetByProduct } from "@/hooks/category/useGetByProduct";
import Cookies from 'js-cookie';
import { TrashIcon } from "@primer/octicons-react";

interface Props {
    params: Promise<{id:string}>;

}

export default function ProductDetail({params}:Props) {

    const [image , setImage] = useState("https://via.placeholder.com/150");
    const [categories, setCategories] = useState<{ id: string, name: string }[]>([]);
    const router = useRouter();
    const [id, setId] = useState("");
    const [user, setUser] = useState("");
    const [productName, setProductName] = useState("");
    const [price, setPrice] = useState("");
    const [agotado, setAgotado] = useState(false);
    const [disponible, setDisponible] = useState(false);
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleCheckboxChange = (checkbox: string) => {
        if (checkbox === "agotado") {
            setAgotado(true);
            setDisponible(false);
        } else {
            setAgotado(false);
            setDisponible(true);
        }
    };

    useEffect(() => {
        (params).then(params => {
            const id = params.id;
            setId(id);
            const product = useGetProductById(id);
            product.then(product => {
                setUser(product.owner.name)
                setProductName(product.name);
                setPrice(product.cost.toString());
                setDescription(product.description);
                setImage(product.image);
                const categories = useGetByProduct(id);
                categories.then(categories => {
                    if (categories && categories.length > 0) {
                        setCategories([categories[0]]);
                    }
                });
                if (product.inStock) {
                    setDisponible(true);
                } else {
                    setAgotado(true);
                }
            });
        } ); 
        const categories = useGetAllCategories();
        categories.then(categories => {
            setCategories(categories);
            setCategory(categories[0].id);
        });
        const currentUser = Cookies.get('currentUser')
        console.log(currentUser);
        if (currentUser) {
            const user = JSON.parse(currentUser);
            console.log(user);
            setUser(user.email);
        }else {
            // Redirect to login
            router.push('/login');
        }
        console.log(user);
    }, []);

    const handleUploadComplete = (res: any) => {
        if(!productName || !price || !description || !category || !image || !user) {  
            alert("Por favor, rellena todos los campos");
        }else{
            useUpdateProduct({
                "id": id,
                "name": productName,
                "cost": parseInt(price, 10), // Ensure price is an integer
                "description": description,
                "categories": [category],
                "image": image,
                "inStock": disponible,
            })
            router.push('/seller');
        } 
        
    };

    const handleDelete = () => {
        useDeleteProduct(id);
        router.push('/seller');
    }

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col bg-[#A5B68D] rounded-2xl w-4/5 items-center justify-center">
                <div className="flex">
                    <div className="flex flex-col justify-center items-center mt-4">
                    <img src={image} className="w-80 m-5 rounded-2xl"/>
                    <UploadButton
                        appearance={{
                            button: {
                                background: "white",
                                color: "#000",
                            }
                        }}
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                        // Do something with the response
                        console.log("Files: ", res);
                        setImage((res[0]).url);
                        }}
                        onUploadError={(error: Error) => {
                        // Do something with the error.
                        alert(`ERROR! ${error.message}`);
                        }}
                    />
                        <div>
                            <div className="flex items-center mb-4">
                                <input id="agotado" type="checkbox" checked={agotado} onChange={() => handleCheckboxChange("agotado")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="agotado" className="ms-2 text-sm font-medium text-white">Agotado</label>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="disponible" type="checkbox" checked={disponible} onChange={() => handleCheckboxChange("disponible")} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="disponible" className="ms-2 text-sm font-medium text-white">Disponible</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-20 mt-12">
                        <input 
                            type="text" 
                            className="border-2 p-2 focus:outline-none text-xl mb-36 border-solid border-white text-white rounded-xl bg-[#A5B68D] placeholder:text-white" 
                            placeholder="Nombre" 
                            value={productName} 
                            onChange={(e) => setProductName(e.target.value)}></input>
                        <label className="text-xl text-white mb-5">Precio</label>
                        <input 
                            type="text" 
                            className="border-2 p-2 focus:outline-none text-xl mb-36 border-solid border-white text-white rounded-xl bg-[#A5B68D] placeholder:text-white"
                            placeholder="Precio" 
                            value={price} 
                            onChange={(e) => setPrice(e.target.value)} // Ensure price is a number
                        ></input>
                    </div>
                    <div className="mt-14 ml-20">
                        <div className="flex mb-36">
                            <h3 className="mr-5 text-lg text-white">{user}</h3>
                            <button onClick={()=>handleDelete()} className="flex flex-col w-10 items-center justify-center rounded-2xl">
                                <TrashIcon size={24} className="text-[#c2535c]" />
                            </button>
                        </div>
                        
                        <label className="text-xl text-white mb-5">Categorias</label>
                        
                        <form className="max-w-sm mx-auto">
                        <select 
                            id="categories" 
                            className="flex bg-white text-black rounded-2xl h-10 justify-center items-center mt-5 text-sm w-48 p-2.5"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            {
                                categories?.map(category => {
                                    return (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    )
                                })
                            }
                        </select>
                        </form>
                        <button
                            className="flex bg-white text-black rounded-2xl h-10 justify-center items-center mt-5 text-sm w-48 p-2.5 "
                            onClick={() => handleUploadComplete([{ url: image }])}
                        >
                            Crear Producto
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                <textarea id="message" rows={1} className=" border-white border-4 flex w-4/5 h-48 m-5 justify-center focus:outline-none overflow-auto text-white p-2.5 text-sm rounded-lg bg-transparent placeholder:text-white" placeholder="Descripción de tu producto" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>

            </div>
        </div>
    )
}