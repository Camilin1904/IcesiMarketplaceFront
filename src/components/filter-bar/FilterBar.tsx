"use client";

import { useAppDispatch } from "@/store";
import { initFilter } from "@/store/filter/filterSlice";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store";
import { useState } from "react";
import Cookies from "js-cookie";

/*
const categories=[
    {name:'Tecnologia', path:''},
    {name:'Dulces', path:''},
    {name:'Salados', path:''},
    {name:'Ropa y Accesorios', path:''},
    {name:'Otros', path:''},

]*/
export function FilterBar() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const filter = useAppSelector(state => state.filter);
    const filters = Cookies.get('filter');
    const newFilters = filters?.split('/');
    const [categoryFilters, setCategoryFilter] = useState(newFilters?.filter(filter => filter.startsWith('categories'))[0]?.replace('categories=', ''));
    const [nameFilters, setNameFilters] = useState(newFilters?.filter(filter => filter.startsWith('name'))[0]?.replace('name', ''));
    const [costHigh, setCostHigh] = useState(newFilters?.filter(filter => filter.startsWith('costHigh'))[0]?.replace('costHigh', ''));
    const [costLow, setCostLow] = useState(newFilters?.filter(filter => filter.startsWith('costLow'))[0]?.replace('costLow', ''));
    const [inStock, setinStock] = useState(newFilters?.filter(filter => filter.startsWith('inStock'))[0]?.replace('inStock', ''));
    var fullFilter = '';


    const reapplyFilter = () => {
        fullFilter = [categoryFilters, nameFilters, costHigh, costLow, inStock].filter(f => f&&f.length > 0).join('/');
        dispatch(initFilter(fullFilter));
        Cookies.set('filter', fullFilter);
        router.push(`/find`);
    }

    return (
        <nav className="flex bg-[#A5B68D] p-2 m-2 rounded-xl text-black w-3/4 justify-center align-center shadow-lg overflow-x-scroll">
            <div className="h-15 flex items-center space-x-4">
                <div className="flex flex-1"></div>
                <div className="flex flex-row space-x-4">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="categoryFilter">Category:</label>
                        <input
                            id="categoryFilter"
                            type="text"
                            value={categoryFilters}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="p-2 m-2 mr-5 ml-5 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="nameFilter">Name:</label>
                        <input
                            id="nameFilter"
                            type="text"
                            value={nameFilters}
                            onChange={(e) => setNameFilters(e.target.value)}
                            className="p-2 m-2 mr-5 ml-5 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="costHighFilter">Cost High:</label>
                        <input
                            id="costHighFilter"
                            type="text"
                            value={costHigh}
                            onChange={(e) => setCostHigh(e.target.value)}
                            className="p-2 m-2 mr-5 ml-5 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="costLowFilter">Cost Low:</label>
                        <input
                            id="costLowFilter"
                            type="text"
                            value={costLow}
                            onChange={(e) => setCostLow(e.target.value)}
                            className="p-2 m-2 mr-5 ml-5 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <label htmlFor="inStockFilter">In Stock:</label>
                        <input
                            id="inStockFilter"
                            type="text"
                            value={inStock}
                            onChange={(e) => setinStock(e.target.value)}
                            className="p-2 m-2 mr-5 ml-5 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <button
                            onClick={reapplyFilter}
                            className="p-2 m-2 mr-5 ml-5 transition-all bg-[#EDE8DC] hover:bg-[#C1CFA1] text-black rounded-3xl hover:text-white"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}