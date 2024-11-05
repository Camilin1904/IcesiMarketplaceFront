import { HomeIcon, PersonIcon, SearchIcon, PackageIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink2 } from "../active-link/ActiveLink";

interface Props{
    id: string;
    image?: string;
    name: string;
    cost: number;
}

export function ListItem({id, image, name, cost}: Props){
    var displayImage;
    const dest = "/product/"+id;
    if(image){
        displayImage = image;
    }
    else{
        displayImage = "https://via.placeholder.com/150";
    }
    return(
        <div className="flex flex-1 bg-[#F5F1E6] text-black w-auto max-w-80 rounded-2xl ">
            <img src={displayImage} className="w-24 m-5 rounded-xl"/>
            <div className="flex flex-col justify-center items-center m-5">
                <h1 className="h-7">{name}</h1>
                <p className="h-7">${cost} COP</p>
                <Link href={dest} className=" flex flex-col items-center bg-[#E7CCCC] rounded-2xl w-28 h-7">Lo quiero</Link>
            </div>
        </div>
    )
}