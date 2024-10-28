"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import { decrement, increment, initCount } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

interface Props{
    value?:number;
}

export const CartCounter=({value=0}:Props)=>{

    //const [count, setCount] = useState(value);
    const count = useAppSelector(state => state.counter.value);
    const dispatch = useAppDispatch();

    useEffect(()=>{dispatch(initCount(value))},[]);
    return(
        <div className="flex items-center justify-center w-80 h-80">
            <span className="text-4xl">{count}</span>
            <div className="flex">
                <button className="flex items-center justify-center p-2 rounded-x1 bg-gray-900
                text-white hover:bg-gray-600 transition-all mr-2 rounded" onClick={()=>dispatch(increment())}>
                    +1
                </button>
                <button className="flex items-center justify-center p-2 rounded-x1 bg-gray-900 
                text-white hover:bg-gray-600 transition-all mr-2 rounded" onClick={()=>dispatch(decrement())}>
                    -1
                </button>
            </div>
        </div>
    )
}