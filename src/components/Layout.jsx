import React from "react"
import Header from "./header"
import Main from "./main"
import Footer from "./footer"
import "../styles/global.scss"

export default function Layout({ children }) {
  return (
		<>
			<Header />
			<Main children= { children } />
			<Footer />
		</>
	)
}