
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/projects"
  },
  {
    "renderMode": 2,
    "route": "/skills"
  },
  {
    "renderMode": 2,
    "route": "/experience"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12787, hash: '4d050c1a46bd493de3301ee784f666fe2d7a45e2cd1af454682d089fd9899398', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '74a72b7e649cf167dd0c2fcb89ad185fad58edfb0a4db516786a542647bf0c32', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25318, hash: 'c9feca7b0a0b4645aa00a01d34a61234b6613ff5d35cf7d79b4d01817ab03edf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 31361, hash: '59ad01216e4e9b3a7402e81e8cde53128d714b4d8b26a18441a54d5e925e0bcc', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 29053, hash: 'cb476cc876ed715a419d04ff7128d722c4cb1f21a5ca2cfb4a6b7f25c07d581a', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32538, hash: '3eb01073e13389c30307112bc824b1344b43f9b07607cf8bbf70cf34cd963485', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 67460, hash: 'cf7d8a97ded6bfa9344f247db55b45849fc18c777bd7ffa8825d0437eec2979d', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 65391, hash: '86e67646bee0904a3f210302fa10213bdaf8479151c8e10242603464d2a03773', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-H5A23HD6.css': {size: 33325, hash: 'HqdeF7pjc4M', text: () => import('./assets-chunks/styles-H5A23HD6_css.mjs').then(m => m.default)}
  },
};
