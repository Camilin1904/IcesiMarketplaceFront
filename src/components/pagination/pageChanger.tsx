"use client";
import { SetStateAction, useState } from "react";
import Cookies from "js-cookie";
import { useNumPages } from '../../hooks/product/useNumPages';
import {useRouter} from "next/navigation";

interface props {
    path: string;
}

export default function PageChanger({path}: props) {
    const [page, setPage] = useState(() => Cookies.get('page') || '1');
    const [inputPage, setInputPage] = useState(page);
    const numPages = useNumPages();
    const router = useRouter();

    const handlePageChange = (newPage: number, reload = true) => {
        const pageNumber = Math.max(1, Math.min(newPage, numPages));
        console.log(pageNumber);
        if (pageNumber.toString() !== page) {
            setPage(pageNumber.toString());
            Cookies.set('page', pageNumber.toString());
            if (reload) {
                router.push('/' + path);
                window.location.reload();
            }
        }
    };

    return (
        <div className="flex items-center space-x-0 mt-4">
            <button
                onClick={() => handlePageChange((Math.max(parseInt(page) - 1, 1)), true)}
                className="p-2 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
            >
                &lt;
            </button>
            <input
                id="pageSelector"
                type="number"
                value={inputPage}
                onChange={(e) => setInputPage(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handlePageChange(parseInt(inputPage));
                    }
                }}
                className="p-2 bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white appearance-none text-center max-w-10"
                style={{ WebkitAppearance: 'textfield', MozAppearance: 'textfield'}}
            />
            <button
                onClick={() => handlePageChange((Math.min(parseInt(page) + 1, numPages)), true)}
                className="p-2 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
            >
                &gt;
            </button>
        </div>
    );
}