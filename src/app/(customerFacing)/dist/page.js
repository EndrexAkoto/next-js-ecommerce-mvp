"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var link_1 = require("next/link");
var lucide_react_1 = require("lucide-react");
var button_1 = require("@/components/ui/button");
var ProductCard_1 = require("@/components/ProductCard");
var db_1 = require("@/db/db");
var cache_1 = require("@/lib/cache");
var HeroBanner_1 = require("@/components/HeroBanner");
var FeaturedProducts_1 = require("@/components/FeaturedProducts");
// Cache popular products
var getMostPopularProducts = cache_1.cache(function () {
    return db_1["default"].product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { orders: { _count: "desc" } },
        take: 6
    });
}, ["/", "getMostPopularProducts"], { revalidate: 60 * 60 * 24 });
// Cache newest products
var getNewestProducts = cache_1.cache(function () {
    return db_1["default"].product.findMany({
        where: { isAvailableForPurchase: true },
        orderBy: { createdAt: "desc" },
        take: 6
    });
}, ["/", "getNewestProducts"]);
// Cache featured products
var getFeaturedProducts = cache_1.cache(function () {
    return db_1["default"].product.findMany({
        where: {
            isAvailableForPurchase: true,
            isFeatured: true
        },
        take: 3
    });
}, ["/", "getFeaturedProducts"]);
function HomePage() {
    return (React.createElement("main", { className: "space-y-12 pb-8" },
        React.createElement(HeroBanner_1["default"], null),
        React.createElement("section", { className: "container px-4 py-8" },
            React.createElement("h2", { className: "text-3xl font-bold mb-8 text-center" }, "Featured Products"),
            React.createElement(react_1.Suspense, { fallback: React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, Array(3).fill(0).map(function (_, i) { return React.createElement("div", { key: i, className: "bg-gray-100 rounded-lg h-96 animate-pulse" }); })) },
                React.createElement(FeaturedProducts_1["default"], { productsFetcher: getFeaturedProducts }))),
        React.createElement(ProductGridSection, { title: "Most Popular", description: "Our customers' favorites this season", productsFetcher: getMostPopularProducts }),
        React.createElement(ProductGridSection, { title: "Newest Arrivals", description: "Fresh products just added to our store", productsFetcher: getNewestProducts }),
        React.createElement("section", { className: "container mx-auto px-4" },
            React.createElement("div", { className: "bg-gray-100 p-8 rounded-lg" },
                React.createElement("div", { className: "max-w-2xl mx-auto text-center" },
                    React.createElement("h2", { className: "text-2xl font-bold mb-4" }, "Join Our Newsletter"),
                    React.createElement("p", { className: "text-gray-600 mb-6" }, "Subscribe to get special offers, free giveaways, and updates on new arrivals."),
                    React.createElement("form", { className: "flex flex-col sm:flex-row gap-2" },
                        React.createElement("input", { type: "email", placeholder: "Your email address", className: "flex-grow px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" }),
                        React.createElement(button_1.Button, { type: "submit" }, "Subscribe")))))));
}
exports["default"] = HomePage;
function ProductGridSection(_a) {
    var productsFetcher = _a.productsFetcher, title = _a.title, description = _a.description;
    return (React.createElement("section", { className: "container mx-auto px-4 space-y-6" },
        React.createElement("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between gap-4" },
            React.createElement("div", null,
                React.createElement("h2", { className: "text-3xl font-bold" }, title),
                description && React.createElement("p", { className: "text-gray-600 mt-1" }, description)),
            React.createElement(button_1.Button, { variant: "outline", asChild: true },
                React.createElement(link_1["default"], { href: "/products", className: "space-x-2" },
                    React.createElement("span", null, "View All"),
                    React.createElement(lucide_react_1.ArrowRight, { className: "size-4" })))),
        React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" },
            React.createElement(react_1.Suspense, { fallback: React.createElement(React.Fragment, null,
                    React.createElement(ProductCard_1.ProductCardSkeleton, null),
                    React.createElement(ProductCard_1.ProductCardSkeleton, null),
                    React.createElement(ProductCard_1.ProductCardSkeleton, null)) },
                React.createElement(ProductGrid, { productsFetcher: productsFetcher })))));
}
// Async Product Grid Component
function ProductGrid(_a) {
    var productsFetcher = _a.productsFetcher;
    return __awaiter(this, void 0, void 0, function () {
        var products;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, productsFetcher()];
                case 1:
                    products = _b.sent();
                    return [2 /*return*/, products.map(function (product) { return (React.createElement(ProductCard_1.ProductCard, __assign({ key: product.id }, product))); })];
            }
        });
    });
}
