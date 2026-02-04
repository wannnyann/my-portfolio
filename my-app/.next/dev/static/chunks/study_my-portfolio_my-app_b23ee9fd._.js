(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/study/my-portfolio/my-app/src/firebase.client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/firebase.client.ts
__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/study/my-portfolio/my-app/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/study/my-portfolio/my-app/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study/my-portfolio/my-app/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/study/my-portfolio/my-app/node_modules/firebase/auth/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study/my-portfolio/my-app/node_modules/@firebase/auth/dist/esm/index.js [app-client] (ecmascript)");
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyADbcE-GFwhHvNOcL4LyYWpyvvvufaWvXM"),
    authDomain: ("TURBOPACK compile-time value", "my-portfolio-54009.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "my-portfolio-54009"),
    storageBucket: ("TURBOPACK compile-time value", "my-portfolio-54009.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "123511252742"),
    appId: ("TURBOPACK compile-time value", "1:123511252742:web:22106e324b4121db8c6087")
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAuth"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/study/my-portfolio/my-app/app/admin/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study/my-portfolio/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study/my-portfolio/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$src$2f$firebase$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/study/my-portfolio/my-app/src/firebase.client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AdminPage() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdminPage.useEffect": ()=>{
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$src$2f$firebase$2e$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["auth"].onAuthStateChanged({
                "AdminPage.useEffect.unsub": (u)=>setUser(u)
            }["AdminPage.useEffect.unsub"]);
            return ({
                "AdminPage.useEffect": ()=>unsub()
            })["AdminPage.useEffect"];
        }
    }["AdminPage.useEffect"], []);
    if (!user) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "ログイン中..."
    }, void 0, false, {
        fileName: "[project]/study/my-portfolio/my-app/app/admin/page.tsx",
        lineNumber: 15,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            padding: 40
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "管理者ページ"
            }, void 0, false, {
                fileName: "[project]/study/my-portfolio/my-app/app/admin/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$study$2f$my$2d$portfolio$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "ログイン中ユーザー: ",
                    user.email
                ]
            }, void 0, true, {
                fileName: "[project]/study/my-portfolio/my-app/app/admin/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/study/my-portfolio/my-app/app/admin/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(AdminPage, "5s2qRsV95gTJBmaaTh11GoxYeGE=");
_c = AdminPage;
var _c;
__turbopack_context__.k.register(_c, "AdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=study_my-portfolio_my-app_b23ee9fd._.js.map