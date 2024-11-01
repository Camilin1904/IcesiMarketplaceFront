
import { CategoryBar } from "@/components/category-bar/CategoryBar"
import { ListItem } from "@/components/list-item/ListItem"

export const metadata = {
    title: "Tienda",
    description: "Pagina principal de la tienda"
}

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <label className="font-serif text-[100px] text-black font-light">ICESI - Market</label>
            <CategoryBar/>
            <div className="flex flex-row items-center justify-center mt-16 w-3/4 h-96 bg-[#A5B68D] rounded-2xl">
                <ListItem image="" name="Colitas cubanas" cost={12500}/>
            </div>
            
        </div>
    )
}