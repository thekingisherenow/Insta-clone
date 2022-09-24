"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        // GithubProvider({\n        //   clientId: process.env.GITHUB_ID,\n        //   clientSecret: process.env.GITHUB_SECRET,\n        // }),\n        next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_CLIENT_ID,\n            clientSecret: process.env.FACEBOOK_CLIENT_SECRET\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.user.username = session.user.name.split(\" \").join(\"\").toLowerCase();\n            session.user.uid = token.sub;\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ3VCO0FBQ0s7QUFHckQsTUFBTUcsV0FBVyxHQUFHO0lBQ3pCLGlEQUFpRDtJQUNqREMsU0FBUyxFQUFFO1FBQ1QsbUJBQW1CO1FBQ25CLHFDQUFxQztRQUNyQyw2Q0FBNkM7UUFDN0MsTUFBTTtRQUNORixtRUFBZ0IsQ0FBQztZQUNmRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0I7WUFDeENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLHNCQUFzQjtTQUNqRCxDQUFDO0tBQ0g7SUFDREMsS0FBSyxFQUFDO1FBQ0pDLE1BQU0sRUFBRSxjQUFjO0tBQ3ZCO0lBQ0RDLFNBQVMsRUFBQztRQUNOLE1BQU1DLE9BQU8sRUFBQyxFQUFDQSxPQUFPLEdBQUNDLEtBQUssR0FBQ0MsSUFBSSxHQUFDLEVBQUU7WUFDbENGLE9BQU8sQ0FBQ0UsSUFBSSxDQUFDQyxRQUFRLEdBQUdILE9BQU8sQ0FBQ0UsSUFBSSxDQUFDRSxJQUFJLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxXQUFXLEVBQUUsQ0FBQztZQUM1RVAsT0FBTyxDQUFDRSxJQUFJLENBQUNNLEdBQUcsR0FBR1AsS0FBSyxDQUFDUSxHQUFHLENBQUM7WUFDN0IsT0FBT1QsT0FBTyxDQUFDO1FBQ2pCLENBQUM7S0FDSjtDQUNGO0FBQ0QsaUVBQWVkLGdEQUFRLENBQUNHLFdBQVcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Z1Y2svLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxuaW1wb3J0IEdpdGh1YlByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1YlwiXG5pbXBvcnQgRmFjZWJvb2tQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9mYWNlYm9va1wiO1xuXG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgLy8gQ29uZmlndXJlIG9uZSBvciBtb3JlIGF1dGhlbnRpY2F0aW9uIHByb3ZpZGVyc1xuICBwcm92aWRlcnM6IFtcbiAgICAvLyBHaXRodWJQcm92aWRlcih7XG4gICAgLy8gICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lELFxuICAgIC8vICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfU0VDUkVULFxuICAgIC8vIH0pLFxuICAgIEZhY2Vib29rUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVFxuICAgIH0pXG4gIF0sXG4gIHBhZ2VzOntcbiAgICBzaWduSW46IFwiL2F1dGgvc2lnbmluXCJcbiAgfSxcbiAgY2FsbGJhY2tzOntcbiAgICAgIGFzeW5jIHNlc3Npb24oe3Nlc3Npb24sdG9rZW4sdXNlcn0pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gc2Vzc2lvbi51c2VyLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnVpZCA9IHRva2VuLnN1YjtcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiRkFDRUJPT0tfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVCIsInBhZ2VzIiwic2lnbkluIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsInVzZXJuYW1lIiwibmFtZSIsInNwbGl0Iiwiam9pbiIsInRvTG93ZXJDYXNlIiwidWlkIiwic3ViIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();