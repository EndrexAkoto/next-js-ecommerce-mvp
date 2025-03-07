"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
function FeaturedProducts(_a) {
    var productsFetcher = _a.productsFetcher;
    return __awaiter(this, void 0, void 0, function () {
        var products;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, productsFetcher()];
                case 1:
                    products = _b.sent();
                    return [2 /*return*/, (react_1["default"].createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, products.map(function (product) { return (react_1["default"].createElement("div", { key: product.id, className: "bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1" },
                            react_1["default"].createElement("div", { className: "relative h-64" },
                                react_1["default"].createElement(image_1["default"], { src: product.imageUrl || "/placeholder-product.jpg", alt: product.name, fill: true, className: "object-cover" }),
                                react_1["default"].createElement("div", { className: "absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm font-bold rounded" }, "Featured")),
                            react_1["default"].createElement("div", { className: "p-4" },
                                react_1["default"].createElement("h3", { className: "font-bold text-lg mb-1" },
                                    react_1["default"].createElement(link_1["default"], { href: "/products/" + (product.slug || product.id), className: "hover:text-blue-600" }, product.name)),
                                react_1["default"].createElement("div", { className: "flex items-center mb-2" },
                                    react_1["default"].createElement("div", { className: "flex" }, [1, 2, 3, 4, 5].map(function (star) { return (react_1["default"].createElement(lucide_react_1.Star, { key: star, className: "h-4 w-4 " + (star <= (product.averageRating || 0)
                                            ? "text-yellow-400 fill-yellow-400"
                                            : "text-gray-300") })); })),
                                    react_1["default"].createElement("span", { className: "text-sm text-gray-600 ml-1" },
                                        "(",
                                        product.reviewCount || 0,
                                        ")")),
                                product.description && (react_1["default"].createElement("p", { className: "text-gray-600 text-sm mb-3 line-clamp-2" }, product.description)),
                                react_1["default"].createElement("div", { className: "flex justify-between items-center" },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("span", { className: "font-bold text-lg" },
                                            "$",
                                            product.price.toFixed(2)),
                                        product.compareAtPrice && product.compareAtPrice > product.price && (react_1["default"].createElement("span", { className: "ml-2 text-sm text-gray-500 line-through" },
                                            "$",
                                            product.compareAtPrice.toFixed(2)))),
                                    react_1["default"].createElement(button_1.Button, { size: "sm", disabled: product.stock === 0, className: "gap-1" },
                                        react_1["default"].createElement(lucide_react_1.ShoppingCart, { className: "h-4 w-4" }),
                                        react_1["default"].createElement("span", null, "Shop Now"))),
                                product.stock < 10 && product.stock > 0 && (react_1["default"].createElement("p", { className: "text-amber-600 text-xs mt-2 font-medium" },
                                    "Only ",
                                    product.stock,
                                    " items left"))))); })))];
            }
        });
    });
}
exports["default"] = FeaturedProducts;
