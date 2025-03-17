"use client"

import { useState, useEffect } from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <p>{ `ⓒ Next.js UMS App @ ${year}. All Rights Reserved.` }</p>
    );
};

export default Footer;