
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/test/home",
    "route": "/test"
  },
  {
    "renderMode": 2,
    "route": "/test/home"
  },
  {
    "renderMode": 2,
    "route": "/test/about"
  },
  {
    "renderMode": 2,
    "route": "/test/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/test/contact"
  },
  {
    "renderMode": 2,
    "route": "/test/**"
  }
],
  assets: {
    'index.csr.html': {size: 7236, hash: '922e219edfb13b48a8f7f318fa259734c06294f3b07a6e4b52de15445f79a265', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2379, hash: '981ecebc3e073b4d61f6a5aed8433522de2e71c843cec9aaf3ba8d7625fd714f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22610, hash: '5e678b75ec8e4ad5ea68e2429b41672946285de88d6e8675c5c6930551673cb7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 26257, hash: 'c5919e13a0e16427a54cd9c698047aa5816dc27910be49e4442cd9c76fa0b3b7', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 26683, hash: '55240d2b6f8989dea49cb414687c0f3b50975dbf3c0648efe0554127cacd11dc', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 22611, hash: '9dce318ebefd453e30fe78b6db33b73f4f46c12f08098bcef8faf11a0d7ac125', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'styles-J7BN47AV.css': {size: 305312, hash: '1pwIKQx7/Nk', text: () => import('./assets-chunks/styles-J7BN47AV_css.mjs').then(m => m.default)}
  },
};
