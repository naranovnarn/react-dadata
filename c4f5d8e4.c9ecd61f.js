(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{127:function(t,e,n){"use strict";n.r(e);var a,r=n(0),s=n.n(r),o=n(134),i=n.n(o),u=n(135),c=(n(132),n(131)),l=(n(136),n(121)),g=n.n(l),d=(a=function(t,e){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}a(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),p=function(){return(p=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},h=function(t){function e(e){var n=t.call(this,e)||this;n.loadSuggestionsUrl="",n.handleInputFocus=function(t){n.setState({isFocused:!0}),0===n.state.suggestions.length&&n.fetchSuggestions();var e=n.props.inputProps;e&&e.onFocus&&e.onFocus(t)},n.handleInputBlur=function(t){var e=n.state.suggestions;n.setState({isFocused:!1}),0===e.length&&n.fetchSuggestions();var a=n.props.inputProps;a&&a.onBlur&&a.onBlur(t)},n.handleInputChange=function(t){var e=t.target.value,a=n.props.inputProps;n.setState({query:e,inputQuery:e,displaySuggestions:!0},(function(){n.fetchSuggestions()})),a&&a.onChange&&a.onChange(t)},n.handleInputKeyPress=function(t){var e=n.state,a=e.suggestions,r=e.suggestionIndex,s=e.inputQuery;if(40===t.which){if(t.preventDefault(),r<a.length){var o=a[i=r+1].value;n.setState({suggestionIndex:i,query:o})}}else if(38===t.which){if(t.preventDefault(),r>=0){var i;o=-1===(i=r-1)?s:a[i].value;n.setState({suggestionIndex:i,query:o})}}else 13===t.which&&(t.preventDefault(),r>=0&&n.selectSuggestion(r))},n.getLoadSuggestionsData=function(){return{}},n.fetchSuggestions=function(){var t=n.props.token;n.xhr&&n.xhr.abort(),n.xhr=new XMLHttpRequest,n.xhr.open("POST",n.loadSuggestionsUrl),n.xhr.setRequestHeader("Accept","application/json"),n.xhr.setRequestHeader("Authorization","Token "+t),n.xhr.setRequestHeader("Content-Type","application/json"),n.xhr.send(JSON.stringify(n.getLoadSuggestionsData())),n.xhr.onreadystatechange=function(){if(n.xhr&&4===n.xhr.readyState&&200===n.xhr.status){var t=JSON.parse(n.xhr.response);t&&t.suggestions&&n.setState({suggestions:t.suggestions,suggestionIndex:-1})}}},n.onSuggestionClick=function(t,e){e.stopPropagation(),n.selectSuggestion(t)},n.selectSuggestion=function(t){var e=n.state.suggestions,a=n.props.onChange;if(e.length>=t-1){var r=e[t];n.setState({query:r.value,inputQuery:r.value,displaySuggestions:!1},(function(){n.fetchSuggestions(),setTimeout((function(){return n.setCursorToEnd(n.textInput)}))})),a&&a(r)}},n.setCursorToEnd=function(t){if(t){var e=t.value.length;(t.selectionStart||0===t.selectionStart)&&(t.selectionStart=e,t.selectionEnd=e,t.focus())}},n.getHighlightWords=function(){var t=n.state.inputQuery,e=["\u0433","\u0440\u0435\u0441\u043f","\u0443\u043b","\u0440-\u043d","\u0441\u0435\u043b\u043e","\u0434\u0435\u0440\u0435\u0432\u043d\u044f","\u043f\u043e\u0441\u0435\u043b\u043e\u043a","\u043f\u0440-\u0434","\u043f\u043b","\u043a","\u043a\u0432","\u043e\u0431\u043b","\u0434"],a=t.replace(",","").split(" ");return a=a.filter((function(t){return e.indexOf(t)<0}))},n.renderOption=function(t){return null},n.getSuggestionKey=function(t){return t.value};var a=n.props.defaultQuery;return n.state={query:a||"",inputQuery:a||"",isFocused:!1,displaySuggestions:!0,suggestions:[],suggestionIndex:-1},n}return d(e,t),e.prototype.render=function(){var t=this,e=this.props,n=e.inputProps,a=e.hintText,r=e.containerClassName,o=e.hintClassName,i=e.suggestionsClassName,u=e.suggestionClassName,c=e.currentSuggestionClassName,l=e.children,g=this.state,d=g.query,h=g.isFocused,f=g.suggestions,m=g.suggestionIndex,y=g.displaySuggestions;return s.a.createElement("div",{className:r||"react-dadata react-dadata__container"},s.a.createElement("div",null,s.a.createElement("input",p({autoComplete:"off",className:"react-dadata__input"},n,{value:d,ref:function(e){t.textInput=e},onChange:this.handleInputChange,onKeyPress:this.handleInputKeyPress,onKeyDown:this.handleInputKeyPress,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur}))),h&&f&&y&&f.length>0&&s.a.createElement("div",{className:i||"react-dadata__suggestions"},void 0!==a&&s.a.createElement("div",{className:o||"react-dadata__suggestion-note"},a),f.map((function(e,n){var a=u||"react-dadata__suggestion";return n===m&&(a+=" "+(c||"react-dadata__suggestion--current")),s.a.createElement("button",{key:t.getSuggestionKey(e),onMouseDown:t.onSuggestionClick.bind(t,n),className:a},t.renderOption(e))}))),l)},e}(s.a.PureComponent),f=function(){return(f=Object.assign||function(t){for(var e,n=1,a=arguments.length;n<a;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)};function m(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var a=Array(t),r=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,i=s.length;o<i;o++,r++)a[r]=s[o];return a}for(var y=36,v="";y--;)v+=y.toString(36);function _(t){void 0===t&&(t=11);for(var e="",n=t;n--;)e+=v[36*Math.random()|0];return e}var b,E=(b="match",function(t){return null!=t&&b in t});function S(t){var e=t.curr,n=t.next,a=t.prev,r=t.clipBy,s=void 0===r?3:r,o=e.text.split(" "),i=o.length;if(e.match||s>=i)return e.text;return E(a)&&E(n)?i>2*s?m(o.slice(0,s),["..."],o.slice(-s)).join(" "):e.text:E(n)?m(["..."],o.slice(-s)).join(" "):E(a)?m(o.slice(0,s),["..."]).join(" "):e.text}var x=function(t){return t.length>0},N=function(t){var e=t.text,n=t.query,a=t.clipBy,r=t.matchExactly,s=void 0!==r&&r,o=n.trim();if(""===o)return[{key:_(),text:e,match:!1}];var i=new RegExp(function(t){var e=t.terms,n=t.matchExactly,a=void 0!==n&&n;if("string"!=typeof e)throw new TypeError("Expected a string");var r=e.trim().replace(/[|\\{}()[\]^$+*?.-]/g,(function(t){return"\\"+t}));return"("+(a?r:r.split(" ").join("|"))+")"}({terms:o,matchExactly:s}),"ig");return e.split(i).filter(x).map((function(t){return{key:_(),text:t,match:s?t.toLowerCase()===o.toLowerCase():i.test(t)}})).map((function(t,e,n){return f(f({},t),"number"==typeof a&&{text:S(f(f(f({curr:t},e<n.length-1&&{next:n[e+1]}),e>0&&{prev:n[e-1]}),{clipBy:a}))})}))},O=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return O(e,t),e.prototype.render=function(){var t=this.props,e=t.text,n=t.words,a=t.highlightClassName,r=t.tagName,o=void 0===r?"span":r,i="string"==typeof n?n:n.join(" "),u=N({text:e,query:i});return s.a.createElement("span",null,u.map((function(t){if(!t.match)return s.a.createElement("span",{key:t.key},t.text);var e=o;return s.a.createElement(e,{key:t.key,className:a},t.text)})))},e}(r.PureComponent),C=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),P=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",e.getLoadSuggestionsData=function(){var t=e.props,n=t.count,a=t.filterFromBound,r=t.filterToBound,s=t.filterLocations,o=t.filterLocationsBoost,i={query:e.state.query,count:n||10};return a&&r&&(i.from_bound={value:a},i.to_bound={value:r}),s&&(i.locations=s),o&&(i.locations_boost=o),i},e.renderOption=function(t){var n=e.props,a=n.renderOption,r=n.highlightClassName;return a?a(t):s.a.createElement(w,{highlightClassName:r||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.value})},e}return C(e,t),e}(h),j=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),k=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",e.getLoadSuggestionsData=function(){var t=e.props,n=t.count,a=t.filterStatus,r=t.filterType,s=t.filterLocations,o=t.filterLocationsBoost,i={query:e.state.query,count:n||10};return a&&(i.status=a),r&&(i.type=r),s&&(i.locations=s),o&&(i.locations_boost=o),i},e.getSuggestionKey=function(t){return""+t.data.inn},e.renderOption=function(t){var n=e.props,a=n.renderOption,r=n.highlightClassName;return a?a(t):s.a.createElement("div",null,s.a.createElement("div",{className:"LIQUIDATED"===t.data.state.status?"react-dadata__suggestion--line-through":void 0},s.a.createElement(w,{highlightClassName:r||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.value})),s.a.createElement("div",{className:"react-dadata__suggestion-subtitle"},t.data.inn&&s.a.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},t.data.inn),t.data.address&&t.data.address.value&&s.a.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},s.a.createElement(w,{highlightClassName:r||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.data.address.value}))))},e}return j(e,t),e}(h),I=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(e,n)};return function(e,n){function a(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),T=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank",e.getLoadSuggestionsData=function(){var t=e.props,n=t.count,a=t.filterStatus,r=t.filterType,s=t.filterLocations,o=t.filterLocationsBoost,i={query:e.state.query,count:n||10};return a&&(i.status=a),r&&(i.type=r),s&&(i.locations=s),o&&(i.locations_boost=o),i},e.getSuggestionKey=function(t){return""+t.data.bic},e.renderOption=function(t){var n=e.props,a=n.renderOption,r=n.highlightClassName;return a?a(t):s.a.createElement("div",null,s.a.createElement("div",{className:"LIQUIDATED"===t.data.state.status?"react-dadata__suggestion--line-through":void 0},s.a.createElement(w,{highlightClassName:r||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.value})),s.a.createElement("div",{className:"react-dadata__suggestion-subtitle"},t.data.bic&&s.a.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},t.data.bic),t.data.address&&t.data.address.value&&s.a.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},s.a.createElement(w,{highlightClassName:r||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.data.address.value}))))},e}return I(e,t),e}(h);e.default=function(){const t=Object(c.a)(),[e,n]=Object(r.useState)("address"),{siteConfig:a={}}=t;return s.a.createElement(u.a,{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",description:"react-dadata - React \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u043f\u043e\u0434\u0441\u043a\u0430\u0437\u043e\u043a \u0430\u0434\u0440\u0435\u0441\u043e\u0432 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e DaData.ru"},s.a.createElement("header",{className:i()("hero hero--primary",g.a.heroBanner)},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"hero__title"},a.title),s.a.createElement("p",{className:"hero__subtitle"},a.tagline))),s.a.createElement("main",{className:g.a.main},s.a.createElement("div",{className:g.a.mainTabs},s.a.createElement("button",{className:`${g.a.mainTab} ${"address"===e?g.a.mainTabActive:""}`,onClick:()=>n("address")},"\u0410\u0434\u0440\u0435\u0441\u0430"),s.a.createElement("button",{className:`${g.a.mainTab} ${"party"===e?g.a.mainTabActive:""}`,onClick:()=>n("party")},"\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438"),s.a.createElement("button",{className:`${g.a.mainTab} ${"bank"===e?g.a.mainTabActive:""}`,onClick:()=>n("bank")},"\u0411\u0430\u043d\u043a\u0438")),s.a.createElement("div",null,"address"===e&&s.a.createElement(P,{token:"df8add7669591c60037f31466ee9081dbbdb0b31",inputProps:{placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432 \u0441\u0432\u043e\u0431\u043e\u0434\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0435..."}}),"party"===e&&s.a.createElement(k,{token:"df8add7669591c60037f31466ee9081dbbdb0b31",inputProps:{placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0418\u041d\u041d..."}}),"bank"===e&&s.a.createElement(T,{token:"df8add7669591c60037f31466ee9081dbbdb0b31",inputProps:{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435, \u0411\u0418\u041a, SWIFT \u0438\u043b\u0438 \u0418\u041d\u041d..."}}))))}}}]);