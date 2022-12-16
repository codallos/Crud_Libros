/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Frontend/app.js":
/*!*************************!*\
  !*** ./Frontend/app.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interfaz_usuario__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaz_usuario */ \"./Frontend/interfaz_usuario.js\");\n__webpack_require__(/*! ./estilos/estilos.css */ \"./Frontend/estilos/estilos.css\");\n\n\n\n//import petiArchi from './servicios/archivosServicios';\n\n\ndocument.addEventListener('DOMContentLoaded',() => {\n    const interfaz2 = new _interfaz_usuario__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    interfaz2.pintarArchivo();\n}); \n\ndocument.getElementById(\"formulario1\")\n    .addEventListener('submit', e => {\n        const titulo  = document.getElementById('titulo').value;\n        const autor = document.getElementById('Autor').value;\n        const isbn = document.getElementById('isbn').value;\n        const image = document.getElementById('image').files;\n\n        const formulrioEnviado = new FormData();\n        formulrioEnviado.append('titulo', titulo);\n        formulrioEnviado.append('autor', autor);\n        formulrioEnviado.append('isbn', isbn);\n        formulrioEnviado.append('image', image[0]); //debe de tener el mismo nombre que el input ue lo envia\n\n        //const misPeticiones = new petiArchi();\n        //misPeticiones.GuardaLibros(formulrioEnviado);\n\n        const miInterfaz = new _interfaz_usuario__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        miInterfaz.subirArchivo(formulrioEnviado);\n        miInterfaz.pintarMensaje('Subido','verde-ok', 3000)\n        e.preventDefault();\n        miInterfaz.limpiarFormulario();\n\n        console.log(titulo,autor, isbn,image);\n        //console.log(titulo,autor, isbn);\n\n    });\ndocument.getElementById('listado')\n    .addEventListener('click', e => {\n        //console.log('click')\n        if(e.target.classList.contains('x')){\n            //console.log('click')\n            \n\n            console.log(e.target.getAttribute('id'))\n            const capturaId = e.target.getAttribute('id');\n\n            const interfaz3 = new _interfaz_usuario__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n            interfaz3.eliminarArchivo(capturaId);\n            interfaz3.pintarMensaje('Eliminado','red-ok',3000);\n        }\n        e.preventDefault();\n\n    });\n\n/*\ndocument.getElementById('navegacion')\n    .addEventListener('click', e =>{\n        console.log('ok')\n        const pruebasInt = new interfaz;\n        pruebasInt.contadorArchivosSeleccionados();\n    });*/\n\n//const nodoVisto = document.getElementById('formulario1');\n/*const nodoVisto = document.getElementById('image');\nconst config = {childList:true, subtree:true,CharacterData:true};\nconst callback = (mutation,oberva)=>{\n    \n        console.log('image')\n  \n}\nconst oberva = new MutationObserver(callback);\noberva.observe(nodoVisto,config);*/\n\nconst nodoVistodos = document.getElementById('image')\n    .addEventListener('change',()=>{\n        console.log(document.getElementById('image'));\n        const pruebasOK = new _interfaz_usuario__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n        pruebasOK.contadorArchivosSeleccionados();\n        //console.log('desde cambio')\n    })\n\n\n//# sourceURL=webpack://app/./Frontend/app.js?");

/***/ }),

/***/ "./Frontend/interfaz_usuario.js":
/*!**************************************!*\
  !*** ./Frontend/interfaz_usuario.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _servicios_archivosServicios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./servicios/archivosServicios */ \"./Frontend/servicios/archivosServicios.js\");\n/* harmony import */ var _servicios_archivosServicios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_servicios_archivosServicios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! timeago.js */ \"./node_modules/timeago.js/esm/index.js\");\n\nconst peticion = new (_servicios_archivosServicios__WEBPACK_IMPORTED_MODULE_0___default())();\n\n\n\n\nclass interfaz{\n\n    async pintarArchivo(){\n\n        const jasonConListadoArchivos = await peticion.obtenLibros();\n        //console.log(jasonConListadoArchivos);\n\n        const contenedorListado = document.getElementById('listado')\n        contenedorListado.innerHTML = ''; // Vaciamos el contenbedor\n\n        jasonConListadoArchivos.forEach(jsonArchivo => {\n\n            const div = document.createElement('div');\n            div.className='tarjeta';\n            div.innerHTML= `\n            \n\n                <div class=\"general-info\">\n                    <div class=\"imagen-libro\">\n                        <img src=\"http://localhost:3000${jsonArchivo.rutaAudio}\" alt=\"mi imagen\" class=\"final-imagen\">\n                    </div>\n                    <div class=\"informacion\">\n                        <div class=\"titulo\"> ${jsonArchivo.titulo}</div>\n                        <div class=\"autor-ok\">${jsonArchivo.autor}</div>\n                        <div class=\"boton-eliminar-contenedor\">\n                           \n                            <a href=\"#\" class=\"x\" id=\"${jsonArchivo._id}\">X</a>\n                        </div>\n                    </div>\n\n                </div>\n                \n                <div class=\"tiempo-atras\">\n                    ${(0,timeago_js__WEBPACK_IMPORTED_MODULE_1__.format)(jsonArchivo.fechaCreacion)}\n                </div>\n            \n            \n            `;\n\n            contenedorListado.appendChild(div); //agregamos los div crados;\n        });\n        \n        \n        \n\n        //console.log(contenedorListado);\n\n    }\n\n    async subirArchivo(formularioVirtual){\n\n        const respuesta = await peticion.GuardaLibros(formularioVirtual);\n       // this.limpiarFormulario();\n        this.pintarArchivo();\n        this.limpiarFormulario();\n    }\n\n    limpiarFormulario(){\n\n        document.getElementById('formulario1').reset();\n\n    }\n\n    async eliminarArchivo(id){\n        await peticion.EliminaLibros(id);\n        this.pintarArchivo();\n    }\n\n    pintarMensaje(mensaje, color, tiemmpo){\n\n       const div = document.createElement('div'); // elemento div ue se va a insertar\n       div.className = `${color} mensaje-script`;\n\n       div.appendChild(document.createTextNode(mensaje)); //agrega un texto al contenedor div creado\n\n       const contenedor = document.querySelector('#formulario1'); //elemento padre del contenedor ue se va a insertar\n       const formularioOk = document.querySelector('.formulario'); //elemento donde antes del cual se va a insertar\n\n       contenedor.insertBefore(div, formularioOk);\n\n       setTimeout(()=>{\n            document.querySelector('.mensaje-script').remove();\n       }, tiemmpo);\n\n\n    }\n\n    contadorArchivosSeleccionados(){\n\n        const resultado = document.getElementById('image').files[0]\n        const nombreArchivoOk = resultado.name;\n        document.getElementById('select-archivi').innerHTML = nombreArchivoOk;\n        console.log(resultado.name);\n       /* if (console.log(resultado !== undefined)){\n            document.getElementById('select-archivi').innerHTML = \"OK seleccionado\"\n        }; //cuando se tiene algo seleccionado */\n\n    }\n\n    \n    \n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interfaz);\n\n\n//# sourceURL=webpack://app/./Frontend/interfaz_usuario.js?");

/***/ }),

/***/ "./Frontend/servicios/archivosServicios.js":
/*!*************************************************!*\
  !*** ./Frontend/servicios/archivosServicios.js ***!
  \*************************************************/
/***/ ((module) => {

eval("// Cramos las clases para hacer las peticiones POST GET DELETE \n\nclass petiArchi {\n\n    constructor(){\n        this.DIRECCION = \"http://localhost:3000/api/archivos\";\n    };\n\n    async obtenLibros(){\n\n        const respuesta = await fetch(this.DIRECCION);\n        //const jasonArchivos = await respuesta.jason();\n        const jasonArchivos = await respuesta.json();\n        return jasonArchivos\n        //return respuesta;\n    };\n\n    async GuardaLibros(formularioDatos){\n\n        const respuesta = await fetch(this.DIRECCION,{\n\n            method: 'POST',\n            body: formularioDatos\n           \n            \n        });\n\n        const jasonRespuesta = await respuesta.json();\n\n        console.log(jasonRespuesta);\n\n    };\n\n    async EliminaLibros(id){\n\n        const respuesta = await fetch(`${this.DIRECCION}/${id}`,{\n            headers: {\n                'content-type' : 'application/json'\n            },\n            method: 'DELETE'\n\n\n\n        });\n\n        const respuestaJson = await respuesta.json();\n        console.log(respuestaJson);\n\n    }\n\n\n}\n\nmodule.exports = petiArchi;\n\n\n//# sourceURL=webpack://app/./Frontend/servicios/archivosServicios.js?");

/***/ }),

/***/ "./Frontend/estilos/estilos.css":
/*!**************************************!*\
  !*** ./Frontend/estilos/estilos.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://app/./Frontend/estilos/estilos.css?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/esm/format.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/esm/utils/date.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n\n\n/**\n * format a TDate into string\n * @param date\n * @param locale\n * @param opts\n */\nvar format = function (date, locale, opts) {\n    // diff seconds\n    var sec = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.diffSec)(date, opts && opts.relativeDate);\n    // format it with locale\n    return (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatDiff)(sec, (0,_register__WEBPACK_IMPORTED_MODULE_1__.getLocale)(locale));\n};\n//# sourceMappingURL=format.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/format.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancel\": () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.cancel),\n/* harmony export */   \"format\": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.format),\n/* harmony export */   \"register\": () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__.register),\n/* harmony export */   \"render\": () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.render)\n/* harmony export */ });\n/* harmony import */ var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en_US */ \"./node_modules/timeago.js/esm/lang/en_US.js\");\n/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/zh_CN */ \"./node_modules/timeago.js/esm/lang/zh_CN.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ \"./node_modules/timeago.js/esm/format.js\");\n/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime */ \"./node_modules/timeago.js/esm/realtime.js\");\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\n\n\n\n(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/index.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/en_US.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {\n    if (idx === 0)\n        return ['just now', 'right now'];\n    var unit = EN_US[Math.floor(idx / 2)];\n    if (diff > 1)\n        unit += 's';\n    return [diff + \" \" + unit + \" ago\", \"in \" + diff + \" \" + unit];\n}\n//# sourceMappingURL=en_US.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/lang/en_US.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/zh_CN.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {\n    if (idx === 0)\n        return ['刚刚', '片刻后'];\n    var unit = ZH_CN[~~(idx / 2)];\n    return [diff + \" \" + unit + \"\\u524D\", diff + \" \" + unit + \"\\u540E\"];\n}\n//# sourceMappingURL=zh_CN.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/lang/zh_CN.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/realtime.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cancel\": () => (/* binding */ cancel),\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ \"./node_modules/timeago.js/esm/utils/dom.js\");\n/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date */ \"./node_modules/timeago.js/esm/utils/date.js\");\n/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ \"./node_modules/timeago.js/esm/register.js\");\n\n\n\n// all realtime timer\nvar TIMER_POOL = {};\n/**\n * clear a timer from pool\n * @param tid\n */\nvar clear = function (tid) {\n    clearTimeout(tid);\n    delete TIMER_POOL[tid];\n};\n// run with timer(setTimeout)\nfunction run(node, date, localeFunc, opts) {\n    // clear the node's exist timer\n    clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));\n    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;\n    // get diff seconds\n    var diff = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.diffSec)(date, relativeDate);\n    // render\n    node.innerText = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.formatDiff)(diff, localeFunc);\n    var tid = setTimeout(function () {\n        run(node, date, localeFunc, opts);\n    }, Math.min(Math.max((0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.nextInterval)(diff), minInterval || 1) * 1000, 0x7fffffff));\n    // there is no need to save node in object. Just save the key\n    TIMER_POOL[tid] = 0;\n    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.setTimerId)(node, tid);\n}\n/**\n * cancel a timer or all timers\n * @param node - node hosting the time string\n */\nfunction cancel(node) {\n    // cancel one\n    if (node)\n        clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));\n    // cancel all\n    // @ts-ignore\n    else\n        Object.keys(TIMER_POOL).forEach(clear);\n}\n/**\n * render a dom realtime\n * @param nodes\n * @param locale\n * @param opts\n */\nfunction render(nodes, locale, opts) {\n    // by .length\n    // @ts-ignore\n    var nodeList = nodes.length ? nodes : [nodes];\n    nodeList.forEach(function (node) {\n        run(node, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDateAttribute)(node), (0,_register__WEBPACK_IMPORTED_MODULE_2__.getLocale)(locale), opts || {});\n    });\n    return nodeList;\n}\n//# sourceMappingURL=realtime.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/realtime.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/register.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/register.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocale\": () => (/* binding */ getLocale),\n/* harmony export */   \"register\": () => (/* binding */ register)\n/* harmony export */ });\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\n/**\n * All supported locales\n */\nvar Locales = {};\n/**\n * register a locale\n * @param locale\n * @param func\n */\nvar register = function (locale, func) {\n    Locales[locale] = func;\n};\n/**\n * get a locale, default is en_US\n * @param locale\n * @returns {*}\n */\nvar getLocale = function (locale) {\n    return Locales[locale] || Locales['en_US'];\n};\n//# sourceMappingURL=register.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/register.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/date.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"diffSec\": () => (/* binding */ diffSec),\n/* harmony export */   \"formatDiff\": () => (/* binding */ formatDiff),\n/* harmony export */   \"nextInterval\": () => (/* binding */ nextInterval),\n/* harmony export */   \"toDate\": () => (/* binding */ toDate)\n/* harmony export */ });\n/**\n * Created by hustcc on 18/5/20.\n * Contract: i@hust.cc\n */\nvar SEC_ARRAY = [\n    60,\n    60,\n    24,\n    7,\n    365 / 7 / 12,\n    12,\n];\n/**\n * format Date / string / timestamp to timestamp\n * @param input\n * @returns {*}\n */\nfunction toDate(input) {\n    if (input instanceof Date)\n        return input;\n    // @ts-ignore\n    if (!isNaN(input) || /^\\d+$/.test(input))\n        return new Date(parseInt(input));\n    input = (input || '')\n        // @ts-ignore\n        .trim()\n        .replace(/\\.\\d+/, '') // remove milliseconds\n        .replace(/-/, '/')\n        .replace(/-/, '/')\n        .replace(/(\\d)T(\\d)/, '$1 $2')\n        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC\n        .replace(/([+-]\\d\\d):?(\\d\\d)/, ' $1$2'); // -04:00 -> -0400\n    return new Date(input);\n}\n/**\n * format the diff second to *** time ago, with setting locale\n * @param diff\n * @param localeFunc\n * @returns\n */\nfunction formatDiff(diff, localeFunc) {\n    /**\n     * if locale is not exist, use defaultLocale.\n     * if defaultLocale is not exist, use build-in `en`.\n     * be sure of no error when locale is not exist.\n     *\n     * If `time in`, then 1\n     * If `time ago`, then 0\n     */\n    var agoIn = diff < 0 ? 1 : 0;\n    /**\n     * Get absolute value of number (|diff| is non-negative) value of x\n     * |diff| = diff if diff is positive\n     * |diff| = -diff if diff is negative\n     * |0| = 0\n     */\n    diff = Math.abs(diff);\n    /**\n     * Time in seconds\n     */\n    var totalSec = diff;\n    /**\n     * Unit of time\n     */\n    var idx = 0;\n    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {\n        diff /= SEC_ARRAY[idx];\n    }\n    /**\n     * Math.floor() is alternative of ~~\n     *\n     * The differences and bugs:\n     * Math.floor(3.7) -> 4 but ~~3.7 -> 3\n     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552\n     *\n     * More information about the performance of algebraic:\n     * https://www.youtube.com/watch?v=65-RbBwZQdU\n     */\n    diff = Math.floor(diff);\n    idx *= 2;\n    if (diff > (idx === 0 ? 9 : 1))\n        idx += 1;\n    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());\n}\n/**\n * calculate the diff second between date to be formatted an now date.\n * @param date\n * @param relativeDate\n * @returns {number}\n */\nfunction diffSec(date, relativeDate) {\n    var relDate = relativeDate ? toDate(relativeDate) : new Date();\n    return (+relDate - +toDate(date)) / 1000;\n}\n/**\n * nextInterval: calculate the next interval time.\n * - diff: the diff sec between now and date to be formatted.\n *\n * What's the meaning?\n * diff = 61 then return 59\n * diff = 3601 (an hour + 1 second), then return 3599\n * make the interval with high performance.\n **/\nfunction nextInterval(diff) {\n    var rst = 1, i = 0, d = Math.abs(diff);\n    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {\n        diff /= SEC_ARRAY[i];\n        rst *= SEC_ARRAY[i];\n    }\n    d = d % rst;\n    d = d ? rst - d : rst;\n    return Math.ceil(d);\n}\n//# sourceMappingURL=date.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/utils/date.js?");

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDateAttribute\": () => (/* binding */ getDateAttribute),\n/* harmony export */   \"getTimerId\": () => (/* binding */ getTimerId),\n/* harmony export */   \"setTimerId\": () => (/* binding */ setTimerId)\n/* harmony export */ });\nvar ATTR_TIMEAGO_TID = 'timeago-id';\n/**\n * get the datetime attribute, `datetime` are supported.\n * @param node\n * @returns {*}\n */\nfunction getDateAttribute(node) {\n    return node.getAttribute('datetime');\n}\n/**\n * set the node attribute, native DOM\n * @param node\n * @param timerId\n * @returns {*}\n */\nfunction setTimerId(node, timerId) {\n    // @ts-ignore\n    node.setAttribute(ATTR_TIMEAGO_TID, timerId);\n}\n/**\n * get the timer id\n * @param node\n */\nfunction getTimerId(node) {\n    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));\n}\n//# sourceMappingURL=dom.js.map\n\n//# sourceURL=webpack://app/./node_modules/timeago.js/esm/utils/dom.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Frontend/app.js");
/******/ 	
/******/ })()
;