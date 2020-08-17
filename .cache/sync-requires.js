const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rutko/rutko.github.io/.cache/dev-404-page.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/rutko/rutko.github.io/src/pages/index.jsx"))),
  "component---src-pages-osushi-jsx": hot(preferDefault(require("/Users/rutko/rutko.github.io/src/pages/osushi.jsx"))),
  "component---src-pages-products-jsx": hot(preferDefault(require("/Users/rutko/rutko.github.io/src/pages/products.jsx")))
}

