(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[445],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var i,a=(i=t(7294))&&i.__esModule?i:{default:i},o=t(1063),l=t(4651),c=t(7426);var u={};function s(e,n,t,r){if(e&&o.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(i?"%"+i:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,i=l.useRouter(),f=a.default.useMemo((function(){var n=o.resolveHref(i,e.href,!0),t=r(n,2),a=t[0],l=t[1];return{href:a,as:e.as?o.resolveHref(i,e.as):l||a}}),[i,e.href,e.as]),d=f.href,_=f.as,p=e.children,h=e.replace,v=e.shallow,g=e.scroll,m=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var k=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,y=c.useIntersection({rootMargin:"200px"}),b=r(y,2),C=b[0],L=b[1],x=a.default.useCallback((function(e){C(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,C]);a.default.useEffect((function(){var e=L&&t&&o.isLocalURL(d),n="undefined"!==typeof m?m:i&&i.locale,r=u[d+"%"+_+(n?"%"+n:"")];e&&!r&&s(i,d,_,{locale:n})}),[_,d,L,m,t,i]);var w={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,l,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[i?"replace":"push"](t,r,{shallow:a,locale:c,scroll:l}))}(e,i,d,_,h,v,g,m)},onMouseEnter:function(e){o.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s(i,d,_,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof m?m:i&&i.locale,M=i&&i.isLocaleDomain&&o.getDomainLocale(_,E,i&&i.locales,i&&i.domainLocales);w.href=M||o.addBasePath(o.addLocale(_,E,i&&i.defaultLocale))}return a.default.cloneElement(n,w)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,c=i.useRef(),u=i.useState(!1),s=r(u,2),f=s[0],d=s[1],_=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||f||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:i,elements:r}),t}(t),i=r.id,a=r.observer,o=r.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),l.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return i.useEffect((function(){if(!o&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[_,f]};var i=t(7294),a=t(3447),o="undefined"!==typeof IntersectionObserver;var l=new Map},9061:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return l},default:function(){return c}});t(4616);var r=t(1664),i=t(5080),a=t.n(i),o=t(5893),l=!0;function c(e){var n=e.html;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("header",{children:(0,o.jsx)("div",{className:a().backLink,children:(0,o.jsx)(r.default,{href:"/",children:(0,o.jsx)("a",{children:"\u2190 Back to home"})})})}),(0,o.jsx)("main",{className:a().articleContainer,children:(0,o.jsx)("section",{className:a().articleContent,children:(0,o.jsx)("article",{className:a().markdownBody,dangerouslySetInnerHTML:{__html:n}})})})]})}},8068:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[postTitle]",function(){return t(9061)}])},5080:function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm",markdownBody:"utils_markdownBody__1keVi",articleContainer:"utils_articleContainer__2nWVL",articleContent:"utils_articleContent__1zaAd",backLink:"utils_backLink__2izTn"}},4616:function(){},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8068,e(e.s=n);var n}));var n=e.O();_N_E=n}]);