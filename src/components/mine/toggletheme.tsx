"use client"

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";


export default function ToggleTheme () {
    const {setTheme} = useTheme();
    const [toggle, setToggle] = useState(false)
    useEffect(() => {
        if (toggle) {
            console.log(toggle)
            setTheme('dark')
            return
        }
        console.log(toggle)
        setTheme('light')
        return
    }, [toggle])
    return (
        <>
            <Expand duration={750} className="text-[3rem]" toggled={toggle} toggle={setToggle}/>
            <h1>{String(toggle)}</h1>
        </>
    )
}