import Link from "next/link"
import React from 'react'

export default function CatalogHeader() {
    return (
        <div className="h-[70px] flex items-center w-full ">
            <div className="wrapper ">
                <div className="flex justify-between items-center">
                    <div>logo</div>
                    <div className="flex gap-2">
                        <Link href="/">Home</Link>
                        <Link href="/">Catalog</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
