"use client";
import { HomeIcon, PersonIcon, SearchIcon, PackageIcon, SignOutIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";
import { HeartIcon, CommentDiscussionIcon, HeartFillIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react";
import { useIsSubscribed } from "@/hooks/product/useIsSubscribed";
import { useSubscribe } from "@/hooks/product/useProduct";

interface props {
    pId: string;
}

export function SubscribeButton({ pId }: props) {
    const isSubscribed = useIsSubscribed(pId);
    const [subscribed, setSubscribed] = useState(isSubscribed);

    useEffect(() => {
        setSubscribed(isSubscribed);
    }, [isSubscribed]);

    const subscribe = () => {
        setSubscribed(!subscribed);
        useSubscribe(pId);
    };

    return (
        <button className="group relative w-6 h-6 me-5" onClick={subscribe}>
            {subscribed ? (
                <HeartFillIcon size={24} className="absolute transition-opacity duration-200 opacity-100 group-hover:opacity-75" />
            ) : (
                <HeartFillIcon size={24} className="absolute transition-opacity duration-200 opacity-0 group-hover:opacity-25" />
            )}
            <HeartIcon size={24} className="absolute transition-opacity duration-200 opacity-100 group-hover:opacity-100" />
        </button>
    );
}