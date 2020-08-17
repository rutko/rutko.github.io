import React from "react"
import {Link} from "gatsby"
import Image from "./image"

export default () => {
	return (
	<>
		<header>
			<h1>
				<Image filename = "rutko.png" alt = "rutko" />
				<Link to="/">I'm rutko</Link>
			</h1>
			<p>Software Engineer</p>
		</header>
	</>	
	);
}