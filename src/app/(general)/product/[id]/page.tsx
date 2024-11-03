import { Metadata } from "next";
import { HeartIcon, CommentDiscussionIcon, HeartFillIcon } from "@primer/octicons-react";

interface Props {
    params: {id:string};

}

export async function generateMetadata({params}:Props): Promise<Metadata> {

    try{
        const {id} = await params;

        return{
            title: `#${id} - Product Detial`,
            description: `Product Detail ${id}`
        }
    }
    catch(error){
        return{
            title: `Error product`,
            description: `Product Detail error`
        }
    }
    
}


export async function ProductDetail({params}:Props) {
    const id= parseInt((await params).id);

    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col bg-[#A5B68D] rounded-2xl w-4/5 items-center justify-center shadow-lg">
                <div className="flex">
                    <div className="flex flex-col justify-center items-center mt-4">
                        <img src="https://via.placeholder.com/150" className="w-80 m-5 rounded-2xl"/>
                        <button className="group relative w-6 h-6 me-5">
                            <HeartIcon 
                                size={24} 
                                className="absolute transition-opacity duration-200 opacity-100 group-hover:opacity-0"
                            />
                            <HeartFillIcon 
                                size={24} 
                                className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-100"
                            />
                        </button>

                    </div>
                    <div className="flex flex-col ml-20 mt-12">
                        <h2 className="text-3xl font-bold mb-36">Placeholder name</h2>
                        <label className="text-xl mb-5">Precio</label>
                        <button className="bg-[#E7CCCC] rounded-2xl w-48 h-10 text-black">$12000 COP</button>
                    </div>
                    <div className="mt-14 ml-20">
                        <div className="flex mb-36">
                            <h3 className="mr-5 text-lg">Placeholder name</h3>
                            <div className="flex flex-col bg-[#F5F1E6] w-10 items-center justify-center rounded-2xl">
                                <CommentDiscussionIcon size={24} className="text-[#A5B68D]" />
                            </div>
                        </div>
                        
                        <label className="text-xl">Categorias</label>
                        <div className="flex bg-white text-black rounded-2xl h-10 w-48 justify-center items-center mt-5">  
                            Placeholder Categories
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex w-4/5 h-48 m-8 justify-center
                    overflow-scroll 
                    overflow-x-hidden
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:rounded-2xl
                    [&::-webkit-scrollbar-track]:bg-gray-100
                    [&::-webkit-scrollbar-thumb]:rounded-2xl
                    [&::-webkit-scrollbar-thumb]:bg-gray-300
                    dark:[&::-webkit-scrollbar-track]:bg-[#A5B68D]
                    dark:[&::-webkit-scrollbar-thumb]:bg-[#C1CFA1]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo, reiciendis tempore ipsam facere maxime eos architecto eius molestiae, ut id neque asperiores sequi laudantium totam, nemo odit delectus. Fugiat! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores necessitatibus voluptas, ipsa corrupti optio provident culpa modi repellat assumenda aliquam odio laborum possimus dignissimos repellendus alias sunt cum sint. Lorem ipsum dolor sit amet consectetur adipisicing elit. At necessitatibus maiores eum iste doloremque placeat inventore asperiores sunt sapiente cum velit voluptatum, dolorum repellendus nisi a repellat, explicabo voluptates commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nulla architecto veniam inventore aliquid, eligendi adipisci dicta, minima unde alias laborum distinctio delectus provident deserunt nobis consectetur atque perspiciatis ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptates vitae officiis illum consequuntur minima at adipisci. Illo cum natus, esse nulla odio provident. Magni atque itaque inventore optio. Quam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit molestias nulla reprehenderit cupiditate dignissimos, labore, at iste natus excepturi esse dicta sequi nobis perferendis recusandae atque unde, modi distinctio assumenda?
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default ProductDetail