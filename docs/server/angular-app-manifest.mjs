
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/angular',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/C:/Program Files/Git/angular/home",
    "route": "/C:/Program Files/Git/angular"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular/home"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular/about"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular/contact"
  },
  {
    "renderMode": 2,
    "route": "/C:/Program Files/Git/angular/**"
  }
],
  assets: {
    'index.csr.html': {size: 7259, hash: '54b730a21043bb8462b8b872d4afeaa424f612b1dcb59b8e8dd348edde797b44', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2402, hash: '53517f25c39f9865097b626901e232e29b89143f92adc708e9ca7aa9d0219b56', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 21490, hash: 'ef4e132073fb9b7923492e2ec0ed69162881f037f94c7f51ba216c6fb9a34710', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 21490, hash: 'ef4e132073fb9b7923492e2ec0ed69162881f037f94c7f51ba216c6fb9a34710', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21490, hash: 'ef4e132073fb9b7923492e2ec0ed69162881f037f94c7f51ba216c6fb9a34710', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21490, hash: 'ef4e132073fb9b7923492e2ec0ed69162881f037f94c7f51ba216c6fb9a34710', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-J7BN47AV.css': {size: 305312, hash: '1pwIKQx7/Nk', text: () => import('./assets-chunks/styles-J7BN47AV_css.mjs').then(m => m.default)}
  },
};
