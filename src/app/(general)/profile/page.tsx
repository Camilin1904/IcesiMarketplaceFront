import { useState } from "react";
import { ListItem } from "@/components/list-item/ListItem";
import { SellerItem } from "@/components/list-item/SellerItem";
import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { useLogout } from "@/hooks/auth/useLogout";
import { User } from "@/interface/user";
import { useProfile } from "@/hooks/auth/useProfile";
import { SellerList } from "@/components/list-item/SellerList";
import { PreUserInfo } from "@/components/user-info/PreUserInfo";


export default function Profile(){

    return(
        <PreUserInfo/>
    );
}