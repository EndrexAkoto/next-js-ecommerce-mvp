"use strict";
exports.__esModule = true;
exports.dynamic = void 0;
var Nav_1 = require("@/components/Nav");
var Nav_2 = require("@/components/Nav");
var Footer_1 = require("@/components/Footer");
exports.dynamic = "force-dynamic";
function Layout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: "flex flex-col min-h-screen" },
        React.createElement(Nav_1["default"], null,
            React.createElement(Nav_2["default"], { href: "/" }, "Home"),
            React.createElement(Nav_2["default"], { href: "/products" }, "Products"),
            React.createElement(Nav_2["default"], { href: "/orders" }, "My Orders")),
        React.createElement("main", { className: "container my-6 flex-grow" }, children),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Layout;
