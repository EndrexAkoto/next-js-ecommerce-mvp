"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
function Footer() {
    var currentYear = new Date().getFullYear();
    return (react_1["default"].createElement("footer", { className: "bg-gray-900 text-white py-6" },
        react_1["default"].createElement("div", { className: "container mx-auto px-4 text-center" },
            react_1["default"].createElement("p", { className: "text-sm" },
                "\u00A9 ",
                currentYear,
                " YourStore. All rights reserved."),
            react_1["default"].createElement("div", { className: "mt-2" },
                react_1["default"].createElement(link_1["default"], { href: "/terms", className: "text-gray-400 hover:text-white mx-2" }, "Terms"),
                react_1["default"].createElement(link_1["default"], { href: "/privacy", className: "text-gray-400 hover:text-white mx-2" }, "Privacy")))));
}
exports["default"] = Footer;
