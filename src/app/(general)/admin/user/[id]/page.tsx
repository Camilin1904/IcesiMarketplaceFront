import { useState } from "react";
import { ListItem } from "@/components/list-item/ListItem";
import { SellerItem } from "@/components/list-item/SellerItem";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogout";
import { User } from "@/interface/user";
import { useProfile } from "@/hooks/auth/useProfile";
import { SellerList } from "@/components/list-item/SellerList";
import { UserInfo } from "@/components/user-info/UserInfo";

interface Props {
    params: Promise<{id:string}>;
}   

export default async function UserPage({params}:Props){

    const id = (await params).id;

    return(
        <UserInfo id={id}/>
    )


   
}