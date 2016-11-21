webpackJsonp([0],{

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RouteB = function (_Component) {
    _inherits(RouteB, _Component);

    function RouteB() {
        _classCallCheck(this, RouteB);

        return _possibleConstructorReturn(this, (RouteB.__proto__ || Object.getPrototypeOf(RouteB)).apply(this, arguments));
    }

    _createClass(RouteB, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    null,
                    'Route B'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/' },
                    'Home'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    ' | '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/route-b' },
                    'Route B'
                )
            );
        }
    }]);

    return RouteB;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ exports["a"] = RouteB;

/***/ },

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigation__ = __webpack_require__(95);






__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_router__["BrowserRouter"],
    null,
    __WEBPACK_IMPORTED_MODULE_3__navigation__["a" /* default */]
), document.getElementById('root'));

/***/ },

/***/ 95:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Home__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RouteA__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RouteB__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NoMatch__ = __webpack_require__(98);









/* harmony default export */ exports["a"] = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Match"], { exactly: true, pattern: '/', component: __WEBPACK_IMPORTED_MODULE_3__Home__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Match"], { pattern: '/route-a', component: __WEBPACK_IMPORTED_MODULE_4__RouteA__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Match"], { pattern: '/route-b', component: __WEBPACK_IMPORTED_MODULE_5__RouteB__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router__["Miss"], { component: __WEBPACK_IMPORTED_MODULE_6__NoMatch__["a" /* default */] })
);

/***/ },

/***/ 96:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                this.props.children
            );
        }
    }]);

    return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ exports["a"] = App;

/***/ },

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    null,
                    'Home'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/' },
                    'Home'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    ' | '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/route-a' },
                    'Route A'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    ' | '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/route-b' },
                    'Route B'
                )
            );
        }
    }]);

    return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ exports["a"] = Home;

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NoMatch = function (_Component) {
    _inherits(NoMatch, _Component);

    function NoMatch() {
        _classCallCheck(this, NoMatch);

        return _possibleConstructorReturn(this, (NoMatch.__proto__ || Object.getPrototypeOf(NoMatch)).apply(this, arguments));
    }

    _createClass(NoMatch, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    null,
                    'NoMatch'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/' },
                    'Home'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    ' | '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/route-a' },
                    'Route A'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    ' | '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/route-b' },
                    'Route B'
                )
            );
        }
    }]);

    return NoMatch;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ exports["a"] = NoMatch;

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var RouteA = function (_Component) {
    _inherits(RouteA, _Component);

    function RouteA() {
        _classCallCheck(this, RouteA);

        return _possibleConstructorReturn(this, (RouteA.__proto__ || Object.getPrototypeOf(RouteA)).apply(this, arguments));
    }

    _createClass(RouteA, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h2',
                    null,
                    'Route A'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', null),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/' },
                    'Home'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    null,
                    ' | '
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_react_router__["Link"],
                    { to: '/route-b' },
                    'Route B'
                )
            );
        }
    }]);

    return RouteA;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ exports["a"] = RouteA;

/***/ }

},[221]);
//# sourceMappingURL=app.js.map