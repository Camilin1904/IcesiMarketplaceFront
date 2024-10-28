import { NavBar } from "@/components/nav-bar/NavBar";
import { Providers } from "@/store/Providers";

export default function AboutLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <NavBar/>
            <Providers>
                {children}
            </Providers>
        </div>
    )
}