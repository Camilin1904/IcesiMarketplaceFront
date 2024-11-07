"use client";
import { SetStateAction, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNumPages } from '../../hooks/product/useNumPages';
import {useRouter} from "next/navigation";

interface props {
    path: string;
}

export default function PageChanger({path}: props) {
    const [page, setPage] = useState(() => parseInt(Cookies.get('page') || '1'));
    const [inputPage, setInputPage] = useState(page);
    const numPages = useNumPages();
    const router = useRouter();
    const [firstLoad, setFirstLoad] = useState(true);


    const handlePageChange = useEffect(() => {
            const pageNumber = Math.max(1, Math.min(page, numPages));
            console.log(page);
            if(!firstLoad){
                setInputPage(pageNumber); // Update inputPage state
                Cookies.set('page', page.toString());
                router.push('/' + path); // Update URL with page number
                window.location.reload();
            }
            setFirstLoad(false);
            
            }, [page]);
   

    return (
        <div className="flex items-center space-x-0 mt-4">
            <button
                onClick={() => setPage(Math.max(inputPage - 1, 1))}
                className="p-2 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
            >
                &lt;
            </button>
            <input
                id="pageSelector"
                type="number"
                value={inputPage}
                onChange={(e) => setInputPage(Math.max(1, Math.min(parseInt(e.target.value), numPages)))}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        setPage(inputPage);
                    }
                }}
                className="p-2 bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white appearance-none text-center max-w-10"
                style={{ WebkitAppearance: 'textfield', MozAppearance: 'textfield'}}
            />
            <button
                onClick={() => setPage(Math.min(inputPage + 1, numPages))}
                className="p-2 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
            >
                &gt;
            </button>
        </div>
    );
}