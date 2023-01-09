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
___CSS_LOADER_EXPORT___.push([module.id, "::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    border: 1px solid white;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f0f0f0;\r\n}\r\n\r\nbody {\r\n    background: #FFF;\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n#header-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.items-wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));\r\n    grid-auto-rows: 1fr;\r\n    justify-content: end;\r\n    perspective: 5000px;\r\n    box-shadow: inset 0 0 10px 0 #000;\r\n}\r\n\r\n.items-wrapper > h2 {\r\n    margin: 100% 0.5rem;\r\n}\r\n\r\n.items-wrapper.small {\r\n    grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));\r\n    transition: 0.2s;\r\n}\r\n\r\n.gallery {\r\n    display: grid;\r\n    grid-template-columns: max-content auto;\r\n}\r\n\r\n@media (max-width: 680px) {\r\n    .gallery {\r\n        grid-template-columns: auto;\r\n    }\r\n}\r\n\r\n.sorting-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton.style-changer-button {\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 0 8px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.style-changer-button:last-child {\r\n    margin: 0;\r\n}\r\n\r\nbutton.style-changer-button.big {\r\n    background-size: 26px;\r\n}\r\n\r\nbutton.style-changer-button.activated {\r\n    border-color: greenyellow;\r\n}\r\n\r\n.sorting-items {\r\n    cursor: pointer;\r\n}\r\n\r\n.sorting-items > option::before {\r\n    content: 'Sort by: ';\r\n}\r\n\r\n.gallery-item {\r\n    cursor: pointer;\r\n    padding: 1px;\r\n    border: 2px solid;\r\n    margin: 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: fit-content;\r\n    background: white;\r\n    opacity: 0;\r\n    transform: rotate3d(1, -0.1, -0.1, 100deg);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated:hover {\r\n    border: 2px solid #111;\r\n    animation: .7s cubic-bezier(0.06, 0.81, 0.52, 0.89) 0s infinite alternate bg-spin;\r\n}\r\n\r\n@keyframes bg-spin {\r\n    to {\r\n        border: 2px solid #eee;\r\n    }\r\n}\r\n\r\n.gallery-item.animated.small {\r\n    height: 250px;\r\n    font-size: .8rem;\r\n}\r\n\r\n.gallery-item img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100%;\r\n    height: 200px;\r\n    padding: 2px;\r\n}\r\n\r\n.filters-buttons-wrapper {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.filters-button {\r\n    background: wheat;\r\n    transition: all 0.4s;\r\n    font-size: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    width: 100%;\r\n    margin: 0 2px;\r\n    padding: 0;\r\n    border-color: chocolate;\r\n}\r\n\r\n.filters-button.activated {\r\n    background: lightgreen;\r\n    transition: 0.2s;\r\n}\r\n\r\n.filters-search-wrapper > input[type=\"text\"] {\r\n    background-position: 0;\r\n    background-size: 20px 20px;\r\n    background-repeat: no-repeat;\r\n    width: 80%;\r\n    font-size: 1.3rem;\r\n    padding: 0 0 0 24px;\r\n    display: block;\r\n    margin: 12px auto;\r\n    border-radius: 0.3rem;\r\n    box-shadow: 0 0 8px #bbb;\r\n}\r\n\r\n.filters-checkbox-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filters-checkbox-wrapper {\r\n    border: 2px solid;\r\n    border-radius: 1rem;\r\n    margin: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul {\r\n    height: 300px;\r\n    padding: 0;\r\n    overflow-y: scroll;\r\n    box-shadow: inset 0 0 3px 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li {\r\n    cursor: pointer;\r\n    margin: .2rem 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::marker {\r\n    content: none;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::before {\r\n    content: ' ';\r\n    display: inline-block;\r\n    border: 1px solid;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin: 0 2px;\r\n    position: relative;\r\n    top: .1rem;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter {\r\n    padding: 3px 0 0 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter::before {\r\n    content: 'X';\r\n    text-align: center;\r\n    top: 0;\r\n    transition: 0.1s;\r\n}\r\n\r\n.filter-deactivated {\r\n    color: gainsboro;\r\n}\r\n\r\n.filter-slider-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 85%;\r\n    margin: 50px auto;\r\n    border: 2px solid;\r\n    padding: 10px 13px 10px 10px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filter-slider-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filter-slider-range-wrapper {\r\n    position: relative;\r\n    min-height: 50px;\r\n}\r\n\r\n.filter-slider-form-wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 24px;\r\n    color: #635a5a;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-moz-range-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:hover {\r\n    background: #f7f7f7;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:active {\r\n    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=\"range\"] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    height: 2px;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #C6C6C6;\r\n    pointer-events: none;\r\n}\r\n\r\n.item-page-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.item-page-main-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-main-wrapper {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n.item-page-image-wrapper {\r\n    display: flex;\r\n    float: left;\r\n    object-fit: scale-down;\r\n    height: 600px;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.item-page-side-images-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    border: 2px solid slategrey;\r\n    padding: 1px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.item-page-side-images-wrapper > img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 2px;\r\n    border: 1px solid;\r\n    margin: 1px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-side-images-wrapper > img.activated {\r\n    border: 4px solid greenyellow;\r\n    border-radius: 5px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-image-block-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.item-page-image-wrapper img {\r\n    object-fit: scale-down;\r\n}\r\n\r\n.item-page-image-wrapper button {\r\n    cursor: pointer;\r\n    background: ghostwhite;\r\n    padding: 20px 25px;\r\n    border-radius: 50%;\r\n    border-width: 0;\r\n    margin: 0 5px;\r\n}\r\n\r\ninput[type=\"text\"]:invalid {\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n\r\n.buy-now-window {\r\n    position: absolute;\r\n    background: white;\r\n    padding: 30px;\r\n    border: 3px solid;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.personal-info-input-wrapper {\r\n    padding: 1rem;\r\n}\r\n\r\n.item-page-property-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n    width: 100%;\r\n    max-width: 25vw;\r\n    background: bisque;\r\n    border: 1px solid;\r\n    border-radius: 3px;\r\n    word-break: break-all;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-property-wrapper {\r\n        width: 90vw;\r\n        max-width: 100vw;\r\n    }\r\n}\r\n\r\n.item-page-property-name {\r\n    text-align: center;\r\n}\r\n\r\n.item-page-property-value {\r\n    background: #ebebeb;\r\n    padding: 8px;\r\n    border-top: 1px solid;\r\n    border-radius: 2px;\r\n}\r\n\r\n.item-page-property-value.stars{\r\n    display: inline-block;\r\n    font-size: 60px;\r\n    font-family: Times;\r\n    line-height: 1;\r\n    word-break: keep-all;\r\n}\r\n\r\n.item-page-property-value.stars::before{\r\n    content: '★★★★★';\r\n    letter-spacing: 3px;\r\n    background: linear-gradient(90deg, #fc0 var(--rating), #fff var(--rating));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.rating-tooltip-wrapper {\r\n    transform: translate(180%, -80%);\r\n    transition: 200ms;\r\n    padding: 20px;\r\n    color: #666666;\r\n    background-color: #EEEEEE;\r\n    font-weight: normal;\r\n    border-radius: 8px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    box-sizing: border-box;\r\n    font-family: fantasy;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.item-page-property-value:hover .rating-tooltip-wrapper {\r\n    transform: translate(210%, -80%);\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: 200ms;\r\n}\r\n\r\np.rating-tooltip {\r\n    margin: 0;\r\n}\r\n\r\n.item-page-properties-wrapper {\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: flex-start;\r\n}\r\n\r\n.item-page-button {\r\n    font-size: 1.2rem;\r\n    display: block;\r\n    padding: 7%;\r\n    background: wheat;\r\n    border: 2px solid;\r\n    border-radius: 0.3rem;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.not-found-page {\r\n    text-align: center;\r\n}\r\n\r\n.error-title-wrapper > h2 {\r\n    font-size: 3rem;\r\n}\r\n\r\nheader {\r\npadding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\nfont-size: 40px;\r\nfont-weight: 800;\r\n}\r\n\r\nmain {\r\nflex: 1 0 auto;\r\n}\r\n\r\nfooter {\r\nheight: 100px;\r\ndisplay: flex;\r\nalign-items: center;\r\njustify-content: space-around;\r\n}\r\n\r\nfooter .copyright {\r\nfont-size: 14px;\r\ncolor: #333;\r\ntext-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\ncolor: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\ncolor: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\ncontent: '©';\r\n}\r\n\r\nfooter .rsschool img {\r\nmax-width: 100%;\r\nheight: 2rem;\r\n}\r\n\r\nfooter .github a img {\r\nheight: 2.5rem;\r\nmax-width: 100%;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"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","sourcesContent":["::-webkit-scrollbar {\r\n    width: 6px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: black;\r\n    border-radius: 10px;\r\n    border: 1px solid white;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f0f0f0;\r\n}\r\n\r\nbody {\r\n    background: #FFF;\r\n    font-family: sans-serif;\r\n    margin: 0;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n#header-name {\r\n    cursor: pointer;\r\n}\r\n\r\n.items-wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));\r\n    grid-auto-rows: 1fr;\r\n    justify-content: end;\r\n    perspective: 5000px;\r\n    box-shadow: inset 0 0 10px 0 #000;\r\n}\r\n\r\n.items-wrapper > h2 {\r\n    margin: 100% 0.5rem;\r\n}\r\n\r\n.items-wrapper.small {\r\n    grid-template-columns: repeat(auto-fill, minmax(184px, 1fr));\r\n    transition: 0.2s;\r\n}\r\n\r\n.gallery {\r\n    display: grid;\r\n    grid-template-columns: max-content auto;\r\n}\r\n\r\n@media (max-width: 680px) {\r\n    .gallery {\r\n        grid-template-columns: auto;\r\n    }\r\n}\r\n\r\n.sorting-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\nbutton.style-changer-button {\r\n    width: 24px;\r\n    height: 24px;\r\n    margin: 0 8px;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton.style-changer-button:last-child {\r\n    margin: 0;\r\n}\r\n\r\nbutton.style-changer-button.big {\r\n    background-size: 26px;\r\n}\r\n\r\nbutton.style-changer-button.activated {\r\n    border-color: greenyellow;\r\n}\r\n\r\n.sorting-items {\r\n    cursor: pointer;\r\n}\r\n\r\n.sorting-items > option::before {\r\n    content: 'Sort by: ';\r\n}\r\n\r\n.gallery-item {\r\n    cursor: pointer;\r\n    padding: 1px;\r\n    border: 2px solid;\r\n    margin: 1px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    height: fit-content;\r\n    background: white;\r\n    opacity: 0;\r\n    transform: rotate3d(1, -0.1, -0.1, 100deg);\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated {\r\n    opacity: 1;\r\n    transform: none;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.gallery-item.animated:hover {\r\n    border: 2px solid #111;\r\n    animation: .7s cubic-bezier(0.06, 0.81, 0.52, 0.89) 0s infinite alternate bg-spin;\r\n}\r\n\r\n@keyframes bg-spin {\r\n    to {\r\n        border: 2px solid #eee;\r\n    }\r\n}\r\n\r\n.gallery-item.animated.small {\r\n    height: 250px;\r\n    font-size: .8rem;\r\n}\r\n\r\n.gallery-item img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100%;\r\n    height: 200px;\r\n    padding: 2px;\r\n}\r\n\r\n.filters-buttons-wrapper {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.filters-button {\r\n    background: wheat;\r\n    transition: all 0.4s;\r\n    font-size: 1.5rem;\r\n    border-radius: 0.5rem;\r\n    width: 100%;\r\n    margin: 0 2px;\r\n    padding: 0;\r\n    border-color: chocolate;\r\n}\r\n\r\n.filters-button.activated {\r\n    background: lightgreen;\r\n    transition: 0.2s;\r\n}\r\n\r\n.filters-search-wrapper > input[type=\"text\"] {\r\n    background-position: 0;\r\n    background-size: 20px 20px;\r\n    background-repeat: no-repeat;\r\n    width: 80%;\r\n    font-size: 1.3rem;\r\n    padding: 0 0 0 24px;\r\n    display: block;\r\n    margin: 12px auto;\r\n    border-radius: 0.3rem;\r\n    box-shadow: 0 0 8px #bbb;\r\n}\r\n\r\n.filters-checkbox-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filters-checkbox-wrapper {\r\n    border: 2px solid;\r\n    border-radius: 1rem;\r\n    margin: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul {\r\n    height: 300px;\r\n    padding: 0;\r\n    overflow-y: scroll;\r\n    box-shadow: inset 0 0 3px 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li {\r\n    cursor: pointer;\r\n    margin: .2rem 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::marker {\r\n    content: none;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li::before {\r\n    content: ' ';\r\n    display: inline-block;\r\n    border: 1px solid;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin: 0 2px;\r\n    position: relative;\r\n    top: .1rem;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter {\r\n    padding: 3px 0 0 0;\r\n}\r\n\r\n.filters-checkbox-wrapper > ul > li.checked-filter::before {\r\n    content: 'X';\r\n    text-align: center;\r\n    top: 0;\r\n    transition: 0.1s;\r\n}\r\n\r\n.filter-deactivated {\r\n    color: gainsboro;\r\n}\r\n\r\n.filter-slider-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 85%;\r\n    margin: 50px auto;\r\n    border: 2px solid;\r\n    padding: 10px 13px 10px 10px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 1px 0 #000;\r\n}\r\n\r\n.filter-slider-wrapper > h3 {\r\n    text-align: center;\r\n}\r\n\r\n.filter-slider-range-wrapper {\r\n    position: relative;\r\n    min-height: 50px;\r\n}\r\n\r\n.filter-slider-form-wrapper {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    font-size: 24px;\r\n    color: #635a5a;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-moz-range-thumb {\r\n    -webkit-appearance: none;\r\n    pointer-events: all;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-color: #fff;\r\n    border-radius: 50%;\r\n    box-shadow: 0 0 0 1px #C6C6C6;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:hover {\r\n    background: #f7f7f7;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=range]::-webkit-slider-thumb:active {\r\n    box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n    -webkit-box-shadow: inset 0 0 3px #387bbe, 0 0 9px #387bbe;\r\n}\r\n\r\n.filter-slider-range-wrapper input[type=\"range\"] {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    height: 2px;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #C6C6C6;\r\n    pointer-events: none;\r\n}\r\n\r\n.item-page-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.item-page-main-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-main-wrapper {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n.item-page-image-wrapper {\r\n    display: flex;\r\n    float: left;\r\n    object-fit: scale-down;\r\n    height: 600px;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n}\r\n\r\n.item-page-side-images-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    align-items: center;\r\n    border: 2px solid slategrey;\r\n    padding: 1px 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.item-page-side-images-wrapper > img {\r\n    float: left;\r\n    object-fit: scale-down;\r\n    width: 100px;\r\n    height: 100px;\r\n    padding: 2px;\r\n    border: 1px solid;\r\n    margin: 1px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-side-images-wrapper > img.activated {\r\n    border: 4px solid greenyellow;\r\n    border-radius: 5px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.item-page-image-block-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.item-page-image-wrapper img {\r\n    object-fit: scale-down;\r\n}\r\n\r\n.item-page-image-wrapper button {\r\n    cursor: pointer;\r\n    background: ghostwhite;\r\n    padding: 20px 25px;\r\n    border-radius: 50%;\r\n    border-width: 0;\r\n    margin: 0 5px;\r\n}\r\n\r\ninput[type=\"text\"]:invalid {\r\n    border: 1px solid red;\r\n}\r\n\r\n\r\n\r\n.buy-now-window {\r\n    position: absolute;\r\n    background: white;\r\n    padding: 30px;\r\n    border: 3px solid;\r\n    border-radius: 2rem;\r\n}\r\n\r\n.personal-info-input-wrapper {\r\n    padding: 1rem;\r\n}\r\n\r\n.item-page-property-wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 10px;\r\n    width: 100%;\r\n    max-width: 25vw;\r\n    background: bisque;\r\n    border: 1px solid;\r\n    border-radius: 3px;\r\n    word-break: break-all;\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n    .item-page-property-wrapper {\r\n        width: 90vw;\r\n        max-width: 100vw;\r\n    }\r\n}\r\n\r\n.item-page-property-name {\r\n    text-align: center;\r\n}\r\n\r\n.item-page-property-value {\r\n    background: #ebebeb;\r\n    padding: 8px;\r\n    border-top: 1px solid;\r\n    border-radius: 2px;\r\n}\r\n\r\n.item-page-property-value.stars{\r\n    display: inline-block;\r\n    font-size: 60px;\r\n    font-family: Times;\r\n    line-height: 1;\r\n    word-break: keep-all;\r\n}\r\n\r\n.item-page-property-value.stars::before{\r\n    content: '★★★★★';\r\n    letter-spacing: 3px;\r\n    background: linear-gradient(90deg, #fc0 var(--rating), #fff var(--rating));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n.rating-tooltip-wrapper {\r\n    transform: translate(180%, -80%);\r\n    transition: 200ms;\r\n    padding: 20px;\r\n    color: #666666;\r\n    background-color: #EEEEEE;\r\n    font-weight: normal;\r\n    border-radius: 8px;\r\n    position: absolute;\r\n    z-index: 1;\r\n    box-sizing: border-box;\r\n    font-family: fantasy;\r\n    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n\r\n.item-page-property-value:hover .rating-tooltip-wrapper {\r\n    transform: translate(210%, -80%);\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transition: 200ms;\r\n}\r\n\r\np.rating-tooltip {\r\n    margin: 0;\r\n}\r\n\r\n.item-page-properties-wrapper {\r\ndisplay: flex;\r\nflex-direction: column;\r\nalign-items: flex-start;\r\n}\r\n\r\n.item-page-button {\r\n    font-size: 1.2rem;\r\n    display: block;\r\n    padding: 7%;\r\n    background: wheat;\r\n    border: 2px solid;\r\n    border-radius: 0.3rem;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.not-found-page {\r\n    text-align: center;\r\n}\r\n\r\n.error-title-wrapper > h2 {\r\n    font-size: 3rem;\r\n}\r\n\r\nheader {\r\npadding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\nfont-size: 40px;\r\nfont-weight: 800;\r\n}\r\n\r\nmain {\r\nflex: 1 0 auto;\r\n}\r\n\r\nfooter {\r\nheight: 100px;\r\ndisplay: flex;\r\nalign-items: center;\r\njustify-content: space-around;\r\n}\r\n\r\nfooter .copyright {\r\nfont-size: 14px;\r\ncolor: #333;\r\ntext-align: center;\r\n}\r\n\r\nfooter .copyright a {\r\ncolor: #444;\r\n}\r\n\r\nfooter .copyright a:hover {\r\ncolor: #555;\r\n}\r\n\r\nfooter .copyright:before {\r\ncontent: '©';\r\n}\r\n\r\nfooter .rsschool img {\r\nmax-width: 100%;\r\nheight: 2rem;\r\n}\r\n\r\nfooter .github a img {\r\nheight: 2.5rem;\r\nmax-width: 100%;\r\n}\r\n"],"sourceRoot":""}]);
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
        const personalInfoWrapper = document.createElement('div');
        personalInfoWrapper.classList.add('personal-info-wrapper');
        const personalInfoForm = document.createElement('form');
        personalInfoForm.name = 'personal-info';
        personalInfoForm.append(ItemPage.createInfoInput('Full name', new RegExp('(^[A-Za-zА-яа-я]{3,})+(?:\\s[A-Za-zА-яа-я]{3,})+$')));
        personalInfoForm.append(ItemPage.createInfoInput('Telephone number', new RegExp('^\\+[\\d]{9,}$')));
        personalInfoForm.append(ItemPage.createInfoInput('Delivery address', new RegExp('(^.{5,})+(?:\\s.{5,})+(?:\\s.{5,})+$')));
        personalInfoForm.append(ItemPage.createInfoInput('Email', new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)));
        personalInfoWrapper.append(personalInfoForm);
        const submitInput = document.createElement('button');
        submitInput.type = 'submit';
        submitInput.value = 'submit';
        submitInput.name = 'submit';
        submitInput.textContent = 'Submit';
        submitInput.onclick = () => {
            if (personalInfoForm.reportValidity()) {
                HtmlElement.remove();
            }
        };
        HtmlElement.append(personalInfoWrapper, submitInput);
        return HtmlElement;
    }
    static createInfoInput(infoType, regexPattern) {
        const HtmlElement = document.createElement('div');
        HtmlElement.classList.add('personal-info-input-wrapper');
        const infoTypeTitle = document.createElement('h4');
        infoTypeTitle.textContent = infoType;
        const inputElement = document.createElement('input');
        inputElement.name = infoType;
        inputElement.type = 'text';
        inputElement.pattern = regexPattern.source;
        inputElement.addEventListener('input', () => {
            if (inputElement.validity.typeMismatch) {
                inputElement.setCustomValidity(`${infoType} is incorrect`);
            }
            else {
                inputElement.setCustomValidity(``);
            }
        });
        inputElement.required = true;
        HtmlElement.append(infoTypeTitle, inputElement);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSw4Q0FBOEMsbUJBQW1CLEtBQUssbUNBQW1DLGdDQUFnQyw0QkFBNEIsZ0NB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QixNQUFNLENBQUMsVUFBVSxHQUFHLGNBQU0sQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNqQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9nbG9iYWwuY3NzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2dsb2JhbC5jc3M/ZDNiYyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL1BhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeVBhZ2UvR2FsbGVyeUZpbHRlcnMudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvZ2FsbGVyeVBhZ2UvR2FsbGVyeUl0ZW1zLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL0dhbGxlcnlQYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL2dhbGxlcnlQYWdlL3NsaWRlclZpZXcudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvaXRlbVBhZ2UvSXRlbVBhZ2UudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlLy4vc3JjL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvY29tcG9uZW50cy9ub3RGb3VuZFBhZ2UvTm90Rm91bmRQYWdlLnRzIiwid2VicGFjazovL29ubGluZS1zdG9yZS8uL3NyYy9jb21wb25lbnRzL3JvdXRlci50cyIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vb25saW5lLXN0b3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vbmxpbmUtc3RvcmUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29ubGluZS1zdG9yZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbiNoZWFkZXItbmFtZSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzNjhweCwgMWZyKSk7XFxyXFxuICAgIGdyaWQtYXV0by1yb3dzOiAxZnI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBwZXJzcGVjdGl2ZTogNTAwMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTBweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy13cmFwcGVyID4gaDIge1xcclxcbiAgICBtYXJnaW46IDEwMCUgMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtd3JhcHBlci5zbWFsbCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE4NHB4LCAxZnIpKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IGF1dG87XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xcclxcbiAgICAuZ2FsbGVyeSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNvcnRpbmctd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnN0eWxlLWNoYW5nZXItYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgbWFyZ2luOiAwIDhweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b24uc3R5bGUtY2hhbmdlci1idXR0b246bGFzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnN0eWxlLWNoYW5nZXItYnV0dG9uLmJpZyB7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnN0eWxlLWNoYW5nZXItYnV0dG9uLmFjdGl2YXRlZCB7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW55ZWxsb3c7XFxyXFxufVxcclxcblxcclxcbi5zb3J0aW5nLWl0ZW1zIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydGluZy1pdGVtcyA+IG9wdGlvbjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJ1NvcnQgYnk6ICc7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIG1hcmdpbjogMXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgxLCAtMC4xLCAtMC4xLCAxMDBkZWcpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnktaXRlbS5hbmltYXRlZCB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0uYW5pbWF0ZWQ6aG92ZXIge1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMTExO1xcclxcbiAgICBhbmltYXRpb246IC43cyBjdWJpYy1iZXppZXIoMC4wNiwgMC44MSwgMC41MiwgMC44OSkgMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGJnLXNwaW47XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgYmctc3BpbiB7XFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLmdhbGxlcnktaXRlbS5hbmltYXRlZC5zbWFsbCB7XFxyXFxuICAgIGhlaWdodDogMjUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogLjhyZW07XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0gaW1nIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAycHg7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWJ1dHRvbnMtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hlYXQ7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiBjaG9jb2xhdGU7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWJ1dHRvbi5hY3RpdmF0ZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZWVuO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1zZWFyY2gtd3JhcHBlciA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDA7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMCAwIDAgMjRweDtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1hcmdpbjogMTJweCBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggI2JiYjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsIHtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgM3B4IDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCA+IGxpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBtYXJnaW46IC4ycmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCA+IGxpOjptYXJrZXIge1xcclxcbiAgICBjb250ZW50OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaTo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogJyAnO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcclxcbiAgICB3aWR0aDogMWVtO1xcclxcbiAgICBoZWlnaHQ6IDFlbTtcXHJcXG4gICAgbWFyZ2luOiAwIDJweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaS5jaGVja2VkLWZpbHRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDNweCAwIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsID4gbGkuY2hlY2tlZC1maWx0ZXI6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICdYJztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMXM7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItZGVhY3RpdmF0ZWQge1xcclxcbiAgICBjb2xvcjogZ2FpbnNib3JvO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDEzcHggMTBweCAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci13cmFwcGVyID4gaDMge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc2xpZGVyLXJhbmdlLXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc2xpZGVyLWZvcm0td3JhcHBlciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiAjNjM1YTVhO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcXHJcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjQzZDNkM2O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc2xpZGVyLXJhbmdlLXdyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWI6YWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMzg3YmJlLCAwIDAgOXB4ICMzODdiYmU7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAjMzg3YmJlLCAwIDAgOXB4ICMzODdiYmU7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc2xpZGVyLXJhbmdlLXdyYXBwZXIgaW5wdXRbdHlwZT1cXFwicmFuZ2VcXFwiXSB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNkM2QzY7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1tYWluLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgICAuaXRlbS1wYWdlLW1haW4td3JhcHBlciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtaW1hZ2Utd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2Utc2lkZS1pbWFnZXMtd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBzbGF0ZWdyZXk7XFxyXFxuICAgIHBhZGRpbmc6IDFweCA1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1zaWRlLWltYWdlcy13cmFwcGVyID4gaW1nIHtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgbWFyZ2luOiAxcHg7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2Utc2lkZS1pbWFnZXMtd3JhcHBlciA+IGltZy5hY3RpdmF0ZWQge1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCBncmVlbnllbGxvdztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWltYWdlLWJsb2NrLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1pbWFnZS13cmFwcGVyIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtaW1hZ2Utd3JhcHBlciBidXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQ6IGdob3N0d2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICAgIG1hcmdpbjogMCA1cHg7XFxyXFxufVxcclxcblxcclxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTppbnZhbGlkIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uYnV5LW5vdy13aW5kb3cge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnBlcnNvbmFsLWluZm8taW5wdXQtd3JhcHBlciB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMjV2dztcXHJcXG4gICAgYmFja2dyb3VuZDogYmlzcXVlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLml0ZW0tcGFnZS1wcm9wZXJ0eS13cmFwcGVyIHtcXHJcXG4gICAgICAgIHdpZHRoOiA5MHZ3O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXByb3BlcnR5LW5hbWUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktdmFsdWUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xcclxcbiAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXByb3BlcnR5LXZhbHVlLnN0YXJze1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFRpbWVzO1xcclxcbiAgICBsaW5lLWhlaWdodDogMTtcXHJcXG4gICAgd29yZC1icmVhazoga2VlcC1hbGw7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtcHJvcGVydHktdmFsdWUuc3RhcnM6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJ+KYheKYheKYheKYheKYhSc7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZjMCB2YXIoLS1yYXRpbmcpLCAjZmZmIHZhcigtLXJhdGluZykpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ucmF0aW5nLXRvb2x0aXAtd3JhcHBlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDE4MCUsIC04MCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgY29sb3I6ICM2NjY2NjY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogZmFudGFzeTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXByb3BlcnR5LXZhbHVlOmhvdmVyIC5yYXRpbmctdG9vbHRpcC13cmFwcGVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMjEwJSwgLTgwJSk7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG5wLnJhdGluZy10b29sdGlwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXByb3BlcnRpZXMtd3JhcHBlciB7XFxyXFxuZGlzcGxheTogZmxleDtcXHJcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbmFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcGFkZGluZzogNyU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoZWF0O1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm5vdC1mb3VuZC1wYWdlIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3ItdGl0bGUtd3JhcHBlciA+IGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbnBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGgxIHtcXHJcXG5mb250LXNpemU6IDQwcHg7XFxyXFxuZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuZmxleDogMSAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuaGVpZ2h0OiAxMDBweDtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IHtcXHJcXG5mb250LXNpemU6IDE0cHg7XFxyXFxuY29sb3I6ICMzMzM7XFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCBhIHtcXHJcXG5jb2xvcjogIzQ0NDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQgYTpob3ZlciB7XFxyXFxuY29sb3I6ICM1NTU7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0OmJlZm9yZSB7XFxyXFxuY29udGVudDogJ8KpJztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5yc3NjaG9vbCBpbWcge1xcclxcbm1heC13aWR0aDogMTAwJTtcXHJcXG5oZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuZ2l0aHViIGEgaW1nIHtcXHJcXG5oZWlnaHQ6IDIuNXJlbTtcXHJcXG5tYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDREQUE0RDtJQUM1RCxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHlC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QUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsZUFBZTtBQUNmLFlBQVk7QUFDWjs7QUFFQTtBQUNBLGNBQWM7QUFDZCxlQUFlO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA2cHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4jaGVhZGVyLW5hbWUge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtcy13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzY4cHgsIDFmcikpO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG4gICAgcGVyc3BlY3RpdmU6IDUwMDBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggMCAjMDAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbXMtd3JhcHBlciA+IGgyIHtcXHJcXG4gICAgbWFyZ2luOiAxMDAlIDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1zLXdyYXBwZXIuc21hbGwge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxODRweCwgMWZyKSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjgwcHgpIHtcXHJcXG4gICAgLmdhbGxlcnkge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5zb3J0aW5nLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMCA4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYnV0dG9uLnN0eWxlLWNoYW5nZXItYnV0dG9uOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbi5iaWcge1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI2cHg7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5zdHlsZS1jaGFuZ2VyLWJ1dHRvbi5hY3RpdmF0ZWQge1xcclxcbiAgICBib3JkZXItY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG5cXHJcXG4uc29ydGluZy1pdGVtcyB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvcnRpbmctaXRlbXMgPiBvcHRpb246OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICdTb3J0IGJ5OiAnO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBwYWRkaW5nOiAxcHg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBtYXJnaW46IDFweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMSwgLTAuMSwgLTAuMSwgMTAwZGVnKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0uYW5pbWF0ZWQge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtLmFuaW1hdGVkOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgIzExMTtcXHJcXG4gICAgYW5pbWF0aW9uOiAuN3MgY3ViaWMtYmV6aWVyKDAuMDYsIDAuODEsIDAuNTIsIDAuODkpIDBzIGluZmluaXRlIGFsdGVybmF0ZSBiZy1zcGluO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGJnLXNwaW4ge1xcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi5nYWxsZXJ5LWl0ZW0uYW5pbWF0ZWQuc21hbGwge1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FsbGVyeS1pdGVtIGltZyB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgcGFkZGluZzogMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1idXR0b25zLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoZWF0O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogY2hvY29sYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1idXR0b24uYWN0aXZhdGVkIHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmVlbjtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtc2VhcmNoLXdyYXBwZXIgPiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMCAwIDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXJnaW46IDEycHggYXV0bztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgOHB4ICNiYmI7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiBoMyB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBtYXJnaW46IDhweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDFweCAwICMwMDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCB7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDNweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAuMnJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVycy1jaGVja2JveC13cmFwcGVyID4gdWwgPiBsaTo6bWFya2VyIHtcXHJcXG4gICAgY29udGVudDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsID4gbGk6OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcgJztcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgd2lkdGg6IDFlbTtcXHJcXG4gICAgaGVpZ2h0OiAxZW07XFxyXFxuICAgIG1hcmdpbjogMCAycHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcnMtY2hlY2tib3gtd3JhcHBlciA+IHVsID4gbGkuY2hlY2tlZC1maWx0ZXIge1xcclxcbiAgICBwYWRkaW5nOiAzcHggMCAwIDA7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXJzLWNoZWNrYm94LXdyYXBwZXIgPiB1bCA+IGxpLmNoZWNrZWQtZmlsdGVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnWCc7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWRlYWN0aXZhdGVkIHtcXHJcXG4gICAgY29sb3I6IGdhaW5zYm9ybztcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItd3JhcHBlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA4NSU7XFxyXFxuICAgIG1hcmdpbjogNTBweCBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxM3B4IDEwcHggMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDAgIzAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItd3JhcHBlciA+IGgzIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1mb3JtLXdyYXBwZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogIzYzNWE1YTtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDNkM2QzY7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGhlaWdodDogMjRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0M2QzZDNjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxufVxcclxcblxcclxcbi5maWx0ZXItc2xpZGVyLXJhbmdlLXdyYXBwZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iOmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggIzM4N2JiZSwgMCAwIDlweCAjMzg3YmJlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLXNsaWRlci1yYW5nZS13cmFwcGVyIGlucHV0W3R5cGU9XFxcInJhbmdlXFxcIl0ge1xcclxcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzZDNkM2O1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtbWFpbi13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXHJcXG4gICAgLml0ZW0tcGFnZS1tYWluLXdyYXBwZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWltYWdlLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcXHJcXG4gICAgaGVpZ2h0OiA2MDBweDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXNpZGUtaW1hZ2VzLXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgc2xhdGVncmV5O1xcclxcbiAgICBwYWRkaW5nOiAxcHggNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2Utc2lkZS1pbWFnZXMtd3JhcHBlciA+IGltZyB7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIG1hcmdpbjogMXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXNpZGUtaW1hZ2VzLXdyYXBwZXIgPiBpbWcuYWN0aXZhdGVkIHtcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgZ3JlZW55ZWxsb3c7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1pbWFnZS1ibG9jay13cmFwcGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXBhZ2UtaW1hZ2Utd3JhcHBlciBpbWcge1xcclxcbiAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLWltYWdlLXdyYXBwZXIgYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBnaG9zdHdoaXRlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xcclxcbiAgICBtYXJnaW46IDAgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06aW52YWxpZCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmJ1eS1ub3ctd2luZG93IHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMzBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wZXJzb25hbC1pbmZvLWlucHV0LXdyYXBwZXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXByb3BlcnR5LXdyYXBwZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDI1dnc7XFxyXFxuICAgIGJhY2tncm91bmQ6IGJpc3F1ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAgIC5pdGVtLXBhZ2UtcHJvcGVydHktd3JhcHBlciB7XFxyXFxuICAgICAgICB3aWR0aDogOTB2dztcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS1uYW1lIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXByb3BlcnR5LXZhbHVlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcXHJcXG4gICAgcGFkZGluZzogOHB4O1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS12YWx1ZS5zdGFyc3tcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBUaW1lcztcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wYWdlLXByb3BlcnR5LXZhbHVlLnN0YXJzOjpiZWZvcmV7XFxyXFxuICAgIGNvbnRlbnQ6ICfimIXimIXimIXimIXimIUnO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmYzAgdmFyKC0tcmF0aW5nKSwgI2ZmZiB2YXIoLS1yYXRpbmcpKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGluZy10b29sdGlwLXdyYXBwZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxODAlLCAtODAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXM7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiAjNjY2NjY2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3k7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0eS12YWx1ZTpob3ZlciAucmF0aW5nLXRvb2x0aXAtd3JhcHBlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDIxMCUsIC04MCUpO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxucC5yYXRpbmctdG9vbHRpcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1wcm9wZXJ0aWVzLXdyYXBwZXIge1xcclxcbmRpc3BsYXk6IGZsZXg7XFxyXFxuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5hbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcGFnZS1idXR0b24ge1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBhZGRpbmc6IDclO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGVhdDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ub3QtZm91bmQtcGFnZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLXRpdGxlLXdyYXBwZXIgPiBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG5wYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBoMSB7XFxyXFxuZm9udC1zaXplOiA0MHB4O1xcclxcbmZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbmZsZXg6IDEgMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbmhlaWdodDogMTAwcHg7XFxyXFxuZGlzcGxheTogZmxleDtcXHJcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcclxcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodCB7XFxyXFxuZm9udC1zaXplOiAxNHB4O1xcclxcbmNvbG9yOiAjMzMzO1xcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5jb3B5cmlnaHQgYSB7XFxyXFxuY29sb3I6ICM0NDQ7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuY29weXJpZ2h0IGE6aG92ZXIge1xcclxcbmNvbG9yOiAjNTU1O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmNvcHlyaWdodDpiZWZvcmUge1xcclxcbmNvbnRlbnQ6ICfCqSc7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAucnNzY2hvb2wgaW1nIHtcXHJcXG5tYXgtd2lkdGg6IDEwMCU7XFxyXFxuaGVpZ2h0OiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmdpdGh1YiBhIGltZyB7XFxyXFxuaGVpZ2h0OiAyLjVyZW07XFxyXFxubWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgUGFnZSB7XG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IF9oYXNoOiBzdHJpbmc7XG4gICAgZ2V0IGhhc2goKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hhc2g7XG4gICAgfVxuICAgIHB1YmxpYyBhYnN0cmFjdCBIdG1sRWxlbWVudEluc3RhbmNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgY3JlYXRlSHRtbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XG59XG4iLCJpbXBvcnQgeyBJRmlsdGVyc1F1ZXJ5LCBJUHJvZHVjdHNSZXNwb25zZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IEdhbGxlcnlJbnN0YW5jZSwgaXNDdXN0b21FdmVudCwgcmVzcG9uc2UsIHJvdXRlciB9IGZyb20gJy4uLy4uL2luZGV4JztcbmltcG9ydCB7IGNvbnRyb2xGcm9tU2xpZGVyLCBjb250cm9sVG9TbGlkZXIsIGZpbGxTbGlkZXIsIHNldFRvZ2dsZUFjY2Vzc2libGUgfSBmcm9tICcuL3NsaWRlclZpZXcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5RmlsdGVycyB7XG4gICAgSHRtbEVsZW1lbnRJbnN0YW5jZTogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBxdWVyeTogSUZpbHRlcnNRdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgICBmaWx0ZXJlZFJlc3BvbnNlczogSVByb2R1Y3RzUmVzcG9uc2VbXSA9IHJlc3BvbnNlLnByb2R1Y3RzO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkh0bWxFbGVtZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUh0bWxFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnRCdXR0b25zID0gdGhpcy5jcmVhdGVGaWx0ZXJCdXR0b25zKCk7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50U2VhcmNoID0gdGhpcy5jcmVhdGVTZWFyY2hGaWx0ZXIoKTtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnRCcmFuZHNXcmFwcGVyID0gdGhpcy5jcmVhdGVDaGVja2JveEZpbHRlcignYnJhbmQnLCAnYnJhbmRzJywgJ2JyYW5kJyk7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50Q2F0ZWdvcmllc1dyYXBwZXIgPSB0aGlzLmNyZWF0ZUNoZWNrYm94RmlsdGVyKCdjYXRlZ29yeScsICdjYXRlZ29yaWVzJywgJ2NhdGVnb3J5Jyk7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50UHJpY2VTbGlkZXIgPSB0aGlzLmNyZWF0ZVNsaWRlckZpbHRlcigncHJpY2UnLCAncHJpY2UnKTtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnRJblN0b2NrU2xpZGVyID0gdGhpcy5jcmVhdGVTbGlkZXJGaWx0ZXIoJ3N0b2NrJywgJ3N0b2NrJyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktZmlsdGVycy13cmFwcGVyJyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEh0bWxFbGVtZW50QnV0dG9ucyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEh0bWxFbGVtZW50U2VhcmNoKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoSHRtbEVsZW1lbnRCcmFuZHNXcmFwcGVyKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoSHRtbEVsZW1lbnRDYXRlZ29yaWVzV3JhcHBlcik7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEh0bWxFbGVtZW50UHJpY2VTbGlkZXIpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChIdG1sRWxlbWVudEluU3RvY2tTbGlkZXIpO1xuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VxdWVyeScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0N1c3RvbUV2ZW50KGUpKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIGN1c3RvbSBldmVudCcpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkUmVzcG9uc2VzID0gZS5kZXRhaWwucHJvZHVjdFJlc3BvbnNlcztcbiAgICAgICAgICAgIEh0bWxFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudENvcHkgPSBuZXcgQ3VzdG9tRXZlbnQoZS50eXBlLCBlKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KGV2ZW50Q29weSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHByb2Nlc3NRdWVyeSgpOiBJUHJvZHVjdHNSZXNwb25zZVtdIHtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFJlc3BvbnNlcyA9IHJvdXRlci5jaGFuZ2VRdWVyeSh0aGlzLnF1ZXJ5KTtcbiAgICAgICAgcmV0dXJuIEdhbGxlcnlJbnN0YW5jZS5zaG93RGF0YSh0aGlzLmZpbHRlcmVkUmVzcG9uc2VzKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUZpbHRlckJ1dHRvbnMoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJzLWJ1dHRvbnMtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBidXR0b25DbGVhckZpbHRlcnNFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkNsZWFyRmlsdGVyc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVycy1idXR0b24nLCAnZmlsdGVycy1idXR0b24tY2xlYXInKTtcbiAgICAgICAgYnV0dG9uQ2xlYXJGaWx0ZXJzRWxlbWVudC50ZXh0Q29udGVudCA9ICdSZXNldCBmaWx0ZXJzJztcbiAgICAgICAgYnV0dG9uQ2xlYXJGaWx0ZXJzRWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUXVlcnkoKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYnV0dG9uQ29weUxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbkNvcHlMaW5rRWxlbWVudC50ZXh0Q29udGVudCA9ICdDb3B5IGxpbmsnO1xuICAgICAgICBidXR0b25Db3B5TGlua0VsZW1lbnQub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvcHlMaW5rRWxlbWVudC50ZXh0Q29udGVudCA9ICdDb3BpZWQhJztcbiAgICAgICAgICAgIGJ1dHRvbkNvcHlMaW5rRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNvcHlMaW5rRWxlbWVudC50ZXh0Q29udGVudCA9ICdDb3B5IGxpbmsnO1xuICAgICAgICAgICAgICAgIGJ1dHRvbkNvcHlMaW5rRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9O1xuICAgICAgICBidXR0b25Db3B5TGlua0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVycy1idXR0b24nLCAnZmlsdGVycy1idXR0b24tY29weScpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQoYnV0dG9uQ2xlYXJGaWx0ZXJzRWxlbWVudCwgYnV0dG9uQ29weUxpbmtFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlU2VhcmNoRmlsdGVyKCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZmlsdGVycy1zZWFyY2gtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBmb3IgcHJvZHVjdHMuLi4nO1xuICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQudGl0bGUgPSBcIlR5cGUgaW4gYW55IGluZm8gYWJvdXQgdGhlIHByb2R1Y3QgeW91J3JlIGxvb2tpbmcgZm9yXCI7XG4gICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5vbmtleXVwID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5xdWVyeS5zZWFyY2ggPSBzZWFyY2hJbnB1dEVsZW1lbnQudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWVyeSgpO1xuICAgICAgICB9O1xuICAgICAgICAvL3dlYnBhY2sgYWRkcyBydWluaW5nIHNsYXNoIGluIGNzcyA9KFxuICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChhc3NldHMvbG91cGUuc3ZnKSc7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChzZWFyY2hJbnB1dEVsZW1lbnQpO1xuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VxdWVyeScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0N1c3RvbUV2ZW50KGUpKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIGN1c3RvbSBldmVudCcpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHNlYXJjaElucHV0RWxlbWVudC52YWx1ZSA9IHJvdXRlci5xdWVyeS5zZWFyY2ggPz8gJyc7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGVja2JveEZpbHRlcihcbiAgICAgICAgYXR0cmlidXRlTmFtZTogc3RyaW5nLFxuICAgICAgICBxdWVyeUZpZWxkOiAnYnJhbmRzJyB8ICdjYXRlZ29yaWVzJyxcbiAgICAgICAgcHJvZHVjdEZpZWxkOiAnYnJhbmQnIHwgJ2NhdGVnb3J5J1xuICAgICkge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJzLWNoZWNrYm94LXdyYXBwZXInKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcXVlcnknLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNDdXN0b21FdmVudChlKSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBjdXN0b20gZXZlbnQnKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBIdG1sRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRDb3B5ID0gbmV3IEN1c3RvbUV2ZW50KGUudHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChldmVudENvcHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBuYW1pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuYW1pbmcudGV4dENvbnRlbnQgPSBwcm9kdWN0RmllbGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9kdWN0RmllbGQuc2xpY2UoMSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChuYW1pbmcpO1xuICAgICAgICBjb25zdCBjaGVja2JveExpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlBcnJheTogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgICAgICByZXNwb25zZS5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0c1Jlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBwcm9wZXJ0eUFycmF5LnB1c2gocHJvZHVjdHNSZXNwb25zZVtwcm9kdWN0RmllbGRdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb3BlcnR5QXJyYXkuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTEubG9jYWxlQ29tcGFyZShpdGVtMik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVNldDogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHByb3BlcnR5QXJyYXkpO1xuICAgICAgICBwcm9wZXJ0eVNldC5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY2hlY2tib3hMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNoZWNrYm94RWxlbWVudChhdHRyaWJ1dGVOYW1lLCBwcm9wZXJ0eSwgcXVlcnlGaWVsZCwgcHJvZHVjdEZpZWxkKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2hlY2tib3hMaXN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VxdWVyeScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0N1c3RvbUV2ZW50KGUpKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIGN1c3RvbSBldmVudCcpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5QXJyYXk6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLnByb2R1Y3RzLmZvckVhY2goKHByb2R1Y3RzUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUFycmF5LnB1c2gocHJvZHVjdHNSZXNwb25zZVtwcm9kdWN0RmllbGRdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvcGVydHlBcnJheS5zb3J0KChpdGVtMSwgaXRlbTIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTEubG9jYWxlQ29tcGFyZShpdGVtMik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5U2V0OiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQocHJvcGVydHlBcnJheSk7XG4gICAgICAgICAgICBwcm9wZXJ0eVNldC5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgIUFycmF5LmZyb20oY2hlY2tib3hMaXN0RWxlbWVudC5jaGlsZHJlbikuc29tZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChlbGVtZW50KSA9PiBlbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSA9PT0gcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlQ2hlY2tib3hFbGVtZW50KGF0dHJpYnV0ZU5hbWUsIHByb3BlcnR5LCBxdWVyeUZpZWxkLCBwcm9kdWN0RmllbGQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNoZWNrYm94TGlzdEVsZW1lbnQuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50Q29weSA9IG5ldyBDdXN0b21FdmVudChlLnR5cGUsIGUpO1xuICAgICAgICAgICAgICAgIGNoaWxkLmRpc3BhdGNoRXZlbnQoZXZlbnRDb3B5KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgY2hlY2tib3hMaXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXJzLWNoZWNrYm94LWxpc3QnKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKGNoZWNrYm94TGlzdEVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVDaGVja2JveEVsZW1lbnQoXG4gICAgICAgIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyxcbiAgICAgICAgYXR0cmlidXRlVmFsdWU6IHN0cmluZyxcbiAgICAgICAgcXVlcnlGaWVsZDogJ2JyYW5kcycgfCAnY2F0ZWdvcmllcycsXG4gICAgICAgIHByb2R1Y3RGaWVsZDoga2V5b2YgSVByb2R1Y3RzUmVzcG9uc2VcbiAgICApOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlBbGwgPSByZXNwb25zZS5wcm9kdWN0cy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdFtwcm9kdWN0RmllbGRdID09PSBhdHRyaWJ1dGVWYWx1ZSkgYWNjdW11bGF0b3IrKztcbiAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIGNvbnN0IHF1YW50aXR5RmlsdGVyZWQgPSB0aGlzLmZpbHRlcmVkUmVzcG9uc2VzLnJlZHVjZSgoYWNjdW11bGF0b3IsIHByb2R1Y3QpID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0W3Byb2R1Y3RGaWVsZF0gPT09IGF0dHJpYnV0ZVZhbHVlKSBhY2N1bXVsYXRvcisrO1xuICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgSHRtbEVsZW1lbnQudGV4dENvbnRlbnQgPSBgJHthdHRyaWJ1dGVWYWx1ZX0gKCR7cXVhbnRpdHlGaWx0ZXJlZH0vJHtxdWFudGl0eUFsbH0pYDtcbiAgICAgICAgSHRtbEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdKSAmJlxuICAgICAgICAgICAgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8uc29tZSgoZWxlbWVudCkgPT4gZWxlbWVudCA9PT0gYXR0cmlidXRlVmFsdWUpXG4gICAgICAgICkge1xuICAgICAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZC1maWx0ZXInKTtcbiAgICAgICAgfVxuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xpY2tlZEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gY2xpY2tlZEVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFIdG1sRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrZWQtZmlsdGVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdKSkgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXSA9IFthdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdPy5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkLWZpbHRlcicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZC1maWx0ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdPy5pbmRleE9mKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdPy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ubGVuZ3RoID09PSAwKSBkZWxldGUgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWVyeSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZXF1ZXJ5JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzQ3VzdG9tRXZlbnQoZSkpIHRocm93IG5ldyBFcnJvcignbm90IGEgY3VzdG9tIGV2ZW50Jyk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHlBbGwgPSByZXNwb25zZS5wcm9kdWN0cy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RbcHJvZHVjdEZpZWxkXSA9PT0gYXR0cmlidXRlVmFsdWUpIGFjY3VtdWxhdG9yKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eUZpbHRlcmVkID0gdGhpcy5maWx0ZXJlZFJlc3BvbnNlcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RbcHJvZHVjdEZpZWxkXSA9PT0gYXR0cmlidXRlVmFsdWUpIGFjY3VtdWxhdG9yKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICBIdG1sRWxlbWVudC50ZXh0Q29udGVudCA9IGAke2F0dHJpYnV0ZVZhbHVlfSAoJHtxdWFudGl0eUZpbHRlcmVkfS8ke3F1YW50aXR5QWxsfSlgO1xuICAgICAgICAgICAgaWYgKHF1YW50aXR5RmlsdGVyZWQgPT09IDApIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1kZWFjdGl2YXRlZCcpO1xuICAgICAgICAgICAgZWxzZSBIdG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaWx0ZXItZGVhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSByb3V0ZXIucXVlcnk7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/LnNvbWUoKGVsZW1lbnQpID0+IGVsZW1lbnQgPT09IGF0dHJpYnV0ZVZhbHVlKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZC1maWx0ZXInKTtcbiAgICAgICAgICAgIH0gZWxzZSBIdG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjaGVja2VkLWZpbHRlcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlU2xpZGVyRmlsdGVyKHF1ZXJ5RmllbGQ6ICdwcmljZScgfCAnc3RvY2snLCBwcm9kdWN0RmllbGQ6IGtleW9mIElQcm9kdWN0c1Jlc3BvbnNlKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBuYW1pbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBuYW1pbmcudGV4dENvbnRlbnQgPSBwcm9kdWN0RmllbGQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9kdWN0RmllbGQuc2xpY2UoMSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1zbGlkZXItd3JhcHBlcicpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQobmFtaW5nKTtcbiAgICAgICAgY29uc3Qgc2xpZGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzbGlkZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1zbGlkZXItcmFuZ2Utd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBmcm9tSW5wdXRTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBmcm9tSW5wdXRTbGlkZXIudHlwZSA9ICdyYW5nZSc7XG4gICAgICAgIGNvbnN0IGZpZWxkQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAgICAgdGhpcy5maWx0ZXJlZFJlc3BvbnNlcy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHByb2R1Y3RbcHJvZHVjdEZpZWxkXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdudW1iZXInKSBmaWVsZEFycmF5LnB1c2gocHJvcGVydHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgZnJvbUlucHV0U2xpZGVyLm1pbiA9IGAke01hdGgubWluKC4uLmZpZWxkQXJyYXkpfWA7XG4gICAgICAgIGZyb21JbnB1dFNsaWRlci5tYXggPSBgJHtNYXRoLm1heCguLi5maWVsZEFycmF5KX1gO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdKSAmJiB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdPy5sZW5ndGggPT09IDIpXG4gICAgICAgICAgICAvLyBpZi1zdGF0ZW1lbnQgZ3VhcmFudGVlcyB0aGF0IHRoaXMucXVlcnlbcXVlcnlGaWVsZF0gIT09IG51bGxcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICBmcm9tSW5wdXRTbGlkZXIudmFsdWUgPSBgJHt0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdIVswXX1gO1xuICAgICAgICBlbHNlIGZyb21JbnB1dFNsaWRlci52YWx1ZSA9IGAke01hdGgubWluKC4uLmZpZWxkQXJyYXkpfWA7XG4gICAgICAgIGZyb21JbnB1dFNsaWRlci5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICAgIGZyb21JbnB1dFNsaWRlci5zdHlsZS56SW5kZXggPSAnMSc7XG4gICAgICAgIGNvbnN0IHRvSW5wdXRTbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b0lucHV0U2xpZGVyLnR5cGUgPSAncmFuZ2UnO1xuICAgICAgICB0b0lucHV0U2xpZGVyLm1pbiA9IGAke01hdGgubWluKC4uLmZpZWxkQXJyYXkpfWA7XG4gICAgICAgIHRvSW5wdXRTbGlkZXIubWF4ID0gYCR7TWF0aC5tYXgoLi4uZmllbGRBcnJheSl9YDtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiYgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgLy8gaWYtc3RhdGVtZW50IGd1YXJhbnRlZXMgdGhhdCB0aGlzLnF1ZXJ5W3F1ZXJ5RmllbGRdICE9PSBudWxsXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgdG9JbnB1dFNsaWRlci52YWx1ZSA9IGAke3RoaXMucXVlcnlbcXVlcnlGaWVsZF0hWzFdfWA7XG4gICAgICAgIGVsc2UgdG9JbnB1dFNsaWRlci52YWx1ZSA9IGAke01hdGgubWF4KC4uLmZpZWxkQXJyYXkpfWA7XG4gICAgICAgIHNsaWRlcldyYXBwZXIuYXBwZW5kKGZyb21JbnB1dFNsaWRlciwgdG9JbnB1dFNsaWRlcik7XG4gICAgICAgIGNvbnN0IGZvcm1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1pblZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtaW5WYWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBmcm9tSW5wdXRTbGlkZXIudmFsdWU7XG4gICAgICAgIG1pblZhbHVlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItc2xpZGVyLWZvcm0tdGV4dCcpO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWF4VmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gdG9JbnB1dFNsaWRlci52YWx1ZTtcbiAgICAgICAgbWF4VmFsdWVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1zbGlkZXItZm9ybS10ZXh0Jyk7XG4gICAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZChtaW5WYWx1ZUVsZW1lbnQsIG1heFZhbHVlRWxlbWVudCk7XG4gICAgICAgIGZyb21JbnB1dFNsaWRlci5vbmlucHV0ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29udHJvbEZyb21TbGlkZXIoZnJvbUlucHV0U2xpZGVyLCB0b0lucHV0U2xpZGVyLCBtaW5WYWx1ZUVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pIHx8XG4gICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiYgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ubGVuZ3RoICE9PSAyKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0gPSBbZnJvbUlucHV0U2xpZGVyLnZhbHVlLCB0b0lucHV0U2xpZGVyLnZhbHVlXTtcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiYgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXSFbMF0gPSBmcm9tSW5wdXRTbGlkZXIudmFsdWU7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8uWzBdID09PSBmcm9tSW5wdXRTbGlkZXIubWluICYmXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8uWzFdID09PSBmcm9tSW5wdXRTbGlkZXIubWF4XG4gICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMucXVlcnlbcXVlcnlGaWVsZF07XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NRdWVyeSgpO1xuICAgICAgICB9O1xuICAgICAgICB0b0lucHV0U2xpZGVyLm9uaW5wdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb250cm9sVG9TbGlkZXIoZnJvbUlucHV0U2xpZGVyLCB0b0lucHV0U2xpZGVyLCBtYXhWYWx1ZUVsZW1lbnQpO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFBcnJheS5pc0FycmF5KHRoaXMucXVlcnlbcXVlcnlGaWVsZF0pIHx8XG4gICAgICAgICAgICAgICAgKEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiYgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ubGVuZ3RoICE9PSAyKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlbcXVlcnlGaWVsZF0gPSBbZnJvbUlucHV0U2xpZGVyLnZhbHVlLCB0b0lucHV0U2xpZGVyLnZhbHVlXTtcbiAgICAgICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5xdWVyeVtxdWVyeUZpZWxkXSkgJiYgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8ubGVuZ3RoID09PSAyKVxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXSFbMV0gPSB0b0lucHV0U2xpZGVyLnZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMucXVlcnlbcXVlcnlGaWVsZF0/LlswXSA9PT0gdG9JbnB1dFNsaWRlci5taW4gJiYgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXT8uWzFdID09PSB0b0lucHV0U2xpZGVyLm1heClcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5xdWVyeVtxdWVyeUZpZWxkXTtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1F1ZXJ5KCk7XG4gICAgICAgIH07XG4gICAgICAgIGZpbGxTbGlkZXIoZnJvbUlucHV0U2xpZGVyLCB0b0lucHV0U2xpZGVyLCAnI0M2QzZDNicsICcjMjVkYWE1JywgdG9JbnB1dFNsaWRlcik7XG4gICAgICAgIHNldFRvZ2dsZUFjY2Vzc2libGUodG9JbnB1dFNsaWRlcik7XG4gICAgICAgIGZvcm1XcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1zbGlkZXItZm9ybS13cmFwcGVyJyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChzbGlkZXJXcmFwcGVyLCBmb3JtV3JhcHBlcik7XG4gICAgICAgIEh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZXF1ZXJ5JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWlzQ3VzdG9tRXZlbnQoZSkpIHRocm93IG5ldyBFcnJvcignbm90IGEgY3VzdG9tIGV2ZW50Jyk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY29uc3QgZmllbGRBcnJheTogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgICAgICAgICAgcmVzcG9uc2UucHJvZHVjdHMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvZHVjdFtwcm9kdWN0RmllbGRdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdudW1iZXInKSBmaWVsZEFycmF5LnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBmcm9tSW5wdXRTbGlkZXIubWluID0gYCR7TWF0aC5taW4oLi4uZmllbGRBcnJheSl9YDtcbiAgICAgICAgICAgIGZyb21JbnB1dFNsaWRlci5tYXggPSBgJHtNYXRoLm1heCguLi5maWVsZEFycmF5KX1gO1xuICAgICAgICAgICAgdG9JbnB1dFNsaWRlci5taW4gPSBgJHtNYXRoLm1pbiguLi5maWVsZEFycmF5KX1gO1xuICAgICAgICAgICAgdG9JbnB1dFNsaWRlci5tYXggPSBgJHtNYXRoLm1heCguLi5maWVsZEFycmF5KX1gO1xuXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZEZpZWxkQXJyYXk6IEFycmF5PG51bWJlcj4gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRSZXNwb25zZXMuZm9yRWFjaCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvZHVjdFtwcm9kdWN0RmllbGRdO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcGVydHkgPT09ICdudW1iZXInKSBmaWx0ZXJlZEZpZWxkQXJyYXkucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcmVkUmVzcG9uc2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICEoXG4gICAgICAgICAgICAgICAgICAgIGZyb21JbnB1dFNsaWRlci52YWx1ZSA9PT0gYCR7TWF0aC5taW4oLi4uZmlsdGVyZWRGaWVsZEFycmF5KX1gICYmXG4gICAgICAgICAgICAgICAgICAgIHRvSW5wdXRTbGlkZXIudmFsdWUgPT09IGAke01hdGgubWF4KC4uLmZpbHRlcmVkRmllbGRBcnJheSl9YFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGZyb21JbnB1dFNsaWRlci52YWx1ZSA9IGAke01hdGgubWluKC4uLmZpbHRlcmVkRmllbGRBcnJheSl9YDtcbiAgICAgICAgICAgICAgICB0b0lucHV0U2xpZGVyLnZhbHVlID0gYCR7TWF0aC5tYXgoLi4uZmlsdGVyZWRGaWVsZEFycmF5KX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWluVmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gZnJvbUlucHV0U2xpZGVyLnZhbHVlO1xuICAgICAgICAgICAgbWF4VmFsdWVFbGVtZW50LnRleHRDb250ZW50ID0gdG9JbnB1dFNsaWRlci52YWx1ZTtcbiAgICAgICAgICAgIGZpbGxTbGlkZXIoZnJvbUlucHV0U2xpZGVyLCB0b0lucHV0U2xpZGVyLCAnI0M2QzZDNicsICcjMjVkYWE1JywgdG9JbnB1dFNsaWRlcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgSVByb2R1Y3RzUmVzcG9uc2UgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBjaGFuZ2VQYWdlLCBHYWxsZXJ5SW5zdGFuY2UsIGlzQ3VzdG9tRXZlbnQsIHJvdXRlciB9IGZyb20gJy4uLy4uL2luZGV4JztcbmltcG9ydCBJdGVtUGFnZSBmcm9tICcuLi9pdGVtUGFnZS9JdGVtUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnlJdGVtcyB7XG4gICAgZ2V0IHByb2R1Y3RzUmVzcG9uc2VzKCk6IElQcm9kdWN0c1Jlc3BvbnNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fcHJvZHVjdHNSZXNwb25zZXM7XG4gICAgfVxuICAgIEh0bWxFbGVtZW50SW5zdGFuY2U6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0VsZW1lbnQ6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHByaXZhdGUgX3Byb2R1Y3RzUmVzcG9uc2VzOiBJUHJvZHVjdHNSZXNwb25zZVtdO1xuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RzUmVzcG9uc2VzOiBJUHJvZHVjdHNSZXNwb25zZVtdKSB7XG4gICAgICAgIHRoaXMuX3Byb2R1Y3RzUmVzcG9uc2VzID0gcHJvZHVjdHNSZXNwb25zZXM7XG4gICAgICAgIHRoaXMuc29ydGluZ0VsZW1lbnQgPSB0aGlzLmNyZWF0ZVNvcnRpbmcoKTtcbiAgICAgICAgdGhpcy5IdG1sRWxlbWVudEluc3RhbmNlID0gdGhpcy5jcmVhdGVIdG1sRWxlbWVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjcmVhdGVIdG1sRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2dhbGxlcnktaXRlbXMtd3JhcHBlcicpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNvcnRpbmdXcmFwcGVyKCkpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVByb2R1Y3RzRWxlbWVudCgpKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlcXVlcnknLCAoZTogRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghaXNDdXN0b21FdmVudChlKSkgdGhyb3cgbmV3IEVycm9yKCdub3QgYSBjdXN0b20gZXZlbnQnKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJvdXRlci5xdWVyeS5zb3J0aW5nID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydGluZ0VsZW1lbnQudmFsdWUgPSBHYWxsZXJ5SXRlbXMuc2VsZWN0T3B0aW9uc0Fycltyb3V0ZXIucXVlcnkuc29ydGluZ107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydGluZ0VsZW1lbnQudmFsdWUgPSBHYWxsZXJ5SXRlbXMuc2VsZWN0T3B0aW9uc0FyclswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEh0bWxFbGVtZW50LmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudENvcHkgPSBuZXcgQ3VzdG9tRXZlbnQoZS50eXBlLCBlKTtcbiAgICAgICAgICAgICAgICBjaGlsZC5kaXNwYXRjaEV2ZW50KGV2ZW50Q29weSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZVByb2R1Y3RzRWxlbWVudCgpOiBIVE1MRGl2RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLXdyYXBwZXInKTtcbiAgICAgICAgaWYgKHJvdXRlci5xdWVyeS5zbWFsbE1vZGUpIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSB0aGlzLmdldFNvcnRlZERhdGEoKTtcbiAgICAgICAgaWYgKHNvcnRlZERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZU5vUHJvZHVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgdGl0bGVOb1Byb2R1Y3RzLnRleHRDb250ZW50ID0gJ05vIHByb2R1Y3RzIGZvdW5kID0oJztcbiAgICAgICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZCh0aXRsZU5vUHJvZHVjdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc29ydGVkRGF0YS5mb3JFYWNoKChwcm9kdWN0c1Jlc3BvbnNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICBHYWxsZXJ5SXRlbXMuY3JlYXRlUHJvZHVjdEh0bWxFbGVtZW50KHByb2R1Y3RzUmVzcG9uc2UsIGluZGV4LCByb3V0ZXIucXVlcnkuc21hbGxNb2RlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VxdWVyeScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0N1c3RvbUV2ZW50KGUpKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIGN1c3RvbSBldmVudCcpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX3Byb2R1Y3RzUmVzcG9uc2VzID0gZS5kZXRhaWwucHJvZHVjdFJlc3BvbnNlcztcbiAgICAgICAgICAgIEh0bWxFbGVtZW50LnJlcGxhY2VDaGlsZHJlbignJyk7XG4gICAgICAgICAgICBpZiAocm91dGVyLnF1ZXJ5LnNtYWxsTW9kZSkgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc21hbGwnKTtcbiAgICAgICAgICAgIGVsc2UgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc21hbGwnKTtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRlZERhdGEgPSB0aGlzLmdldFNvcnRlZERhdGEoKTtcbiAgICAgICAgICAgIGlmIChzb3J0ZWREYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlTm9Qcm9kdWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgdGl0bGVOb1Byb2R1Y3RzLnRleHRDb250ZW50ID0gJ05vIHByb2R1Y3RzIGZvdW5kID0oJztcbiAgICAgICAgICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQodGl0bGVOb1Byb2R1Y3RzKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YS5mb3JFYWNoKChwcm9kdWN0c1Jlc3BvbnNlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZChcbiAgICAgICAgICAgICAgICAgICAgICAgIEdhbGxlcnlJdGVtcy5jcmVhdGVQcm9kdWN0SHRtbEVsZW1lbnQocHJvZHVjdHNSZXNwb25zZSwgaW5kZXgsIHJvdXRlci5xdWVyeS5zbWFsbE1vZGUpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBIdG1sRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnRDb3B5ID0gbmV3IEN1c3RvbUV2ZW50KGUudHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgY2hpbGQuZGlzcGF0Y2hFdmVudChldmVudENvcHkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRTb3J0ZWREYXRhKCk6IElQcm9kdWN0c1Jlc3BvbnNlW10ge1xuICAgICAgICBjb25zdCBzb3J0ZWREYXRhID0gdGhpcy5wcm9kdWN0c1Jlc3BvbnNlcztcbiAgICAgICAgc3dpdGNoICh0aGlzLnNvcnRpbmdFbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICBjYXNlIEdhbGxlcnlJdGVtcy5zZWxlY3RPcHRpb25zQXJyWzBdOiB7XG4gICAgICAgICAgICAgICAgc29ydGVkRGF0YS5zb3J0KChpdGVtMSwgaXRlbTIpID0+IGl0ZW0xLnByaWNlIC0gaXRlbTIucHJpY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSBHYWxsZXJ5SXRlbXMuc2VsZWN0T3B0aW9uc0FyclsxXToge1xuICAgICAgICAgICAgICAgIHNvcnRlZERhdGEuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMi5wcmljZSAtIGl0ZW0xLnByaWNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgR2FsbGVyeUl0ZW1zLnNlbGVjdE9wdGlvbnNBcnJbMl06IHtcbiAgICAgICAgICAgICAgICBzb3J0ZWREYXRhLnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4gaXRlbTIucmF0aW5nIC0gaXRlbTEucmF0aW5nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgR2FsbGVyeUl0ZW1zLnNlbGVjdE9wdGlvbnNBcnJbM106IHtcbiAgICAgICAgICAgICAgICBzb3J0ZWREYXRhLnNvcnQoKGl0ZW0xLCBpdGVtMikgPT4gaXRlbTIuZGlzY291bnRQZXJjZW50YWdlIC0gaXRlbTEuZGlzY291bnRQZXJjZW50YWdlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc29ydGVkRGF0YTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBzZWxlY3RPcHRpb25zQXJyOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICAnUHJpY2U6IExvdyB0byBIaWdoJyxcbiAgICAgICAgJ1ByaWNlOiBIaWdoIHRvIExvdycsXG4gICAgICAgICdBdmcuIEN1c3RvbWVyIFJldmlldycsXG4gICAgICAgICdEaXNjb3VudCBQZXJjZW50YWdlJyxcbiAgICBdO1xuICAgIHByaXZhdGUgY3JlYXRlU29ydGluZygpOiBIVE1MU2VsZWN0RWxlbWVudCB7XG4gICAgICAgIGNvbnN0IHNvcnRpbmdTZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIHNvcnRpbmdTZWxlY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NvcnRpbmctaXRlbXMnKTtcbiAgICAgICAgR2FsbGVyeUl0ZW1zLnNlbGVjdE9wdGlvbnNBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICBzb3J0aW5nU2VsZWN0RWxlbWVudC5hcHBlbmQob3B0aW9uRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBzb3J0aW5nU2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdRdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgICAgIG5ld1F1ZXJ5LnNvcnRpbmcgPSBHYWxsZXJ5SXRlbXMuc2VsZWN0T3B0aW9uc0Fyci5maW5kSW5kZXgoKHZhbCkgPT4gdmFsID09PSBzb3J0aW5nU2VsZWN0RWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICBHYWxsZXJ5SW5zdGFuY2Uuc2hvd0RhdGEocm91dGVyLmNoYW5nZVF1ZXJ5KG5ld1F1ZXJ5KSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc29ydGluZ1NlbGVjdEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVTb3J0aW5nV3JhcHBlcigpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NvcnRpbmctd3JhcHBlcicpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnNvcnRpbmdFbGVtZW50KTtcbiAgICAgICAgY29uc3Qgc3R5bGVDaGFuZ2VyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzdHlsZUNoYW5nZXJXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3N0eWxlLWNoYW5nZXItd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBzdHlsZUNoYW5nZXJCdXR0b25TbWFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25TbWFsbC5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlZCcpO1xuICAgICAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uU21hbGwuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdRdWVyeSA9IHJvdXRlci5xdWVyeTtcbiAgICAgICAgICAgIG5ld1F1ZXJ5LnNtYWxsTW9kZSA9IHRydWU7XG4gICAgICAgICAgICBHYWxsZXJ5SW5zdGFuY2Uuc2hvd0RhdGEocm91dGVyLmNoYW5nZVF1ZXJ5KG5ld1F1ZXJ5KSk7XG4gICAgICAgIH07XG4gICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvblNtYWxsLmNsYXNzTGlzdC5hZGQoJ3N0eWxlLWNoYW5nZXItYnV0dG9uJywgJ3NtYWxsJyk7XG4gICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvblNtYWxsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoYXNzZXRzL3RpbGVzLnN2ZyknO1xuICAgICAgICBjb25zdCBzdHlsZUNoYW5nZXJCdXR0b25CaWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnLmNsYXNzTGlzdC5hZGQoJ3N0eWxlLWNoYW5nZXItYnV0dG9uJywgJ2JpZycsICdhY3RpdmF0ZWQnKTtcbiAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25TbWFsbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvbkJpZy5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1F1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuICAgICAgICAgICAgZGVsZXRlIG5ld1F1ZXJ5LnNtYWxsTW9kZTtcbiAgICAgICAgICAgIEdhbGxlcnlJbnN0YW5jZS5zaG93RGF0YShyb3V0ZXIuY2hhbmdlUXVlcnkobmV3UXVlcnkpKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoYXNzZXRzL3RpbGVzLnN2ZyknO1xuICAgICAgICBzdHlsZUNoYW5nZXJXcmFwcGVyLmFwcGVuZChzdHlsZUNoYW5nZXJCdXR0b25TbWFsbCwgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKHN0eWxlQ2hhbmdlcldyYXBwZXIpO1xuICAgICAgICBIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VxdWVyeScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0N1c3RvbUV2ZW50KGUpKSB0aHJvdyBuZXcgRXJyb3IoJ25vdCBhIGN1c3RvbSBldmVudCcpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChyb3V0ZXIucXVlcnkuc21hbGxNb2RlKSB7XG4gICAgICAgICAgICAgICAgc3R5bGVDaGFuZ2VyQnV0dG9uQmlnLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlZCcpO1xuICAgICAgICAgICAgICAgIHN0eWxlQ2hhbmdlckJ1dHRvblNtYWxsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2YXRlZCcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25TbWFsbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgICAgICBzdHlsZUNoYW5nZXJCdXR0b25CaWcuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlUHJvZHVjdEh0bWxFbGVtZW50KFxuICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlOiBJUHJvZHVjdHNSZXNwb25zZSxcbiAgICAgICAgaW5kZXg6IG51bWJlcixcbiAgICAgICAgc21hbGw/OiBib29sZWFuXG4gICAgKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAoc21hbGwpIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3NtYWxsJyk7XG4gICAgICAgIEh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCBwcm9kdWN0c1Jlc3BvbnNlLnRpdGxlKTtcbiAgICAgICAgY29uc3QgSXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IEl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgSXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBJdGVtSW1hZ2Uuc3JjID0gcHJvZHVjdHNSZXNwb25zZS5pbWFnZXNbcHJvZHVjdHNSZXNwb25zZS5pbWFnZXMubGVuZ3RoIC0gMV07XG4gICAgICAgIEl0ZW1UaXRsZS5pbm5lclRleHQgPSBwcm9kdWN0c1Jlc3BvbnNlLnRpdGxlO1xuICAgICAgICBJdGVtUHJpY2UuaW5uZXJUZXh0ID0gYOKCrCR7cHJvZHVjdHNSZXNwb25zZS5wcmljZS50b1N0cmluZygxMCl9YDtcbiAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeS1pdGVtJyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1JbWFnZSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1UaXRsZSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1QcmljZSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlUGFnZShuZXcgSXRlbVBhZ2UocHJvZHVjdHNSZXNwb25zZSksIHRydWUsICcnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZWQnKSwgaW5kZXggKiAxMCk7XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGFnZSBmcm9tICcuLi8uLi9QYWdlJztcbmltcG9ydCB7IElQcm9kdWN0c1Jlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IEdhbGxlcnlJdGVtcyBmcm9tICcuL0dhbGxlcnlJdGVtcyc7XG5pbXBvcnQgR2FsbGVyeUZpbHRlcnMgZnJvbSAnLi9HYWxsZXJ5RmlsdGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnlQYWdlIGV4dGVuZHMgUGFnZSB7XG4gICAgcHJvdGVjdGVkIF9oYXNoOiBzdHJpbmc7XG4gICAgSHRtbEVsZW1lbnRJbnN0YW5jZTogSFRNTEVsZW1lbnQ7XG4gICAgRmlsdGVyc0luc3RhbmNlOiBHYWxsZXJ5RmlsdGVycztcbiAgICBJdGVtc0luc3RhbmNlOiBHYWxsZXJ5SXRlbXM7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faGFzaCA9IGAvZ2FsbGVyeWA7XG4gICAgICAgIHRoaXMuRmlsdGVyc0luc3RhbmNlID0gbmV3IEdhbGxlcnlGaWx0ZXJzKCk7XG4gICAgICAgIHRoaXMuSXRlbXNJbnN0YW5jZSA9IG5ldyBHYWxsZXJ5SXRlbXModGhpcy5GaWx0ZXJzSW5zdGFuY2UuZmlsdGVyZWRSZXNwb25zZXMpO1xuICAgICAgICB0aGlzLkh0bWxFbGVtZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNyZWF0ZUh0bWxFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgSHRtbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZ2FsbGVyeScpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLkZpbHRlcnNJbnN0YW5jZS5IdG1sRWxlbWVudEluc3RhbmNlKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5JdGVtc0luc3RhbmNlLkh0bWxFbGVtZW50SW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgc2hvd0RhdGEocHJvZHVjdHNSZXNwb25zZXM6IElQcm9kdWN0c1Jlc3BvbnNlW10pOiBJUHJvZHVjdHNSZXNwb25zZVtdIHtcbiAgICAgICAgY29uc3QgZGF0YVVwZGF0ZSA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlcXVlcnknLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0UmVzcG9uc2VzOiBwcm9kdWN0c1Jlc3BvbnNlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLkZpbHRlcnNJbnN0YW5jZS5IdG1sRWxlbWVudEluc3RhbmNlLmRpc3BhdGNoRXZlbnQoZGF0YVVwZGF0ZSk7XG4gICAgICAgIHRoaXMuSXRlbXNJbnN0YW5jZS5IdG1sRWxlbWVudEluc3RhbmNlLmRpc3BhdGNoRXZlbnQoZGF0YVVwZGF0ZSk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0c1Jlc3BvbnNlcztcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY29udHJvbEZyb21TbGlkZXIoZnJvbVNsaWRlcjogSFRNTElucHV0RWxlbWVudCwgdG9TbGlkZXI6IEhUTUxJbnB1dEVsZW1lbnQsIG1pbkRpdjogSFRNTERpdkVsZW1lbnQpIHtcbiAgICBjb25zdCBbZnJvbSwgdG9dID0gZ2V0UGFyc2VkKGZyb21TbGlkZXIsIHRvU2xpZGVyKTtcbiAgICBmaWxsU2xpZGVyKGZyb21TbGlkZXIsIHRvU2xpZGVyLCAnI0M2QzZDNicsICcjMjVkYWE1JywgdG9TbGlkZXIpO1xuICAgIGlmIChmcm9tID4gdG8pIHtcbiAgICAgICAgZnJvbVNsaWRlci52YWx1ZSA9IGAke3RvfWA7XG4gICAgICAgIG1pbkRpdi50ZXh0Q29udGVudCA9IGAke3RvfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWluRGl2LnRleHRDb250ZW50ID0gYCR7ZnJvbX1gO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRyb2xUb1NsaWRlcihmcm9tU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50LCB0b1NsaWRlcjogSFRNTElucHV0RWxlbWVudCwgbWF4RGl2OiBIVE1MRGl2RWxlbWVudCkge1xuICAgIGNvbnN0IFtmcm9tLCB0b10gPSBnZXRQYXJzZWQoZnJvbVNsaWRlciwgdG9TbGlkZXIpO1xuICAgIGZpbGxTbGlkZXIoZnJvbVNsaWRlciwgdG9TbGlkZXIsICcjQzZDNkM2JywgJyMyNWRhYTUnLCB0b1NsaWRlcik7XG4gICAgc2V0VG9nZ2xlQWNjZXNzaWJsZSh0b1NsaWRlcik7XG4gICAgaWYgKGZyb20gPD0gdG8pIHtcbiAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBgJHt0b31gO1xuICAgICAgICBtYXhEaXYudGV4dENvbnRlbnQgPSBgJHt0b31gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1heERpdi50ZXh0Q29udGVudCA9IGAke2Zyb219YDtcbiAgICAgICAgdG9TbGlkZXIudmFsdWUgPSBgJHtmcm9tfWA7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0VG9nZ2xlQWNjZXNzaWJsZShjdXJyZW50VGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgaWYgKE51bWJlcihjdXJyZW50VGFyZ2V0LnZhbHVlKSA8PSAwKSB7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuc3R5bGUuekluZGV4ID0gJzInO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlbnRUYXJnZXQuc3R5bGUuekluZGV4ID0gJzAnO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGFyc2VkKGN1cnJlbnRGcm9tOiBIVE1MSW5wdXRFbGVtZW50LCBjdXJyZW50VG86IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICByZXR1cm4gW051bWJlcihjdXJyZW50RnJvbS52YWx1ZSksIE51bWJlcihjdXJyZW50VG8udmFsdWUpXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbGxTbGlkZXIoXG4gICAgZnJvbTogSFRNTElucHV0RWxlbWVudCxcbiAgICB0bzogSFRNTElucHV0RWxlbWVudCxcbiAgICBzbGlkZXJDb2xvcjogc3RyaW5nLFxuICAgIHJhbmdlQ29sb3I6IHN0cmluZyxcbiAgICBjb250cm9sU2xpZGVyOiBIVE1MSW5wdXRFbGVtZW50XG4pIHtcbiAgICBjb25zdCByYW5nZURpc3RhbmNlID0gTnVtYmVyKHRvLm1heCkgLSBOdW1iZXIodG8ubWluKTtcbiAgICBjb25zdCBmcm9tUG9zaXRpb24gPSBOdW1iZXIoZnJvbS52YWx1ZSkgLSBOdW1iZXIodG8ubWluKTtcbiAgICBjb25zdCB0b1Bvc2l0aW9uID0gTnVtYmVyKHRvLnZhbHVlKSAtIE51bWJlcih0by5taW4pO1xuICAgIGNvbnRyb2xTbGlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoXG4gICAgICB0byByaWdodCxcbiAgICAgICR7c2xpZGVyQ29sb3J9IDAlLFxuICAgICAgJHtzbGlkZXJDb2xvcn0gJHsoZnJvbVBvc2l0aW9uIC8gcmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSxcbiAgICAgICR7cmFuZ2VDb2xvcn0gJHsoZnJvbVBvc2l0aW9uIC8gcmFuZ2VEaXN0YW5jZSkgKiAxMDB9JSxcbiAgICAgICR7cmFuZ2VDb2xvcn0gJHsodG9Qb3NpdGlvbiAvIHJhbmdlRGlzdGFuY2UpICogMTAwfSUsIFxuICAgICAgJHtzbGlkZXJDb2xvcn0gJHsodG9Qb3NpdGlvbiAvIHJhbmdlRGlzdGFuY2UpICogMTAwfSUsIFxuICAgICAgJHtzbGlkZXJDb2xvcn0gMTAwJSlgO1xufVxuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vUGFnZSc7XG5pbXBvcnQgeyBJUHJvZHVjdHNSZXNwb25zZSB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSXRlbVBhZ2UgZXh0ZW5kcyBQYWdlIHtcbiAgICBwcm90ZWN0ZWQgX2hhc2g6IHN0cmluZztcbiAgICBIdG1sRWxlbWVudEluc3RhbmNlOiBIVE1MRWxlbWVudDtcbiAgICBwcm9kdWN0c1Jlc3BvbnNlOiBJUHJvZHVjdHNSZXNwb25zZTtcbiAgICBwcml2YXRlIGl0ZW1JbWFnZXNQb2ludGVyID0gMDtcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0UmVzcG9uc2U6IElQcm9kdWN0c1Jlc3BvbnNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdHNSZXNwb25zZSA9IHByb2R1Y3RSZXNwb25zZTtcbiAgICAgICAgdGhpcy5faGFzaCA9IGAvcHJvZHVjdC8ke3RoaXMucHJvZHVjdHNSZXNwb25zZS5pZH1gO1xuICAgICAgICB0aGlzLkh0bWxFbGVtZW50SW5zdGFuY2UgPSB0aGlzLmNyZWF0ZUh0bWxFbGVtZW50KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVIdG1sRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IG1haW5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltYWdlV3JhcHBlciA9IHRoaXMuY3JlYXRlSW1hZ2VXcmFwcGVyKCk7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXNXcmFwcGVyID0gdGhpcy5jcmVhdGVQcm9wZXJ0aWVzV3JhcHBlcigpO1xuICAgICAgICBjb25zdCBidXlXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGJ1dHRvbnNXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcGFnZS1idXR0b25zLXdyYXBwZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGNhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNhcnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLWJ1dHRvbicpO1xuICAgICAgICAgICAgY2FydEJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIHRvIGNhcnQnO1xuICAgICAgICAgICAgY2FydEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vVE9ETzogYWRkIGNhcnQgbG9naWNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBidXlOb3dCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGJ1eU5vd0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtYnV0dG9uJyk7XG4gICAgICAgICAgICBidXlOb3dCdXR0b24uaW5uZXJUZXh0ID0gJ0J1eSBub3cnO1xuICAgICAgICAgICAgYnV5Tm93QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKHRoaXMuY3JlYXRlQnV5Tm93V2luZG93KCkpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJ1dHRvbnNXcmFwcGVyLmFwcGVuZChjYXJ0QnV0dG9uLCBidXlOb3dCdXR0b24pO1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnNXcmFwcGVyO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBicmVhZGNydW1ic0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGJyZWFkY3J1bWJzRWxlbWVudC5pbm5lclRleHQgPSBgU1RPUkUgPj4gJHt0aGlzLnByb2R1Y3RzUmVzcG9uc2UuY2F0ZWdvcnl9ID4+ICR7dGhpcy5wcm9kdWN0c1Jlc3BvbnNlLmJyYW5kfSA+PiAke3RoaXMucHJvZHVjdHNSZXNwb25zZS50aXRsZX1gLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGJyZWFkY3J1bWJzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtYnJlYWRjcnVtYnMnKTtcbiAgICAgICAgbWFpbldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLW1haW4td3JhcHBlcicpO1xuICAgICAgICBtYWluV3JhcHBlci5hcHBlbmQoaW1hZ2VXcmFwcGVyLCBwcm9wZXJ0aWVzV3JhcHBlciwgYnV5V3JhcHBlcigpKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLXdyYXBwZXInKTtcbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kKGJyZWFkY3J1bWJzRWxlbWVudCwgbWFpbldyYXBwZXIpO1xuICAgICAgICByZXR1cm4gSHRtbEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVJbWFnZVdyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtaW1hZ2UtYmxvY2std3JhcHBlcicpO1xuICAgICAgICBjb25zdCBtYWluSW1hZ2VXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5JbWFnZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLWltYWdlLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgSXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIEl0ZW1JbWFnZS5zcmMgPSB0aGlzLnByb2R1Y3RzUmVzcG9uc2UuaW1hZ2VzW3RoaXMuaXRlbUltYWdlc1BvaW50ZXJdO1xuICAgICAgICBtYWluSW1hZ2VXcmFwcGVyLmFwcGVuZENoaWxkKEl0ZW1JbWFnZSk7XG4gICAgICAgIGNvbnN0IHNpZGVJbWFnZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZUltYWdlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2Utc2lkZS1pbWFnZXMtd3JhcHBlcicpO1xuICAgICAgICB0aGlzLnByb2R1Y3RzUmVzcG9uc2UuaW1hZ2VzLmZvckVhY2goKGltYWdlVVJMLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2lkZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IHRoaXMuaXRlbUltYWdlc1BvaW50ZXIpIHNpZGVJbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmF0ZWQnKTtcbiAgICAgICAgICAgIHNpZGVJbWFnZS5zcmMgPSBpbWFnZVVSTDtcbiAgICAgICAgICAgIHNpZGVJbWFnZS5vbm1vdXNlb3ZlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBJdGVtSW1hZ2Uuc3JjID0gc2lkZUltYWdlLnNyYztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaWRlSW1hZ2Uub25tb3VzZW91dCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBJdGVtSW1hZ2Uuc3JjID0gdGhpcy5wcm9kdWN0c1Jlc3BvbnNlLmltYWdlc1t0aGlzLml0ZW1JbWFnZXNQb2ludGVyXTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaWRlSW1hZ2Uub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1JbWFnZXNQb2ludGVyID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgSXRlbUltYWdlLnNyYyA9IHRoaXMucHJvZHVjdHNSZXNwb25zZS5pbWFnZXNbdGhpcy5pdGVtSW1hZ2VzUG9pbnRlcl07XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShzaWRlSW1hZ2VXcmFwcGVyLmNoaWxkcmVuKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2YXRlZCcpKTtcbiAgICAgICAgICAgICAgICBzaWRlSW1hZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZhdGVkJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2lkZUltYWdlV3JhcHBlci5hcHBlbmQoc2lkZUltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChzaWRlSW1hZ2VXcmFwcGVyLCBtYWluSW1hZ2VXcmFwcGVyKTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgY3JlYXRlUHJvcGVydGllc1dyYXBwZXIoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBIdG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtcHJvcGVydGllcy13cmFwcGVyJyk7XG4gICAgICAgIC8qIFRpdGxlICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1QYWdlLmNyZWF0ZVByb3BlcnR5V3JhcHBlcignVGl0bGUnLCB0aGlzLnByb2R1Y3RzUmVzcG9uc2UudGl0bGUpKTtcbiAgICAgICAgLyogUHJpY2UgKi9cbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBJdGVtUGFnZS5jcmVhdGVQcm9wZXJ0eVdyYXBwZXIoJ1ByaWNlJywgYOKCrCR7dGhpcy5wcm9kdWN0c1Jlc3BvbnNlLnByaWNlLnRvU3RyaW5nKDEwKX1gKVxuICAgICAgICApO1xuICAgICAgICAvKiBEaXNjb3VudCBwZXJjZW50YWdlICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgSXRlbVBhZ2UuY3JlYXRlUHJvcGVydHlXcmFwcGVyKFxuICAgICAgICAgICAgICAgICdEaXNjb3VudCBwZXJjZW50YWdlJyxcbiAgICAgICAgICAgICAgICBgJHt0aGlzLnByb2R1Y3RzUmVzcG9uc2UuZGlzY291bnRQZXJjZW50YWdlLnRvU3RyaW5nKDEwKX1gXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICAgIC8qIENhdGVnb3J5ICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1QYWdlLmNyZWF0ZVByb3BlcnR5V3JhcHBlcignQ2F0ZWdvcnknLCB0aGlzLnByb2R1Y3RzUmVzcG9uc2UuY2F0ZWdvcnkpKTtcbiAgICAgICAgLyogRGVzY3JpcHRpb24gKi9cbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoSXRlbVBhZ2UuY3JlYXRlUHJvcGVydHlXcmFwcGVyKCdEZXNjcmlwdGlvbicsIHRoaXMucHJvZHVjdHNSZXNwb25zZS5kZXNjcmlwdGlvbikpO1xuICAgICAgICAvKiBSYXRpbmcgKi9cbiAgICAgICAgSHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoXG4gICAgICAgICAgICBJdGVtUGFnZS5jcmVhdGVQcm9wZXJ0eVdyYXBwZXIoJ1JhdGluZycsIGAke3RoaXMucHJvZHVjdHNSZXNwb25zZS5yYXRpbmcudG9TdHJpbmcoMTApfWAsIHRydWUpXG4gICAgICAgICk7XG4gICAgICAgIC8qIFN0b2NrICovXG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZENoaWxkKEl0ZW1QYWdlLmNyZWF0ZVByb3BlcnR5V3JhcHBlcignU3RvY2snLCBgJHt0aGlzLnByb2R1Y3RzUmVzcG9uc2Uuc3RvY2sudG9TdHJpbmcoMTApfWApKTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIGNyZWF0ZVByb3BlcnR5V3JhcHBlcihuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGlzUmF0aW5nPzogYm9vbGVhbik6IEhUTUxFbGVtZW50IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb3BlcnR5V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtcHJvcGVydHktd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHByb3BlcnR5TmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXBhZ2UtcHJvcGVydHktbmFtZScpO1xuICAgICAgICBwcm9wZXJ0eU5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgICAgICAgbGV0IHByb3BlcnR5VmFsdWU6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoaXNSYXRpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLXJhdGluZycsIGAkeyhOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkgLyA1KSAqIDEwMH0lYCk7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLmNsYXNzTGlzdC5hZGQoJ3N0YXJzJyk7XG4gICAgICAgICAgICBjb25zdCByYXRpbmdUb29sdGlwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmF0aW5nVG9vbHRpcFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgncmF0aW5nLXRvb2x0aXAtd3JhcHBlcicpO1xuICAgICAgICAgICAgY29uc3QgcmF0aW5nVG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHJhdGluZ1Rvb2x0aXAuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgICAgICAgICByYXRpbmdUb29sdGlwLmNsYXNzTGlzdC5hZGQoJ3JhdGluZy10b29sdGlwJyk7XG4gICAgICAgICAgICByYXRpbmdUb29sdGlwV3JhcHBlci5hcHBlbmQocmF0aW5nVG9vbHRpcCk7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLmFwcGVuZChyYXRpbmdUb29sdGlwV3JhcHBlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9wZXJ0eVZhbHVlLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHByb3BlcnR5VmFsdWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1wYWdlLXByb3BlcnR5LXZhbHVlJyk7XG4gICAgICAgIHByb3BlcnR5V3JhcHBlci5hcHBlbmQocHJvcGVydHlOYW1lLCBwcm9wZXJ0eVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5V3JhcHBlcjtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUJ1eU5vd1dpbmRvdygpOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J1eS1ub3ctd2luZG93Jyk7XG4gICAgICAgIGNvbnN0IHBlcnNvbmFsSW5mb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcGVyc29uYWxJbmZvV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdwZXJzb25hbC1pbmZvLXdyYXBwZXInKTtcbiAgICAgICAgY29uc3QgcGVyc29uYWxJbmZvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgcGVyc29uYWxJbmZvRm9ybS5uYW1lID0gJ3BlcnNvbmFsLWluZm8nO1xuICAgICAgICBwZXJzb25hbEluZm9Gb3JtLmFwcGVuZChcbiAgICAgICAgICAgIEl0ZW1QYWdlLmNyZWF0ZUluZm9JbnB1dCgnRnVsbCBuYW1lJywgbmV3IFJlZ0V4cCgnKF5bQS1aYS160JAt0Y/QsC3Rj117Myx9KSsoPzpcXFxcc1tBLVphLXrQkC3Rj9CwLdGPXXszLH0pKyQnKSlcbiAgICAgICAgKTtcbiAgICAgICAgcGVyc29uYWxJbmZvRm9ybS5hcHBlbmQoSXRlbVBhZ2UuY3JlYXRlSW5mb0lucHV0KCdUZWxlcGhvbmUgbnVtYmVyJywgbmV3IFJlZ0V4cCgnXlxcXFwrW1xcXFxkXXs5LH0kJykpKTtcbiAgICAgICAgcGVyc29uYWxJbmZvRm9ybS5hcHBlbmQoXG4gICAgICAgICAgICBJdGVtUGFnZS5jcmVhdGVJbmZvSW5wdXQoJ0RlbGl2ZXJ5IGFkZHJlc3MnLCBuZXcgUmVnRXhwKCcoXi57NSx9KSsoPzpcXFxccy57NSx9KSsoPzpcXFxccy57NSx9KSskJykpXG4gICAgICAgICk7XG4gICAgICAgIHBlcnNvbmFsSW5mb0Zvcm0uYXBwZW5kKEl0ZW1QYWdlLmNyZWF0ZUluZm9JbnB1dCgnRW1haWwnLCBuZXcgUmVnRXhwKC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvKSkpO1xuICAgICAgICBwZXJzb25hbEluZm9XcmFwcGVyLmFwcGVuZChwZXJzb25hbEluZm9Gb3JtKTtcbiAgICAgICAgY29uc3Qgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0SW5wdXQudHlwZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRJbnB1dC52YWx1ZSA9ICdzdWJtaXQnO1xuICAgICAgICBzdWJtaXRJbnB1dC5uYW1lID0gJ3N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdElucHV0LnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG4gICAgICAgIHN1Ym1pdElucHV0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVyc29uYWxJbmZvRm9ybS5yZXBvcnRWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgSHRtbEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIEh0bWxFbGVtZW50LmFwcGVuZChwZXJzb25hbEluZm9XcmFwcGVyLCBzdWJtaXRJbnB1dCk7XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjcmVhdGVJbmZvSW5wdXQoaW5mb1R5cGU6IHN0cmluZywgcmVnZXhQYXR0ZXJuOiBSZWdFeHApOiBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0IEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BlcnNvbmFsLWluZm8taW5wdXQtd3JhcHBlcicpO1xuICAgICAgICBjb25zdCBpbmZvVHlwZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgaW5mb1R5cGVUaXRsZS50ZXh0Q29udGVudCA9IGluZm9UeXBlO1xuICAgICAgICBjb25zdCBpbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpbnB1dEVsZW1lbnQubmFtZSA9IGluZm9UeXBlO1xuICAgICAgICBpbnB1dEVsZW1lbnQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgaW5wdXRFbGVtZW50LnBhdHRlcm4gPSByZWdleFBhdHRlcm4uc291cmNlO1xuICAgICAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5wdXRFbGVtZW50LnZhbGlkaXR5LnR5cGVNaXNtYXRjaCkge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShgJHtpbmZvVHlwZX0gaXMgaW5jb3JyZWN0YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlucHV0RWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eShgYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpbnB1dEVsZW1lbnQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQoaW5mb1R5cGVUaXRsZSwgaW5wdXRFbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIEh0bWxFbGVtZW50O1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRlciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgZXJyb3JIYW5kbGVyKHJlczogUmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDEgfHwgcmVzLnN0YXR1cyA9PT0gNDA0KVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb3JyeSwgYnV0IHRoZXJlIGlzICR7cmVzLnN0YXR1c30gZXJyb3I6ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihyZXMuc3RhdHVzVGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZCgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKCdodHRwczovL2R1bW15anNvbi5jb20vcHJvZHVjdHM/bGltaXQ9MTAwJylcbiAgICAgICAgICAgIC50aGVuKExvYWRlci5lcnJvckhhbmRsZXIpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBhZ2UgZnJvbSAnLi4vLi4vUGFnZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kUGFnZSBleHRlbmRzIFBhZ2Uge1xuICAgIHByb3RlY3RlZCBfaGFzaDogc3RyaW5nO1xuICAgIEh0bWxFbGVtZW50SW5zdGFuY2U6IEhUTUxFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2hhc2ggPSBgLzQwNGA7XG4gICAgICAgIHRoaXMuSHRtbEVsZW1lbnRJbnN0YW5jZSA9IHRoaXMuY3JlYXRlSHRtbEVsZW1lbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSHRtbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgICAgICBjb25zdCBIdG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBlcnJvcldyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGVycm9yVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBlcnJvclRpdGxlLnRleHRDb250ZW50ID0gJ1BhZ2Ugbm90IGZvdW5kICg0MDQpJztcbiAgICAgICAgZXJyb3JXcmFwcGVyRWxlbWVudC5hcHBlbmQoZXJyb3JUaXRsZSk7XG4gICAgICAgIGVycm9yV3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZXJyb3ItdGl0bGUtd3JhcHBlcicpO1xuICAgICAgICBIdG1sRWxlbWVudC5hcHBlbmQoZXJyb3JXcmFwcGVyRWxlbWVudCk7XG4gICAgICAgIEh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25vdC1mb3VuZC1wYWdlJyk7XG4gICAgICAgIHJldHVybiBIdG1sRWxlbWVudDtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJRmlsdGVyc1F1ZXJ5LCBJUHJvZHVjdHNSZXNwb25zZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCBJdGVtUGFnZSBmcm9tICcuL2l0ZW1QYWdlL0l0ZW1QYWdlJztcbmltcG9ydCB7IGNoYW5nZVBhZ2UsIEdhbGxlcnlJbnN0YW5jZSwgcmVzcG9uc2UsIHJvdXRlciB9IGZyb20gJy4uL2luZGV4JztcbmltcG9ydCBOb3RGb3VuZFBhZ2UgZnJvbSAnLi9ub3RGb3VuZFBhZ2UvTm90Rm91bmRQYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcbiAgICBnZXQgcXVlcnkoKTogSUZpbHRlcnNRdWVyeSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9xdWVyeTtcbiAgICB9XG4gICAgcHJpdmF0ZSBfcXVlcnk6IElGaWx0ZXJzUXVlcnk7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3F1ZXJ5ID0gUm91dGVyLnByb2Nlc3NRdWVyeSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjbGVhclF1ZXJ5KCk6IElQcm9kdWN0c1Jlc3BvbnNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VRdWVyeSh7fSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZmlsdGVySXRlbXNCeVF1ZXJ5KHVwZGF0ZVF1ZXJ5OiBJRmlsdGVyc1F1ZXJ5KTogSVByb2R1Y3RzUmVzcG9uc2VbXSB7XG4gICAgICAgIHJvdXRlci5fcXVlcnkgPSB1cGRhdGVRdWVyeTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLnByb2R1Y3RzO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2R1Y3RzUmVzcG9uc2UpID0+XG4gICAgICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkodXBkYXRlUXVlcnkuYnJhbmRzKSB8fFxuICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5LmJyYW5kcy5zb21lKChicmFuZCkgPT4gcHJvZHVjdHNSZXNwb25zZS5icmFuZCA9PT0gYnJhbmQpXG4gICAgICAgICk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoXG4gICAgICAgICAgICAocHJvZHVjdHNSZXNwb25zZSkgPT5cbiAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheSh1cGRhdGVRdWVyeS5jYXRlZ29yaWVzKSB8fFxuICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXJ5LmNhdGVnb3JpZXMuc29tZSgoY2F0ZWdvcnkpID0+IHByb2R1Y3RzUmVzcG9uc2UuY2F0ZWdvcnkgPT09IGNhdGVnb3J5KVxuICAgICAgICApO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2R1Y3RzUmVzcG9uc2UpID0+XG4gICAgICAgICAgICAgICAgIUFycmF5LmlzQXJyYXkodXBkYXRlUXVlcnkucHJpY2UpIHx8XG4gICAgICAgICAgICAgICAgdXBkYXRlUXVlcnkucHJpY2UubGVuZ3RoICE9PSAyIHx8XG4gICAgICAgICAgICAgICAgKHByb2R1Y3RzUmVzcG9uc2UucHJpY2UgPj0gTnVtYmVyKHVwZGF0ZVF1ZXJ5LnByaWNlWzBdKSAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLnByaWNlIDw9IE51bWJlcih1cGRhdGVRdWVyeS5wcmljZVsxXSkpXG4gICAgICAgICk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoXG4gICAgICAgICAgICAocHJvZHVjdHNSZXNwb25zZSkgPT5cbiAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheSh1cGRhdGVRdWVyeS5zdG9jaykgfHxcbiAgICAgICAgICAgICAgICB1cGRhdGVRdWVyeS5zdG9jay5sZW5ndGggIT09IDIgfHxcbiAgICAgICAgICAgICAgICAocHJvZHVjdHNSZXNwb25zZS5zdG9jayA+PSBOdW1iZXIodXBkYXRlUXVlcnkuc3RvY2tbMF0pICYmXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzUmVzcG9uc2Uuc3RvY2sgPD0gTnVtYmVyKHVwZGF0ZVF1ZXJ5LnN0b2NrWzFdKSlcbiAgICAgICAgKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihcbiAgICAgICAgICAgIChwcm9kdWN0c1Jlc3BvbnNlKSA9PlxuICAgICAgICAgICAgICAgICF1cGRhdGVRdWVyeS5zZWFyY2ggfHxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLmRpc2NvdW50UGVyY2VudGFnZS50b1N0cmluZygxMCkuaW5jbHVkZXModXBkYXRlUXVlcnkuc2VhcmNoKSB8fFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzUmVzcG9uc2UucHJpY2UudG9TdHJpbmcoMTApLmluY2x1ZGVzKHVwZGF0ZVF1ZXJ5LnNlYXJjaCkgfHxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLnJhdGluZy50b1N0cmluZygxMCkuaW5jbHVkZXModXBkYXRlUXVlcnkuc2VhcmNoKSB8fFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzUmVzcG9uc2UuYnJhbmQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1cGRhdGVRdWVyeS5zZWFyY2gpIHx8XG4gICAgICAgICAgICAgICAgcHJvZHVjdHNSZXNwb25zZS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHVwZGF0ZVF1ZXJ5LnNlYXJjaCkgfHxcbiAgICAgICAgICAgICAgICBwcm9kdWN0c1Jlc3BvbnNlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModXBkYXRlUXVlcnkuc2VhcmNoKSB8fFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzUmVzcG9uc2UudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh1cGRhdGVRdWVyeS5zZWFyY2gpXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0eXBlb2YgdXBkYXRlUXVlcnkuc29ydGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHN3aXRjaCAodXBkYXRlUXVlcnkuc29ydGluZykge1xuICAgICAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMS5wcmljZSAtIGl0ZW0yLnByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMi5wcmljZSAtIGl0ZW0xLnByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc29ydCgoaXRlbTEsIGl0ZW0yKSA9PiBpdGVtMi5yYXRpbmcgLSBpdGVtMS5yYXRpbmcpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zb3J0KChpdGVtMSwgaXRlbTIpID0+IGl0ZW0yLmRpc2NvdW50UGVyY2VudGFnZSAtIGl0ZW0xLmRpc2NvdW50UGVyY2VudGFnZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHJlc3VsdC5zb3J0KChpdGVtMSwgaXRlbTIpID0+IGl0ZW0xLnByaWNlIC0gaXRlbTIucHJpY2UpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyByb3V0ZSgpOiB2b2lkIHtcbiAgICAgICAgLyogSGFzaCBwcm9jZXNzaW5nICovXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaC5zdGFydHNXaXRoKCcjL3Byb2R1Y3QvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RSZXNwb25zZTogSVByb2R1Y3RzUmVzcG9uc2UgfCBudWxsID1cbiAgICAgICAgICAgICAgICByZXNwb25zZS5wcm9kdWN0cy5maW5kKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmlkLnRvU3RyaW5nKDEwKSA9PT0gaWQ7XG4gICAgICAgICAgICAgICAgfSkgPz8gbnVsbDtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0UmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYWdlKG5ldyBJdGVtUGFnZShwcm9kdWN0UmVzcG9uc2UpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hhbmdlUGFnZShuZXcgTm90Rm91bmRQYWdlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgIGNhc2UgJyMvZ2FsbGVyeSc6XG4gICAgICAgICAgICBjYXNlICcnOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlUGFnZShHYWxsZXJ5SW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnIy9jYXJ0Jzoge1xuICAgICAgICAgICAgICAgIC8vVE9ETzogY2hhbmdlIHBhZ2UgdG8gY2FydDtcbiAgICAgICAgICAgICAgICBjaGFuZ2VQYWdlKEdhbGxlcnlJbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlUGFnZShuZXcgTm90Rm91bmRQYWdlKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qIFF1ZXJ5IHByb2Nlc3NpbmcgKi9cbiAgICAgICAgdGhpcy5fcXVlcnkgPSBSb3V0ZXIucHJvY2Vzc1F1ZXJ5KCk7XG4gICAgICAgIEdhbGxlcnlJbnN0YW5jZS5zaG93RGF0YShSb3V0ZXIuZmlsdGVySXRlbXNCeVF1ZXJ5KHRoaXMuX3F1ZXJ5KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgcHJvY2Vzc1F1ZXJ5KCk6IElGaWx0ZXJzUXVlcnkge1xuICAgICAgICBjb25zdCByZXN1bHQ6IElGaWx0ZXJzUXVlcnkgPSB7fTtcbiAgICAgICAgY29uc3QgdXJsUXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBjb25zdCBicmFuZHMgPSB1cmxRdWVyeS5nZXQoJ2JyYW5kcycpO1xuICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gdXJsUXVlcnkuZ2V0KCdjYXRlZ29yaWVzJyk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gdXJsUXVlcnkuZ2V0KCdwcmljZScpO1xuICAgICAgICBjb25zdCBzdG9jayA9IHVybFF1ZXJ5LmdldCgnc3RvY2snKTtcbiAgICAgICAgY29uc3Qgc29ydGluZyA9IHVybFF1ZXJ5LmdldCgnc29ydGluZycpO1xuICAgICAgICBjb25zdCBzZWFyY2ggPSB1cmxRdWVyeS5nZXQoJ3NlYXJjaCcpO1xuICAgICAgICBjb25zdCBzbWFsbE1vZGUgPSB1cmxRdWVyeS5nZXQoJ3NtYWxsTW9kZScpO1xuICAgICAgICBpZiAoYnJhbmRzKSByZXN1bHQuYnJhbmRzID0gYnJhbmRzLnNwbGl0KCfihpUnKTtcbiAgICAgICAgaWYgKGNhdGVnb3JpZXMpIHJlc3VsdC5jYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5zcGxpdCgn4oaVJyk7XG4gICAgICAgIGlmIChwcmljZSkgcmVzdWx0LnByaWNlID0gcHJpY2Uuc3BsaXQoJ+KGlScpO1xuICAgICAgICBpZiAoc3RvY2spIHJlc3VsdC5zdG9jayA9IHN0b2NrLnNwbGl0KCfihpUnKTtcbiAgICAgICAgaWYgKHNvcnRpbmcpIHJlc3VsdC5zb3J0aW5nID0gTnVtYmVyKHNvcnRpbmcpO1xuICAgICAgICBpZiAoc2VhcmNoKSByZXN1bHQuc2VhcmNoID0gc2VhcmNoO1xuICAgICAgICBpZiAoc21hbGxNb2RlKSByZXN1bHQuc21hbGxNb2RlID0gQm9vbGVhbihzbWFsbE1vZGUpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHB1YmxpYyBjaGFuZ2VRdWVyeSh1cGRhdGVRdWVyeTogSUZpbHRlcnNRdWVyeSk6IElQcm9kdWN0c1Jlc3BvbnNlW10ge1xuICAgICAgICB0aGlzLl9xdWVyeSA9IHVwZGF0ZVF1ZXJ5O1xuICAgICAgICBpZiAodGhpcy5fcXVlcnkuY2F0ZWdvcmllcz8ubGVuZ3RoID09PSAwKSBkZWxldGUgdGhpcy5fcXVlcnkuY2F0ZWdvcmllcztcbiAgICAgICAgaWYgKHRoaXMuX3F1ZXJ5LmJyYW5kcz8ubGVuZ3RoID09PSAwKSBkZWxldGUgdGhpcy5fcXVlcnkuYnJhbmRzO1xuICAgICAgICBpZiAodGhpcy5fcXVlcnkuc2VhcmNoPy5sZW5ndGggPT09IDApIGRlbGV0ZSB0aGlzLl9xdWVyeS5zZWFyY2g7XG4gICAgICAgIGNvbnN0IHVybFNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fcXVlcnkpKSB7XG4gICAgICAgICAgICBsZXQgcGFyYW06IHN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHBhcmFtID0gdmFsdWUuam9pbign4oaVJyk7XG4gICAgICAgICAgICB1cmxTZWFyY2hQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW0pO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgJycsIFJvdXRlci5nZXRMb2NhdGlvbih1cmxTZWFyY2hQYXJhbXMudG9TdHJpbmcoKSkpO1xuICAgICAgICByZXR1cm4gUm91dGVyLmZpbHRlckl0ZW1zQnlRdWVyeSh1cGRhdGVRdWVyeSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBnZXRMb2NhdGlvbihzZWFyY2g/OiBzdHJpbmcsIGhhc2g/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICtcbiAgICAgICAgICAgICcvLycgK1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QgK1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICtcbiAgICAgICAgICAgICh0eXBlb2Ygc2VhcmNoID09PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggOiBzZWFyY2gubGVuZ3RoID09PSAwID8gc2VhcmNoIDogYD8ke3NlYXJjaH1gKSArXG4gICAgICAgICAgICAodHlwZW9mIGhhc2ggPT09ICd1bmRlZmluZWQnID8gd2luZG93LmxvY2F0aW9uLmhhc2ggOiBgIyR7aGFzaH1gKVxuICAgICAgICApO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9nbG9iYWwuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvcnNzY2hvb2wtbG9nby5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9naXRodWItbG9nby5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9sb3VwZS5zdmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy90aWxlcy5zdmcnO1xuaW1wb3J0IHsgSVJlc3BvbnNlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnLi9jb21wb25lbnRzL3JvdXRlcic7XG5pbXBvcnQgR2FsbGVyeVBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL2dhbGxlcnlQYWdlL0dhbGxlcnlQYWdlJztcbmltcG9ydCBQYWdlIGZyb20gJy4vUGFnZSc7XG5cbmNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXIoKTtcbmV4cG9ydCBsZXQgcmVzcG9uc2U6IElSZXNwb25zZSA9IHsgbGltaXQ6IDAsIHByb2R1Y3RzOiBbXSwgdG90YWw6IDAsIHNraXA6IDAgfTtcbmV4cG9ydCBjb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5leHBvcnQgbGV0IEdhbGxlcnlJbnN0YW5jZTogR2FsbGVyeVBhZ2UgPSBuZXcgR2FsbGVyeVBhZ2UoKTtcbmNvbnN0IG5hbWVFbGVtZW50OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbmFtZScpID8/IG5ldyBIVE1MRWxlbWVudCgpO1xubmFtZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcm91dGVyLmNsZWFyUXVlcnkoKTtcbiAgICBHYWxsZXJ5SW5zdGFuY2UgPSBuZXcgR2FsbGVyeVBhZ2UoKTtcbiAgICBjaGFuZ2VQYWdlKEdhbGxlcnlJbnN0YW5jZSwgdHJ1ZSwgJycpO1xufSk7XG5leHBvcnQgY29uc3QgbWFpbkVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5uJykgPz8gbmV3IEhUTUxFbGVtZW50KCk7XG5sb2FkZXIubG9hZCgpLnRoZW4oKHJlc3BvbmRlZCkgPT4ge1xuICAgIHJlc3BvbnNlID0gcmVzcG9uZGVkO1xuICAgIHJlc3BvbnNlID0ge1xuICAgICAgICBsaW1pdDogcmVzcG9uc2UubGltaXQsXG4gICAgICAgIHByb2R1Y3RzOiByZXNwb25zZS5wcm9kdWN0cy5zb3J0KChpdGVtMSwgaXRlbTIpID0+IGl0ZW0xLnByaWNlIC0gaXRlbTIucHJpY2UpLFxuICAgICAgICBza2lwOiByZXNwb25zZS5za2lwLFxuICAgICAgICB0b3RhbDogcmVzcG9uc2UudG90YWwsXG4gICAgfTtcbiAgICByb3V0ZXIucm91dGUoKTtcbn0pO1xuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVBhZ2UocGFnZTogUGFnZSwgcHVzaEhpc3Rvcnk/OiBib29sZWFuLCBzZWFyY2g/OiBzdHJpbmcpIHtcbiAgICBtYWluRWxlbWVudC5yZXBsYWNlQ2hpbGRyZW4ocGFnZS5IdG1sRWxlbWVudEluc3RhbmNlKTtcbiAgICBpZiAocHVzaEhpc3RvcnkpIGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgUm91dGVyLmdldExvY2F0aW9uKHNlYXJjaCwgcGFnZS5oYXNoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNDdXN0b21FdmVudChldmVudDogRXZlbnQpOiBldmVudCBpcyBDdXN0b21FdmVudCB7XG4gICAgcmV0dXJuICdkZXRhaWwnIGluIGV2ZW50O1xufVxuXG53aW5kb3cub25sb2FkID0gcm91dGVyLnJvdXRlO1xud2luZG93Lm9ucG9wc3RhdGUgPSByb3V0ZXIucm91dGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=