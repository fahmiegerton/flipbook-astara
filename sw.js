if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),c={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-6cd28afd"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.1a52831e.css",revision:null},{url:"assets/index.cf928ead.js",revision:null},{url:"assets/vendor.c2f44429.js",revision:null},{url:"index.html",revision:"ab4e4b072d22d698a522c8998ce523f5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"cf37d832f301e95a96fbe4763c613c7f"},{url:"manifest.webmanifest",revision:"37c71965f4d9e9e70d603d9a2f3d2c7b"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));