webpackHotUpdate_N_E("pages/quizz/[id]/[question_id]",{

/***/ "./src/pages/quizz/[id]/[question_id].js":
/*!***********************************************!*\
  !*** ./src/pages/quizz/[id]/[question_id].js ***!
  \***********************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout */ \"./src/components/layout.js\");\n/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-final-form */ \"./node_modules/react-final-form/dist/react-final-form.es.js\");\n/* harmony import */ var _styles_pages_p_quizz_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/pages/_p-quizz.module.scss */ \"./src/styles/pages/_p-quizz.module.scss\");\n/* harmony import */ var _styles_pages_p_quizz_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_p_quizz_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_components_c_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/components/_c-checkbox.module.scss */ \"./src/styles/components/_c-checkbox.module.scss\");\n/* harmony import */ var _styles_components_c_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_components_c_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/doria/Documents/Avem Cre\\u0301ation/Codes/cicerone_app/cicerone_front/src/pages/quizz/[id]/[question_id].js\";\n\n\n\n\n\n\nfunction QuizzQuestion(props) {\n  const onSubmit = async values => {\n    console.log(`values`, values); // await myFetch(\n    //   `${process.env.NEXT_PUBLIC_API_ROOT_URL}api/${props.admin_id}`, \n    //   values,\n    //   \"POST\",\n    //   props.loadData\n    // )\n  };\n\n  const validate = values => {// console.log('values', values)\n  };\n\n  const renderOptions = () => props.body.options.map((option, index) => {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: _styles_components_c_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.checkbox_form,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__[\"Field\"], {\n        component: \"input\",\n        type: \"radio\",\n        name: `question_${props.params.question_id}`,\n        value: option._id\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_components_c_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.check_form,\n        children: option.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, this)]\n    }, index, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, this);\n  });\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: `Quizz ${props.params.id}, question ${props.params.question_id}:`\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_final_form__WEBPACK_IMPORTED_MODULE_3__[\"Form\"], {\n      onSubmit: onSubmit,\n      validate: validate,\n      initialValues: {},\n      render: ({\n        form,\n        submitting\n      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        className: _styles_pages_p_quizz_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.question,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: props.body.content\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_pages_p_quizz_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.option_grid,\n          children: renderOptions()\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 5\n  }, this);\n}\n\n_c = QuizzQuestion;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (QuizzQuestion);\n\nvar _c;\n\n$RefreshReg$(_c, \"QuizzQuestion\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXp6Ly9bcXVlc3Rpb25faWRdLmpzP2JhZGQiXSwibmFtZXMiOlsiUXVpenpRdWVzdGlvbiIsInByb3BzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwidmFsaWRhdGUiLCJyZW5kZXJPcHRpb25zIiwiYm9keSIsIm9wdGlvbnMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsImNoZWNrU3R5bGUiLCJjaGVja2JveF9mb3JtIiwicGFyYW1zIiwicXVlc3Rpb25faWQiLCJfaWQiLCJjaGVja19mb3JtIiwibmFtZSIsImlkIiwiZm9ybSIsInN1Ym1pdHRpbmciLCJxdWl6elN0eWxlIiwicXVlc3Rpb24iLCJjb250ZW50Iiwib3B0aW9uX2dyaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFrREEsU0FBU0EsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFFNUIsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLE1BQU4sSUFBZ0I7QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLFFBQWIsRUFBc0JGLE1BQXRCLEVBRCtCLENBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEdBUkQ7O0FBVUEsUUFBTUcsUUFBUSxHQUFHSCxNQUFNLElBQUksQ0FDekI7QUFDRCxHQUZEOztBQUlBLFFBQU1JLGFBQWEsR0FBRyxNQUFNTixLQUFLLENBQUNPLElBQU4sQ0FBV0MsT0FBWCxDQUFtQkMsR0FBbkIsQ0FBdUIsQ0FBQ0MsTUFBRCxFQUFTQyxLQUFULEtBQW1CO0FBQ3BFLHdCQUNFO0FBQU8sZUFBUyxFQUFFQyxnRkFBVSxDQUFDQyxhQUE3QjtBQUFBLDhCQUNFLHFFQUFDLHNEQUFEO0FBQ0UsaUJBQVMsRUFBQyxPQURaO0FBRUUsWUFBSSxFQUFDLE9BRlA7QUFHRSxZQUFJLEVBQUcsWUFBV2IsS0FBSyxDQUFDYyxNQUFOLENBQWFDLFdBQVksRUFIN0M7QUFJRSxhQUFLLEVBQUVMLE1BQU0sQ0FBQ007QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBT0U7QUFBSyxpQkFBUyxFQUFFSixnRkFBVSxDQUFDSyxVQUEzQjtBQUFBLGtCQUNHUCxNQUFNLENBQUNRO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUEsT0FBaURQLEtBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQWFELEdBZDJCLENBQTVCOztBQWdCQSxzQkFDRSxxRUFBQywwREFBRDtBQUFBLDRCQUNFO0FBQUEsZ0JBQU0sU0FBUVgsS0FBSyxDQUFDYyxNQUFOLENBQWFLLEVBQUcsY0FBYW5CLEtBQUssQ0FBQ2MsTUFBTixDQUFhQyxXQUFZO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUdFLHFFQUFDLHFEQUFEO0FBQ0UsY0FBUSxFQUFFZCxRQURaO0FBRUUsY0FBUSxFQUFFSSxRQUZaO0FBR0UsbUJBQWEsRUFBRSxFQUhqQjtBQUlFLFlBQU0sRUFBRSxDQUFDO0FBQUVlLFlBQUY7QUFBUUM7QUFBUixPQUFELGtCQUNOO0FBQU0saUJBQVMsRUFBRUMsd0VBQVUsQ0FBQ0MsUUFBNUI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLdkIsS0FBSyxDQUFDTyxJQUFOLENBQVdpQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFFRix3RUFBVSxDQUFDRyxXQUEzQjtBQUFBLG9CQUNHbkIsYUFBYTtBQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7S0FuRFFQLGE7O0FBcURNQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9xdWl6ei9baWRdL1txdWVzdGlvbl9pZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHsgRm9ybSwgRmllbGQgfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJztcblxuaW1wb3J0IHF1aXp6U3R5bGUgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9wYWdlcy9fcC1xdWl6ei5tb2R1bGUuc2Nzc1wiXG5pbXBvcnQgY2hlY2tTdHlsZSBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NvbXBvbmVudHMvX2MtY2hlY2tib3gubW9kdWxlLnNjc3NcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICAvLyBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfUk9PVF9VUkx9YXBpLyR7cGFyYW1zLmFkbWluX2lkfWApXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ST09UX1VSTH1hcGkvcXVpenpgKVxuICBsZXQgYm9keVxuICBpZihyZXNwb25zZS5vayl7XG4gICAgYm9keSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IocmVzcG9uc2UuZXJyb3IpXG4gIH1cbiAgLy8gY29uc3QgYm9keSA9IHtcbiAgLy8gICBjb250ZW50OiBcIlF1ZWxsZSBlc3QgbGEgcsOpZ2lvbiBkJ29yaWdpbmUgZGUgbGEgUm91Z2UgZGVzIEZsYW5kcmVzID9cIixcbiAgLy8gICBhbnN3ZXI6IFwiQmVsZ2lxdWUgJiBGcmFuY2VcIixcbiAgLy8gICBvcHRpb25zOiBbXG4gIC8vICAgICBcIkJlbGdpcXVlICYgRnJhbmNlXCIsXG4gIC8vICAgICBcIkdyYW5kZS1CcmV0YWduZSAmIElyZWxhbmRlXCIsXG4gIC8vICAgICBcIkVjb3NzZVwiLFxuICAvLyAgICAgXCJJcmxhbmRlXCIsXG4gIC8vICAgICBcIkFsbGVtYWduZSwgUsOpcFRjaMOocXVlICYgQXV0cmljaGVcIixcbiAgLy8gICAgIFwiw4l0YXRzLVVuaXNcIixcbiAgLy8gICAgIFwiSW50ZXJuYXRpb25hbFwiXG4gIC8vICAgXVxuICAvLyB9XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGJvZHk6IGJvZHksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGFkbWluUGF0aHMgPSBbXG4gICAge3F1aXp6X2lkOiBcImJlZXJfdHlwZXNcIiwgcXVlc3Rpb25faWQ6IFwiMVwifSxcbiAgXVxuICBjb25zdCBwYXRocyA9IGFkbWluUGF0aHMubWFwKHBhdGggPT57XG4gICAgcmV0dXJuIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZDogcGF0aC5xdWl6el9pZCxcbiAgICAgICAgcXVlc3Rpb25faWQ6IHBhdGgucXVlc3Rpb25faWRcbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gUXVpenpRdWVzdGlvbihwcm9wcykge1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgdmFsdWVzID0+IHtcbiAgICBjb25zb2xlLmxvZyhgdmFsdWVzYCwgdmFsdWVzKVxuICAgIC8vIGF3YWl0IG15RmV0Y2goXG4gICAgLy8gICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfUk9PVF9VUkx9YXBpLyR7cHJvcHMuYWRtaW5faWR9YCwgXG4gICAgLy8gICB2YWx1ZXMsXG4gICAgLy8gICBcIlBPU1RcIixcbiAgICAvLyAgIHByb3BzLmxvYWREYXRhXG4gICAgLy8gKVxuICB9XG5cbiAgY29uc3QgdmFsaWRhdGUgPSB2YWx1ZXMgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWx1ZXMnLCB2YWx1ZXMpXG4gIH1cblxuICBjb25zdCByZW5kZXJPcHRpb25zID0gKCkgPT4gcHJvcHMuYm9keS5vcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiggXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjaGVja1N0eWxlLmNoZWNrYm94X2Zvcm19IGtleT17aW5kZXh9PlxuICAgICAgICA8RmllbGRcbiAgICAgICAgICBjb21wb25lbnQ9XCJpbnB1dFwiXG4gICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICBuYW1lPXtgcXVlc3Rpb25fJHtwcm9wcy5wYXJhbXMucXVlc3Rpb25faWR9YH1cbiAgICAgICAgICB2YWx1ZT17b3B0aW9uLl9pZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NoZWNrU3R5bGUuY2hlY2tfZm9ybX0+XG4gICAgICAgICAge29wdGlvbi5uYW1lfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMT57YFF1aXp6ICR7cHJvcHMucGFyYW1zLmlkfSwgcXVlc3Rpb24gJHtwcm9wcy5wYXJhbXMucXVlc3Rpb25faWR9OmB9PC9oMT5cblxuICAgICAgPEZvcm1cbiAgICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxuICAgICAgICB2YWxpZGF0ZT17dmFsaWRhdGV9XG4gICAgICAgIGluaXRpYWxWYWx1ZXM9e3t9fVxuICAgICAgICByZW5kZXI9eyh7IGZvcm0sIHN1Ym1pdHRpbmcgfSkgPT4gKFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17cXVpenpTdHlsZS5xdWVzdGlvbn0+XG4gICAgICAgICAgICA8aDI+e3Byb3BzLmJvZHkuY29udGVudH08L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3F1aXp6U3R5bGUub3B0aW9uX2dyaWR9PlxuICAgICAgICAgICAgICB7cmVuZGVyT3B0aW9ucygpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgLz5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWl6elF1ZXN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/quizz/[id]/[question_id].js\n");

/***/ })

})