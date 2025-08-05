
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/AtharvaGulhane.github.io/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/AtharvaGulhane.github.io"
  },
  {
    "renderMode": 2,
    "route": "/AtharvaGulhane.github.io/projects"
  },
  {
    "renderMode": 2,
    "route": "/AtharvaGulhane.github.io/skills"
  },
  {
    "renderMode": 2,
    "route": "/AtharvaGulhane.github.io/experience"
  },
  {
    "renderMode": 2,
    "route": "/AtharvaGulhane.github.io/contact"
  },
  {
    "renderMode": 2,
    "route": "/AtharvaGulhane.github.io/blog"
  },
  {
    "renderMode": 2,
    "redirectTo": "/AtharvaGulhane.github.io",
    "route": "/AtharvaGulhane.github.io/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12812, hash: '6db3c5a033e3bfe010cdefb252fe369e7b1f48d1e594a37ed88b1df0e021ed74', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1037, hash: 'ca86bb91a880a7bf90cfeb2450fe0b0c3a4032e88bc2c4f995d49289c8ef2ea7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 31561, hash: '0d95b130bb49eb7f6b48472c65f6e81105b1f5f940a6e1f822f5d02250ce383b', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 25518, hash: '8526ee3a65f476c5353526b736f129ecb9fd65201a7c9b0eb210a5b02a8cd490', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'experience/index.html': {size: 29253, hash: '27be814b3923528f3978f3269f8587352569c1d6bcb85c35720a8a20deadd435', text: () => import('./assets-chunks/experience_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 32738, hash: '99e4a528f23c511a6a9229aab0bb5baea585079f72f4111794d2ce5874c240ea', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'skills/index.html': {size: 67660, hash: '90635d8c17bf83f8fbbb591811508cb21260a798771ee89bd51cb1dd877f1a00', text: () => import('./assets-chunks/skills_index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 65591, hash: '1e8392a04454fb50be2cc9990296177b164d9d1e0a22f7a0d515c77a847cc44b', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'styles-H5A23HD6.css': {size: 33325, hash: 'HqdeF7pjc4M', text: () => import('./assets-chunks/styles-H5A23HD6_css.mjs').then(m => m.default)}
  },
};
