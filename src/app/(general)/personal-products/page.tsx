
import { CategoryBar } from "@/components/category-bar/CategoryBar"
import { ListItem } from "@/components/list-item/ListItem"


export const metadata = {
    title: "Tienda",
    description: "Pagina principal de la tienda"
}

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex flex-1">
                <label className="font-serif text-[100px] text-black font-light">Tus productos</label>
                <button className=" flex items-center justify-center rounded-full text-[100px] text-black font-light bg-[#A5B68D] h-16 mt-10 ml-5 w-16 hover:text-white hover:border-[#F5F1E6] hover:bg-[#899a71] transition duration-150">+</button>
            </div>
            <button className="text-black mt-4 bg-[#A5B68D] w-48 rounded-2xl hover:text-white hover:border-[#F5F1E6] hover:bg-[#899a71] transition duration-150">Notificar</button>
            <div className="flex flex-row items-center justify-center mt-10 w-3/4 h-96 bg-[#A5B68D] rounded-2xl ">
                <ListItem id = '1234' image="" name="Colitas cubanas" cost={12500}/>
            </div>
            
        </div>
    )
}