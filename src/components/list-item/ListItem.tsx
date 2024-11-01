import { HomeIcon, PersonIcon, SearchIcon, PackageIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink2 } from "../active-link/ActiveLink";

interface Props{
    image: string;
    name: string;
    cost: number;
}

export function ListItem({image, name, cost}: Props){
    var displayImage;
    if(image){
        displayImage = image;
    }
    else{
        displayImage = "https://via.placeholder.com/150";
    }
    return(
        <div className="flex flex-1 bg-[#F5F1E6] text-black w-auto max-w-64 rounded-2xl">
            <img src={displayImage} className="w-20 m-5"/>
            <div className="flex flex-col justiify-center items-center mt-4 ">
            <h2>{name}</h2>
            <p>${cost} COP</p>
            <button className="bg-[#E7CCCC] rounded-2xl w-28">Lo Quiero</button>
            </div>
        </div>
    )
}