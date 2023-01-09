/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    border: 1px solid white;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f0f0f0;\r\n}\r\n\r\nbody {\r\n    background: #FFF;\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n#header-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.items-wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));\r\n    grid-auto-rows: 1fr;\r\n    justify-content: end;\r\n    perspective: 5000px;\r\n    box-shadow: inset 0 0 10px 0 #000;\r\n}\r\n\r\n.items-wrapper > h2 {\r\n    margin: 100% 0.5rem;\r\n}\r\n\r\n.items-wrapper.small {\r\n    grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));\r\n    transition: 0.2s;\r\n}\r\n\r\n.gallery {\r\n    display: grid;\r\n    grid-template-columns: max-content auto;\r\n}\r\n\r\n@media (max-width: 680px) {\r\n    .gallery {\r\n        grid-template-columns: auto;\r\n    }\r\n}\r\n\r\n.sorting-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton.style-changer-button {\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 0 8px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.style-changer-button:last-child {\r\n    margin: 0;\r\n}\r\n\r\nbutton.style-changer-button.big {\r\n    background-size: 26px;\r\n}\r\n\r\nbutton.style-changer-button.activated {\r\n    border-color: greenyellow;\r\n}\r\n\r\n.sorting-items {\r\n    cursor: pointer;\r\n}\r\n\r\n.sorting-items > option::before {\r\n    content: 'Sort by: ';\r\n}\r\n\r\n.gallery-item {\r\n    cursor: pointer;\r\n    padding: 1px;\r\n    border: 2px solid;\r\n    margin: 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: fit-content;\r\n    background: white;\r\n    opacity: 0;\r\n    transform: rotate3d(1, -0.1, -0.1, 100deg);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated:hover {\r\n    border: 2px solid #111;\r\n    animation: .7s cubic-bezier(0.06, 0.81, 0.52, 0.89) 0s infinite alternate bg-spin;\r\n}\r\n\r\n@keyframes bg-spin {\r\n    to {\r\n        border: 2px solid #eee;\r\n    }\r\n}\r\n\r\n.gallery-item.animated.small {\r\n    height: 250px;\r\n    font-size: .8rem;\r\n}\r\n\r\n.gallery-item img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100%;\r\n    height: 200px;\r\n    padding: 2px;\r\n}\r\n\r\n.filters-buttons-wrapper {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.filters-button {\r\n    background: wheat;\r\n    transition: all 0.4s;\r\n    font-size: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    width: 100%;\r\n    margin: 0 2px;\r\n    padding: 0;\r\n    border-color: chocolate;\r\n}\r\n\r\n.filters-button.activated {\r\n    background: lightgreen;\r\n    transition: 0.2s;\r\n}\r\n\r\n.filters-search-wrapper > input[type=\"text\"] {\r\n    background-position: 0;\r\n    background-size: 20px 20px;\r\n    background-repeat: no-repeat;\r\n    width: 80%;\r\n    font-size: 1.3rem;\r\n    padding: 0 0 0 24px;\r\n    display: block;\r\n    margin: 12px auto;\r\n    border-radius: 0.3rem;\r\n    box-shadow: 0 0 8px #bbb;\r\n}\r\n\r\n.filters-checkbox-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filters-checkbox-wrapper {\r\n    border: 2px solid;\r\n    border-radius: 1rem;\r\n    margin: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul {\r\n    height: 300px;\r\n    padding: 0;\r\n    overflow-y: scroll;\r\n    box-shadow: inset 0 0 3px 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li {\r\n    cursor: pointer;\r\n    margin: .2rem 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::marker {\r\n    content: none;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::before {\r\n    content: ' ';\r\n    display: inline-block;\r\n    border: 1px solid;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin: 0 2px;\r\n    position: relative;\r\n    top: .1rem;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter {\r\n    padding: 3px 0 0 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter::before {\r\n    content: 'X';\r\n    text-align: center;\r\n    top: 0;\r\n    transition: 0.1s;\r\n}\r\n\r\n.filter-deactivated {\r\n    color: gainsboro;\r\n}\r\n\r\n.filter-slider-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 85%;\r\n    margin: 50px auto;\r\n    border: 2px solid;\r\n    padding: 10px 13px 10px 10px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filter-slider-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filter-slider-range-wrapper {\r\n    position: relative;\r\n    min-height: 50px;\r\n}\r\n\r\n.filter-slider-form-wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 24px;\r\n    color: #635a5a;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-moz-range-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:hover {\r\n    background: #f7f7f7;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:active {\r\n    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=\"range\"] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    height: 2px;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #C6C6C6;\r\n    pointer-events: none;\r\n}\r\n\r\n.item-page-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.item-page-main-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-main-wrapper {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n.item-page-image-wrapper {\r\n    display: flex;\r\n    float: left;\r\n    object-fit: scale-down;\r\n    height: 600px;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.item-page-side-images-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    border: 2px solid slategrey;\r\n    padding: 1px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.item-page-side-images-wrapper > img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 2px;\r\n    border: 1px solid;\r\n    margin: 1px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-side-images-wrapper > img.activated {\r\n    border: 4px solid greenyellow;\r\n    border-radius: 5px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-image-block-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.item-page-image-wrapper img {\r\n    object-fit: scale-down;\r\n}\r\n\r\n.item-page-image-wrapper button {\r\n    cursor: pointer;\r\n    background: ghostwhite;\r\n    padding: 20px 25px;\r\n    border-radius: 50%;\r\n    border-width: 0;\r\n    margin: 0 5px;\r\n}\r\n\r\ninput[type=\"text\"]:invalid {\r\n    border: 1px solid red;\r\n}\r\n\r\nspan.dividing-slash {\r\n    position: relative;\r\n    right: 82%;\r\n    z-index: 2;\r\n    top: 1px;\r\n}\r\n\r\n.buy-now-window {\r\n    position: absolute;\r\n    background: white;\r\n    padding: 30px;\r\n    border: 3px solid;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.personal-info-input-wrapper {\r\n    padding: 1rem;\r\n}\r\n\r\n.item-page-property-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n    width: 100%;\r\n    max-width: 25vw;\r\n    background: bisque;\r\n    border: 1px solid;\r\n    border-radius: 3px;\r\n    word-break: break-all;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-property-wrapper {\r\n        width: 90vw;\r\n        max-width: 100vw;\r\n    }\r\n}\r\n\r\n.item-page-property-name {\r\n    text-align: center;\r\n}\r\n\r\n.item-page-property-value {\r\n    background: #ebebeb;\r\n    padding: 8px;\r\n    border-top: 1px solid;\r\n    border-radius: 2px;\r\n}\r\n\r\n.item-page-property-value.stars{\r\n    display: inline-block;\r\n    font-size: 60px;\r\n    font-family: Times;\r\n    line-height: 1;\r\n    word-break: keep-all;\r\n}\r\n\r\n.item-page-property-value.stars::before{\r\n    content: '★★★★★';\r\n    letter-spacing: 3px;\r\n    background: linear-gradient(90deg, #fc0 var(--rating), #fff var(--rating));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.rating-tooltip-wrapper {\r\n    transform: translate(180%, -80%);\r\n    transition: 200ms;\r\n    padding: 20px;\r\n    color: #666666;\r\n    background-color: #EEEEEE;\r\n    font-weight: normal;\r\n    border-radius: 8px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    box-sizing: border-box;\r\n    font-family: fantasy;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.item-page-property-value:hover .rating-tooltip-wrapper {\r\n    transform: translate(210%, -80%);\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: 200ms;\r\n}\r\n\r\np.rating-tooltip {\r\n    margin: 0;\r\n}\r\n\r\n.item-page-properties-wrapper {\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: flex-start;\r\n}\r\n\r\n.item-page-button {\r\n    font-size: 1.2rem;\r\n    display: block;\r\n    padding: 7%;\r\n    background: wheat;\r\n    border: 2px solid;\r\n    border-radius: 0.3rem;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.not-found-page {\r\n    text-align: center;\r\n}\r\n\r\n.error-title-wrapper > h2 {\r\n    font-size: 3rem;\r\n}\r\n\r\nheader {\r\npadding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\nfont-size: 40px;\r\nfont-weight: 800;\r\n}\r\n\r\nmain {\r\nflex: 1 0 auto;\r\n}\r\n\r\nfooter {\r\nheight: 100px;\r\ndisplay: flex;\r\nalign-items: center;\r\njustify-content: space-around;\r\n}\r\n\r\nfooter .copyright {\r\nfont-size: 14px;\r\ncolor: #333;\r\ntext-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\ncolor: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\ncolor: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\ncontent: '©';\r\n}\r\n\r\nfooter .rsschool img {\r\nmax-width: 100%;\r\nheight: 2rem;\r\n}\r\n\r\nfooter .github a img {\r\nheight: 2.5rem;\r\nmax-width: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    border: 1px solid white;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f0f0f0;\r\n}\r\n\r\nbody {\r\n    background: #FFF;\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n#header-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.items-wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));\r\n    grid-auto-rows: 1fr;\r\n    justify-content: end;\r\n    perspective: 5000px;\r\n    box-shadow: inset 0 0 10px 0 #000;\r\n}\r\n\r\n.items-wrapper > h2 {\r\n    margin: 100% 0.5rem;\r\n}\r\n\r\n.items-wrapper.small {\r\n    grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));\r\n    transition: 0.2s;\r\n}\r\n\r\n.gallery {\r\n    display: grid;\r\n    grid-template-columns: max-content auto;\r\n}\r\n\r\n@media (max-width: 680px) {\r\n    .gallery {\r\n        grid-template-columns: auto;\r\n    }\r\n}\r\n\r\n.sorting-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton.style-changer-button {\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 0 8px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.style-changer-button:last-child {\r\n    margin: 0;\r\n}\r\n\r\nbutton.style-changer-button.big {\r\n    background-size: 26px;\r\n}\r\n\r\nbutton.style-changer-button.activated {\r\n    border-color: greenyellow;\r\n}\r\n\r\n.sorting-items {\r\n    cursor: pointer;\r\n}\r\n\r\n.sorting-items > option::before {\r\n    content: 'Sort by: ';\r\n}\r\n\r\n.gallery-item {\r\n    cursor: pointer;\r\n    padding: 1px;\r\n    border: 2px solid;\r\n    margin: 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: fit-content;\r\n    background: white;\r\n    opacity: 0;\r\n    transform: rotate3d(1, -0.1, -0.1, 100deg);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated:hover {\r\n    border: 2px solid #111;\r\n    animation: .7s cubic-bezier(0.06, 0.81, 0.52, 0.89) 0s infinite alternate bg-spin;\r\n}\r\n\r\n@keyframes bg-spin {\r\n    to {\r\n        border: 2px solid #eee;\r\n    }\r\n}\r\n\r\n.gallery-item.animated.small {\r\n    height: 250px;\r\n    font-size: .8rem;\r\n}\r\n\r\n.gallery-item img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100%;\r\n    height: 200px;\r\n    padding: 2px;\r\n}\r\n\r\n.filters-buttons-wrapper {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.filters-button {\r\n    background: wheat;\r\n    transition: all 0.4s;\r\n    font-size: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    width: 100%;\r\n    margin: 0 2px;\r\n    padding: 0;\r\n    border-color: chocolate;\r\n}\r\n\r\n.filters-button.activated {\r\n    background: lightgreen;\r\n    transition: 0.2s;\r\n}\r\n\r\n.filters-search-wrapper > input[type=\"text\"] {\r\n    background-position: 0;\r\n    background-size: 20px 20px;\r\n    background-repeat: no-repeat;\r\n    width: 80%;\r\n    font-size: 1.3rem;\r\n    padding: 0 0 0 24px;\r\n    display: block;\r\n    margin: 12px auto;\r\n    border-radius: 0.3rem;\r\n    box-shadow: 0 0 8px #bbb;\r\n}\r\n\r\n.filters-checkbox-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filters-checkbox-wrapper {\r\n    border: 2px solid;\r\n    border-radius: 1rem;\r\n    margin: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul {\r\n    height: 300px;\r\n    padding: 0;\r\n    overflow-y: scroll;\r\n    box-shadow: inset 0 0 3px 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li {\r\n    cursor: pointer;\r\n    margin: .2rem 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::marker {\r\n    content: none;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::before {\r\n    content: ' ';\r\n    display: inline-block;\r\n    border: 1px solid;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin: 0 2px;\r\n    position: relative;\r\n    top: .1rem;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter {\r\n    padding: 3px 0 0 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter::before {\r\n    content: 'X';\r\n    text-align: center;\r\n    top: 0;\r\n    transition: 0.1s;\r\n}\r\n\r\n.filter-deactivated {\r\n    color: gainsboro;\r\n}\r\n\r\n.filter-slider-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 85%;\r\n    margin: 50px auto;\r\n    border: 2px solid;\r\n    padding: 10px 13px 10px 10px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filter-slider-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filter-slider-range-wrapper {\r\n    position: relative;\r\n    min-height: 50px;\r\n}\r\n\r\n.filter-slider-form-wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 24px;\r\n    color: #635a5a;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-moz-range-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:hover {\r\n    background: #f7f7f7;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:active {\r\n    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=\"range\"] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    height: 2px;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #C6C6C6;\r\n    pointer-events: none;\r\n}\r\n\r\n.item-page-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.item-page-main-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-main-wrapper {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n.item-page-image-wrapper {\r\n    display: flex;\r\n    float: left;\r\n    object-fit: scale-down;\r\n    height: 600px;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.item-page-side-images-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    border: 2px solid slategrey;\r\n    padding: 1px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.item-page-side-images-wrapper > img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 2px;\r\n    border: 1px solid;\r\n    margin: 1px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-side-images-wrapper > img.activated {\r\n    border: 4px solid greenyellow;\r\n    border-radius: 5px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-image-block-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.item-page-image-wrapper img {\r\n    object-fit: scale-down;\r\n}\r\n\r\n.item-page-image-wrapper button {\r\n    cursor: pointer;\r\n    background: ghostwhite;\r\n    padding: 20px 25px;\r\n    border-radius: 50%;\r\n    border-width: 0;\r\n    margin: 0 5px;\r\n}\r\n\r\ninput[type=\"text\"]:invalid {\r\n    border: 1px solid red;\r\n}\r\n\r\nspan.dividing-slash {\r\n    position: relative;\r\n    right: 82%;\r\n    z-index: 2;\r\n    top: 1px;\r\n}\r\n\r\n.buy-now-window {\r\n    position: absolute;\r\n    background: white;\r\n    padding: 30px;\r\n    border: 3px solid;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.personal-info-input-wrapper {\r\n    padding: 1rem;\r\n}\r\n\r\n.item-page-property-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n    width: 100%;\r\n    max-width: 25vw;\r\n    background: bisque;\r\n    border: 1px solid;\r\n    border-radius: 3px;\r\n    word-break: break-all;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-property-wrapper {\r\n        width: 90vw;\r\n        max-width: 100vw;\r\n    }\r\n}\r\n\r\n.item-page-property-name {\r\n    text-align: center;\r\n}\r\n\r\n.item-page-property-value {\r\n    background: #ebebeb;\r\n    padding: 8px;\r\n    border-top: 1px solid;\r\n    border-radius: 2px;\r\n}\r\n\r\n.item-page-property-value.stars{\r\n    display: inline-block;\r\n    font-size: 60px;\r\n    font-family: Times;\r\n    line-height: 1;\r\n    word-break: keep-all;\r\n}\r\n\r\n.item-page-property-value.stars::before{\r\n    content: '★★★★★';\r\n    letter-spacing: 3px;\r\n    background: linear-gradient(90deg, #fc0 var(--rating), #fff var(--rating));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.rating-tooltip-wrapper {\r\n    transform: translate(180%, -80%);\r\n    transition: 200ms;\r\n    padding: 20px;\r\n    color: #666666;\r\n    background-color: #EEEEEE;\r\n    font-weight: normal;\r\n    border-radius: 8px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    box-sizing: border-box;\r\n    font-family: fantasy;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.item-page-property-value:hover .rating-tooltip-wrapper {\r\n    transform: translate(210%, -80%);\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: 200ms;\r\n}\r\n\r\np.rating-tooltip {\r\n    margin: 0;\r\n}\r\n\r\n.item-page-properties-wrapper {\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: flex-start;\r\n}\r\n\r\n.item-page-button {\r\n    font-size: 1.2rem;\r\n    display: block;\r\n    padding: 7%;\r\n    background: wheat;\r\n    border: 2px solid;\r\n    border-radius: 0.3rem;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.not-found-page {\r\n    text-align: center;\r\n}\r\n\r\n.error-title-wrapper > h2 {\r\n    font-size: 3rem;\r\n}\r\n\r\nheader {\r\npadding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\nfont-size: 40px;\r\nfont-weight: 800;\r\n}\r\n\r\nmain {\r\nflex: 1 0 auto;\r\n}\r\n\r\nfooter {\r\nheight: 100px;\r\ndisplay: flex;\r\nalign-items: center;\r\njustify-content: space-around;\r\n}\r\n\r\nfooter .copyright {\r\nfont-size: 14px;\r\ncolor: #333;\r\ntext-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\ncolor: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\ncolor: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\ncontent: '©';\r\n}\r\n\r\nfooter .rsschool img {\r\nmax-width: 100%;\r\nheight: 2rem;\r\n}\r\n\r\nfooter .github a img {\r\nheight: 2.5rem;\r\nmax-width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Page.ts":
/*!*********************!*\
  !*** ./src/Page.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Page {
    get hash() {
        return this._hash;
    }
}
exports["default"] = Page;


/***/ }),

/***/ "./src/components/galleryPage/GalleryFilters.ts":
/*!******************************************************!*\
  !*** ./src/components/galleryPage/GalleryFilters.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(/*! ../../index */ "./src/index.ts");
const sliderView_1 = __webpack_require__(/*! ./sliderView */ "./src/components/galleryPage/sliderView.ts");
class GalleryFilters {
    constructor() {
        this.query = index_1.router.query;
        this.filteredResponses = index_1.response.products;
        this.HtmlElementInstance = this.createHtmlElement();
    }
    createHtmlElement() {
        const HtmlElement = document.createElement('div');
        const HtmlElementButtons = this.createFilterButtons();
        const HtmlElementSearch = this.createSearchFilter();
        const HtmlElementBrandsWrapper = this.createCheckboxFilter('brand', 'brands', 'brand');
        const HtmlElementCategoriesWrapper = this.createCheckboxFilter('category', 'categories', 'category');
        const HtmlElementPriceSlider = this.createSliderFilter('price', 'price');
        const HtmlElementInStockSlider = this.createSliderFilter('stock', 'stock');
        HtmlElement.classList.add('gallery-filters-wrapper');
        HtmlElement.appendChild(HtmlElementButtons);
        HtmlElement.appendChild(HtmlElementSearch);
        HtmlElement.appendChild(HtmlElementBrandsWrapper);
        HtmlElement.appendChild(HtmlElementCategoriesWrapper);
        HtmlElement.appendChild(HtmlElementPriceSlider);
        HtmlElement.appendChild(HtmlElementInStockSlider);
        HtmlElement.addEventListener('changequery', (e) => {
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            this.query = index_1.router.query;
            this.filteredResponses = e.detail.productResponses;
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        return HtmlElement;
    }
    processQuery() {
        this.filteredResponses = index_1.router.changeQuery(this.query);
        return index_1.GalleryInstance.showData(this.filteredResponses);
    }
    createFilterButtons() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('filters-buttons-wrapper');
        const buttonClearFiltersElement = document.createElement('button');
        buttonClearFiltersElement.classList.add('filters-button', 'filters-button-clear');
        buttonClearFiltersElement.textContent = 'Reset filters';
        buttonClearFiltersElement.onclick = () => {
            this.query = {};
            this.processQuery();
        };
        const buttonCopyLinkElement = document.createElement('button');
        buttonCopyLinkElement.textContent = 'Copy link';
        buttonCopyLinkElement.onclick = () => {
            navigator.clipboard.writeText(window.location.href);
            buttonCopyLinkElement.textContent = 'Copied!';
            buttonCopyLinkElement.classList.add('activated');
            setTimeout(() => {
                buttonCopyLinkElement.textContent = 'Copy link';
                buttonCopyLinkElement.classList.remove('activated');
            }, 1000);
        };
        buttonCopyLinkElement.classList.add('filters-button', 'filters-button-copy');
        HtmlElement.append(buttonClearFiltersElement, buttonCopyLinkElement);
        return HtmlElement;
    }
    createSearchFilter() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('filters-search-wrapper');
        const searchInputElement = document.createElement('input');
        searchInputElement.type = 'text';
        searchInputElement.placeholder = 'Search for products...';
        searchInputElement.title = "Type in any info about the product you're looking for";
        searchInputElement.onkeyup = () => {
            this.query.search = searchInputElement.value.trim().toLowerCase();
            this.processQuery();
        };
        //webpack adds ruining slash in css =(
        searchInputElement.style.backgroundImage = 'url(assets/loupe.svg)';
        HtmlElement.append(searchInputElement);
        HtmlElement.addEventListener('changequery', (e) => {
            var _a;
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            searchInputElement.value = (_a = index_1.router.query.search) !== null && _a !== void 0 ? _a : '';
        });
        return HtmlElement;
    }
    createCheckboxFilter(attributeName, queryField, productField) {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('filters-checkbox-wrapper');
        HtmlElement.addEventListener('changequery', (e) => {
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        const naming = document.createElement('h3');
        naming.textContent = productField.charAt(0).toUpperCase() + productField.slice(1);
        HtmlElement.append(naming);
        const checkboxListElement = document.createElement('ul');
        const propertyArray = [];
        index_1.response.products.forEach((productsResponse) => {
            propertyArray.push(productsResponse[productField]);
        });
        propertyArray.sort((item1, item2) => {
            return item1.localeCompare(item2);
        });
        const propertySet = new Set(propertyArray);
        propertySet.forEach((property) => {
            checkboxListElement.appendChild(this.createCheckboxElement(attributeName, property, queryField, productField));
        });
        checkboxListElement.addEventListener('changequery', (e) => {
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            const propertyArray = [];
            index_1.response.products.forEach((productsResponse) => {
                propertyArray.push(productsResponse[productField]);
            });
            propertyArray.sort((item1, item2) => {
                return item1.localeCompare(item2);
            });
            const propertySet = new Set(propertyArray);
            propertySet.forEach((property) => {
                if (!Array.from(checkboxListElement.children).some((element) => element.getAttribute(attributeName) === property))
                    checkboxListElement.appendChild(this.createCheckboxElement(attributeName, property, queryField, productField));
            });
            checkboxListElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        checkboxListElement.classList.add('filters-checkbox-list');
        HtmlElement.append(checkboxListElement);
        return HtmlElement;
    }
    createCheckboxElement(attributeName, attributeValue, queryField, productField) {
        var _a;
        const HtmlElement = document.createElement('li');
        const quantityAll = index_1.response.products.reduce((accumulator, product) => {
            if (product[productField] === attributeValue)
                accumulator++;
            return accumulator;
        }, 0);
        const quantityFiltered = this.filteredResponses.reduce((accumulator, product) => {
            if (product[productField] === attributeValue)
                accumulator++;
            return accumulator;
        }, 0);
        HtmlElement.textContent = `${attributeValue} (${quantityFiltered}/${quantityAll})`;
        HtmlElement.setAttribute(attributeName, attributeValue);
        if (Array.isArray(this.query[queryField]) &&
            ((_a = this.query[queryField]) === null || _a === void 0 ? void 0 : _a.some((element) => element === attributeValue))) {
            HtmlElement.classList.add('checked-filter');
        }
        HtmlElement.addEventListener('click', (event) => {
            var _a, _b, _c, _d;
            if (event.target instanceof HTMLElement) {
                const clickedElement = event.target;
                const attribute = clickedElement.getAttribute(attributeName);
                if (attribute) {
                    if (!HtmlElement.classList.contains('checked-filter')) {
                        if (!Array.isArray(this.query[queryField]))
                            this.query[queryField] = [attribute];
                        else
                            (_a = this.query[queryField]) === null || _a === void 0 ? void 0 : _a.push(attribute);
                        HtmlElement.classList.add('checked-filter');
                    }
                    else {
                        HtmlElement.classList.remove('checked-filter');
                        if (Array.isArray(this.query[queryField])) {
                            const index = (_b = this.query[queryField]) === null || _b === void 0 ? void 0 : _b.indexOf(attribute);
                            if (typeof index !== 'undefined' && index > -1) {
                                (_c = this.query[queryField]) === null || _c === void 0 ? void 0 : _c.splice(index, 1);
                            }
                            if (((_d = this.query[queryField]) === null || _d === void 0 ? void 0 : _d.length) === 0)
                                delete this.query[queryField];
                        }
                    }
                    this.processQuery();
                }
            }
        });
        HtmlElement.addEventListener('changequery', (e) => {
            var _a;
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            const quantityAll = index_1.response.products.reduce((accumulator, product) => {
                if (product[productField] === attributeValue)
                    accumulator++;
                return accumulator;
            }, 0);
            const quantityFiltered = this.filteredResponses.reduce((accumulator, product) => {
                if (product[productField] === attributeValue)
                    accumulator++;
                return accumulator;
            }, 0);
            HtmlElement.textContent = `${attributeValue} (${quantityFiltered}/${quantityAll})`;
            if (quantityFiltered === 0)
                HtmlElement.classList.add('filter-deactivated');
            else
                HtmlElement.classList.remove('filter-deactivated');
            this.query = index_1.router.query;
            if (Array.isArray(this.query[queryField]) &&
                ((_a = this.query[queryField]) === null || _a === void 0 ? void 0 : _a.some((element) => element === attributeValue))) {
                HtmlElement.classList.add('checked-filter');
            }
            else
                HtmlElement.classList.remove('checked-filter');
        });
        return HtmlElement;
    }
    createSliderFilter(queryField, productField) {
        var _a, _b;
        const HtmlElement = document.createElement('div');
        const naming = document.createElement('h3');
        naming.textContent = productField.charAt(0).toUpperCase() + productField.slice(1);
        HtmlElement.classList.add('filter-slider-wrapper');
        HtmlElement.append(naming);
        const sliderWrapper = document.createElement('div');
        sliderWrapper.classList.add('filter-slider-range-wrapper');
        const fromInputSlider = document.createElement('input');
        fromInputSlider.type = 'range';
        const fieldArray = [];
        this.filteredResponses.forEach((product) => {
            const property = product[productField];
            if (typeof property === 'number')
                fieldArray.push(property);
        });
        fromInputSlider.min = `${Math.min(...fieldArray)}`;
        fromInputSlider.max = `${Math.max(...fieldArray)}`;
        if (Array.isArray(this.query[queryField]) && ((_a = this.query[queryField]) === null || _a === void 0 ? void 0 : _a.length) === 2)
            // if-statement guarantees that this.query[queryField] !== null
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            fromInputSlider.value = `${this.query[queryField][0]}`;
        else
            fromInputSlider.value = `${Math.min(...fieldArray)}`;
        fromInputSlider.style.height = '0';
        fromInputSlider.style.zIndex = '1';
        const toInputSlider = document.createElement('input');
        toInputSlider.type = 'range';
        toInputSlider.min = `${Math.min(...fieldArray)}`;
        toInputSlider.max = `${Math.max(...fieldArray)}`;
        if (Array.isArray(this.query[queryField]) && ((_b = this.query[queryField]) === null || _b === void 0 ? void 0 : _b.length) === 2)
            // if-statement guarantees that this.query[queryField] !== null
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            toInputSlider.value = `${this.query[queryField][1]}`;
        else
            toInputSlider.value = `${Math.max(...fieldArray)}`;
        sliderWrapper.append(fromInputSlider, toInputSlider);
        const formWrapper = document.createElement('div');
        const minValueElement = document.createElement('div');
        minValueElement.textContent = fromInputSlider.value;
        minValueElement.classList.add('filter-slider-form-text');
        const maxValueElement = document.createElement('div');
        maxValueElement.textContent = toInputSlider.value;
        maxValueElement.classList.add('filter-slider-form-text');
        formWrapper.append(minValueElement, maxValueElement);
        fromInputSlider.oninput = () => {
            var _a, _b, _c, _d;
            (0, sliderView_1.controlFromSlider)(fromInputSlider, toInputSlider, minValueElement);
            if (!Array.isArray(this.query[queryField]) ||
                (Array.isArray(this.query[queryField]) && ((_a = this.query[queryField]) === null || _a === void 0 ? void 0 : _a.length) !== 2))
                this.query[queryField] = [fromInputSlider.value, toInputSlider.value];
            else if (Array.isArray(this.query[queryField]) && ((_b = this.query[queryField]) === null || _b === void 0 ? void 0 : _b.length) === 2)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                this.query[queryField][0] = fromInputSlider.value;
            if (((_c = this.query[queryField]) === null || _c === void 0 ? void 0 : _c[0]) === fromInputSlider.min &&
                ((_d = this.query[queryField]) === null || _d === void 0 ? void 0 : _d[1]) === fromInputSlider.max)
                delete this.query[queryField];
            this.processQuery();
        };
        toInputSlider.oninput = () => {
            var _a, _b, _c, _d;
            (0, sliderView_1.controlToSlider)(fromInputSlider, toInputSlider, maxValueElement);
            if (!Array.isArray(this.query[queryField]) ||
                (Array.isArray(this.query[queryField]) && ((_a = this.query[queryField]) === null || _a === void 0 ? void 0 : _a.length) !== 2))
                this.query[queryField] = [fromInputSlider.value, toInputSlider.value];
            else if (Array.isArray(this.query[queryField]) && ((_b = this.query[queryField]) === null || _b === void 0 ? void 0 : _b.length) === 2)
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                this.query[queryField][1] = toInputSlider.value;
            if (((_c = this.query[queryField]) === null || _c === void 0 ? void 0 : _c[0]) === toInputSlider.min && ((_d = this.query[queryField]) === null || _d === void 0 ? void 0 : _d[1]) === toInputSlider.max)
                delete this.query[queryField];
            this.processQuery();
        };
        (0, sliderView_1.fillSlider)(fromInputSlider, toInputSlider, '#C6C6C6', '#25daa5', toInputSlider);
        (0, sliderView_1.setToggleAccessible)(toInputSlider);
        formWrapper.classList.add('filter-slider-form-wrapper');
        HtmlElement.append(sliderWrapper, formWrapper);
        HtmlElement.addEventListener('changequery', (e) => {
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            const fieldArray = [];
            index_1.response.products.forEach((product) => {
                const property = product[productField];
                if (typeof property === 'number')
                    fieldArray.push(property);
            });
            fromInputSlider.min = `${Math.min(...fieldArray)}`;
            fromInputSlider.max = `${Math.max(...fieldArray)}`;
            toInputSlider.min = `${Math.min(...fieldArray)}`;
            toInputSlider.max = `${Math.max(...fieldArray)}`;
            const filteredFieldArray = [];
            this.filteredResponses.forEach((product) => {
                const property = product[productField];
                if (typeof property === 'number')
                    filteredFieldArray.push(property);
            });
            if (this.filteredResponses.length === 0)
                return;
            if (!(fromInputSlider.value === `${Math.min(...filteredFieldArray)}` &&
                toInputSlider.value === `${Math.max(...filteredFieldArray)}`)) {
                fromInputSlider.value = `${Math.min(...filteredFieldArray)}`;
                toInputSlider.value = `${Math.max(...filteredFieldArray)}`;
            }
            minValueElement.textContent = fromInputSlider.value;
            maxValueElement.textContent = toInputSlider.value;
            (0, sliderView_1.fillSlider)(fromInputSlider, toInputSlider, '#C6C6C6', '#25daa5', toInputSlider);
        });
        return HtmlElement;
    }
}
exports["default"] = GalleryFilters;


/***/ }),

/***/ "./src/components/galleryPage/GalleryItems.ts":
/*!****************************************************!*\
  !*** ./src/components/galleryPage/GalleryItems.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const index_1 = __webpack_require__(/*! ../../index */ "./src/index.ts");
const ItemPage_1 = __importDefault(__webpack_require__(/*! ../itemPage/ItemPage */ "./src/components/itemPage/ItemPage.ts"));
class GalleryItems {
    get productsResponses() {
        return this._productsResponses;
    }
    constructor(productsResponses) {
        this._productsResponses = productsResponses;
        this.sortingElement = this.createSorting();
        this.HtmlElementInstance = this.createHtmlElement();
    }
    createHtmlElement() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('gallery-items-wrapper');
        HtmlElement.appendChild(this.createSortingWrapper());
        HtmlElement.appendChild(this.createProductsElement());
        HtmlElement.addEventListener('changequery', (e) => {
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            if (typeof index_1.router.query.sorting === 'number') {
                this.sortingElement.value = GalleryItems.selectOptionsArr[index_1.router.query.sorting];
            }
            else {
                this.sortingElement.value = GalleryItems.selectOptionsArr[0];
            }
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        return HtmlElement;
    }
    createProductsElement() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('items-wrapper');
        if (index_1.router.query.smallMode)
            HtmlElement.classList.add('small');
        const sortedData = this.getSortedData();
        if (sortedData.length === 0) {
            const titleNoProducts = document.createElement('h2');
            titleNoProducts.textContent = 'No products found =(';
            HtmlElement.append(titleNoProducts);
        }
        else {
            sortedData.forEach((productsResponse, index) => {
                HtmlElement.appendChild(GalleryItems.createProductHtmlElement(productsResponse, index, index_1.router.query.smallMode));
            });
        }
        HtmlElement.addEventListener('changequery', (e) => {
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            this._productsResponses = e.detail.productResponses;
            HtmlElement.replaceChildren('');
            if (index_1.router.query.smallMode)
                HtmlElement.classList.add('small');
            else
                HtmlElement.classList.remove('small');
            const sortedData = this.getSortedData();
            if (sortedData.length === 0) {
                const titleNoProducts = document.createElement('h2');
                titleNoProducts.textContent = 'No products found =(';
                HtmlElement.append(titleNoProducts);
            }
            else {
                sortedData.forEach((productsResponse, index) => {
                    HtmlElement.appendChild(GalleryItems.createProductHtmlElement(productsResponse, index, index_1.router.query.smallMode));
                });
            }
            HtmlElement.childNodes.forEach((child) => {
                const eventCopy = new CustomEvent(e.type, e);
                child.dispatchEvent(eventCopy);
            });
        });
        return HtmlElement;
    }
    getSortedData() {
        const sortedData = this.productsResponses;
        switch (this.sortingElement.value) {
            case GalleryItems.selectOptionsArr[0]: {
                sortedData.sort((item1, item2) => item1.price - item2.price);
                break;
            }
            case GalleryItems.selectOptionsArr[1]: {
                sortedData.sort((item1, item2) => item2.price - item1.price);
                break;
            }
            case GalleryItems.selectOptionsArr[2]: {
                sortedData.sort((item1, item2) => item2.rating - item1.rating);
                break;
            }
            case GalleryItems.selectOptionsArr[3]: {
                sortedData.sort((item1, item2) => item2.discountPercentage - item1.discountPercentage);
                break;
            }
        }
        return sortedData;
    }
    createSorting() {
        const sortingSelectElement = document.createElement('select');
        sortingSelectElement.classList.add('sorting-items');
        GalleryItems.selectOptionsArr.forEach((item) => {
            const optionElement = document.createElement('option');
            optionElement.textContent = item;
            sortingSelectElement.append(optionElement);
        });
        sortingSelectElement.addEventListener('change', () => {
            const newQuery = index_1.router.query;
            newQuery.sorting = GalleryItems.selectOptionsArr.findIndex((val) => val === sortingSelectElement.value);
            index_1.GalleryInstance.showData(index_1.router.changeQuery(newQuery));
        });
        return sortingSelectElement;
    }
    createSortingWrapper() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('sorting-wrapper');
        HtmlElement.appendChild(this.sortingElement);
        const styleChangerWrapper = document.createElement('div');
        styleChangerWrapper.classList.add('style-changer-wrapper');
        const styleChangerButtonSmall = document.createElement('button');
        styleChangerButtonSmall.onclick = () => {
            styleChangerButtonBig.classList.remove('activated');
            styleChangerButtonSmall.classList.add('activated');
            const newQuery = index_1.router.query;
            newQuery.smallMode = true;
            index_1.GalleryInstance.showData(index_1.router.changeQuery(newQuery));
        };
        styleChangerButtonSmall.classList.add('style-changer-button', 'small');
        styleChangerButtonSmall.style.backgroundImage = 'url(assets/tiles.svg)';
        const styleChangerButtonBig = document.createElement('button');
        styleChangerButtonBig.classList.add('style-changer-button', 'big', 'activated');
        styleChangerButtonBig.onclick = () => {
            styleChangerButtonSmall.classList.remove('activated');
            styleChangerButtonBig.classList.add('activated');
            const newQuery = index_1.router.query;
            delete newQuery.smallMode;
            index_1.GalleryInstance.showData(index_1.router.changeQuery(newQuery));
        };
        styleChangerButtonBig.style.backgroundImage = 'url(assets/tiles.svg)';
        styleChangerWrapper.append(styleChangerButtonSmall, styleChangerButtonBig);
        HtmlElement.append(styleChangerWrapper);
        HtmlElement.addEventListener('changequery', (e) => {
            if (!(0, index_1.isCustomEvent)(e))
                throw new Error('not a custom event');
            e.stopPropagation();
            if (index_1.router.query.smallMode) {
                styleChangerButtonBig.classList.remove('activated');
                styleChangerButtonSmall.classList.add('activated');
            }
            else {
                styleChangerButtonSmall.classList.remove('activated');
                styleChangerButtonBig.classList.add('activated');
            }
        });
        return HtmlElement;
    }
    static createProductHtmlElement(productsResponse, index, small) {
        const HtmlElement = document.createElement('div');
        if (small)
            HtmlElement.classList.add('small');
        HtmlElement.setAttribute('title', productsResponse.title);
        const ItemImage = document.createElement('img');
        const ItemTitle = document.createElement('span');
        const ItemPrice = document.createElement('span');
        ItemImage.src = productsResponse.images[productsResponse.images.length - 1];
        ItemTitle.innerText = productsResponse.title;
        ItemPrice.innerText = `€${productsResponse.price.toString(10)}`;
        HtmlElement.classList.add('gallery-item');
        HtmlElement.appendChild(ItemImage);
        HtmlElement.appendChild(ItemTitle);
        HtmlElement.appendChild(ItemPrice);
        HtmlElement.addEventListener('click', () => {
            (0, index_1.changePage)(new ItemPage_1.default(productsResponse), true, '');
        });
        setTimeout(() => HtmlElement.classList.add('animated'), index * 10);
        return HtmlElement;
    }
}
exports["default"] = GalleryItems;
GalleryItems.selectOptionsArr = [
    'Price: Low to High',
    'Price: High to Low',
    'Avg. Customer Review',
    'Discount Percentage',
];


/***/ }),

/***/ "./src/components/galleryPage/GalleryPage.ts":
/*!***************************************************!*\
  !*** ./src/components/galleryPage/GalleryPage.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Page_1 = __importDefault(__webpack_require__(/*! ../../Page */ "./src/Page.ts"));
const GalleryItems_1 = __importDefault(__webpack_require__(/*! ./GalleryItems */ "./src/components/galleryPage/GalleryItems.ts"));
const GalleryFilters_1 = __importDefault(__webpack_require__(/*! ./GalleryFilters */ "./src/components/galleryPage/GalleryFilters.ts"));
class GalleryPage extends Page_1.default {
    constructor() {
        super();
        this._hash = `/gallery`;
        this.FiltersInstance = new GalleryFilters_1.default();
        this.ItemsInstance = new GalleryItems_1.default(this.FiltersInstance.filteredResponses);
        this.HtmlElementInstance = this.createHtmlElement();
    }
    createHtmlElement() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('gallery');
        HtmlElement.appendChild(this.FiltersInstance.HtmlElementInstance);
        HtmlElement.appendChild(this.ItemsInstance.HtmlElementInstance);
        return HtmlElement;
    }
    showData(productsResponses) {
        const dataUpdate = new CustomEvent('changequery', {
            detail: {
                productResponses: productsResponses,
            },
        });
        this.FiltersInstance.HtmlElementInstance.dispatchEvent(dataUpdate);
        this.ItemsInstance.HtmlElementInstance.dispatchEvent(dataUpdate);
        return productsResponses;
    }
}
exports["default"] = GalleryPage;


/***/ }),

/***/ "./src/components/galleryPage/sliderView.ts":
/*!**************************************************!*\
  !*** ./src/components/galleryPage/sliderView.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fillSlider = exports.setToggleAccessible = exports.controlToSlider = exports.controlFromSlider = void 0;
function controlFromSlider(fromSlider, toSlider, minDiv) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    if (from > to) {
        fromSlider.value = `${to}`;
        minDiv.textContent = `${to}`;
    }
    else {
        minDiv.textContent = `${from}`;
    }
}
exports.controlFromSlider = controlFromSlider;
function controlToSlider(fromSlider, toSlider, maxDiv) {
    const [from, to] = getParsed(fromSlider, toSlider);
    fillSlider(fromSlider, toSlider, '#C6C6C6', '#25daa5', toSlider);
    setToggleAccessible(toSlider);
    if (from <= to) {
        toSlider.value = `${to}`;
        maxDiv.textContent = `${to}`;
    }
    else {
        maxDiv.textContent = `${from}`;
        toSlider.value = `${from}`;
    }
}
exports.controlToSlider = controlToSlider;
function setToggleAccessible(currentTarget) {
    if (Number(currentTarget.value) <= 0) {
        currentTarget.style.zIndex = '2';
    }
    else {
        currentTarget.style.zIndex = '0';
    }
}
exports.setToggleAccessible = setToggleAccessible;
function getParsed(currentFrom, currentTo) {
    return [Number(currentFrom.value), Number(currentTo.value)];
}
function fillSlider(from, to, sliderColor, rangeColor, controlSlider) {
    const rangeDistance = Number(to.max) - Number(to.min);
    const fromPosition = Number(from.value) - Number(to.min);
    const toPosition = Number(to.value) - Number(to.min);
    controlSlider.style.background = `linear-gradient(
      to right,
      ${sliderColor} 0%,
      ${sliderColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(fromPosition / rangeDistance) * 100}%,
      ${rangeColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} ${(toPosition / rangeDistance) * 100}%, 
      ${sliderColor} 100%)`;
}
exports.fillSlider = fillSlider;


/***/ }),

/***/ "./src/components/itemPage/ItemPage.ts":
/*!*********************************************!*\
  !*** ./src/components/itemPage/ItemPage.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Page_1 = __importDefault(__webpack_require__(/*! ../../Page */ "./src/Page.ts"));
const index_1 = __webpack_require__(/*! ../../index */ "./src/index.ts");
class ItemPage extends Page_1.default {
    constructor(productResponse) {
        super();
        this.itemImagesPointer = 0;
        this.productsResponse = productResponse;
        this._hash = `/product/${this.productsResponse.id}`;
        this.HtmlElementInstance = this.createHtmlElement();
    }
    createHtmlElement() {
        const HtmlElement = document.createElement('div');
        const mainWrapper = document.createElement('div');
        const imageWrapper = this.createImageWrapper();
        const propertiesWrapper = this.createPropertiesWrapper();
        const buyWrapper = () => {
            const buttonsWrapper = document.createElement('div');
            buttonsWrapper.classList.add('item-page-buttons-wrapper');
            const cartButton = document.createElement('button');
            cartButton.classList.add('item-page-button');
            cartButton.innerText = 'Add to cart';
            cartButton.onclick = () => {
                //TODO: add cart logic
            };
            const buyNowButton = document.createElement('button');
            buyNowButton.classList.add('item-page-button');
            buyNowButton.innerText = 'Buy now';
            buyNowButton.onclick = () => {
                HtmlElement.append(this.createBuyNowWindow());
            };
            buttonsWrapper.append(cartButton, buyNowButton);
            return buttonsWrapper;
        };
        const breadcrumbsElement = document.createElement('p');
        breadcrumbsElement.innerText = `STORE >> ${this.productsResponse.category} >> ${this.productsResponse.brand} >> ${this.productsResponse.title}`.toUpperCase();
        breadcrumbsElement.classList.add('item-page-breadcrumbs');
        mainWrapper.classList.add('item-page-main-wrapper');
        mainWrapper.append(imageWrapper, propertiesWrapper, buyWrapper());
        HtmlElement.classList.add('item-page-wrapper');
        HtmlElement.append(breadcrumbsElement, mainWrapper);
        return HtmlElement;
    }
    createImageWrapper() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('item-page-image-block-wrapper');
        const mainImageWrapper = document.createElement('div');
        mainImageWrapper.classList.add('item-page-image-wrapper');
        const ItemImage = document.createElement('img');
        ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
        mainImageWrapper.appendChild(ItemImage);
        const sideImageWrapper = document.createElement('div');
        sideImageWrapper.classList.add('item-page-side-images-wrapper');
        this.productsResponse.images.forEach((imageURL, index) => {
            const sideImage = document.createElement('img');
            if (index === this.itemImagesPointer)
                sideImage.classList.add('activated');
            sideImage.src = imageURL;
            sideImage.onmouseover = () => {
                ItemImage.src = sideImage.src;
            };
            sideImage.onmouseout = () => {
                ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
            };
            sideImage.onclick = () => {
                this.itemImagesPointer = index;
                ItemImage.src = this.productsResponse.images[this.itemImagesPointer];
                Array.from(sideImageWrapper.children).forEach((item) => item.classList.remove('activated'));
                sideImage.classList.add('activated');
            };
            sideImageWrapper.append(sideImage);
        });
        HtmlElement.append(sideImageWrapper, mainImageWrapper);
        return HtmlElement;
    }
    createPropertiesWrapper() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('item-page-properties-wrapper');
        /* Title */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Title', this.productsResponse.title));
        /* Price */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Price', `€${this.productsResponse.price.toString(10)}`));
        /* Discount percentage */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Discount percentage', `${this.productsResponse.discountPercentage.toString(10)}`));
        /* Category */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Category', this.productsResponse.category));
        /* Description */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Description', this.productsResponse.description));
        /* Rating */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Rating', `${this.productsResponse.rating.toString(10)}`, true));
        /* Stock */
        HtmlElement.appendChild(ItemPage.createPropertyWrapper('Stock', `${this.productsResponse.stock.toString(10)}`));
        return HtmlElement;
    }
    static createPropertyWrapper(name, value, isRating) {
        const propertyWrapper = document.createElement('div');
        propertyWrapper.classList.add('item-page-property-wrapper');
        const propertyName = document.createElement('span');
        propertyName.classList.add('item-page-property-name');
        propertyName.innerText = name;
        let propertyValue = document.createElement('span');
        if (isRating) {
            const root = document.documentElement;
            root.style.setProperty('--rating', `${(Number.parseFloat(value) / 5) * 100}%`);
            propertyValue = document.createElement('div');
            propertyValue.classList.add('stars');
            const ratingTooltipWrapper = document.createElement('div');
            ratingTooltipWrapper.classList.add('rating-tooltip-wrapper');
            const ratingTooltip = document.createElement('p');
            ratingTooltip.innerText = value;
            ratingTooltip.classList.add('rating-tooltip');
            ratingTooltipWrapper.append(ratingTooltip);
            propertyValue.append(ratingTooltipWrapper);
        }
        else {
            propertyValue.innerText = value;
        }
        propertyValue.classList.add('item-page-property-value');
        propertyWrapper.append(propertyName, propertyValue);
        return propertyWrapper;
    }
    createBuyNowWindow() {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('buy-now-window');
        const personalInfoForm = document.createElement('form');
        personalInfoForm.name = 'personal-info';
        const personalInfoWrapper = document.createElement('div');
        personalInfoWrapper.classList.add('personal-info-wrapper');
        personalInfoWrapper.append(ItemPage.createInfoInput('Full name', new RegExp('(^[A-Za-zА-яа-я]{3,})+(?:\\s[A-Za-zА-яа-я]{3,})+$'), 'text'));
        personalInfoWrapper.append(ItemPage.createInfoInput('Telephone number', new RegExp('^\\+[\\d]{9,}$'), 'tel'));
        personalInfoWrapper.append(ItemPage.createInfoInput('Delivery address', new RegExp('(^.{5,})+(?:\\s.{5,})+(?:\\s.{5,})+$'), 'text'));
        personalInfoWrapper.append(ItemPage.createInfoInput('Email', new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), 'email'));
        const cardInfoWrapper = document.createElement('div');
        cardInfoWrapper.classList.add('card-info-wrapper');
        cardInfoWrapper.append(ItemPage.createInfoInput('Card number', new RegExp('^\\d{16}$'), 'text', 16, 16));
        cardInfoWrapper.append(ItemPage.createInfoInput('Expiration date', new RegExp('^(0[1-9]|1[0-2])\\/?([\\d]{4}|[\\d]{2})$'), 'text', 4, 4));
        cardInfoWrapper.append(ItemPage.createInfoInput('CVV', new RegExp('^\\d{3}$'), 'text', 3, 3));
        personalInfoForm.append(personalInfoWrapper, cardInfoWrapper);
        const submitInput = document.createElement('button');
        submitInput.type = 'submit';
        submitInput.value = 'submit';
        submitInput.name = 'submit';
        submitInput.textContent = 'Submit';
        submitInput.onclick = () => {
            if (personalInfoForm.reportValidity()) {
                const orderedTitle = document.createElement('h2');
                orderedTitle.textContent = `\'${this.productsResponse.title}\' has been successfully ordered!`;
                HtmlElement.replaceChildren(orderedTitle);
                setTimeout(() => {
                    (0, index_1.changePage)(index_1.GalleryInstance, true, '');
                    index_1.router.route();
                }, 2500);
            }
        };
        HtmlElement.append(personalInfoForm, submitInput);
        return HtmlElement;
    }
    static createInfoInput(name, regexPattern, type, maxlength, minlength) {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('personal-info-input-wrapper');
        const infoTypeTitle = document.createElement('h4');
        infoTypeTitle.textContent = name;
        const inputElement = document.createElement('input');
        inputElement.name = name;
        inputElement.type = type;
        inputElement.pattern = regexPattern.source;
        inputElement.required = true;
        if (maxlength)
            inputElement.maxLength = maxlength;
        if (minlength)
            inputElement.minLength = minlength;
        inputElement.onsubmit = (e) => {
            if (!new RegExp(inputElement.pattern).test(inputElement.value)) {
                e.preventDefault();
            }
        };
        HtmlElement.append(infoTypeTitle, inputElement);
        if (name === 'Expiration date') {
            inputElement.style.letterSpacing = '8px';
            const dividingSlash = document.createElement('span');
            dividingSlash.classList.add('dividing-slash');
            dividingSlash.textContent = '/';
            HtmlElement.append(dividingSlash);
        }
        if (name === 'Card number') {
            const cardType = document.createElement('span');
            cardType.classList.add('card-type');
            cardType.textContent = '';
            inputElement.onchange = () => {
                const cardNumber = inputElement.value;
                let regex = new RegExp('^4');
                if (cardNumber.match(regex) != null)
                    cardType.textContent = 'Visa';
                else {
                    // Mastercard
                    regex = new RegExp('^5[1-5]');
                    if (cardNumber.match(regex) != null)
                        cardType.textContent = 'Mastercard';
                    else {
                        // AMEX
                        regex = new RegExp('^3[47]');
                        if (cardNumber.match(regex) != null)
                            cardType.textContent = 'AMEX';
                        else {
                            // Discover
                            regex = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)');
                            if (cardNumber.match(regex) != null)
                                cardType.textContent = 'Discover';
                            else {
                                // Diners - Carte Blanche
                                regex = new RegExp('^30[0-5]');
                                if (cardNumber.match(regex) != null)
                                    cardType.textContent = 'Diners - Carte Blanche';
                                else {
                                    // Diners
                                    regex = new RegExp('^(30[6-9]|36|38)');
                                    if (cardNumber.match(regex) != null)
                                        cardType.textContent = 'Diners';
                                    else {
                                        // JCB
                                        regex = new RegExp('^35(2[89]|[3-8][0-9])');
                                        if (cardNumber.match(regex) != null)
                                            cardType.textContent = 'JCB';
                                        else {
                                            // Visa Electron
                                            regex = new RegExp('^(4026|417500|4508|4844|491(3|7))');
                                            if (cardNumber.match(regex) != null)
                                                cardType.textContent = 'Visa Electron';
                                            else
                                                cardType.textContent = '';
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            };
            HtmlElement.append(cardType);
        }
        return HtmlElement;
    }
}
exports["default"] = ItemPage;


/***/ }),

/***/ "./src/components/loader/loader.ts":
/*!*****************************************!*\
  !*** ./src/components/loader/loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Loader {
    static errorHandler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }
        return res;
    }
    load() {
        return fetch('https://dummyjson.com/products?limit=100')
            .then(Loader.errorHandler)
            .then((res) => res.json())
            .catch((err) => console.error(err));
    }
}
exports["default"] = Loader;


/***/ }),

/***/ "./src/components/notFoundPage/NotFoundPage.ts":
/*!*****************************************************!*\
  !*** ./src/components/notFoundPage/NotFoundPage.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Page_1 = __importDefault(__webpack_require__(/*! ../../Page */ "./src/Page.ts"));
class NotFoundPage extends Page_1.default {
    constructor() {
        super();
        this._hash = `/404`;
        this.HtmlElementInstance = this.createHtmlElement();
    }
    createHtmlElement() {
        const HtmlElement = document.createElement('div');
        const errorWrapperElement = document.createElement('div');
        const errorTitle = document.createElement('h2');
        errorTitle.textContent = 'Page not found (404)';
        errorWrapperElement.append(errorTitle);
        errorWrapperElement.classList.add('error-title-wrapper');
        HtmlElement.append(errorWrapperElement);
        HtmlElement.classList.add('not-found-page');
        return HtmlElement;
    }
}
exports["default"] = NotFoundPage;


/***/ }),

/***/ "./src/components/router.ts":
/*!**********************************!*\
  !*** ./src/components/router.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const ItemPage_1 = __importDefault(__webpack_require__(/*! ./itemPage/ItemPage */ "./src/components/itemPage/ItemPage.ts"));
const index_1 = __webpack_require__(/*! ../index */ "./src/index.ts");
const NotFoundPage_1 = __importDefault(__webpack_require__(/*! ./notFoundPage/NotFoundPage */ "./src/components/notFoundPage/NotFoundPage.ts"));
class Router {
    get query() {
        return this._query;
    }
    constructor() {
        this._query = Router.processQuery();
    }
    clearQuery() {
        return this.changeQuery({});
    }
    static filterItemsByQuery(updateQuery) {
        index_1.router._query = updateQuery;
        let result = index_1.response.products;
        result = result.filter((productsResponse) => !Array.isArray(updateQuery.brands) ||
            updateQuery.brands.some((brand) => productsResponse.brand === brand));
        result = result.filter((productsResponse) => !Array.isArray(updateQuery.categories) ||
            updateQuery.categories.some((category) => productsResponse.category === category));
        result = result.filter((productsResponse) => !Array.isArray(updateQuery.price) ||
            updateQuery.price.length !== 2 ||
            (productsResponse.price >= Number(updateQuery.price[0]) &&
                productsResponse.price <= Number(updateQuery.price[1])));
        result = result.filter((productsResponse) => !Array.isArray(updateQuery.stock) ||
            updateQuery.stock.length !== 2 ||
            (productsResponse.stock >= Number(updateQuery.stock[0]) &&
                productsResponse.stock <= Number(updateQuery.stock[1])));
        result = result.filter((productsResponse) => !updateQuery.search ||
            productsResponse.discountPercentage.toString(10).includes(updateQuery.search) ||
            productsResponse.price.toString(10).includes(updateQuery.search) ||
            productsResponse.rating.toString(10).includes(updateQuery.search) ||
            productsResponse.brand.toLowerCase().includes(updateQuery.search) ||
            productsResponse.category.toLowerCase().includes(updateQuery.search) ||
            productsResponse.description.toLowerCase().includes(updateQuery.search) ||
            productsResponse.title.toLowerCase().includes(updateQuery.search));
        if (typeof updateQuery.sorting === 'number') {
            switch (updateQuery.sorting) {
                case 0: {
                    result.sort((item1, item2) => item1.price - item2.price);
                    break;
                }
                case 1: {
                    result.sort((item1, item2) => item2.price - item1.price);
                    break;
                }
                case 2: {
                    result.sort((item1, item2) => item2.rating - item1.rating);
                    break;
                }
                case 3: {
                    result.sort((item1, item2) => item2.discountPercentage - item1.discountPercentage);
                    break;
                }
            }
        }
        else
            result.sort((item1, item2) => item1.price - item2.price);
        return result;
    }
    route() {
        var _a;
        /* Hash processing */
        if (window.location.hash.startsWith('#/product/')) {
            const id = window.location.hash.substring(10);
            const productResponse = (_a = index_1.response.products.find((product) => {
                return product.id.toString(10) === id;
            })) !== null && _a !== void 0 ? _a : null;
            if (productResponse) {
                (0, index_1.changePage)(new ItemPage_1.default(productResponse));
            }
            else {
                (0, index_1.changePage)(new NotFoundPage_1.default());
            }
            return;
        }
        switch (window.location.hash) {
            case '#/gallery':
            case '': {
                (0, index_1.changePage)(index_1.GalleryInstance);
                break;
            }
            case '#/cart': {
                //TODO: change page to cart;
                (0, index_1.changePage)(index_1.GalleryInstance);
                break;
            }
            default: {
                (0, index_1.changePage)(new NotFoundPage_1.default());
            }
        }
        /* Query processing */
        this._query = Router.processQuery();
        index_1.GalleryInstance.showData(Router.filterItemsByQuery(this._query));
    }
    static processQuery() {
        const result = {};
        const urlQuery = new URLSearchParams(window.location.search);
        const brands = urlQuery.get('brands');
        const categories = urlQuery.get('categories');
        const price = urlQuery.get('price');
        const stock = urlQuery.get('stock');
        const sorting = urlQuery.get('sorting');
        const search = urlQuery.get('search');
        const smallMode = urlQuery.get('smallMode');
        if (brands)
            result.brands = brands.split('↕');
        if (categories)
            result.categories = categories.split('↕');
        if (price)
            result.price = price.split('↕');
        if (stock)
            result.stock = stock.split('↕');
        if (sorting)
            result.sorting = Number(sorting);
        if (search)
            result.search = search;
        if (smallMode)
            result.smallMode = Boolean(smallMode);
        return result;
    }
    changeQuery(updateQuery) {
        var _a, _b, _c;
        this._query = updateQuery;
        if (((_a = this._query.categories) === null || _a === void 0 ? void 0 : _a.length) === 0)
            delete this._query.categories;
        if (((_b = this._query.brands) === null || _b === void 0 ? void 0 : _b.length) === 0)
            delete this._query.brands;
        if (((_c = this._query.search) === null || _c === void 0 ? void 0 : _c.length) === 0)
            delete this._query.search;
        const urlSearchParams = new URLSearchParams();
        for (const [key, value] of Object.entries(this._query)) {
            let param = value.toString();
            if (Array.isArray(value))
                param = value.join('↕');
            urlSearchParams.append(key, param);
        }
        window.history.pushState({}, '', Router.getLocation(urlSearchParams.toString()));
        return Router.filterItemsByQuery(updateQuery);
    }
    static getLocation(search, hash) {
        return (window.location.protocol +
            '//' +
            window.location.host +
            window.location.pathname +
            (typeof search === 'undefined' ? window.location.search : search.length === 0 ? search : `?${search}`) +
            (typeof hash === 'undefined' ? window.location.hash : `#${hash}`));
    }
}
exports["default"] = Router;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isCustomEvent = exports.changePage = exports.mainElement = exports.GalleryInstance = exports.router = exports.response = void 0;
__webpack_require__(/*! ./global.css */ "./src/global.css");
__webpack_require__(/*! ./assets/rsschool-logo.svg */ "./src/assets/rsschool-logo.svg");
__webpack_require__(/*! ./assets/github-logo.svg */ "./src/assets/github-logo.svg");
__webpack_require__(/*! ./assets/loupe.svg */ "./src/assets/loupe.svg");
__webpack_require__(/*! ./assets/tiles.svg */ "./src/assets/tiles.svg");
const loader_1 = __importDefault(__webpack_require__(/*! ./components/loader/loader */ "./src/components/loader/loader.ts"));
const router_1 = __importDefault(__webpack_require__(/*! ./components/router */ "./src/components/router.ts"));
const GalleryPage_1 = __importDefault(__webpack_require__(/*! ./components/galleryPage/GalleryPage */ "./src/components/galleryPage/GalleryPage.ts"));
const loader = new loader_1.default();
exports.response = { limit: 0, products: [], total: 0, skip: 0 };
exports.router = new router_1.default();
exports.GalleryInstance = new GalleryPage_1.default();
const nameElement = (_a = document.getElementById('header-name')) !== null && _a !== void 0 ? _a : new HTMLElement();
nameElement.addEventListener('click', () => {
    exports.router.clearQuery();
    exports.GalleryInstance = new GalleryPage_1.default();
    changePage(exports.GalleryInstance, true, '');
});
exports.mainElement = (_b = document.querySelector('.mainn')) !== null && _b !== void 0 ? _b : new HTMLElement();
loader.load().then((responded) => {
    exports.response = responded;
    exports.response = {
        limit: exports.response.limit,
        products: exports.response.products.sort((item1, item2) => item1.price - item2.price),
        skip: exports.response.skip,
        total: exports.response.total,
    };
    exports.router.route();
});
function changePage(page, pushHistory, search) {
    exports.mainElement.replaceChildren(page.HtmlElementInstance);
    if (pushHistory)
        history.pushState({}, '', router_1.default.getLocation(search, page.hash));
}
exports.changePage = changePage;
function isCustomEvent(event) {
    return 'detail' in event;
}
exports.isCustomEvent = isCustomEvent;
window.onload = exports.router.route;
window.onpopstate = exports.router.route;


/***/ }),

/***/ "./src/assets/github-logo.svg":
/*!************************************!*\
  !*** ./src/assets/github-logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/github-logo.svg";

/***/ }),

/***/ "./src/assets/loupe.svg":
/*!******************************!*\
  !*** ./src/assets/loupe.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/loupe.svg";

/***/ }),

/***/ "./src/assets/rsschool-logo.svg":
/*!**************************************!*\
  !*** ./src/assets/rsschool-logo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/rsschool-logo.svg";

/***/ }),

/***/ "./src/assets/tiles.svg":
/*!******************************!*\
  !*** ./src/assets/tiles.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/tiles.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFB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QUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsZ0JBQU0sQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ3RGLENBQUM7QUFIRCxnQ0FHQztBQUNELFNBQWdCLGFBQWEsQ0FBQyxLQUFZO0lBQ3RDLE9BQU8sUUFBUSxJQUFJLEtBQUssQ0FBQztBQUM3QixDQUFDO0FBRkQsc0NBRUM7QUFFRCxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQU0sQ0FBQyxLQUFLLENBQUM7QUFDN0IsTUFBTSxDQUFDLFVBQVUsR0FBRyxjQUFNLENBQUMsS0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDakM7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nbG9iYWwuY3NzP2QzYmMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9QYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL0dhbGxlcnlGaWx0ZXJzLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL0dhbGxlcnlJdGVtcy50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9HYWxsZXJ5UGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9zbGlkZXJWaWV3LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2l0ZW1QYWdlL0l0ZW1QYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvbm90Rm91bmRQYWdlL05vdEZvdW5kUGFnZS50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA2cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLW5hbWUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzY4cHgsIDFmcikpO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDUwMDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtd3JhcHBlciA+IGgyIHtcXHJcXG4gICAgbWFyZ2luOiAxMDAlIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXdyYXBwZXIuc21hbGwge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODRweCwgMWZyKSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcXHJcXG4gICAgLmdhbGxlcnkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zb3J0aW5nLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMCA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnN0eWxlLWNoYW5nZXItYnV0dG9uOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbi5iaWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbi5hY3RpdmF0ZWQge1xcclxcbiAgICBib3JkZXItY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydGluZy1pdGVtcyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnRpbmctaXRlbXMgPiBvcHRpb246OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICdTb3J0IGJ5OiAnO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgLTAuMSwgLTAuMSwgMTAwZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0uYW5pbWF0ZWQge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtLmFuaW1hdGVkOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcXHJcXG4gICAgYW5pbWF0aW9uOiAuN3MgY3ViaWMtYmV6aWVyKDAuMDYsIDAuODEsIDAuNTIsIDAuODkpIDBzIGluZmluaXRlIGFsdGVybmF0ZSBiZy1zcGluO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJnLXNwaW4ge1xcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0uYW5pbWF0ZWQuc21hbGwge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtIGltZyB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1idXR0b25zLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoZWF0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogY2hvY29sYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1idXR0b24uYWN0aXZhdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtc2VhcmNoLXdyYXBwZXIgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDEycHggYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4ICNiYmI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiBoMyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaTo6bWFya2VyIHtcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsID4gbGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgd2lkdGg6IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsID4gbGkuY2hlY2tlZC1maWx0ZXIge1xcclxcbiAgICBwYWRkaW5nOiAzcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCA+IGxpLmNoZWNrZWQtZmlsdGVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnWCc7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWRlYWN0aXZhdGVkIHtcXHJcXG4gICAgY29sb3I6IGdhaW5zYm9ybztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxM3B4IDEwcHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItd3JhcHBlciA+IGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1mb3JtLXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogIzYzNWE1YTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDNkM2QzY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc2xpZGVyLXJhbmdlLXdyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZDNkM2O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtbWFpbi13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLml0ZW0tcGFnZS1tYWluLXdyYXBwZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWltYWdlLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXNpZGUtaW1hZ2VzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgc2xhdGVncmV5O1xcclxcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2Utc2lkZS1pbWFnZXMtd3JhcHBlciA+IGltZyB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIG1hcmdpbjogMXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXNpZGUtaW1hZ2VzLXdyYXBwZXIgPiBpbWcuYWN0aXZhdGVkIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW55ZWxsb3c7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1pbWFnZS1ibG9jay13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtaW1hZ2Utd3JhcHBlciBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWltYWdlLXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBnaG9zdHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW46IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06aW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5kaXZpZGluZy1zbGFzaCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IDgyJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5idXktbm93LXdpbmRvdyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGVyc29uYWwtaW5mby1pbnB1dC13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBiaXNxdWU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuaXRlbS1wYWdlLXByb3BlcnR5LXdyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktbmFtZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS12YWx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktdmFsdWUuc3RhcnN7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogVGltZXM7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS12YWx1ZS5zdGFyczo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAn4piF4piF4piF4piF4piFJztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmMwIHZhcigtLXJhdGluZyksICNmZmYgdmFyKC0tcmF0aW5nKSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5yYXRpbmctdG9vbHRpcC13cmFwcGVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTgwJSwgLTgwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBjb2xvcjogIzY2NjY2NjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktdmFsdWU6aG92ZXIgLnJhdGluZy10b29sdGlwLXdyYXBwZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMTAlLCAtODAlKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XFxyXFxufVxcclxcblxcclxcbnAucmF0aW5nLXRvb2x0aXAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydGllcy13cmFwcGVyIHtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA3JTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hlYXQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWZvdW5kLXBhZ2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci10aXRsZS13cmFwcGVyID4gaDIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxucGFkZGluZzogMTBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbmZvbnQtc2l6ZTogNDBweDtcXHJcXG5mb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG5mbGV4OiAxIDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG5oZWlnaHQ6IDEwMHB4O1xcclxcbmRpc3BsYXk6IGZsZXg7XFxyXFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQge1xcclxcbmZvbnQtc2l6ZTogMTRweDtcXHJcXG5jb2xvcjogIzMzMztcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IGEge1xcclxcbmNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCBhOmhvdmVyIHtcXHJcXG5jb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG5jb250ZW50OiAnwqknO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnJzc2Nob29sIGltZyB7XFxyXFxubWF4LXdpZHRoOiAxMDAlO1xcclxcbmhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5naXRodWIgYSBpbWcge1xcclxcbmhlaWdodDogMi41cmVtO1xcclxcbm1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7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QUNBLGFBQWE7QUFDYixzQkFBc0I7QUFDdEIsdUJBQXVCO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGFBQWE7QUFDYixhQUFhO0FBQ2IsbUJBQW1CO0FBQ25CLDZCQUE2QjtBQUM3Qjs7QUFFQTtBQUNBLGVBQWU7QUFDZixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxlQUFlO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA2cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLW5hbWUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzY4cHgsIDFmcikpO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDUwMDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtd3JhcHBlciA+IGgyIHtcXHJcXG4gICAgbWFyZ2luOiAxMDAlIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXdyYXBwZXIuc21hbGwge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODRweCwgMWZyKSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcXHJcXG4gICAgLmdhbGxlcnkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zb3J0aW5nLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMCA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnN0eWxlLWNoYW5nZXItYnV0dG9uOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbi5iaWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbi5hY3RpdmF0ZWQge1xcclxcbiAgICBib3JkZXItY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydGluZy1pdGVtcyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnRpbmctaXRlbXMgPiBvcHRpb246OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICdTb3J0IGJ5OiAnO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgLTAuMSwgLTAuMSwgMTAwZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0uYW5pbWF0ZWQge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtLmFuaW1hdGVkOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcXHJcXG4gICAgYW5pbWF0aW9uOiAuN3MgY3ViaWMtYmV6aWVyKDAuMDYsIDAuODEsIDAuNTIsIDAuODkpIDBzIGluZmluaXRlIGFsdGVybmF0ZSBiZy1zcGluO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJnLXNwaW4ge1xcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0uYW5pbWF0ZWQuc21hbGwge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtIGltZyB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1idXR0b25zLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoZWF0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogY2hvY29sYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1idXR0b24uYWN0aXZhdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtc2VhcmNoLXdyYXBwZXIgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDEycHggYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4ICNiYmI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiBoMyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaTo6bWFya2VyIHtcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsID4gbGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgd2lkdGg6IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsID4gbGkuY2hlY2tlZC1maWx0ZXIge1xcclxcbiAgICBwYWRkaW5nOiAzcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCA+IGxpLmNoZWNrZWQtZmlsdGVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnWCc7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWRlYWN0aXZhdGVkIHtcXHJcXG4gICAgY29sb3I6IGdhaW5zYm9ybztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxM3B4IDEwcHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItd3JhcHBlciA+IGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1mb3JtLXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogIzYzNWE1YTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDNkM2QzY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc2xpZGVyLXJhbmdlLXdyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZDNkM2O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtbWFpbi13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLml0ZW0tcGFnZS1tYWluLXdyYXBwZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWltYWdlLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXNpZGUtaW1hZ2VzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgc2xhdGVncmV5O1xcclxcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2Utc2lkZS1pbWFnZXMtd3JhcHBlciA+IGltZyB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIG1hcmdpbjogMXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXNpZGUtaW1hZ2VzLXdyYXBwZXIgPiBpbWcuYWN0aXZhdGVkIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW55ZWxsb3c7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1pbWFnZS1ibG9jay13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtaW1hZ2Utd3JhcHBlciBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWltYWdlLXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBnaG9zdHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW46IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06aW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuc3Bhbi5kaXZpZGluZy1zbGFzaCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcmlnaHQ6IDgyJTtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgdG9wOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5idXktbm93LXdpbmRvdyB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucGVyc29uYWwtaW5mby1pbnB1dC13cmFwcGVyIHtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAyNXZ3O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBiaXNxdWU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuaXRlbS1wYWdlLXByb3BlcnR5LXdyYXBwZXIge1xcclxcbiAgICAgICAgd2lkdGg6IDkwdnc7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktbmFtZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS12YWx1ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XFxyXFxuICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktdmFsdWUuc3RhcnN7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogVGltZXM7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB3b3JkLWJyZWFrOiBrZWVwLWFsbDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS12YWx1ZS5zdGFyczo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAn4piF4piF4piF4piF4piFJztcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmMwIHZhcigtLXJhdGluZyksICNmZmYgdmFyKC0tcmF0aW5nKSk7XFxyXFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcclxcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbi5yYXRpbmctdG9vbHRpcC13cmFwcGVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTgwJSwgLTgwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBjb2xvcjogIzY2NjY2NjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktdmFsdWU6aG92ZXIgLnJhdGluZy10b29sdGlwLXdyYXBwZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyMTAlLCAtODAlKTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XFxyXFxufVxcclxcblxcclxcbnAucmF0aW5nLXRvb2x0aXAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydGllcy13cmFwcGVyIHtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBwYWRkaW5nOiA3JTtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hlYXQ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubm90LWZvdW5kLXBhZ2Uge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lcnJvci10aXRsZS13cmFwcGVyID4gaDIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxucGFkZGluZzogMTBweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbmZvbnQtc2l6ZTogNDBweDtcXHJcXG5mb250LXdlaWdodDogODAwO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG5mbGV4OiAxIDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG5oZWlnaHQ6IDEwMHB4O1xcclxcbmRpc3BsYXk6IGZsZXg7XFxyXFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQge1xcclxcbmZvbnQtc2l6ZTogMTRweDtcXHJcXG5jb2xvcjogIzMzMztcXHJcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IGEge1xcclxcbmNvbG9yOiAjNDQ0O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCBhOmhvdmVyIHtcXHJcXG5jb2xvcjogIzU1NTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQ6YmVmb3JlIHtcXHJcXG5jb250ZW50OiAnwqknO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnJzc2Nob29sIGltZyB7XFxyXFxubWF4LXdpZHRoOiAxMDAlO1xcclxcbmhlaWdodDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5naXRodWIgYSBpbWcge1xcclxcbmhlaWdodDogMi41cmVtO1xcclxcbm1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFBhZ2Uge1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBfaGFzaDogc3RyaW5nO1xuICAgIGdldCBoYXNoKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xuICAgIH1cbiAgICBwdWJsaWMgYWJzdHJhY3QgSHRtbEVsZW1lbnRJbnN0YW5jZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNyZWF0ZUh0bWxFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xufVxuIiwiaW1wb3J0IHsgSUZpbHRlcnNRdWVyeSwgSVByb2R1Y3RzUmVzcG9uc2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBHYWxsZXJ5SW5zdGFuY2UsIGlzQ3VzdG9tRXZlbnQsIHJlc3BvbnNlLCByb3V0ZXIgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQgeyBjb250cm9sRnJvbVNsaWRlciwgY29udHJvbFRvU2xpZGVyLCBmaWxsU2xpZGVyLCBzZXRUb2dnbGVBY2Nlc3NpYmxlIH0gZnJvbSAnLi9zbGlkZXJWaWV3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeUZpbHRlcnMge1xuICAgIEh0bWxFbGVtZW50SW5zdGFuY2U6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcXVlcnk6IElGaWx0ZXJzUXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gICAgZmlsdGVyZWRSZXNwb25zZXM6IElQcm9kdWN0c1Jlc3BvbnNlW10gPSByZXNwb25zZS5wcm9kdWN0cztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5IdG1sRWxlbWVudEluc3RhbmNlID0gdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVIdG1sRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50QnV0dG9ucyA9IHRoaXMuY3JlYXRlRmlsdGVyQnV0dG9ucygpO1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudFNlYXJjaCA9IHRoaXMuY3JlYXRlU2VhcmNoRmlsdGVyKCk7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50QnJhbmRzV3JhcHBlciA9IHRoaXMuY3JlYXRlQ2hlY2tib3hGaWx0ZXIoJ2JyYW5kJywgJ2JyYW5kcycsICdicmFuZCcpO1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudENhdGVnb3JpZXNXcmFwcGVyID0gdGhpcy5jcmVhdGVDaGVja2JveEZpbHRlcignY2F0ZWdvcnknLCAnY2F0ZWdvcmllcycsICdjYXRlZ29yeScpO1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudFByaWNlU2xpZGVyID0gdGhpcy5jcmVhdGVTbGlkZXJGaWx0ZXIoJ3ByaWNlJywgJ3ByaWNlJyk7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50SW5TdG9ja1NsaWRlciA9IHRoaXMuY3JlYXRlU2xpZGVyRmlsdGVyKCdzdG9jaycsICdzdG9jaycpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWZpbHRlcnMtd3JhcHBlcicpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChIdG1sRWxlbWVudEJ1dHRvbnMpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChIdG1sRWxlbWVudFNlYXJjaCk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEh0bWxFbGVtZW50QnJhbmRzV3JhcHBlcik7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEh0bWxFbGVtZW50Q2F0ZWdvcmllc1dyYXBwZXIpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChIdG1sRWxlbWVudFByaWNlU2xpZGVyKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoSHRtbEVsZW1lbnRJblN0b2NrU2xpZGVyKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcXVlcnknLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNDdXN0b21FdmVudChlKSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBjdXN0b20gZXZlbnQnKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZFJlc3BvbnNlcyA9IGUuZGV0YWlsLnByb2R1Y3RSZXNwb25zZXM7XG4gICAgICAgICAgICBIdG1sRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRDb3B5ID0gbmV3IEN1c3RvbUV2ZW50KGUudHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChldmVudENvcHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwcm9jZXNzUXVlcnkoKTogSVByb2R1Y3RzUmVzcG9uc2VbXSB7XG4gICAgICAgIHRoaXMuZmlsdGVyZWRSZXNwb25zZXMgPSByb3V0ZXIuY2hhbmdlUXVlcnkodGhpcy5xdWVyeSk7XG4gICAgICAgIHJldHVybiBHYWxsZXJ5SW5zdGFuY2Uuc2hvd0RhdGEodGhpcy5maWx0ZXJlZFJlc3BvbnNlcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVGaWx0ZXJCdXR0b25zKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVycy1idXR0b25zLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgYnV0dG9uQ2xlYXJGaWx0ZXJzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25DbGVhckZpbHRlcnNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnMtYnV0dG9uJywgJ2ZpbHRlcnMtYnV0dG9uLWNsZWFyJyk7XG4gICAgICAgIGJ1dHRvbkNsZWFyRmlsdGVyc0VsZW1lbnQudGV4dENvbnRlbnQgPSAnUmVzZXQgZmlsdGVycyc7XG4gICAgICAgIGJ1dHRvbkNsZWFyRmlsdGVyc0VsZW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSB7fTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1F1ZXJ5KCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvcHlMaW5rRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidXR0b25Db3B5TGlua0VsZW1lbnQudGV4dENvbnRlbnQgPSAnQ29weSBsaW5rJztcbiAgICAgICAgYnV0dG9uQ29weUxpbmtFbGVtZW50Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICBidXR0b25Db3B5TGlua0VsZW1lbnQudGV4dENvbnRlbnQgPSAnQ29waWVkISc7XG4gICAgICAgICAgICBidXR0b25Db3B5TGlua0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBidXR0b25Db3B5TGlua0VsZW1lbnQudGV4dENvbnRlbnQgPSAnQ29weSBsaW5rJztcbiAgICAgICAgICAgICAgICBidXR0b25Db3B5TGlua0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfTtcbiAgICAgICAgYnV0dG9uQ29weUxpbmtFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnMtYnV0dG9uJywgJ2ZpbHRlcnMtYnV0dG9uLWNvcHknKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKGJ1dHRvbkNsZWFyRmlsdGVyc0VsZW1lbnQsIGJ1dHRvbkNvcHlMaW5rRWxlbWVudCk7XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNlYXJjaEZpbHRlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcnMtc2VhcmNoLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggZm9yIHByb2R1Y3RzLi4uJztcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LnRpdGxlID0gXCJUeXBlIGluIGFueSBpbmZvIGFib3V0IHRoZSBwcm9kdWN0IHlvdSdyZSBsb29raW5nIGZvclwiO1xuICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQub25rZXl1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkuc2VhcmNoID0gc2VhcmNoSW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVlcnkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy93ZWJwYWNrIGFkZHMgcnVpbmluZyBzbGFzaCBpbiBjc3MgPShcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoYXNzZXRzL2xvdXBlLnN2ZyknO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQoc2VhcmNoSW5wdXRFbGVtZW50KTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcXVlcnknLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNDdXN0b21FdmVudChlKSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBjdXN0b20gZXZlbnQnKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQudmFsdWUgPSByb3V0ZXIucXVlcnkuc2VhcmNoID8/ICcnO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2hlY2tib3hGaWx0ZXIoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyxcbiAgICAgICAgcXVlcnlGaWVsZDogJ2JyYW5kcycgfCAnY2F0ZWdvcmllcycsXG4gICAgICAgIHByb2R1Y3RGaWVsZDogJ2JyYW5kJyB8ICdjYXRlZ29yeSdcbiAgICApIHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVycy1jaGVja2JveC13cmFwcGVyJyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZXF1ZXJ5JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzQ3VzdG9tRXZlbnQoZSkpIHRocm93IG5ldyBFcnJvcignbm90IGEgY3VzdG9tIGV2ZW50Jyk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgSHRtbEVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50Q29weSA9IG5ldyBDdXN0b21FdmVudChlLnR5cGUsIGUpO1xuICAgICAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoZXZlbnRDb3B5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmFtaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbmFtaW5nLnRleHRDb250ZW50ID0gcHJvZHVjdEZpZWxkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvZHVjdEZpZWxkLnNsaWNlKDEpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQobmFtaW5nKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3hMaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgICAgcmVzcG9uc2UucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdHNSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgcHJvcGVydHlBcnJheS5wdXNoKHByb2R1Y3RzUmVzcG9uc2VbcHJvZHVjdEZpZWxkXSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9wZXJ0eUFycmF5LnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLmxvY2FsZUNvbXBhcmUoaXRlbTIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlTZXQ6IFNldDxzdHJpbmc+ID0gbmV3IFNldChwcm9wZXJ0eUFycmF5KTtcbiAgICAgICAgcHJvcGVydHlTZXQuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNoZWNrYm94TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDaGVja2JveEVsZW1lbnQoYXR0cmlidXRlTmFtZSwgcHJvcGVydHksIHF1ZXJ5RmllbGQsIHByb2R1Y3RGaWVsZClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNoZWNrYm94TGlzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcXVlcnknLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNDdXN0b21FdmVudChlKSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBjdXN0b20gZXZlbnQnKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eUFycmF5OiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgICAgICAgICByZXNwb25zZS5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0c1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlBcnJheS5wdXNoKHByb2R1Y3RzUmVzcG9uc2VbcHJvZHVjdEZpZWxkXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb3BlcnR5QXJyYXkuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0xLmxvY2FsZUNvbXBhcmUoaXRlbTIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eVNldDogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHByb3BlcnR5QXJyYXkpO1xuICAgICAgICAgICAgcHJvcGVydHlTZXQuZm9yRWFjaCgocHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICFBcnJheS5mcm9tKGNoZWNrYm94TGlzdEVsZW1lbnQuY2hpbGRyZW4pLnNvbWUoXG4gICAgICAgICAgICAgICAgICAgICAgICAoZWxlbWVudCkgPT4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgPT09IHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNoZWNrYm94RWxlbWVudChhdHRyaWJ1dGVOYW1lLCBwcm9wZXJ0eSwgcXVlcnlGaWVsZCwgcHJvZHVjdEZpZWxkKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjaGVja2JveExpc3RFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudENvcHkgPSBuZXcgQ3VzdG9tRXZlbnQoZS50eXBlLCBlKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KGV2ZW50Q29weSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNoZWNrYm94TGlzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVycy1jaGVja2JveC1saXN0Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChjaGVja2JveExpc3RFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlQ2hlY2tib3hFbGVtZW50KFxuICAgICAgICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsXG4gICAgICAgIGF0dHJpYnV0ZVZhbHVlOiBzdHJpbmcsXG4gICAgICAgIHF1ZXJ5RmllbGQ6ICdicmFuZHMnIHwgJ2NhdGVnb3JpZXMnLFxuICAgICAgICBwcm9kdWN0RmllbGQ6IGtleW9mIElQcm9kdWN0c1Jlc3BvbnNlXG4gICAgKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5QWxsID0gcmVzcG9uc2UucHJvZHVjdHMucmVkdWNlKChhY2N1bXVsYXRvciwgcHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3RbcHJvZHVjdEZpZWxkXSA9PT0gYXR0cmlidXRlVmFsdWUpIGFjY3VtdWxhdG9yKys7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH0sIDApO1xuICAgICAgICBjb25zdCBxdWFudGl0eUZpbHRlcmVkID0gdGhpcy5maWx0ZXJlZFJlc3BvbnNlcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdFtwcm9kdWN0RmllbGRdID09PSBhdHRyaWJ1dGVWYWx1ZSkgYWNjdW11bGF0b3IrKztcbiAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIEh0bWxFbGVtZW50LnRleHRDb250ZW50ID0gYCR7YXR0cmlidXRlVmFsdWV9ICgke3F1YW50aXR5RmlsdGVyZWR9LyR7cXVhbnRpdHlBbGx9KWA7XG4gICAgICAgIEh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiZcbiAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/LnNvbWUoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGF0dHJpYnV0ZVZhbHVlKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQtZmlsdGVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgSHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZSA9IGNsaWNrZWRFbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVja2VkLWZpbHRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkpIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0gPSBbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZC1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8uaW5kZXhPZihhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICd1bmRlZmluZWQnICYmIGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIHRoaXMucXVlcnlbcXVlcnlGaWVsZF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVlcnkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VxdWVyeScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0N1c3RvbUV2ZW50KGUpKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIGN1c3RvbSBldmVudCcpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5QWxsID0gcmVzcG9uc2UucHJvZHVjdHMucmVkdWNlKChhY2N1bXVsYXRvciwgcHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0W3Byb2R1Y3RGaWVsZF0gPT09IGF0dHJpYnV0ZVZhbHVlKSBhY2N1bXVsYXRvcisrO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlGaWx0ZXJlZCA9IHRoaXMuZmlsdGVyZWRSZXNwb25zZXMucmVkdWNlKChhY2N1bXVsYXRvciwgcHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0W3Byb2R1Y3RGaWVsZF0gPT09IGF0dHJpYnV0ZVZhbHVlKSBhY2N1bXVsYXRvcisrO1xuICAgICAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgSHRtbEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHthdHRyaWJ1dGVWYWx1ZX0gKCR7cXVhbnRpdHlGaWx0ZXJlZH0vJHtxdWFudGl0eUFsbH0pYDtcbiAgICAgICAgICAgIGlmIChxdWFudGl0eUZpbHRlcmVkID09PSAwKSBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItZGVhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIGVsc2UgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyLWRlYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdPy5zb21lKChlbGVtZW50KSA9PiBlbGVtZW50ID09PSBhdHRyaWJ1dGVWYWx1ZSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQtZmlsdGVyJyk7XG4gICAgICAgICAgICB9IGVsc2UgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZC1maWx0ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVNsaWRlckZpbHRlcihxdWVyeUZpZWxkOiAncHJpY2UnIHwgJ3N0b2NrJywgcHJvZHVjdEZpZWxkOiBrZXlvZiBJUHJvZHVjdHNSZXNwb25zZSk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgbmFtaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgbmFtaW5nLnRleHRDb250ZW50ID0gcHJvZHVjdEZpZWxkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvZHVjdEZpZWxkLnNsaWNlKDEpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItc2xpZGVyLXdyYXBwZXInKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKG5hbWluZyk7XG4gICAgICAgIGNvbnN0IHNsaWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2xpZGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItc2xpZGVyLXJhbmdlLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgZnJvbUlucHV0U2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZnJvbUlucHV0U2xpZGVyLnR5cGUgPSAncmFuZ2UnO1xuICAgICAgICBjb25zdCBmaWVsZEFycmF5OiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgICAgIHRoaXMuZmlsdGVyZWRSZXNwb25zZXMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHkgPSBwcm9kdWN0W3Byb2R1Y3RGaWVsZF07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnbnVtYmVyJykgZmllbGRBcnJheS5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZyb21JbnB1dFNsaWRlci5taW4gPSBgJHtNYXRoLm1pbiguLi5maWVsZEFycmF5KX1gO1xuICAgICAgICBmcm9tSW5wdXRTbGlkZXIubWF4ID0gYCR7TWF0aC5tYXgoLi4uZmllbGRBcnJheSl9YDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiYgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgLy8gaWYtc3RhdGVtZW50IGd1YXJhbnRlZXMgdGhhdCB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdICE9PSBudWxsXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgZnJvbUlucHV0U2xpZGVyLnZhbHVlID0gYCR7dGhpcy5xdWVyeVtxdWVyeUZpZWxkXSFbMF19YDtcbiAgICAgICAgZWxzZSBmcm9tSW5wdXRTbGlkZXIudmFsdWUgPSBgJHtNYXRoLm1pbiguLi5maWVsZEFycmF5KX1gO1xuICAgICAgICBmcm9tSW5wdXRTbGlkZXIuc3R5bGUuaGVpZ2h0ID0gJzAnO1xuICAgICAgICBmcm9tSW5wdXRTbGlkZXIuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICBjb25zdCB0b0lucHV0U2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdG9JbnB1dFNsaWRlci50eXBlID0gJ3JhbmdlJztcbiAgICAgICAgdG9JbnB1dFNsaWRlci5taW4gPSBgJHtNYXRoLm1pbiguLi5maWVsZEFycmF5KX1gO1xuICAgICAgICB0b0lucHV0U2xpZGVyLm1heCA9IGAke01hdGgubWF4KC4uLmZpZWxkQXJyYXkpfWA7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pICYmIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/Lmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgIC8vIGlmLXN0YXRlbWVudCBndWFyYW50ZWVzIHRoYXQgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXSAhPT0gbnVsbFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb25cbiAgICAgICAgICAgIHRvSW5wdXRTbGlkZXIudmFsdWUgPSBgJHt0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdIVsxXX1gO1xuICAgICAgICBlbHNlIHRvSW5wdXRTbGlkZXIudmFsdWUgPSBgJHtNYXRoLm1heCguLi5maWVsZEFycmF5KX1gO1xuICAgICAgICBzbGlkZXJXcmFwcGVyLmFwcGVuZChmcm9tSW5wdXRTbGlkZXIsIHRvSW5wdXRTbGlkZXIpO1xuICAgICAgICBjb25zdCBmb3JtV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBtaW5WYWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWluVmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gZnJvbUlucHV0U2xpZGVyLnZhbHVlO1xuICAgICAgICBtaW5WYWx1ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLXNsaWRlci1mb3JtLXRleHQnKTtcbiAgICAgICAgY29uc3QgbWF4VmFsdWVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1heFZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvSW5wdXRTbGlkZXIudmFsdWU7XG4gICAgICAgIG1heFZhbHVlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItc2xpZGVyLWZvcm0tdGV4dCcpO1xuICAgICAgICBmb3JtV3JhcHBlci5hcHBlbmQobWluVmFsdWVFbGVtZW50LCBtYXhWYWx1ZUVsZW1lbnQpO1xuICAgICAgICBmcm9tSW5wdXRTbGlkZXIub25pbnB1dCA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRyb2xGcm9tU2xpZGVyKGZyb21JbnB1dFNsaWRlciwgdG9JbnB1dFNsaWRlciwgbWluVmFsdWVFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheSh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdKSB8fFxuICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pICYmIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/Lmxlbmd0aCAhPT0gMilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdID0gW2Zyb21JbnB1dFNsaWRlci52YWx1ZSwgdG9JbnB1dFNsaWRlci52YWx1ZV07XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pICYmIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/Lmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0hWzBdID0gZnJvbUlucHV0U2xpZGVyLnZhbHVlO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/LlswXSA9PT0gZnJvbUlucHV0U2xpZGVyLm1pbiAmJlxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/LlsxXSA9PT0gZnJvbUlucHV0U2xpZGVyLm1heFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdO1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVlcnkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgdG9JbnB1dFNsaWRlci5vbmlucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbFRvU2xpZGVyKGZyb21JbnB1dFNsaWRlciwgdG9JbnB1dFNsaWRlciwgbWF4VmFsdWVFbGVtZW50KTtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheSh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdKSB8fFxuICAgICAgICAgICAgICAgIChBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pICYmIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/Lmxlbmd0aCAhPT0gMilcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdID0gW2Zyb21JbnB1dFNsaWRlci52YWx1ZSwgdG9JbnB1dFNsaWRlci52YWx1ZV07XG4gICAgICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pICYmIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/Lmxlbmd0aCA9PT0gMilcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0hWzFdID0gdG9JbnB1dFNsaWRlci52YWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdPy5bMF0gPT09IHRvSW5wdXRTbGlkZXIubWluICYmIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/LlsxXSA9PT0gdG9JbnB1dFNsaWRlci5tYXgpXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcnlbcXVlcnlGaWVsZF07XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWVyeSgpO1xuICAgICAgICB9O1xuICAgICAgICBmaWxsU2xpZGVyKGZyb21JbnB1dFNsaWRlciwgdG9JbnB1dFNsaWRlciwgJyNDNkM2QzYnLCAnIzI1ZGFhNScsIHRvSW5wdXRTbGlkZXIpO1xuICAgICAgICBzZXRUb2dnbGVBY2Nlc3NpYmxlKHRvSW5wdXRTbGlkZXIpO1xuICAgICAgICBmb3JtV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItc2xpZGVyLWZvcm0td3JhcHBlcicpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQoc2xpZGVyV3JhcHBlciwgZm9ybVdyYXBwZXIpO1xuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VxdWVyeScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0N1c3RvbUV2ZW50KGUpKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIGN1c3RvbSBldmVudCcpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHByb2R1Y3RbcHJvZHVjdEZpZWxkXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnbnVtYmVyJykgZmllbGRBcnJheS5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZnJvbUlucHV0U2xpZGVyLm1pbiA9IGAke01hdGgubWluKC4uLmZpZWxkQXJyYXkpfWA7XG4gICAgICAgICAgICBmcm9tSW5wdXRTbGlkZXIubWF4ID0gYCR7TWF0aC5tYXgoLi4uZmllbGRBcnJheSl9YDtcbiAgICAgICAgICAgIHRvSW5wdXRTbGlkZXIubWluID0gYCR7TWF0aC5taW4oLi4uZmllbGRBcnJheSl9YDtcbiAgICAgICAgICAgIHRvSW5wdXRTbGlkZXIubWF4ID0gYCR7TWF0aC5tYXgoLi4uZmllbGRBcnJheSl9YDtcblxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRGaWVsZEFycmF5OiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkUmVzcG9uc2VzLmZvckVhY2goKHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHByb2R1Y3RbcHJvZHVjdEZpZWxkXTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHByb3BlcnR5ID09PSAnbnVtYmVyJykgZmlsdGVyZWRGaWVsZEFycmF5LnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJlZFJlc3BvbnNlcy5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhKFxuICAgICAgICAgICAgICAgICAgICBmcm9tSW5wdXRTbGlkZXIudmFsdWUgPT09IGAke01hdGgubWluKC4uLmZpbHRlcmVkRmllbGRBcnJheSl9YCAmJlxuICAgICAgICAgICAgICAgICAgICB0b0lucHV0U2xpZGVyLnZhbHVlID09PSBgJHtNYXRoLm1heCguLi5maWx0ZXJlZEZpZWxkQXJyYXkpfWBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBmcm9tSW5wdXRTbGlkZXIudmFsdWUgPSBgJHtNYXRoLm1pbiguLi5maWx0ZXJlZEZpZWxkQXJyYXkpfWA7XG4gICAgICAgICAgICAgICAgdG9JbnB1dFNsaWRlci52YWx1ZSA9IGAke01hdGgubWF4KC4uLmZpbHRlcmVkRmllbGRBcnJheSl9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1pblZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IGZyb21JbnB1dFNsaWRlci52YWx1ZTtcbiAgICAgICAgICAgIG1heFZhbHVlRWxlbWVudC50ZXh0Q29udGVudCA9IHRvSW5wdXRTbGlkZXIudmFsdWU7XG4gICAgICAgICAgICBmaWxsU2xpZGVyKGZyb21JbnB1dFNsaWRlciwgdG9JbnB1dFNsaWRlciwgJyNDNkM2QzYnLCAnIzI1ZGFhNScsIHRvSW5wdXRTbGlkZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cbn1cbiIsImltcG9ydCB7IElQcm9kdWN0c1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgY2hhbmdlUGFnZSwgR2FsbGVyeUluc3RhbmNlLCBpc0N1c3RvbUV2ZW50LCByb3V0ZXIgfSBmcm9tICcuLi8uLi9pbmRleCc7XG5pbXBvcnQgSXRlbVBhZ2UgZnJvbSAnLi4vaXRlbVBhZ2UvSXRlbVBhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5SXRlbXMge1xuICAgIGdldCBwcm9kdWN0c1Jlc3BvbnNlcygpOiBJUHJvZHVjdHNSZXNwb25zZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2R1Y3RzUmVzcG9uc2VzO1xuICAgIH1cbiAgICBIdG1sRWxlbWVudEluc3RhbmNlOiBIVE1MRWxlbWVudDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNvcnRpbmdFbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBwcml2YXRlIF9wcm9kdWN0c1Jlc3BvbnNlczogSVByb2R1Y3RzUmVzcG9uc2VbXTtcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0c1Jlc3BvbnNlczogSVByb2R1Y3RzUmVzcG9uc2VbXSkge1xuICAgICAgICB0aGlzLl9wcm9kdWN0c1Jlc3BvbnNlcyA9IHByb2R1Y3RzUmVzcG9uc2VzO1xuICAgICAgICB0aGlzLnNvcnRpbmdFbGVtZW50ID0gdGhpcy5jcmVhdGVTb3J0aW5nKCk7XG4gICAgICAgIHRoaXMuSHRtbEVsZW1lbnRJbnN0YW5jZSA9IHRoaXMuY3JlYXRlSHRtbEVsZW1lbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSHRtbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdnYWxsZXJ5LWl0ZW1zLXdyYXBwZXInKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTb3J0aW5nV3JhcHBlcigpKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVQcm9kdWN0c0VsZW1lbnQoKSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZXF1ZXJ5JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzQ3VzdG9tRXZlbnQoZSkpIHRocm93IG5ldyBFcnJvcignbm90IGEgY3VzdG9tIGV2ZW50Jyk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByb3V0ZXIucXVlcnkuc29ydGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRpbmdFbGVtZW50LnZhbHVlID0gR2FsbGVyeUl0ZW1zLnNlbGVjdE9wdGlvbnNBcnJbcm91dGVyLnF1ZXJ5LnNvcnRpbmddO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRpbmdFbGVtZW50LnZhbHVlID0gR2FsbGVyeUl0ZW1zLnNlbGVjdE9wdGlvbnNBcnJbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBIdG1sRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRDb3B5ID0gbmV3IEN1c3RvbUV2ZW50KGUudHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChldmVudENvcHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVQcm9kdWN0c0VsZW1lbnQoKTogSFRNTERpdkVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtcy13cmFwcGVyJyk7XG4gICAgICAgIGlmIChyb3V0ZXIucXVlcnkuc21hbGxNb2RlKSBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhKCk7XG4gICAgICAgIGlmIChzb3J0ZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVOb1Byb2R1Y3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIHRpdGxlTm9Qcm9kdWN0cy50ZXh0Q29udGVudCA9ICdObyBwcm9kdWN0cyBmb3VuZCA9KCc7XG4gICAgICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQodGl0bGVOb1Byb2R1Y3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNvcnRlZERhdGEuZm9yRWFjaCgocHJvZHVjdHNSZXNwb25zZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgR2FsbGVyeUl0ZW1zLmNyZWF0ZVByb2R1Y3RIdG1sRWxlbWVudChwcm9kdWN0c1Jlc3BvbnNlLCBpbmRleCwgcm91dGVyLnF1ZXJ5LnNtYWxsTW9kZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgSHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcXVlcnknLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNDdXN0b21FdmVudChlKSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBjdXN0b20gZXZlbnQnKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9wcm9kdWN0c1Jlc3BvbnNlcyA9IGUuZGV0YWlsLnByb2R1Y3RSZXNwb25zZXM7XG4gICAgICAgICAgICBIdG1sRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4oJycpO1xuICAgICAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zbWFsbE1vZGUpIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gICAgICAgICAgICBlbHNlIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NtYWxsJyk7XG4gICAgICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gdGhpcy5nZXRTb3J0ZWREYXRhKCk7XG4gICAgICAgICAgICBpZiAoc29ydGVkRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZU5vUHJvZHVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgICAgIHRpdGxlTm9Qcm9kdWN0cy50ZXh0Q29udGVudCA9ICdObyBwcm9kdWN0cyBmb3VuZCA9KCc7XG4gICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKHRpdGxlTm9Qcm9kdWN0cyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEuZm9yRWFjaCgocHJvZHVjdHNSZXNwb25zZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICAgICAgICAgICAgICBHYWxsZXJ5SXRlbXMuY3JlYXRlUHJvZHVjdEh0bWxFbGVtZW50KHByb2R1Y3RzUmVzcG9uc2UsIGluZGV4LCByb3V0ZXIucXVlcnkuc21hbGxNb2RlKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSHRtbEVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50Q29weSA9IG5ldyBDdXN0b21FdmVudChlLnR5cGUsIGUpO1xuICAgICAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoZXZlbnRDb3B5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0U29ydGVkRGF0YSgpOiBJUHJvZHVjdHNSZXNwb25zZVtdIHtcbiAgICAgICAgY29uc3Qgc29ydGVkRGF0YSA9IHRoaXMucHJvZHVjdHNSZXNwb25zZXM7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zb3J0aW5nRWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgY2FzZSBHYWxsZXJ5SXRlbXMuc2VsZWN0T3B0aW9uc0FyclswXToge1xuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMS5wcmljZSAtIGl0ZW0yLnByaWNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgR2FsbGVyeUl0ZW1zLnNlbGVjdE9wdGlvbnNBcnJbMV06IHtcbiAgICAgICAgICAgICAgICBzb3J0ZWREYXRhLnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4gaXRlbTIucHJpY2UgLSBpdGVtMS5wcmljZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEdhbGxlcnlJdGVtcy5zZWxlY3RPcHRpb25zQXJyWzJdOiB7XG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YS5zb3J0KChpdGVtMSwgaXRlbTIpID0+IGl0ZW0yLnJhdGluZyAtIGl0ZW0xLnJhdGluZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEdhbGxlcnlJdGVtcy5zZWxlY3RPcHRpb25zQXJyWzNdOiB7XG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YS5zb3J0KChpdGVtMSwgaXRlbTIpID0+IGl0ZW0yLmRpc2NvdW50UGVyY2VudGFnZSAtIGl0ZW0xLmRpc2NvdW50UGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNvcnRlZERhdGE7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgc2VsZWN0T3B0aW9uc0FycjogQXJyYXk8c3RyaW5nPiA9IFtcbiAgICAgICAgJ1ByaWNlOiBMb3cgdG8gSGlnaCcsXG4gICAgICAgICdQcmljZTogSGlnaCB0byBMb3cnLFxuICAgICAgICAnQXZnLiBDdXN0b21lciBSZXZpZXcnLFxuICAgICAgICAnRGlzY291bnQgUGVyY2VudGFnZScsXG4gICAgXTtcbiAgICBwcml2YXRlIGNyZWF0ZVNvcnRpbmcoKTogSFRNTFNlbGVjdEVsZW1lbnQge1xuICAgICAgICBjb25zdCBzb3J0aW5nU2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBzb3J0aW5nU2VsZWN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzb3J0aW5nLWl0ZW1zJyk7XG4gICAgICAgIEdhbGxlcnlJdGVtcy5zZWxlY3RPcHRpb25zQXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgc29ydGluZ1NlbGVjdEVsZW1lbnQuYXBwZW5kKG9wdGlvbkVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgc29ydGluZ1NlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3UXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gICAgICAgICAgICBuZXdRdWVyeS5zb3J0aW5nID0gR2FsbGVyeUl0ZW1zLnNlbGVjdE9wdGlvbnNBcnIuZmluZEluZGV4KCh2YWwpID0+IHZhbCA9PT0gc29ydGluZ1NlbGVjdEVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgR2FsbGVyeUluc3RhbmNlLnNob3dEYXRhKHJvdXRlci5jaGFuZ2VRdWVyeShuZXdRdWVyeSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNvcnRpbmdTZWxlY3RFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlU29ydGluZ1dyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzb3J0aW5nLXdyYXBwZXInKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5zb3J0aW5nRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHN0eWxlQ2hhbmdlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc3R5bGVDaGFuZ2VyV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdzdHlsZS1jaGFuZ2VyLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3Qgc3R5bGVDaGFuZ2VyQnV0dG9uU21hbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uU21hbGwub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvbkJpZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvblNtYWxsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2YXRlZCcpO1xuICAgICAgICAgICAgY29uc3QgbmV3UXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gICAgICAgICAgICBuZXdRdWVyeS5zbWFsbE1vZGUgPSB0cnVlO1xuICAgICAgICAgICAgR2FsbGVyeUluc3RhbmNlLnNob3dEYXRhKHJvdXRlci5jaGFuZ2VRdWVyeShuZXdRdWVyeSkpO1xuICAgICAgICB9O1xuICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25TbWFsbC5jbGFzc0xpc3QuYWRkKCdzdHlsZS1jaGFuZ2VyLWJ1dHRvbicsICdzbWFsbCcpO1xuICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25TbWFsbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGFzc2V0cy90aWxlcy5zdmcpJztcbiAgICAgICAgY29uc3Qgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvbkJpZy5jbGFzc0xpc3QuYWRkKCdzdHlsZS1jaGFuZ2VyLWJ1dHRvbicsICdiaWcnLCAnYWN0aXZhdGVkJyk7XG4gICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvbkJpZy5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uU21hbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25CaWcuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdRdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgICAgIGRlbGV0ZSBuZXdRdWVyeS5zbWFsbE1vZGU7XG4gICAgICAgICAgICBHYWxsZXJ5SW5zdGFuY2Uuc2hvd0RhdGEocm91dGVyLmNoYW5nZVF1ZXJ5KG5ld1F1ZXJ5KSk7XG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvbkJpZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGFzc2V0cy90aWxlcy5zdmcpJztcbiAgICAgICAgc3R5bGVDaGFuZ2VyV3JhcHBlci5hcHBlbmQoc3R5bGVDaGFuZ2VyQnV0dG9uU21hbGwsIHN0eWxlQ2hhbmdlckJ1dHRvbkJpZyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChzdHlsZUNoYW5nZXJXcmFwcGVyKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcXVlcnknLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNDdXN0b21FdmVudChlKSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBjdXN0b20gZXZlbnQnKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnNtYWxsTW9kZSkge1xuICAgICAgICAgICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvbkJpZy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25TbWFsbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uU21hbGwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnLmNsYXNzTGlzdC5hZGQoJ2FjdGl2YXRlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVByb2R1Y3RIdG1sRWxlbWVudChcbiAgICAgICAgcHJvZHVjdHNSZXNwb25zZTogSVByb2R1Y3RzUmVzcG9uc2UsXG4gICAgICAgIGluZGV4OiBudW1iZXIsXG4gICAgICAgIHNtYWxsPzogYm9vbGVhblxuICAgICk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKHNtYWxsKSBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzbWFsbCcpO1xuICAgICAgICBIdG1sRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgcHJvZHVjdHNSZXNwb25zZS50aXRsZSk7XG4gICAgICAgIGNvbnN0IEl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBjb25zdCBJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGNvbnN0IEl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgSXRlbUltYWdlLnNyYyA9IHByb2R1Y3RzUmVzcG9uc2UuaW1hZ2VzW3Byb2R1Y3RzUmVzcG9uc2UuaW1hZ2VzLmxlbmd0aCAtIDFdO1xuICAgICAgICBJdGVtVGl0bGUuaW5uZXJUZXh0ID0gcHJvZHVjdHNSZXNwb25zZS50aXRsZTtcbiAgICAgICAgSXRlbVByaWNlLmlubmVyVGV4dCA9IGDigqwke3Byb2R1Y3RzUmVzcG9uc2UucHJpY2UudG9TdHJpbmcoMTApfWA7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaXRlbScpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChJdGVtSW1hZ2UpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChJdGVtVGl0bGUpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChJdGVtUHJpY2UpO1xuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZVBhZ2UobmV3IEl0ZW1QYWdlKHByb2R1Y3RzUmVzcG9uc2UpLCB0cnVlLCAnJyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVkJyksIGluZGV4ICogMTApO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vUGFnZSc7XG5pbXBvcnQgeyBJUHJvZHVjdHNSZXNwb25zZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCBHYWxsZXJ5SXRlbXMgZnJvbSAnLi9HYWxsZXJ5SXRlbXMnO1xuaW1wb3J0IEdhbGxlcnlGaWx0ZXJzIGZyb20gJy4vR2FsbGVyeUZpbHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5UGFnZSBleHRlbmRzIFBhZ2Uge1xuICAgIHByb3RlY3RlZCBfaGFzaDogc3RyaW5nO1xuICAgIEh0bWxFbGVtZW50SW5zdGFuY2U6IEhUTUxFbGVtZW50O1xuICAgIEZpbHRlcnNJbnN0YW5jZTogR2FsbGVyeUZpbHRlcnM7XG4gICAgSXRlbXNJbnN0YW5jZTogR2FsbGVyeUl0ZW1zO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2hhc2ggPSBgL2dhbGxlcnlgO1xuICAgICAgICB0aGlzLkZpbHRlcnNJbnN0YW5jZSA9IG5ldyBHYWxsZXJ5RmlsdGVycygpO1xuICAgICAgICB0aGlzLkl0ZW1zSW5zdGFuY2UgPSBuZXcgR2FsbGVyeUl0ZW1zKHRoaXMuRmlsdGVyc0luc3RhbmNlLmZpbHRlcmVkUmVzcG9uc2VzKTtcbiAgICAgICAgdGhpcy5IdG1sRWxlbWVudEluc3RhbmNlID0gdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVIdG1sRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnknKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5GaWx0ZXJzSW5zdGFuY2UuSHRtbEVsZW1lbnRJbnN0YW5jZSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuSXRlbXNJbnN0YW5jZS5IdG1sRWxlbWVudEluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHNob3dEYXRhKHByb2R1Y3RzUmVzcG9uc2VzOiBJUHJvZHVjdHNSZXNwb25zZVtdKTogSVByb2R1Y3RzUmVzcG9uc2VbXSB7XG4gICAgICAgIGNvbnN0IGRhdGFVcGRhdGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZXF1ZXJ5Jywge1xuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdFJlc3BvbnNlczogcHJvZHVjdHNSZXNwb25zZXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5GaWx0ZXJzSW5zdGFuY2UuSHRtbEVsZW1lbnRJbnN0YW5jZS5kaXNwYXRjaEV2ZW50KGRhdGFVcGRhdGUpO1xuICAgICAgICB0aGlzLkl0ZW1zSW5zdGFuY2UuSHRtbEVsZW1lbnRJbnN0YW5jZS5kaXNwYXRjaEV2ZW50KGRhdGFVcGRhdGUpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdHNSZXNwb25zZXM7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xGcm9tU2xpZGVyKGZyb21TbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQsIHRvU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50LCBtaW5EaXY6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgY29uc3QgW2Zyb20sIHRvXSA9IGdldFBhcnNlZChmcm9tU2xpZGVyLCB0b1NsaWRlcik7XG4gICAgZmlsbFNsaWRlcihmcm9tU2xpZGVyLCB0b1NsaWRlciwgJyNDNkM2QzYnLCAnIzI1ZGFhNScsIHRvU2xpZGVyKTtcbiAgICBpZiAoZnJvbSA+IHRvKSB7XG4gICAgICAgIGZyb21TbGlkZXIudmFsdWUgPSBgJHt0b31gO1xuICAgICAgICBtaW5EaXYudGV4dENvbnRlbnQgPSBgJHt0b31gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1pbkRpdi50ZXh0Q29udGVudCA9IGAke2Zyb219YDtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250cm9sVG9TbGlkZXIoZnJvbVNsaWRlcjogSFRNTElucHV0RWxlbWVudCwgdG9TbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQsIG1heERpdjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21TbGlkZXIsIHRvU2xpZGVyKTtcbiAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjMjVkYWE1JywgdG9TbGlkZXIpO1xuICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9TbGlkZXIpO1xuICAgIGlmIChmcm9tIDw9IHRvKSB7XG4gICAgICAgIHRvU2xpZGVyLnZhbHVlID0gYCR7dG99YDtcbiAgICAgICAgbWF4RGl2LnRleHRDb250ZW50ID0gYCR7dG99YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtYXhEaXYudGV4dENvbnRlbnQgPSBgJHtmcm9tfWA7XG4gICAgICAgIHRvU2xpZGVyLnZhbHVlID0gYCR7ZnJvbX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFRvZ2dsZUFjY2Vzc2libGUoY3VycmVudFRhcmdldDogSFRNTElucHV0RWxlbWVudCkge1xuICAgIGlmIChOdW1iZXIoY3VycmVudFRhcmdldC52YWx1ZSkgPD0gMCkge1xuICAgICAgICBjdXJyZW50VGFyZ2V0LnN0eWxlLnpJbmRleCA9ICcyJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VGFyZ2V0LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldFBhcnNlZChjdXJyZW50RnJvbTogSFRNTElucHV0RWxlbWVudCwgY3VycmVudFRvOiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtOdW1iZXIoY3VycmVudEZyb20udmFsdWUpLCBOdW1iZXIoY3VycmVudFRvLnZhbHVlKV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWxsU2xpZGVyKFxuICAgIGZyb206IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgdG86IEhUTUxJbnB1dEVsZW1lbnQsXG4gICAgc2xpZGVyQ29sb3I6IHN0cmluZyxcbiAgICByYW5nZUNvbG9yOiBzdHJpbmcsXG4gICAgY29udHJvbFNsaWRlcjogSFRNTElucHV0RWxlbWVudFxuKSB7XG4gICAgY29uc3QgcmFuZ2VEaXN0YW5jZSA9IE51bWJlcih0by5tYXgpIC0gTnVtYmVyKHRvLm1pbik7XG4gICAgY29uc3QgZnJvbVBvc2l0aW9uID0gTnVtYmVyKGZyb20udmFsdWUpIC0gTnVtYmVyKHRvLm1pbik7XG4gICAgY29uc3QgdG9Qb3NpdGlvbiA9IE51bWJlcih0by52YWx1ZSkgLSBOdW1iZXIodG8ubWluKTtcbiAgICBjb250cm9sU2xpZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gcmlnaHQsXG4gICAgICAke3NsaWRlckNvbG9yfSAwJSxcbiAgICAgICR7c2xpZGVyQ29sb3J9ICR7KGZyb21Qb3NpdGlvbiAvIHJhbmdlRGlzdGFuY2UpICogMTAwfSUsXG4gICAgICAke3JhbmdlQ29sb3J9ICR7KGZyb21Qb3NpdGlvbiAvIHJhbmdlRGlzdGFuY2UpICogMTAwfSUsXG4gICAgICAke3JhbmdlQ29sb3J9ICR7KHRvUG9zaXRpb24gLyByYW5nZURpc3RhbmNlKSAqIDEwMH0lLCBcbiAgICAgICR7c2xpZGVyQ29sb3J9ICR7KHRvUG9zaXRpb24gLyByYW5nZURpc3RhbmNlKSAqIDEwMH0lLCBcbiAgICAgICR7c2xpZGVyQ29sb3J9IDEwMCUpYDtcbn1cbiIsImltcG9ydCBQYWdlIGZyb20gJy4uLy4uL1BhZ2UnO1xuaW1wb3J0IHsgSVByb2R1Y3RzUmVzcG9uc2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBHYWxsZXJ5SW5zdGFuY2UsIHJvdXRlciB9IGZyb20gJy4uLy4uL2luZGV4JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgICBwcm90ZWN0ZWQgX2hhc2g6IHN0cmluZztcbiAgICBIdG1sRWxlbWVudEluc3RhbmNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm9kdWN0c1Jlc3BvbnNlOiBJUHJvZHVjdHNSZXNwb25zZTtcbiAgICBwcml2YXRlIGl0ZW1JbWFnZXNQb2ludGVyID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0UmVzcG9uc2U6IElQcm9kdWN0c1Jlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdHNSZXNwb25zZSA9IHByb2R1Y3RSZXNwb25zZTtcbiAgICAgICAgdGhpcy5faGFzaCA9IGAvcHJvZHVjdC8ke3RoaXMucHJvZHVjdHNSZXNwb25zZS5pZH1gO1xuICAgICAgICB0aGlzLkh0bWxFbGVtZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVIdG1sRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlV3JhcHBlciA9IHRoaXMuY3JlYXRlSW1hZ2VXcmFwcGVyKCk7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXNXcmFwcGVyID0gdGhpcy5jcmVhdGVQcm9wZXJ0aWVzV3JhcHBlcigpO1xuICAgICAgICBjb25zdCBidXlXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbnNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcGFnZS1idXR0b25zLXdyYXBwZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLWJ1dHRvbicpO1xuICAgICAgICAgICAgY2FydEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIHRvIGNhcnQnO1xuICAgICAgICAgICAgY2FydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vVE9ETzogYWRkIGNhcnQgbG9naWNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBidXlOb3dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1eU5vd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtYnV0dG9uJyk7XG4gICAgICAgICAgICBidXlOb3dCdXR0b24uaW5uZXJUZXh0ID0gJ0J1eSBub3cnO1xuICAgICAgICAgICAgYnV5Tm93QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKHRoaXMuY3JlYXRlQnV5Tm93V2luZG93KCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZChjYXJ0QnV0dG9uLCBidXlOb3dCdXR0b24pO1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnNXcmFwcGVyO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBicmVhZGNydW1ic0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGJyZWFkY3J1bWJzRWxlbWVudC5pbm5lclRleHQgPSBgU1RPUkUgPj4gJHt0aGlzLnByb2R1Y3RzUmVzcG9uc2UuY2F0ZWdvcnl9ID4+ICR7dGhpcy5wcm9kdWN0c1Jlc3BvbnNlLmJyYW5kfSA+PiAke3RoaXMucHJvZHVjdHNSZXNwb25zZS50aXRsZX1gLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGJyZWFkY3J1bWJzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtYnJlYWRjcnVtYnMnKTtcbiAgICAgICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLW1haW4td3JhcHBlcicpO1xuICAgICAgICBtYWluV3JhcHBlci5hcHBlbmQoaW1hZ2VXcmFwcGVyLCBwcm9wZXJ0aWVzV3JhcHBlciwgYnV5V3JhcHBlcigpKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLXdyYXBwZXInKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKGJyZWFkY3J1bWJzRWxlbWVudCwgbWFpbldyYXBwZXIpO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVJbWFnZVdyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtaW1hZ2UtYmxvY2std3JhcHBlcicpO1xuICAgICAgICBjb25zdCBtYWluSW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5JbWFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLWltYWdlLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgSXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIEl0ZW1JbWFnZS5zcmMgPSB0aGlzLnByb2R1Y3RzUmVzcG9uc2UuaW1hZ2VzW3RoaXMuaXRlbUltYWdlc1BvaW50ZXJdO1xuICAgICAgICBtYWluSW1hZ2VXcmFwcGVyLmFwcGVuZENoaWxkKEl0ZW1JbWFnZSk7XG4gICAgICAgIGNvbnN0IHNpZGVJbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZUltYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2Utc2lkZS1pbWFnZXMtd3JhcHBlcicpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzUmVzcG9uc2UuaW1hZ2VzLmZvckVhY2goKGltYWdlVVJMLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2lkZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuaXRlbUltYWdlc1BvaW50ZXIpIHNpZGVJbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIHNpZGVJbWFnZS5zcmMgPSBpbWFnZVVSTDtcbiAgICAgICAgICAgIHNpZGVJbWFnZS5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBJdGVtSW1hZ2Uuc3JjID0gc2lkZUltYWdlLnNyYztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaWRlSW1hZ2Uub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBJdGVtSW1hZ2Uuc3JjID0gdGhpcy5wcm9kdWN0c1Jlc3BvbnNlLmltYWdlc1t0aGlzLml0ZW1JbWFnZXNQb2ludGVyXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaWRlSW1hZ2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1JbWFnZXNQb2ludGVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgSXRlbUltYWdlLnNyYyA9IHRoaXMucHJvZHVjdHNSZXNwb25zZS5pbWFnZXNbdGhpcy5pdGVtSW1hZ2VzUG9pbnRlcl07XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlSW1hZ2VXcmFwcGVyLmNoaWxkcmVuKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlZCcpKTtcbiAgICAgICAgICAgICAgICBzaWRlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2lkZUltYWdlV3JhcHBlci5hcHBlbmQoc2lkZUltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChzaWRlSW1hZ2VXcmFwcGVyLCBtYWluSW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUHJvcGVydGllc1dyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtcHJvcGVydGllcy13cmFwcGVyJyk7XG4gICAgICAgIC8qIFRpdGxlICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1QYWdlLmNyZWF0ZVByb3BlcnR5V3JhcHBlcignVGl0bGUnLCB0aGlzLnByb2R1Y3RzUmVzcG9uc2UudGl0bGUpKTtcbiAgICAgICAgLyogUHJpY2UgKi9cbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBJdGVtUGFnZS5jcmVhdGVQcm9wZXJ0eVdyYXBwZXIoJ1ByaWNlJywgYOKCrCR7dGhpcy5wcm9kdWN0c1Jlc3BvbnNlLnByaWNlLnRvU3RyaW5nKDEwKX1gKVxuICAgICAgICApO1xuICAgICAgICAvKiBEaXNjb3VudCBwZXJjZW50YWdlICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgSXRlbVBhZ2UuY3JlYXRlUHJvcGVydHlXcmFwcGVyKFxuICAgICAgICAgICAgICAgICdEaXNjb3VudCBwZXJjZW50YWdlJyxcbiAgICAgICAgICAgICAgICBgJHt0aGlzLnByb2R1Y3RzUmVzcG9uc2UuZGlzY291bnRQZXJjZW50YWdlLnRvU3RyaW5nKDEwKX1gXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC8qIENhdGVnb3J5ICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1QYWdlLmNyZWF0ZVByb3BlcnR5V3JhcHBlcignQ2F0ZWdvcnknLCB0aGlzLnByb2R1Y3RzUmVzcG9uc2UuY2F0ZWdvcnkpKTtcbiAgICAgICAgLyogRGVzY3JpcHRpb24gKi9cbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoSXRlbVBhZ2UuY3JlYXRlUHJvcGVydHlXcmFwcGVyKCdEZXNjcmlwdGlvbicsIHRoaXMucHJvZHVjdHNSZXNwb25zZS5kZXNjcmlwdGlvbikpO1xuICAgICAgICAvKiBSYXRpbmcgKi9cbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBJdGVtUGFnZS5jcmVhdGVQcm9wZXJ0eVdyYXBwZXIoJ1JhdGluZycsIGAke3RoaXMucHJvZHVjdHNSZXNwb25zZS5yYXRpbmcudG9TdHJpbmcoMTApfWAsIHRydWUpXG4gICAgICAgICk7XG4gICAgICAgIC8qIFN0b2NrICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1QYWdlLmNyZWF0ZVByb3BlcnR5V3JhcHBlcignU3RvY2snLCBgJHt0aGlzLnByb2R1Y3RzUmVzcG9uc2Uuc3RvY2sudG9TdHJpbmcoMTApfWApKTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVByb3BlcnR5V3JhcHBlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGlzUmF0aW5nPzogYm9vbGVhbik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb3BlcnR5V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtcHJvcGVydHktd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb3BlcnR5TmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtcHJvcGVydHktbmFtZScpO1xuICAgICAgICBwcm9wZXJ0eU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgbGV0IHByb3BlcnR5VmFsdWU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoaXNSYXRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXJhdGluZycsIGAkeyhOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkgLyA1KSAqIDEwMH0lYCk7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3N0YXJzJyk7XG4gICAgICAgICAgICBjb25zdCByYXRpbmdUb29sdGlwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmF0aW5nVG9vbHRpcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmF0aW5nLXRvb2x0aXAtd3JhcHBlcicpO1xuICAgICAgICAgICAgY29uc3QgcmF0aW5nVG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHJhdGluZ1Rvb2x0aXAuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICByYXRpbmdUb29sdGlwLmNsYXNzTGlzdC5hZGQoJ3JhdGluZy10b29sdGlwJyk7XG4gICAgICAgICAgICByYXRpbmdUb29sdGlwV3JhcHBlci5hcHBlbmQocmF0aW5nVG9vbHRpcCk7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLmFwcGVuZChyYXRpbmdUb29sdGlwV3JhcHBlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnR5VmFsdWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLXByb3BlcnR5LXZhbHVlJyk7XG4gICAgICAgIHByb3BlcnR5V3JhcHBlci5hcHBlbmQocHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5V3JhcHBlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUJ1eU5vd1dpbmRvdygpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J1eS1ub3ctd2luZG93Jyk7XG4gICAgICAgIGNvbnN0IHBlcnNvbmFsSW5mb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHBlcnNvbmFsSW5mb0Zvcm0ubmFtZSA9ICdwZXJzb25hbC1pbmZvJztcbiAgICAgICAgY29uc3QgcGVyc29uYWxJbmZvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwZXJzb25hbEluZm9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3BlcnNvbmFsLWluZm8td3JhcHBlcicpO1xuICAgICAgICBwZXJzb25hbEluZm9XcmFwcGVyLmFwcGVuZChcbiAgICAgICAgICAgIEl0ZW1QYWdlLmNyZWF0ZUluZm9JbnB1dChcbiAgICAgICAgICAgICAgICAnRnVsbCBuYW1lJyxcbiAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKCcoXltBLVphLXrQkC3Rj9CwLdGPXXszLH0pKyg/OlxcXFxzW0EtWmEtetCQLdGP0LAt0Y9dezMsfSkrJCcpLFxuICAgICAgICAgICAgICAgICd0ZXh0J1xuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBwZXJzb25hbEluZm9XcmFwcGVyLmFwcGVuZChJdGVtUGFnZS5jcmVhdGVJbmZvSW5wdXQoJ1RlbGVwaG9uZSBudW1iZXInLCBuZXcgUmVnRXhwKCdeXFxcXCtbXFxcXGRdezksfSQnKSwgJ3RlbCcpKTtcbiAgICAgICAgcGVyc29uYWxJbmZvV3JhcHBlci5hcHBlbmQoXG4gICAgICAgICAgICBJdGVtUGFnZS5jcmVhdGVJbmZvSW5wdXQoJ0RlbGl2ZXJ5IGFkZHJlc3MnLCBuZXcgUmVnRXhwKCcoXi57NSx9KSsoPzpcXFxccy57NSx9KSsoPzpcXFxccy57NSx9KSskJyksICd0ZXh0JylcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc29uYWxJbmZvV3JhcHBlci5hcHBlbmQoXG4gICAgICAgICAgICBJdGVtUGFnZS5jcmVhdGVJbmZvSW5wdXQoJ0VtYWlsJywgbmV3IFJlZ0V4cCgvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLyksICdlbWFpbCcpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNhcmRJbmZvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkSW5mb1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgnY2FyZC1pbmZvLXdyYXBwZXInKTtcbiAgICAgICAgY2FyZEluZm9XcmFwcGVyLmFwcGVuZChJdGVtUGFnZS5jcmVhdGVJbmZvSW5wdXQoJ0NhcmQgbnVtYmVyJywgbmV3IFJlZ0V4cCgnXlxcXFxkezE2fSQnKSwgJ3RleHQnLCAxNiwgMTYpKTtcbiAgICAgICAgY2FyZEluZm9XcmFwcGVyLmFwcGVuZChcbiAgICAgICAgICAgIEl0ZW1QYWdlLmNyZWF0ZUluZm9JbnB1dChcbiAgICAgICAgICAgICAgICAnRXhwaXJhdGlvbiBkYXRlJyxcbiAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKCdeKDBbMS05XXwxWzAtMl0pXFxcXC8/KFtcXFxcZF17NH18W1xcXFxkXXsyfSkkJyksXG4gICAgICAgICAgICAgICAgJ3RleHQnLFxuICAgICAgICAgICAgICAgIDQsXG4gICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBjYXJkSW5mb1dyYXBwZXIuYXBwZW5kKEl0ZW1QYWdlLmNyZWF0ZUluZm9JbnB1dCgnQ1ZWJywgbmV3IFJlZ0V4cCgnXlxcXFxkezN9JCcpLCAndGV4dCcsIDMsIDMpKTtcbiAgICAgICAgcGVyc29uYWxJbmZvRm9ybS5hcHBlbmQocGVyc29uYWxJbmZvV3JhcHBlciwgY2FyZEluZm9XcmFwcGVyKTtcbiAgICAgICAgY29uc3Qgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0SW5wdXQudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRJbnB1dC52YWx1ZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRJbnB1dC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdElucHV0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdElucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVyc29uYWxJbmZvRm9ybS5yZXBvcnRWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JkZXJlZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgICAgICBvcmRlcmVkVGl0bGUudGV4dENvbnRlbnQgPSBgXFwnJHt0aGlzLnByb2R1Y3RzUmVzcG9uc2UudGl0bGV9XFwnIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBvcmRlcmVkIWA7XG4gICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKG9yZGVyZWRUaXRsZSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhZ2UoR2FsbGVyeUluc3RhbmNlLCB0cnVlLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlci5yb3V0ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDI1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQocGVyc29uYWxJbmZvRm9ybSwgc3VibWl0SW5wdXQpO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlSW5mb0lucHV0KFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHJlZ2V4UGF0dGVybjogUmVnRXhwLFxuICAgICAgICB0eXBlOiBzdHJpbmcsXG4gICAgICAgIG1heGxlbmd0aD86IG51bWJlcixcbiAgICAgICAgbWlubGVuZ3RoPzogbnVtYmVyXG4gICAgKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbC1pbmZvLWlucHV0LXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgaW5mb1R5cGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgICAgIGluZm9UeXBlVGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dEVsZW1lbnQubmFtZSA9IG5hbWU7XG4gICAgICAgIGlucHV0RWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgaW5wdXRFbGVtZW50LnBhdHRlcm4gPSByZWdleFBhdHRlcm4uc291cmNlO1xuICAgICAgICBpbnB1dEVsZW1lbnQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBpZiAobWF4bGVuZ3RoKSBpbnB1dEVsZW1lbnQubWF4TGVuZ3RoID0gbWF4bGVuZ3RoO1xuICAgICAgICBpZiAobWlubGVuZ3RoKSBpbnB1dEVsZW1lbnQubWluTGVuZ3RoID0gbWlubGVuZ3RoO1xuICAgICAgICBpbnB1dEVsZW1lbnQub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGlucHV0RWxlbWVudC5wYXR0ZXJuKS50ZXN0KGlucHV0RWxlbWVudC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChpbmZvVHlwZVRpdGxlLCBpbnB1dEVsZW1lbnQpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ0V4cGlyYXRpb24gZGF0ZScpIHtcbiAgICAgICAgICAgIGlucHV0RWxlbWVudC5zdHlsZS5sZXR0ZXJTcGFjaW5nID0gJzhweCc7XG4gICAgICAgICAgICBjb25zdCBkaXZpZGluZ1NsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZGl2aWRpbmdTbGFzaC5jbGFzc0xpc3QuYWRkKCdkaXZpZGluZy1zbGFzaCcpO1xuICAgICAgICAgICAgZGl2aWRpbmdTbGFzaC50ZXh0Q29udGVudCA9ICcvJztcbiAgICAgICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChkaXZpZGluZ1NsYXNoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSA9PT0gJ0NhcmQgbnVtYmVyJykge1xuICAgICAgICAgICAgY29uc3QgY2FyZFR5cGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBjYXJkVHlwZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXR5cGUnKTtcbiAgICAgICAgICAgIGNhcmRUeXBlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICBpbnB1dEVsZW1lbnQub25jaGFuZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZE51bWJlciA9IGlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKCdeNCcpO1xuICAgICAgICAgICAgICAgIGlmIChjYXJkTnVtYmVyLm1hdGNoKHJlZ2V4KSAhPSBudWxsKSBjYXJkVHlwZS50ZXh0Q29udGVudCA9ICdWaXNhJztcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWFzdGVyY2FyZFxuICAgICAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoJ141WzEtNV0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmROdW1iZXIubWF0Y2gocmVnZXgpICE9IG51bGwpIGNhcmRUeXBlLnRleHRDb250ZW50ID0gJ01hc3RlcmNhcmQnO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFNRVhcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXjNbNDddJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZE51bWJlci5tYXRjaChyZWdleCkgIT0gbnVsbCkgY2FyZFR5cGUudGV4dENvbnRlbnQgPSAnQU1FWCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNjb3ZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ14oNjAxMXw2MjIoMTJbNi05XXwxWzMtOV1bMC05XXxbMi04XVswLTldezJ9fDlbMC0xXVswLTldfDkyWzAtNV18NjRbNC05XSl8NjUpJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmROdW1iZXIubWF0Y2gocmVnZXgpICE9IG51bGwpIGNhcmRUeXBlLnRleHRDb250ZW50ID0gJ0Rpc2NvdmVyJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGluZXJzIC0gQ2FydGUgQmxhbmNoZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoJ14zMFswLTVdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkTnVtYmVyLm1hdGNoKHJlZ2V4KSAhPSBudWxsKSBjYXJkVHlwZS50ZXh0Q29udGVudCA9ICdEaW5lcnMgLSBDYXJ0ZSBCbGFuY2hlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEaW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXigzMFs2LTldfDM2fDM4KScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhcmROdW1iZXIubWF0Y2gocmVnZXgpICE9IG51bGwpIGNhcmRUeXBlLnRleHRDb250ZW50ID0gJ0RpbmVycyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBKQ0JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdleCA9IG5ldyBSZWdFeHAoJ14zNSgyWzg5XXxbMy04XVswLTldKScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkTnVtYmVyLm1hdGNoKHJlZ2V4KSAhPSBudWxsKSBjYXJkVHlwZS50ZXh0Q29udGVudCA9ICdKQ0InO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWaXNhIEVsZWN0cm9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnXig0MDI2fDQxNzUwMHw0NTA4fDQ4NDR8NDkxKDN8NykpJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkTnVtYmVyLm1hdGNoKHJlZ2V4KSAhPSBudWxsKSBjYXJkVHlwZS50ZXh0Q29udGVudCA9ICdWaXNhIEVsZWN0cm9uJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXJkVHlwZS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQoY2FyZFR5cGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkZXIge1xuICAgIHByaXZhdGUgc3RhdGljIGVycm9ySGFuZGxlcihyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxIHx8IHJlcy5zdGF0dXMgPT09IDQwNClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9IGVycm9yOiAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IocmVzLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgcHVibGljIGxvYWQoKSB7XG4gICAgICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9kdW1teWpzb24uY29tL3Byb2R1Y3RzP2xpbWl0PTEwMCcpXG4gICAgICAgICAgICAudGhlbihMb2FkZXIuZXJyb3JIYW5kbGVyKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQYWdlIGZyb20gJy4uLy4uL1BhZ2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RGb3VuZFBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgICBwcm90ZWN0ZWQgX2hhc2g6IHN0cmluZztcbiAgICBIdG1sRWxlbWVudEluc3RhbmNlOiBIVE1MRWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9oYXNoID0gYC80MDRgO1xuICAgICAgICB0aGlzLkh0bWxFbGVtZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUh0bWxFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZXJyb3JXcmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBlcnJvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgZXJyb3JUaXRsZS50ZXh0Q29udGVudCA9ICdQYWdlIG5vdCBmb3VuZCAoNDA0KSc7XG4gICAgICAgIGVycm9yV3JhcHBlckVsZW1lbnQuYXBwZW5kKGVycm9yVGl0bGUpO1xuICAgICAgICBlcnJvcldyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Vycm9yLXRpdGxlLXdyYXBwZXInKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKGVycm9yV3JhcHBlckVsZW1lbnQpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdub3QtZm91bmQtcGFnZScpO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSUZpbHRlcnNRdWVyeSwgSVByb2R1Y3RzUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgSXRlbVBhZ2UgZnJvbSAnLi9pdGVtUGFnZS9JdGVtUGFnZSc7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBHYWxsZXJ5SW5zdGFuY2UsIHJlc3BvbnNlLCByb3V0ZXIgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgTm90Rm91bmRQYWdlIGZyb20gJy4vbm90Rm91bmRQYWdlL05vdEZvdW5kUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG4gICAgZ2V0IHF1ZXJ5KCk6IElGaWx0ZXJzUXVlcnkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcXVlcnk7XG4gICAgfVxuICAgIHByaXZhdGUgX3F1ZXJ5OiBJRmlsdGVyc1F1ZXJ5O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IFJvdXRlci5wcm9jZXNzUXVlcnkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXJRdWVyeSgpOiBJUHJvZHVjdHNSZXNwb25zZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlUXVlcnkoe30pO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGZpbHRlckl0ZW1zQnlRdWVyeSh1cGRhdGVRdWVyeTogSUZpbHRlcnNRdWVyeSk6IElQcm9kdWN0c1Jlc3BvbnNlW10ge1xuICAgICAgICByb3V0ZXIuX3F1ZXJ5ID0gdXBkYXRlUXVlcnk7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5wcm9kdWN0cztcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihcbiAgICAgICAgICAgIChwcm9kdWN0c1Jlc3BvbnNlKSA9PlxuICAgICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KHVwZGF0ZVF1ZXJ5LmJyYW5kcykgfHxcbiAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeS5icmFuZHMuc29tZSgoYnJhbmQpID0+IHByb2R1Y3RzUmVzcG9uc2UuYnJhbmQgPT09IGJyYW5kKVxuICAgICAgICApO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2R1Y3RzUmVzcG9uc2UpID0+XG4gICAgICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkodXBkYXRlUXVlcnkuY2F0ZWdvcmllcykgfHxcbiAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeS5jYXRlZ29yaWVzLnNvbWUoKGNhdGVnb3J5KSA9PiBwcm9kdWN0c1Jlc3BvbnNlLmNhdGVnb3J5ID09PSBjYXRlZ29yeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihcbiAgICAgICAgICAgIChwcm9kdWN0c1Jlc3BvbnNlKSA9PlxuICAgICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KHVwZGF0ZVF1ZXJ5LnByaWNlKSB8fFxuICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5LnByaWNlLmxlbmd0aCAhPT0gMiB8fFxuICAgICAgICAgICAgICAgIChwcm9kdWN0c1Jlc3BvbnNlLnByaWNlID49IE51bWJlcih1cGRhdGVRdWVyeS5wcmljZVswXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHNSZXNwb25zZS5wcmljZSA8PSBOdW1iZXIodXBkYXRlUXVlcnkucHJpY2VbMV0pKVxuICAgICAgICApO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2R1Y3RzUmVzcG9uc2UpID0+XG4gICAgICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkodXBkYXRlUXVlcnkuc3RvY2spIHx8XG4gICAgICAgICAgICAgICAgdXBkYXRlUXVlcnkuc3RvY2subGVuZ3RoICE9PSAyIHx8XG4gICAgICAgICAgICAgICAgKHByb2R1Y3RzUmVzcG9uc2Uuc3RvY2sgPj0gTnVtYmVyKHVwZGF0ZVF1ZXJ5LnN0b2NrWzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLnN0b2NrIDw9IE51bWJlcih1cGRhdGVRdWVyeS5zdG9ja1sxXSkpXG4gICAgICAgICk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoXG4gICAgICAgICAgICAocHJvZHVjdHNSZXNwb25zZSkgPT5cbiAgICAgICAgICAgICAgICAhdXBkYXRlUXVlcnkuc2VhcmNoIHx8XG4gICAgICAgICAgICAgICAgcHJvZHVjdHNSZXNwb25zZS5kaXNjb3VudFBlcmNlbnRhZ2UudG9TdHJpbmcoMTApLmluY2x1ZGVzKHVwZGF0ZVF1ZXJ5LnNlYXJjaCkgfHxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLnByaWNlLnRvU3RyaW5nKDEwKS5pbmNsdWRlcyh1cGRhdGVRdWVyeS5zZWFyY2gpIHx8XG4gICAgICAgICAgICAgICAgcHJvZHVjdHNSZXNwb25zZS5yYXRpbmcudG9TdHJpbmcoMTApLmluY2x1ZGVzKHVwZGF0ZVF1ZXJ5LnNlYXJjaCkgfHxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLmJyYW5kLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModXBkYXRlUXVlcnkuc2VhcmNoKSB8fFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzUmVzcG9uc2UuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1cGRhdGVRdWVyeS5zZWFyY2gpIHx8XG4gICAgICAgICAgICAgICAgcHJvZHVjdHNSZXNwb25zZS5kZXNjcmlwdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHVwZGF0ZVF1ZXJ5LnNlYXJjaCkgfHxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModXBkYXRlUXVlcnkuc2VhcmNoKVxuICAgICAgICApO1xuICAgICAgICBpZiAodHlwZW9mIHVwZGF0ZVF1ZXJ5LnNvcnRpbmcgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHVwZGF0ZVF1ZXJ5LnNvcnRpbmcpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4gaXRlbTEucHJpY2UgLSBpdGVtMi5wcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4gaXRlbTIucHJpY2UgLSBpdGVtMS5wcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4gaXRlbTIucmF0aW5nIC0gaXRlbTEucmF0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMi5kaXNjb3VudFBlcmNlbnRhZ2UgLSBpdGVtMS5kaXNjb3VudFBlcmNlbnRhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSByZXN1bHQuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMS5wcmljZSAtIGl0ZW0yLnByaWNlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgcm91dGUoKTogdm9pZCB7XG4gICAgICAgIC8qIEhhc2ggcHJvY2Vzc2luZyAqL1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guc3RhcnRzV2l0aCgnIy9wcm9kdWN0LycpKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxMCk7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0UmVzcG9uc2U6IElQcm9kdWN0c1Jlc3BvbnNlIHwgbnVsbCA9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UucHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5pZC50b1N0cmluZygxMCkgPT09IGlkO1xuICAgICAgICAgICAgICAgIH0pID8/IG51bGw7XG4gICAgICAgICAgICBpZiAocHJvZHVjdFJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlUGFnZShuZXcgSXRlbVBhZ2UocHJvZHVjdFJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZVBhZ2UobmV3IE5vdEZvdW5kUGFnZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHdpbmRvdy5sb2NhdGlvbi5oYXNoKSB7XG4gICAgICAgICAgICBjYXNlICcjL2dhbGxlcnknOlxuICAgICAgICAgICAgY2FzZSAnJzoge1xuICAgICAgICAgICAgICAgIGNoYW5nZVBhZ2UoR2FsbGVyeUluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJyMvY2FydCc6IHtcbiAgICAgICAgICAgICAgICAvL1RPRE86IGNoYW5nZSBwYWdlIHRvIGNhcnQ7XG4gICAgICAgICAgICAgICAgY2hhbmdlUGFnZShHYWxsZXJ5SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgICAgICAgIGNoYW5nZVBhZ2UobmV3IE5vdEZvdW5kUGFnZSgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBRdWVyeSBwcm9jZXNzaW5nICovXG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gUm91dGVyLnByb2Nlc3NRdWVyeSgpO1xuICAgICAgICBHYWxsZXJ5SW5zdGFuY2Uuc2hvd0RhdGEoUm91dGVyLmZpbHRlckl0ZW1zQnlRdWVyeSh0aGlzLl9xdWVyeSkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHByb2Nlc3NRdWVyeSgpOiBJRmlsdGVyc1F1ZXJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBJRmlsdGVyc1F1ZXJ5ID0ge307XG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcbiAgICAgICAgY29uc3QgYnJhbmRzID0gdXJsUXVlcnkuZ2V0KCdicmFuZHMnKTtcbiAgICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IHVybFF1ZXJ5LmdldCgnY2F0ZWdvcmllcycpO1xuICAgICAgICBjb25zdCBwcmljZSA9IHVybFF1ZXJ5LmdldCgncHJpY2UnKTtcbiAgICAgICAgY29uc3Qgc3RvY2sgPSB1cmxRdWVyeS5nZXQoJ3N0b2NrJyk7XG4gICAgICAgIGNvbnN0IHNvcnRpbmcgPSB1cmxRdWVyeS5nZXQoJ3NvcnRpbmcnKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoID0gdXJsUXVlcnkuZ2V0KCdzZWFyY2gnKTtcbiAgICAgICAgY29uc3Qgc21hbGxNb2RlID0gdXJsUXVlcnkuZ2V0KCdzbWFsbE1vZGUnKTtcbiAgICAgICAgaWYgKGJyYW5kcykgcmVzdWx0LmJyYW5kcyA9IGJyYW5kcy5zcGxpdCgn4oaVJyk7XG4gICAgICAgIGlmIChjYXRlZ29yaWVzKSByZXN1bHQuY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuc3BsaXQoJ+KGlScpO1xuICAgICAgICBpZiAocHJpY2UpIHJlc3VsdC5wcmljZSA9IHByaWNlLnNwbGl0KCfihpUnKTtcbiAgICAgICAgaWYgKHN0b2NrKSByZXN1bHQuc3RvY2sgPSBzdG9jay5zcGxpdCgn4oaVJyk7XG4gICAgICAgIGlmIChzb3J0aW5nKSByZXN1bHQuc29ydGluZyA9IE51bWJlcihzb3J0aW5nKTtcbiAgICAgICAgaWYgKHNlYXJjaCkgcmVzdWx0LnNlYXJjaCA9IHNlYXJjaDtcbiAgICAgICAgaWYgKHNtYWxsTW9kZSkgcmVzdWx0LnNtYWxsTW9kZSA9IEJvb2xlYW4oc21hbGxNb2RlKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlUXVlcnkodXBkYXRlUXVlcnk6IElGaWx0ZXJzUXVlcnkpOiBJUHJvZHVjdHNSZXNwb25zZVtdIHtcbiAgICAgICAgdGhpcy5fcXVlcnkgPSB1cGRhdGVRdWVyeTtcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5LmNhdGVnb3JpZXM/Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIHRoaXMuX3F1ZXJ5LmNhdGVnb3JpZXM7XG4gICAgICAgIGlmICh0aGlzLl9xdWVyeS5icmFuZHM/Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIHRoaXMuX3F1ZXJ5LmJyYW5kcztcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5LnNlYXJjaD8ubGVuZ3RoID09PSAwKSBkZWxldGUgdGhpcy5fcXVlcnkuc2VhcmNoO1xuICAgICAgICBjb25zdCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX3F1ZXJ5KSkge1xuICAgICAgICAgICAgbGV0IHBhcmFtOiBzdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSBwYXJhbSA9IHZhbHVlLmpvaW4oJ+KGlScpO1xuICAgICAgICAgICAgdXJsU2VhcmNoUGFyYW1zLmFwcGVuZChrZXksIHBhcmFtKTtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sICcnLCBSb3V0ZXIuZ2V0TG9jYXRpb24odXJsU2VhcmNoUGFyYW1zLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgcmV0dXJuIFJvdXRlci5maWx0ZXJJdGVtc0J5UXVlcnkodXBkYXRlUXVlcnkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TG9jYXRpb24oc2VhcmNoPzogc3RyaW5nLCBoYXNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCArXG4gICAgICAgICAgICAnLy8nICtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0ICtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArXG4gICAgICAgICAgICAodHlwZW9mIHNlYXJjaCA9PT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cubG9jYXRpb24uc2VhcmNoIDogc2VhcmNoLmxlbmd0aCA9PT0gMCA/IHNlYXJjaCA6IGA/JHtzZWFyY2h9YCkgK1xuICAgICAgICAgICAgKHR5cGVvZiBoYXNoID09PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5oYXNoIDogYCMke2hhc2h9YClcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vZ2xvYmFsLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL3Jzc2Nob29sLWxvZ28uc3ZnJztcbmltcG9ydCAnLi9hc3NldHMvZ2l0aHViLWxvZ28uc3ZnJztcbmltcG9ydCAnLi9hc3NldHMvbG91cGUuc3ZnJztcbmltcG9ydCAnLi9hc3NldHMvdGlsZXMuc3ZnJztcbmltcG9ydCB7IElSZXNwb25zZSB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlcic7XG5pbXBvcnQgUm91dGVyIGZyb20gJy4vY29tcG9uZW50cy9yb3V0ZXInO1xuaW1wb3J0IEdhbGxlcnlQYWdlIGZyb20gJy4vY29tcG9uZW50cy9nYWxsZXJ5UGFnZS9HYWxsZXJ5UGFnZSc7XG5pbXBvcnQgUGFnZSBmcm9tICcuL1BhZ2UnO1xuXG5jb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKCk7XG5leHBvcnQgbGV0IHJlc3BvbnNlOiBJUmVzcG9uc2UgPSB7IGxpbWl0OiAwLCBwcm9kdWN0czogW10sIHRvdGFsOiAwLCBza2lwOiAwIH07XG5leHBvcnQgY29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuZXhwb3J0IGxldCBHYWxsZXJ5SW5zdGFuY2U6IEdhbGxlcnlQYWdlID0gbmV3IEdhbGxlcnlQYWdlKCk7XG5jb25zdCBuYW1lRWxlbWVudDogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLW5hbWUnKSA/PyBuZXcgSFRNTEVsZW1lbnQoKTtcbm5hbWVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJvdXRlci5jbGVhclF1ZXJ5KCk7XG4gICAgR2FsbGVyeUluc3RhbmNlID0gbmV3IEdhbGxlcnlQYWdlKCk7XG4gICAgY2hhbmdlUGFnZShHYWxsZXJ5SW5zdGFuY2UsIHRydWUsICcnKTtcbn0pO1xuZXhwb3J0IGNvbnN0IG1haW5FbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWlubicpID8/IG5ldyBIVE1MRWxlbWVudCgpO1xubG9hZGVyLmxvYWQoKS50aGVuKChyZXNwb25kZWQpID0+IHtcbiAgICByZXNwb25zZSA9IHJlc3BvbmRlZDtcbiAgICByZXNwb25zZSA9IHtcbiAgICAgICAgbGltaXQ6IHJlc3BvbnNlLmxpbWl0LFxuICAgICAgICBwcm9kdWN0czogcmVzcG9uc2UucHJvZHVjdHMuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMS5wcmljZSAtIGl0ZW0yLnByaWNlKSxcbiAgICAgICAgc2tpcDogcmVzcG9uc2Uuc2tpcCxcbiAgICAgICAgdG90YWw6IHJlc3BvbnNlLnRvdGFsLFxuICAgIH07XG4gICAgcm91dGVyLnJvdXRlKCk7XG59KTtcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VQYWdlKHBhZ2U6IFBhZ2UsIHB1c2hIaXN0b3J5PzogYm9vbGVhbiwgc2VhcmNoPzogc3RyaW5nKSB7XG4gICAgbWFpbkVsZW1lbnQucmVwbGFjZUNoaWxkcmVuKHBhZ2UuSHRtbEVsZW1lbnRJbnN0YW5jZSk7XG4gICAgaWYgKHB1c2hIaXN0b3J5KSBoaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIFJvdXRlci5nZXRMb2NhdGlvbihzZWFyY2gsIHBhZ2UuaGFzaCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzQ3VzdG9tRXZlbnQoZXZlbnQ6IEV2ZW50KTogZXZlbnQgaXMgQ3VzdG9tRXZlbnQge1xuICAgIHJldHVybiAnZGV0YWlsJyBpbiBldmVudDtcbn1cblxud2luZG93Lm9ubG9hZCA9IHJvdXRlci5yb3V0ZTtcbndpbmRvdy5vbnBvcHN0YXRlID0gcm91dGVyLnJvdXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9