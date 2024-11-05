
import { CategoryBar } from "@/components/category-bar/CategoryBar"
import { SellerItem } from "@/components/list-item/SellerItem"
import { FeedPlusIcon } from "@primer/octicons-react"

export const metadata = {
    title: "Tienda",
    description: "Pagina principal de la tienda"
}

export default function SellerPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex items-center justify-center">
                <label className="font-serif text-[100px] text-black font-light mr-5">Tus Productos</label>
                <FeedPlusIcon className="text-[#A5B68D]" size={100}/>
            </div>
            <CategoryBar/>
            <div className="
            flex flex-row items-center justify-center mt-16 w-3/4 h-96 bg-[#C1CFA1] rounded-2xl rounded-r-lg overflow-scroll 
            shadow-lg
            overflow-x-hidden
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-2xl
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-2xl
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-[#C1CFA1]
            dark:[&::-webkit-scrollbar-thumb]:bg-[#A5B68D]">
                <div className="grid grid-cols-3 gap-12">
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    <SellerItem image="" name="Colitas cubanas" cost={12500}/>
                    
                </div>
            </div>
            
        </div>
    )
}