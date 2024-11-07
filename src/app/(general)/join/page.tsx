"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useBecomeSeller } from "@/hooks/auth/useBecomeSeller";
import { useProfile } from "@/hooks/auth/useProfile";

export default function JoinPage() {
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const user = useProfile();

    if (user?.roles && user?.roles.includes("seller")) {
        router.push("/profile");
    }

    const onSubmit = () => {
        setIsSubmitting(true);
        useBecomeSeller(phone, location);
        router.push("/profile");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-full text-black">
            <h1 className="mt-20 mb-20 text-black font-serif text-[75px] leading-[32px]">Conviertete en un vendedor</h1>
            <div className="flex flex-col items-center justify-center w-1/2 h-96 text-white bg-[#A5B68D] rounded-xl shadow-lg">
                <label className="mt4 mb-4">Telefono</label>
                <input data-key="phone" type="text" className="w-80 h-8 px-2 border border-solid border-white text-white rounded-xl bg-[#A5B68D] mb-4 focus:outline-none" 
                value={phone} onChange={(e) => setPhone(e.target.value)} />
                <label className="mt4 mb-4">¿Donde te encuentras regularmente?</label>
                <textarea data-key="location" className="w-80 h-24 px-2 border border-solid border-white text-white rounded-xl bg-[#A5B68D] mb-4 focus:outline-none resize-none" 
                value={location} onChange={(e) => setLocation(e.target.value)} />
                <button data-key="submit" className="mt-4 p-2 bg-[#F5F1E6] text-black rounded-xl hover:bg-[#A5B68D] transition duration-150 ease-in-out hover:text-white hover:border-[#F5F1E6] w-28"
                onClick={onSubmit}>
                    Registrarse
                </button>
            </div>    
        </div>
    );
}