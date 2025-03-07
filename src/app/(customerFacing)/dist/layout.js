"use strict";
exports.__esModule = true;
exports.dynamic = void 0;
var Nav_1 = require("@/components/Nav");
var Nav_2 = require("@/components/Nav");
exports.dynamic = "force-dynamic";
function Layout(_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(Nav_1["default"], null,
            React.createElement(Nav_2["default"], { href: "/" }, "Home"),
            React.createElement(Nav_2["default"], { href: "/products" }, "Products"),
            React.createElement(Nav_2["default"], { href: "/orders" }, "My Orders")),
        React.createElement("div", { className: "container my-6" }, children)));
}
exports["default"] = Layout;
