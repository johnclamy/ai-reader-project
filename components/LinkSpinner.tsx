'use client'

import { useLinkStatus } from "next/link"


const LinkSpinner = () => {
    const { pending } = useLinkStatus()

    // Return inline feedback when the link navigation is in progress
    return pending ? <span className="spinner-hint animate-spin ml-2">⏳</span> : null
}


export default LinkSpinner
