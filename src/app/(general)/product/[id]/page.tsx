import { Metadata } from "next";

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
    const id= parseInt(params.id);

    return (
        <div>
            Product Detail {params.id}
        </div>
    )
    
}

export default ProductDetail