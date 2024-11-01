import { Metadata } from "next";
import { HeartIcon, CommentDiscussionIcon } from "@primer/octicons-react";

interface Props {
    params: {id:string};

}

export async function generateMetadata({params}:Props): Promise<Metadata> {

    try{
        const {id} = params;

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
            <div className="flex flex-col bg-[#A5B68D] rounded-2xl w-4/5 items-center justify-center">
                <div className="flex">
                    <div className="flex flex-col justify-center items-center mt-4">
                        <img src="https://via.placeholder.com/150" className="w-80 m-5 rounded-2xl"/>
                        <div>
                            <label>Subscribir</label>
                            <HeartIcon size={24} className="ml-5" />
                        </div>
                    </div>
                    <div className="flex flex-col ml-20 mt-12">
                        <h2 className="text-3xl font-bold mb-36">Placeholder name</h2>
                        <label className="mb-5">Precio</label>
                        <button className="bg-[#E7CCCC] rounded-2xl w-48 h-10 text-black">$12000 COP</button>
                    </div>
                    <div className="mt-14 ml-20">
                        <div className="flex mb-36">
                            <h3 className="mr-5 text-lg">Placeholder name</h3>
                            <div className="flex flex-col bg-[#F5F1E6] w-10 items-center justify-center rounded-2xl">
                                <CommentDiscussionIcon size={24} className="text-[#A5B68D]" />
                            </div>
                        </div>
                        
                        <label>Categorias</label>
                        <div className="flex bg-white text-black rounded-2xl h-10 w-48 justify-center items-center mt-5">  
                            Placeholder Categories
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex w-4/5 h-48 mt-5 justify-center overflow-y-scroll">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quo, reiciendis tempore ipsam facere maxime eos architecto eius molestiae, ut id neque asperiores sequi laudantium totam, nemo odit delectus. Fugiat!
                    </div>
                </div>

            </div>
        </div>
    )
    
}

export default ProductDetail