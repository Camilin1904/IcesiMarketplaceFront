import { CategoryBar } from "@/components/category-bar/CategoryBar"
import { HomeList } from "@/components/list-item/homeList";
import { ListItem } from "@/components/list-item/ListItem"
import PageChanger from "@/components/pagination/pageChanger";

export default function HomePage() {
    

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <label className="font-serif text-[75px] text-black font-light">ICESI - Market</label>
            <CategoryBar/>
            <HomeList/>
            <PageChanger key={123}{...{path:'home'}}/>
           
        </div>
    )
}