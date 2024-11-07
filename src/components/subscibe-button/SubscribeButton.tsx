"use client";
import { HomeIcon, PersonIcon, SearchIcon, PackageIcon, SignOutIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { HeartIcon, CommentDiscussionIcon, HeartFillIcon } from "@primer/octicons-react";
import { use } from "chai";
import { useEffect, useState } from "react";
import { useIsSubscribed } from "@/hooks/product/useIsSubscribed";
import { useSubscribe } from "@/hooks/product/useProduct";

interface props{
    pId: string;
}


export function SubscribeButton({pId}: props){
    console.log(pId);
    const [isSubscribed, setIsSubscribed] = useState(useIsSubscribed(pId));
    const subscibe = () => {
        setIsSubscribed(!isSubscribed);
        useSubscribe(pId);
    }
    const [fill,setFill] = useState(<></>);
    const isFill = useEffect(() => {
        if(isSubscribed){
            setFill(<HeartFillIcon size={24} className="absolute transition-opacity duration-200 opacity-100 group-hover:opacity-75"/>)
        }
        else{
            setFill(<HeartFillIcon size={24} className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-25"/>)
        }
    }, [isSubscribed]);
    return( 
        <button className="group relative w-6 h-6 me-5" onClick={subscibe}>
            {fill}
            <HeartIcon size={24} className="absolute transition-opacity duration-200 opacity-100 group-hover:opacity-100"/>
        </button>
    )
}