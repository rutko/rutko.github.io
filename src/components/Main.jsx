import React from "react"
import { Link } from "gatsby"
import "../styles/main.scss"

export default ({ children }) => {
  return (
		<>
			<body>
				<nav>
					<ul class="tabs">
						<li><Link to="/products">Products</Link></li>
						<li><Link to="https://twitter.com/rutko_">Twitter</Link></li>
						<li><Link to="https://github.com/rutko">Github</Link></li>
						<li><Link to="/osushi">Osushi</Link></li>
					</ul>
				</nav>
				{ children }
			</body>
		</>
	);
}
