"use client";

import { useCurrentUser } from "@/hooks/auth/useCurrentUser";
import { use } from "chai";
import { UserInfo } from "./UserInfo";

export const PreUserInfo = () => {
    const user = useCurrentUser().user;
    return (
        <UserInfo id={user?.id || ""}/>
    )
}