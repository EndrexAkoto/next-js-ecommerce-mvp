"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var button_1 = require("@/components/ui/button");
var link_1 = require("next/link");
function HeroBanner() {
    return (react_1["default"].createElement("section", { className: "relative h-96 bg-gray-100 overflow-hidden" },
        react_1["default"].createElement("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10" }),
        react_1["default"].createElement(image_1["default"], { src: "/hero-banner.jpg", alt: "Sale Banner", fill: true, className: "object-cover", priority: true }),
        react_1["default"].createElement("div", { className: "relative z-20 container mx-auto px-4 h-full flex flex-col justify-center" },
            react_1["default"].createElement("div", { className: "max-w-lg" },
                react_1["default"].createElement("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-4" }, "Spring Collection 2025"),
                react_1["default"].createElement("p", { className: "text-white/90 text-lg mb-6" }, "Discover our latest arrivals with up to 40% off for a limited time."),
                react_1["default"].createElement(button_1.Button, { size: "lg", className: "w-fit" },
                    react_1["default"].createElement(link_1["default"], { href: "/products?collection=spring" }, "Shop Now"))))));
}
exports["default"] = HeroBanner;
