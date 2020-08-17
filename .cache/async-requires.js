// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-jsx": () => import("./../../../src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */),
  "component---src-pages-osushi-jsx": () => import("./../../../src/pages/osushi.jsx" /* webpackChunkName: "component---src-pages-osushi-jsx" */),
  "component---src-pages-products-jsx": () => import("./../../../src/pages/products.jsx" /* webpackChunkName: "component---src-pages-products-jsx" */)
}

