import React from "react"
import { Navbar } from "../components"

export default function Layout({ children }) {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}