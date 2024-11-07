
import { CategoryBar } from "@/components/category-bar/CategoryBar"
import { FilterBar } from "@/components/filter-bar/FilterBar"
import { FilteredList } from "@/components/list-item/FilteredList"
import { ListItem } from "@/components/list-item/ListItem"
import PageChanger from "@/components/pagination/pageChanger"
import { useGetAllProducts } from "@/hooks/product/useProduct"

export const metadata = {
    title: "Tienda",
    description: "Pagina principal de la tienda"
}

export default function FindPage() {


    
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <FilterBar/>
            <div className="
            flex flex-row items-center justify-center mt-16 w-3/4 h-[600px] bg-[#C1CFA1] rounded-2xl rounded-r-lg  
            overflow-x-hidden
            overflow-y-scroll
            shadow-lg
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-2xl
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-2xl
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-[#C1CFA1]
            dark:[&::-webkit-scrollbar-thumb]:bg-[#A5B68D]">
                <div className="grid grid-cols-3 gap-12 mt-32">
                   <FilteredList/>
                </div>
            </div>
            <PageChanger key={123}{...{path:'find'}}/>
            
        </div>
    )
}