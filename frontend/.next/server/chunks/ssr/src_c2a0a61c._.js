module.exports = {

"[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Table": (()=>Table),
    "TableBody": (()=>TableBody),
    "TableCaption": (()=>TableCaption),
    "TableCell": (()=>TableCell),
    "TableFooter": (()=>TableFooter),
    "TableHead": (()=>TableHead),
    "TableHeader": (()=>TableHeader),
    "TableRow": (()=>TableRow)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/table.tsx",
            lineNumber: 10,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this));
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this));
TableCaption.displayName = "TableCaption";
;
}}),
"[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
    variants: {
        variant: {
            default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
            secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
            outline: "text-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AlertDialog": (()=>AlertDialog),
    "AlertDialogAction": (()=>AlertDialogAction),
    "AlertDialogCancel": (()=>AlertDialogCancel),
    "AlertDialogContent": (()=>AlertDialogContent),
    "AlertDialogDescription": (()=>AlertDialogDescription),
    "AlertDialogFooter": (()=>AlertDialogFooter),
    "AlertDialogHeader": (()=>AlertDialogHeader),
    "AlertDialogOverlay": (()=>AlertDialogOverlay),
    "AlertDialogPortal": (()=>AlertDialogPortal),
    "AlertDialogTitle": (()=>AlertDialogTitle),
    "AlertDialogTrigger": (()=>AlertDialogTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 36,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this));
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
}}),
"[project]/src/app/data:4c8cb1 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4066f80a7232432b5df31846680b397374d0ae1c48":"deleteInvoiceAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "deleteInvoiceAction": (()=>deleteInvoiceAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteInvoiceAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4066f80a7232432b5df31846680b397374d0ae1c48", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteInvoiceAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMgfSBmcm9tICdAL2FpL2Zsb3dzL2dlbmVyYXRlLWZpbmFuY2lhbC1pbnNpZ2h0cydcbmltcG9ydCB7IGdlbmVyYXRlSW52b2ljZUZyb21UZXh0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbnZvaWNlLWZyb20tdGV4dCdcbmltcG9ydCB7IGNhbGN1bGF0ZVRheCB9IGZyb20gJ0AvYWkvZmxvd3MvY2FsY3VsYXRlLXRheCdcbmltcG9ydCB7IGludm9pY2VTY2hlbWEsIGNsaWVudFNjaGVtYSB9IGZyb20gJ0AvbGliL3R5cGVzJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGknO1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEsICdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG59KVxuXG4vLyAtLS0gSGVscGVyIGZ1bmN0aW9uIGZvciBBUEkgY2FsbHMgLS0tXG5hc3luYyBmdW5jdGlvbiBhcGlGZXRjaCh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7fSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3VybH1gLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi5vcHRpb25zLmhlYWRlcnMsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgbWVzc2FnZTogYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzLnN0YXR1c31gIH0pKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckJvZHkubWVzc2FnZSB8fCAnQW4gQVBJIGVycm9yIG9jY3VycmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwNCkgeyAvLyBObyBDb250ZW50XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEFQSSBFcnJvciBmZXRjaGluZyAke3VybH06YCwgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQnO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbkFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBsb2dpblNjaGVtYT4pIHtcbiAgY29uc3QgcGFyc2VkRGF0YSA9IGxvZ2luU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIGRhdGEgcHJvdmlkZWQuXCJ9XG4gIH1cblxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcGFyc2VkRGF0YS5kYXRhO1xuXG4gIC8vIE1vY2sgYXV0aGVudGljYXRpb24gbG9naWMgLSBpbiBhIHJlYWwgYXBwLCB0aGlzIHdvdWxkIGNhbGwgYW4gQVBJXG4gIGlmIChlbWFpbCA9PT0gJ3VzZXJAZXhhbXBsZS5jb20nICYmIHBhc3N3b3JkID09PSAncGFzc3dvcmQnKSB7XG4gICAgY29va2llcygpLnNldCgnc2Vzc2lvbicsICdtb2NrLXNlc3Npb24tdG9rZW4nLCB7XG4gICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIC8vIFJlbW92ZWQgbWF4QWdlIHRvIG1ha2UgaXQgYSBzZXNzaW9uIGNvb2tpZVxuICAgIH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscy4nIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWN0aW9uKCkge1xuICBjb29raWVzKCkuZGVsZXRlKCdzZXNzaW9uJylcbiAgcmVkaXJlY3QoJy9sb2dpbicpXG59XG5cbi8vIC0tLSBVc2VyIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckFjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpRmV0Y2goJy91c2Vycy9tZScpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuXG4vLyAtLS0gSW52b2ljZSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXNBY3Rpb24ocGFyYW1zPzogeyBjbGllbnRJZD86IHN0cmluZyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gcGFyYW1zPy5jbGllbnRJZCA/IGAvaW52b2ljZXM/Y2xpZW50SWQ9JHtwYXJhbXMuY2xpZW50SWR9YCA6ICcvaW52b2ljZXMnO1xuICAgIGNvbnN0IGludm9pY2VzID0gYXdhaXQgYXBpRmV0Y2godXJsKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlcyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGludm9pY2VzLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZUFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBpbnZvaWNlU2NoZW1hPikge1xuICAvLyBUT0RPOiBBZGQgZmVhdHVyZSBnYXRpbmcuIEJlZm9yZSBjcmVhdGluZywgY2hlY2sgdGhlIHVzZXIncyBwbGFuXG4gIC8vIGFuZCBjdXJyZW50IGludm9pY2UgY291bnQgYWdhaW5zdCB0aGVpciBzdWJzY3JpcHRpb24gbGltaXRzLlxuICAvLyBUaGlzIHJlcXVpcmVzIGEgZnVsbCBhdXRoZW50aWNhdGlvbiBzeXN0ZW0gdG8gaWRlbnRpZnkgdGhlIHVzZXIgbWFraW5nIHRoZSByZXF1ZXN0LlxuICBjb25zdCBwYXJzZWREYXRhID0gaW52b2ljZVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgbmV3SW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcbiAgICBcbiAgICBhd2FpdCBhcGlGZXRjaCgnL2ludm9pY2VzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdJbnZvaWNlRGF0YSksXG4gICAgfSk7XG4gICAgXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wYXltZW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdJbnZvaWNlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VCeUlkQWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2lkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGludm9pY2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZvaWNlIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludm9pY2VBY3Rpb24oaWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2YgaW52b2ljZVNjaGVtYT4pIHtcbiAgY29uc3QgcGFyc2VkRGF0YSA9IGludm9pY2VTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHN1YnRvdGFsID0gcGFyc2VkRGF0YS5kYXRhLmxpbmVJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSAqIGl0ZW0ucmF0ZSwgMCk7XG4gICAgY29uc3QgdGF4ID0gcGFyc2VkRGF0YS5kYXRhLnRheCB8fCAwO1xuICAgIGNvbnN0IHRvdGFsID0gc3VidG90YWwgKyB0YXg7XG5cbiAgICBjb25zdCB1cGRhdGVkSW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcblxuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEludm9pY2VEYXRhKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9pbnZvaWNlcy8ke2lkfS9lZGl0YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgSW52b2ljZSAke2RhdGEuaW52b2ljZU51bWJlcn0gdXBkYXRlZCBzdWNjZXNzZnVsbHkhYCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBpbnZvaWNlLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52b2ljZUFjdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2lkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0ludm9pY2UgZGVsZXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBpbnZvaWNlLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZVN0YXR1c0FjdGlvbihpZDogc3RyaW5nLCBzdGF0dXM6ICdwYWlkJyB8ICdwZW5kaW5nJyB8ICdvdmVyZHVlJykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH0vc3RhdHVzYCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzIH0pLFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZCcpOyAvLyBGb3IgdGhlIHN0YXRzIGNhcmRzXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgSW52b2ljZSBzdGF0dXMgdXBkYXRlZCB0byAke3N0YXR1c30uYCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBpbnZvaWNlIHN0YXR1cy4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRJbnZvaWNlUmVtaW5kZXJBY3Rpb24oaW52b2ljZUlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aW52b2ljZUlkfS9yZW1pbmRgLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlIHx8ICdSZW1pbmRlciBzZW50IHN1Y2Nlc3NmdWxseSEnIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2VuZCByZW1pbmRlci4nIH07XG4gIH1cbn1cblxuLy8gLS0tIENsaWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50c0FjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnRzID0gYXdhaXQgYXBpRmV0Y2goJy9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsaWVudHMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGllbnRzLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRCeUlkQWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xpZW50IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xpZW50IG5vdCBmb3VuZC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2xpZW50QWN0aW9uKGRhdGE6IHouaW5mZXI8dHlwZW9mIGNsaWVudFNjaGVtYT4pIHtcbiAgICBjb25zdCBwYXJzZWREYXRhID0gY2xpZW50U2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBkYXRhIHByb3ZpZGVkLlwifVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL2NsaWVudHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnNlZERhdGEuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDbGllbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsaWVudEFjdGlvbihpZDogc3RyaW5nLCBkYXRhOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLid9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaUZldGNoKGAvY2xpZW50cy8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvY2xpZW50cycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9jbGllbnRzLyR7aWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2NsaWVudHMvJHtpZH0vZWRpdGApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgQ2xpZW50ICR7ZGF0YS5uYW1lfSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGNsaWVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2xpZW50QWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2NsaWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0NsaWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIGNsaWVudC4nIH07XG4gICAgfVxufVxuXG5jb25zdCBub3RlRm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY29udGVudDogei5zdHJpbmcoKS5taW4oMSwgJ05vdGUgY29udGVudCBjYW5ub3QgYmUgZW1wdHkuJyksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENsaWVudE5vdGVBY3Rpb24oY2xpZW50SWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2Ygbm90ZUZvcm1TY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBub3RlRm9ybVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHVwZGF0ZWRDbGllbnQgPSBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtjbGllbnRJZH0vbm90ZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnNlZERhdGEuZGF0YSksXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvY2xpZW50cy8ke2NsaWVudElkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdOb3RlIGFkZGVkIHN1Y2Nlc3NmdWxseSEnLCBkYXRhOiB1cGRhdGVkQ2xpZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gYWRkIG5vdGUuJyB9O1xuICB9XG59XG5cbi8vIC0tLSBQYXltZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXltZW50c0FjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXltZW50cyA9IGF3YWl0IGFwaUZldGNoKCcvcGF5bWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGF5bWVudHMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBwYXltZW50cy4nIH07XG4gICAgfVxufVxuXG4vLyAtLS0gU3RyaXBlIC8gU3Vic2NyaXB0aW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGF5bWVudEludGVudEFjdGlvbihhbW91bnQ6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3RyaXBlL2NyZWF0ZS1wYXltZW50LWludGVudCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbW91bnQsIGN1cnJlbmN5IH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xpZW50U2VjcmV0OiByZXN1bHQuY2xpZW50U2VjcmV0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIHBheW1lbnQgaW50ZW50LicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25maXJtU3RyaXBlUGF5bWVudEFjdGlvbihpbnZvaWNlSWQ6IHN0cmluZywgcGF5bWVudEludGVudElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cGRhdGVkSW52b2ljZSA9IGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpbnZvaWNlSWR9L2NvbmZpcm0tcGF5bWVudGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwYXltZW50SW50ZW50SWQgfSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9pbnZvaWNlcy8ke2ludm9pY2VJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1BheW1lbnQgY29uZmlybWVkIHN1Y2Nlc3NmdWxseSEnLCBkYXRhOiB1cGRhdGVkSW52b2ljZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNvbmZpcm0gcGF5bWVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hlY2tvdXRTZXNzaW9uQWN0aW9uKHByaWNlSWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3Vic2NyaXB0aW9ucy9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcmljZUlkIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlc3VsdC51cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ291bGQgbm90IGNyZWF0ZSBjaGVja291dCBzZXNzaW9uLicgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBjaGVja291dCBzZXNzaW9uLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3J0YWxTZXNzaW9uQWN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3Vic2NyaXB0aW9ucy9jcmVhdGUtcG9ydGFsLXNlc3Npb24nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlc3VsdC51cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ291bGQgbm90IGNyZWF0ZSBwb3J0YWwgc2Vzc2lvbi4nIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgcG9ydGFsIHNlc3Npb24uJyB9O1xuICAgIH1cbn1cblxuXG4vLyAtLS0gQUkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbmFuY2lhbEluc2lnaHRzQWN0aW9uKCkge1xuICAvLyBUT0RPOiBBZGQgZmVhdHVyZSBnYXRpbmcuIEJlZm9yZSBydW5uaW5nLCBjaGVjayB0aGUgdXNlcidzIHBsYW5cbiAgLy8gYW5kIGN1cnJlbnQgQUkgcmVxdWVzdCBjb3VudCBhZ2FpbnN0IHRoZWlyIHN1YnNjcmlwdGlvbiBsaW1pdHMuXG4gIHRyeSB7XG4gICAgY29uc3QgW2ludm9pY2VzUmVzdWx0LCBwYXltZW50c1Jlc3VsdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRJbnZvaWNlc0FjdGlvbigpLFxuICAgICAgZ2V0UGF5bWVudHNBY3Rpb24oKSxcbiAgICBdKTtcblxuICAgIGlmICghaW52b2ljZXNSZXN1bHQuc3VjY2VzcyB8fCAhcGF5bWVudHNSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZmluYW5jaWFsIGRhdGEgZm9yIGFuYWx5c2lzLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2lnaHRzID0gYXdhaXQgZ2VuZXJhdGVGaW5hbmNpYWxJbnNpZ2h0cyh7XG4gICAgICBpbnZvaWNlRGF0YTogSlNPTi5zdHJpbmdpZnkoaW52b2ljZXNSZXN1bHQuZGF0YSksXG4gICAgICBwYXltZW50RGF0YTogSlNPTi5zdHJpbmdpZnkocGF5bWVudHNSZXN1bHQuZGF0YSksXG4gICAgfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnNpZ2h0cyB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBmaW5hbmNpYWwgaW5zaWdodHM6JywgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGdlbmVyYXRlIGZpbmFuY2lhbCBpbnNpZ2h0cy4nIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZvaWNlRnJvbVRleHRBY3Rpb24odGV4dDogc3RyaW5nKSB7XG4gIC8vIFRPRE86IEFkZCBmZWF0dXJlIGdhdGluZy4gQmVmb3JlIHJ1bm5pbmcsIGNoZWNrIHRoZSB1c2VyJ3MgcGxhblxuICAvLyBhbmQgY3VycmVudCBBSSByZXF1ZXN0IGNvdW50IGFnYWluc3QgdGhlaXIgc3Vic2NyaXB0aW9uIGxpbWl0cy5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZUludm9pY2VGcm9tVGV4dCh0ZXh0KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGludm9pY2UgZnJvbSB0ZXh0OicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgaW52b2ljZSBmcm9tIHRleHQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVUYXhBY3Rpb24oYWRkcmVzczogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKSB7XG4gIC8vIFRPRE86IEFkZCBmZWF0dXJlIGdhdGluZy4gQmVmb3JlIHJ1bm5pbmcsIGNoZWNrIHRoZSB1c2VyJ3MgcGxhblxuICAvLyBhbmQgY3VycmVudCBBSSByZXF1ZXN0IGNvdW50IGFnYWluc3QgdGhlaXIgc3Vic2NyaXB0aW9uIGxpbWl0cy5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxjdWxhdGVUYXgoeyBhZGRyZXNzLCBzdWJ0b3RhbCB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyB0YXg6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjYWxjdWxhdGUgdGF4IHdpdGggQUkuJyB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IitSQW1Lc0IifQ==
}}),
"[project]/src/components/invoices/delete-invoice-dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DeleteInvoiceDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$4c8cb1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:4c8cb1 [app-ssr] (ecmascript) <text/javascript>");
'use client';
;
;
;
;
;
;
function DeleteInvoiceDialog({ isOpen, onOpenChange, invoiceId, invoiceNumber, onSuccess }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const handleDelete = async ()=>{
        setLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$4c8cb1__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteInvoiceAction"])(invoiceId);
        if (result.success) {
            toast({
                title: 'Success!',
                description: result.message
            });
            onSuccess(invoiceId);
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error
            });
        }
        setLoading(false);
        onOpenChange(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                            children: "Are you absolutely sure?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                            children: [
                                "This action cannot be undone. This will permanently delete invoice",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold",
                                    children: invoiceNumber
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            disabled: loading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: handleDelete,
                                disabled: loading,
                                variant: "destructive",
                                children: loading ? 'Deleting...' : 'Continue'
                            }, void 0, false, {
                                fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/data:8667bc [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60a4fd60462b6366e024c1e2491087433bf16dc8ac":"updateInvoiceStatusAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "updateInvoiceStatusAction": (()=>updateInvoiceStatusAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateInvoiceStatusAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60a4fd60462b6366e024c1e2491087433bf16dc8ac", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateInvoiceStatusAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMgfSBmcm9tICdAL2FpL2Zsb3dzL2dlbmVyYXRlLWZpbmFuY2lhbC1pbnNpZ2h0cydcbmltcG9ydCB7IGdlbmVyYXRlSW52b2ljZUZyb21UZXh0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbnZvaWNlLWZyb20tdGV4dCdcbmltcG9ydCB7IGNhbGN1bGF0ZVRheCB9IGZyb20gJ0AvYWkvZmxvd3MvY2FsY3VsYXRlLXRheCdcbmltcG9ydCB7IGludm9pY2VTY2hlbWEsIGNsaWVudFNjaGVtYSB9IGZyb20gJ0AvbGliL3R5cGVzJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGknO1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEsICdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG59KVxuXG4vLyAtLS0gSGVscGVyIGZ1bmN0aW9uIGZvciBBUEkgY2FsbHMgLS0tXG5hc3luYyBmdW5jdGlvbiBhcGlGZXRjaCh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7fSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3VybH1gLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi5vcHRpb25zLmhlYWRlcnMsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgbWVzc2FnZTogYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzLnN0YXR1c31gIH0pKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckJvZHkubWVzc2FnZSB8fCAnQW4gQVBJIGVycm9yIG9jY3VycmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwNCkgeyAvLyBObyBDb250ZW50XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEFQSSBFcnJvciBmZXRjaGluZyAke3VybH06YCwgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQnO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbkFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBsb2dpblNjaGVtYT4pIHtcbiAgY29uc3QgcGFyc2VkRGF0YSA9IGxvZ2luU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIGRhdGEgcHJvdmlkZWQuXCJ9XG4gIH1cblxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcGFyc2VkRGF0YS5kYXRhO1xuXG4gIC8vIE1vY2sgYXV0aGVudGljYXRpb24gbG9naWMgLSBpbiBhIHJlYWwgYXBwLCB0aGlzIHdvdWxkIGNhbGwgYW4gQVBJXG4gIGlmIChlbWFpbCA9PT0gJ3VzZXJAZXhhbXBsZS5jb20nICYmIHBhc3N3b3JkID09PSAncGFzc3dvcmQnKSB7XG4gICAgY29va2llcygpLnNldCgnc2Vzc2lvbicsICdtb2NrLXNlc3Npb24tdG9rZW4nLCB7XG4gICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIC8vIFJlbW92ZWQgbWF4QWdlIHRvIG1ha2UgaXQgYSBzZXNzaW9uIGNvb2tpZVxuICAgIH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscy4nIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWN0aW9uKCkge1xuICBjb29raWVzKCkuZGVsZXRlKCdzZXNzaW9uJylcbiAgcmVkaXJlY3QoJy9sb2dpbicpXG59XG5cbi8vIC0tLSBVc2VyIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckFjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpRmV0Y2goJy91c2Vycy9tZScpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuXG4vLyAtLS0gSW52b2ljZSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXNBY3Rpb24ocGFyYW1zPzogeyBjbGllbnRJZD86IHN0cmluZyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gcGFyYW1zPy5jbGllbnRJZCA/IGAvaW52b2ljZXM/Y2xpZW50SWQ9JHtwYXJhbXMuY2xpZW50SWR9YCA6ICcvaW52b2ljZXMnO1xuICAgIGNvbnN0IGludm9pY2VzID0gYXdhaXQgYXBpRmV0Y2godXJsKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlcyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGludm9pY2VzLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZUFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBpbnZvaWNlU2NoZW1hPikge1xuICAvLyBUT0RPOiBBZGQgZmVhdHVyZSBnYXRpbmcuIEJlZm9yZSBjcmVhdGluZywgY2hlY2sgdGhlIHVzZXIncyBwbGFuXG4gIC8vIGFuZCBjdXJyZW50IGludm9pY2UgY291bnQgYWdhaW5zdCB0aGVpciBzdWJzY3JpcHRpb24gbGltaXRzLlxuICAvLyBUaGlzIHJlcXVpcmVzIGEgZnVsbCBhdXRoZW50aWNhdGlvbiBzeXN0ZW0gdG8gaWRlbnRpZnkgdGhlIHVzZXIgbWFraW5nIHRoZSByZXF1ZXN0LlxuICBjb25zdCBwYXJzZWREYXRhID0gaW52b2ljZVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgbmV3SW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcbiAgICBcbiAgICBhd2FpdCBhcGlGZXRjaCgnL2ludm9pY2VzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdJbnZvaWNlRGF0YSksXG4gICAgfSk7XG4gICAgXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wYXltZW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdJbnZvaWNlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VCeUlkQWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2lkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGludm9pY2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZvaWNlIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludm9pY2VBY3Rpb24oaWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2YgaW52b2ljZVNjaGVtYT4pIHtcbiAgY29uc3QgcGFyc2VkRGF0YSA9IGludm9pY2VTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHN1YnRvdGFsID0gcGFyc2VkRGF0YS5kYXRhLmxpbmVJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSAqIGl0ZW0ucmF0ZSwgMCk7XG4gICAgY29uc3QgdGF4ID0gcGFyc2VkRGF0YS5kYXRhLnRheCB8fCAwO1xuICAgIGNvbnN0IHRvdGFsID0gc3VidG90YWwgKyB0YXg7XG5cbiAgICBjb25zdCB1cGRhdGVkSW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcblxuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEludm9pY2VEYXRhKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9pbnZvaWNlcy8ke2lkfS9lZGl0YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgSW52b2ljZSAke2RhdGEuaW52b2ljZU51bWJlcn0gdXBkYXRlZCBzdWNjZXNzZnVsbHkhYCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBpbnZvaWNlLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52b2ljZUFjdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2lkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0ludm9pY2UgZGVsZXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBpbnZvaWNlLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZVN0YXR1c0FjdGlvbihpZDogc3RyaW5nLCBzdGF0dXM6ICdwYWlkJyB8ICdwZW5kaW5nJyB8ICdvdmVyZHVlJykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH0vc3RhdHVzYCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzIH0pLFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZCcpOyAvLyBGb3IgdGhlIHN0YXRzIGNhcmRzXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgSW52b2ljZSBzdGF0dXMgdXBkYXRlZCB0byAke3N0YXR1c30uYCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBpbnZvaWNlIHN0YXR1cy4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRJbnZvaWNlUmVtaW5kZXJBY3Rpb24oaW52b2ljZUlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aW52b2ljZUlkfS9yZW1pbmRgLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlIHx8ICdSZW1pbmRlciBzZW50IHN1Y2Nlc3NmdWxseSEnIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2VuZCByZW1pbmRlci4nIH07XG4gIH1cbn1cblxuLy8gLS0tIENsaWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50c0FjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnRzID0gYXdhaXQgYXBpRmV0Y2goJy9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsaWVudHMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGllbnRzLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRCeUlkQWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xpZW50IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xpZW50IG5vdCBmb3VuZC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2xpZW50QWN0aW9uKGRhdGE6IHouaW5mZXI8dHlwZW9mIGNsaWVudFNjaGVtYT4pIHtcbiAgICBjb25zdCBwYXJzZWREYXRhID0gY2xpZW50U2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBkYXRhIHByb3ZpZGVkLlwifVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL2NsaWVudHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnNlZERhdGEuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDbGllbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsaWVudEFjdGlvbihpZDogc3RyaW5nLCBkYXRhOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLid9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaUZldGNoKGAvY2xpZW50cy8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvY2xpZW50cycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9jbGllbnRzLyR7aWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2NsaWVudHMvJHtpZH0vZWRpdGApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgQ2xpZW50ICR7ZGF0YS5uYW1lfSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGNsaWVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2xpZW50QWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2NsaWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0NsaWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIGNsaWVudC4nIH07XG4gICAgfVxufVxuXG5jb25zdCBub3RlRm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY29udGVudDogei5zdHJpbmcoKS5taW4oMSwgJ05vdGUgY29udGVudCBjYW5ub3QgYmUgZW1wdHkuJyksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENsaWVudE5vdGVBY3Rpb24oY2xpZW50SWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2Ygbm90ZUZvcm1TY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBub3RlRm9ybVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHVwZGF0ZWRDbGllbnQgPSBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtjbGllbnRJZH0vbm90ZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnNlZERhdGEuZGF0YSksXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvY2xpZW50cy8ke2NsaWVudElkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdOb3RlIGFkZGVkIHN1Y2Nlc3NmdWxseSEnLCBkYXRhOiB1cGRhdGVkQ2xpZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gYWRkIG5vdGUuJyB9O1xuICB9XG59XG5cbi8vIC0tLSBQYXltZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXltZW50c0FjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXltZW50cyA9IGF3YWl0IGFwaUZldGNoKCcvcGF5bWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGF5bWVudHMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBwYXltZW50cy4nIH07XG4gICAgfVxufVxuXG4vLyAtLS0gU3RyaXBlIC8gU3Vic2NyaXB0aW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGF5bWVudEludGVudEFjdGlvbihhbW91bnQ6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3RyaXBlL2NyZWF0ZS1wYXltZW50LWludGVudCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbW91bnQsIGN1cnJlbmN5IH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xpZW50U2VjcmV0OiByZXN1bHQuY2xpZW50U2VjcmV0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIHBheW1lbnQgaW50ZW50LicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25maXJtU3RyaXBlUGF5bWVudEFjdGlvbihpbnZvaWNlSWQ6IHN0cmluZywgcGF5bWVudEludGVudElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cGRhdGVkSW52b2ljZSA9IGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpbnZvaWNlSWR9L2NvbmZpcm0tcGF5bWVudGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwYXltZW50SW50ZW50SWQgfSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9pbnZvaWNlcy8ke2ludm9pY2VJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1BheW1lbnQgY29uZmlybWVkIHN1Y2Nlc3NmdWxseSEnLCBkYXRhOiB1cGRhdGVkSW52b2ljZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNvbmZpcm0gcGF5bWVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hlY2tvdXRTZXNzaW9uQWN0aW9uKHByaWNlSWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3Vic2NyaXB0aW9ucy9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcmljZUlkIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlc3VsdC51cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ291bGQgbm90IGNyZWF0ZSBjaGVja291dCBzZXNzaW9uLicgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBjaGVja291dCBzZXNzaW9uLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3J0YWxTZXNzaW9uQWN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3Vic2NyaXB0aW9ucy9jcmVhdGUtcG9ydGFsLXNlc3Npb24nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlc3VsdC51cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ291bGQgbm90IGNyZWF0ZSBwb3J0YWwgc2Vzc2lvbi4nIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgcG9ydGFsIHNlc3Npb24uJyB9O1xuICAgIH1cbn1cblxuXG4vLyAtLS0gQUkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbmFuY2lhbEluc2lnaHRzQWN0aW9uKCkge1xuICAvLyBUT0RPOiBBZGQgZmVhdHVyZSBnYXRpbmcuIEJlZm9yZSBydW5uaW5nLCBjaGVjayB0aGUgdXNlcidzIHBsYW5cbiAgLy8gYW5kIGN1cnJlbnQgQUkgcmVxdWVzdCBjb3VudCBhZ2FpbnN0IHRoZWlyIHN1YnNjcmlwdGlvbiBsaW1pdHMuXG4gIHRyeSB7XG4gICAgY29uc3QgW2ludm9pY2VzUmVzdWx0LCBwYXltZW50c1Jlc3VsdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRJbnZvaWNlc0FjdGlvbigpLFxuICAgICAgZ2V0UGF5bWVudHNBY3Rpb24oKSxcbiAgICBdKTtcblxuICAgIGlmICghaW52b2ljZXNSZXN1bHQuc3VjY2VzcyB8fCAhcGF5bWVudHNSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZmluYW5jaWFsIGRhdGEgZm9yIGFuYWx5c2lzLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2lnaHRzID0gYXdhaXQgZ2VuZXJhdGVGaW5hbmNpYWxJbnNpZ2h0cyh7XG4gICAgICBpbnZvaWNlRGF0YTogSlNPTi5zdHJpbmdpZnkoaW52b2ljZXNSZXN1bHQuZGF0YSksXG4gICAgICBwYXltZW50RGF0YTogSlNPTi5zdHJpbmdpZnkocGF5bWVudHNSZXN1bHQuZGF0YSksXG4gICAgfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnNpZ2h0cyB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBmaW5hbmNpYWwgaW5zaWdodHM6JywgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGdlbmVyYXRlIGZpbmFuY2lhbCBpbnNpZ2h0cy4nIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZvaWNlRnJvbVRleHRBY3Rpb24odGV4dDogc3RyaW5nKSB7XG4gIC8vIFRPRE86IEFkZCBmZWF0dXJlIGdhdGluZy4gQmVmb3JlIHJ1bm5pbmcsIGNoZWNrIHRoZSB1c2VyJ3MgcGxhblxuICAvLyBhbmQgY3VycmVudCBBSSByZXF1ZXN0IGNvdW50IGFnYWluc3QgdGhlaXIgc3Vic2NyaXB0aW9uIGxpbWl0cy5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZUludm9pY2VGcm9tVGV4dCh0ZXh0KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGludm9pY2UgZnJvbSB0ZXh0OicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgaW52b2ljZSBmcm9tIHRleHQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVUYXhBY3Rpb24oYWRkcmVzczogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKSB7XG4gIC8vIFRPRE86IEFkZCBmZWF0dXJlIGdhdGluZy4gQmVmb3JlIHJ1bm5pbmcsIGNoZWNrIHRoZSB1c2VyJ3MgcGxhblxuICAvLyBhbmQgY3VycmVudCBBSSByZXF1ZXN0IGNvdW50IGFnYWluc3QgdGhlaXIgc3Vic2NyaXB0aW9uIGxpbWl0cy5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxjdWxhdGVUYXgoeyBhZGRyZXNzLCBzdWJ0b3RhbCB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyB0YXg6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjYWxjdWxhdGUgdGF4IHdpdGggQUkuJyB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQThLc0IifQ==
}}),
"[project]/src/app/data:9484a2 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405152ff3a40a196d9214e38e0856a4a810ec7ffd5":"sendInvoiceReminderAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "sendInvoiceReminderAction": (()=>sendInvoiceReminderAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var sendInvoiceReminderAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("405152ff3a40a196d9214e38e0856a4a810ec7ffd5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendInvoiceReminderAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMgfSBmcm9tICdAL2FpL2Zsb3dzL2dlbmVyYXRlLWZpbmFuY2lhbC1pbnNpZ2h0cydcbmltcG9ydCB7IGdlbmVyYXRlSW52b2ljZUZyb21UZXh0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbnZvaWNlLWZyb20tdGV4dCdcbmltcG9ydCB7IGNhbGN1bGF0ZVRheCB9IGZyb20gJ0AvYWkvZmxvd3MvY2FsY3VsYXRlLXRheCdcbmltcG9ydCB7IGludm9pY2VTY2hlbWEsIGNsaWVudFNjaGVtYSB9IGZyb20gJ0AvbGliL3R5cGVzJ1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGknO1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEsICdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG59KVxuXG4vLyAtLS0gSGVscGVyIGZ1bmN0aW9uIGZvciBBUEkgY2FsbHMgLS0tXG5hc3luYyBmdW5jdGlvbiBhcGlGZXRjaCh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7fSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3VybH1gLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi5vcHRpb25zLmhlYWRlcnMsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGNvbnN0IGVycm9yQm9keSA9IGF3YWl0IHJlcy5qc29uKCkuY2F0Y2goKCkgPT4gKHsgbWVzc2FnZTogYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzLnN0YXR1c31gIH0pKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvckJvZHkubWVzc2FnZSB8fCAnQW4gQVBJIGVycm9yIG9jY3VycmVkJyk7XG4gICAgfVxuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwNCkgeyAvLyBObyBDb250ZW50XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEFQSSBFcnJvciBmZXRjaGluZyAke3VybH06YCwgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdBbiB1bmtub3duIG5ldHdvcmsgZXJyb3Igb2NjdXJyZWQnO1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dpbkFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBsb2dpblNjaGVtYT4pIHtcbiAgY29uc3QgcGFyc2VkRGF0YSA9IGxvZ2luU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJJbnZhbGlkIGRhdGEgcHJvdmlkZWQuXCJ9XG4gIH1cblxuICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gcGFyc2VkRGF0YS5kYXRhO1xuXG4gIC8vIE1vY2sgYXV0aGVudGljYXRpb24gbG9naWMgLSBpbiBhIHJlYWwgYXBwLCB0aGlzIHdvdWxkIGNhbGwgYW4gQVBJXG4gIGlmIChlbWFpbCA9PT0gJ3VzZXJAZXhhbXBsZS5jb20nICYmIHBhc3N3b3JkID09PSAncGFzc3dvcmQnKSB7XG4gICAgY29va2llcygpLnNldCgnc2Vzc2lvbicsICdtb2NrLXNlc3Npb24tdG9rZW4nLCB7XG4gICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIC8vIFJlbW92ZWQgbWF4QWdlIHRvIG1ha2UgaXQgYSBzZXNzaW9uIGNvb2tpZVxuICAgIH0pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBjcmVkZW50aWFscy4nIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWN0aW9uKCkge1xuICBjb29raWVzKCkuZGVsZXRlKCdzZXNzaW9uJylcbiAgcmVkaXJlY3QoJy9sb2dpbicpXG59XG5cbi8vIC0tLSBVc2VyIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckFjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpRmV0Y2goJy91c2Vycy9tZScpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuXG4vLyAtLS0gSW52b2ljZSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXNBY3Rpb24ocGFyYW1zPzogeyBjbGllbnRJZD86IHN0cmluZyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gcGFyYW1zPy5jbGllbnRJZCA/IGAvaW52b2ljZXM/Y2xpZW50SWQ9JHtwYXJhbXMuY2xpZW50SWR9YCA6ICcvaW52b2ljZXMnO1xuICAgIGNvbnN0IGludm9pY2VzID0gYXdhaXQgYXBpRmV0Y2godXJsKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlcyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGludm9pY2VzLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZUFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBpbnZvaWNlU2NoZW1hPikge1xuICAvLyBUT0RPOiBBZGQgZmVhdHVyZSBnYXRpbmcuIEJlZm9yZSBjcmVhdGluZywgY2hlY2sgdGhlIHVzZXIncyBwbGFuXG4gIC8vIGFuZCBjdXJyZW50IGludm9pY2UgY291bnQgYWdhaW5zdCB0aGVpciBzdWJzY3JpcHRpb24gbGltaXRzLlxuICAvLyBUaGlzIHJlcXVpcmVzIGEgZnVsbCBhdXRoZW50aWNhdGlvbiBzeXN0ZW0gdG8gaWRlbnRpZnkgdGhlIHVzZXIgbWFraW5nIHRoZSByZXF1ZXN0LlxuICBjb25zdCBwYXJzZWREYXRhID0gaW52b2ljZVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgbmV3SW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcbiAgICBcbiAgICBhd2FpdCBhcGlGZXRjaCgnL2ludm9pY2VzJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShuZXdJbnZvaWNlRGF0YSksXG4gICAgfSk7XG4gICAgXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wYXltZW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdJbnZvaWNlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEludm9pY2VCeUlkQWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpbnZvaWNlID0gYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2lkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGludm9pY2UgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZvaWNlIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludm9pY2VBY3Rpb24oaWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2YgaW52b2ljZVNjaGVtYT4pIHtcbiAgY29uc3QgcGFyc2VkRGF0YSA9IGludm9pY2VTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nIH07XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHN1YnRvdGFsID0gcGFyc2VkRGF0YS5kYXRhLmxpbmVJdGVtcy5yZWR1Y2UoKHN1bSwgaXRlbSkgPT4gc3VtICsgaXRlbS5xdWFudGl0eSAqIGl0ZW0ucmF0ZSwgMCk7XG4gICAgY29uc3QgdGF4ID0gcGFyc2VkRGF0YS5kYXRhLnRheCB8fCAwO1xuICAgIGNvbnN0IHRvdGFsID0gc3VidG90YWwgKyB0YXg7XG5cbiAgICBjb25zdCB1cGRhdGVkSW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcblxuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZEludm9pY2VEYXRhKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9pbnZvaWNlcy8ke2lkfS9lZGl0YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgSW52b2ljZSAke2RhdGEuaW52b2ljZU51bWJlcn0gdXBkYXRlZCBzdWNjZXNzZnVsbHkhYCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBpbnZvaWNlLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW52b2ljZUFjdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2lkfWAsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0ludm9pY2UgZGVsZXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBpbnZvaWNlLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSW52b2ljZVN0YXR1c0FjdGlvbihpZDogc3RyaW5nLCBzdGF0dXM6ICdwYWlkJyB8ICdwZW5kaW5nJyB8ICdvdmVyZHVlJykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH0vc3RhdHVzYCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgc3RhdHVzIH0pLFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZCcpOyAvLyBGb3IgdGhlIHN0YXRzIGNhcmRzXG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgSW52b2ljZSBzdGF0dXMgdXBkYXRlZCB0byAke3N0YXR1c30uYCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBpbnZvaWNlIHN0YXR1cy4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRJbnZvaWNlUmVtaW5kZXJBY3Rpb24oaW52b2ljZUlkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aW52b2ljZUlkfS9yZW1pbmRgLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IHJlc3VsdC5tZXNzYWdlIHx8ICdSZW1pbmRlciBzZW50IHN1Y2Nlc3NmdWxseSEnIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gc2VuZCByZW1pbmRlci4nIH07XG4gIH1cbn1cblxuLy8gLS0tIENsaWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50c0FjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnRzID0gYXdhaXQgYXBpRmV0Y2goJy9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsaWVudHMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBjbGllbnRzLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRCeUlkQWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogY2xpZW50IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ2xpZW50IG5vdCBmb3VuZC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2xpZW50QWN0aW9uKGRhdGE6IHouaW5mZXI8dHlwZW9mIGNsaWVudFNjaGVtYT4pIHtcbiAgICBjb25zdCBwYXJzZWREYXRhID0gY2xpZW50U2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBkYXRhIHByb3ZpZGVkLlwifVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL2NsaWVudHMnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnNlZERhdGEuZGF0YSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDbGllbnQgY3JlYXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNsaWVudEFjdGlvbihpZDogc3RyaW5nLCBkYXRhOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLid9XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFwaUZldGNoKGAvY2xpZW50cy8ke2lkfWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvY2xpZW50cycpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9jbGllbnRzLyR7aWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2NsaWVudHMvJHtpZH0vZWRpdGApO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgQ2xpZW50ICR7ZGF0YS5uYW1lfSB1cGRhdGVkIHN1Y2Nlc3NmdWxseSFgIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gdXBkYXRlIGNsaWVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2xpZW50QWN0aW9uKGlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2NsaWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0NsaWVudCBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZGVsZXRlIGNsaWVudC4nIH07XG4gICAgfVxufVxuXG5jb25zdCBub3RlRm9ybVNjaGVtYSA9IHoub2JqZWN0KHtcbiAgY29udGVudDogei5zdHJpbmcoKS5taW4oMSwgJ05vdGUgY29udGVudCBjYW5ub3QgYmUgZW1wdHkuJyksXG59KTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZENsaWVudE5vdGVBY3Rpb24oY2xpZW50SWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2Ygbm90ZUZvcm1TY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBub3RlRm9ybVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IHVwZGF0ZWRDbGllbnQgPSBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtjbGllbnRJZH0vbm90ZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBhcnNlZERhdGEuZGF0YSksXG4gICAgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvY2xpZW50cy8ke2NsaWVudElkfWApO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdOb3RlIGFkZGVkIHN1Y2Nlc3NmdWxseSEnLCBkYXRhOiB1cGRhdGVkQ2xpZW50IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gYWRkIG5vdGUuJyB9O1xuICB9XG59XG5cbi8vIC0tLSBQYXltZW50IEFjdGlvbnMgLS0tXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYXltZW50c0FjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwYXltZW50cyA9IGF3YWl0IGFwaUZldGNoKCcvcGF5bWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcGF5bWVudHMgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBmZXRjaCBwYXltZW50cy4nIH07XG4gICAgfVxufVxuXG4vLyAtLS0gU3RyaXBlIC8gU3Vic2NyaXB0aW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUGF5bWVudEludGVudEFjdGlvbihhbW91bnQ6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3RyaXBlL2NyZWF0ZS1wYXltZW50LWludGVudCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbW91bnQsIGN1cnJlbmN5IH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgY2xpZW50U2VjcmV0OiByZXN1bHQuY2xpZW50U2VjcmV0IH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIHBheW1lbnQgaW50ZW50LicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25maXJtU3RyaXBlUGF5bWVudEFjdGlvbihpbnZvaWNlSWQ6IHN0cmluZywgcGF5bWVudEludGVudElkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB1cGRhdGVkSW52b2ljZSA9IGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpbnZvaWNlSWR9L2NvbmZpcm0tcGF5bWVudGAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwYXltZW50SW50ZW50SWQgfSksXG4gICAgICAgIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9pbnZvaWNlcy8ke2ludm9pY2VJZH1gKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvcGF5bWVudHMnKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ1BheW1lbnQgY29uZmlybWVkIHN1Y2Nlc3NmdWxseSEnLCBkYXRhOiB1cGRhdGVkSW52b2ljZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNvbmZpcm0gcGF5bWVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hlY2tvdXRTZXNzaW9uQWN0aW9uKHByaWNlSWQ6IHN0cmluZykge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3Vic2NyaXB0aW9ucy9jcmVhdGUtY2hlY2tvdXQtc2Vzc2lvbicsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBwcmljZUlkIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlc3VsdC51cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ291bGQgbm90IGNyZWF0ZSBjaGVja291dCBzZXNzaW9uLicgfTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBjaGVja291dCBzZXNzaW9uLicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQb3J0YWxTZXNzaW9uQWN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFwaUZldGNoKCcvc3Vic2NyaXB0aW9ucy9jcmVhdGUtcG9ydGFsLXNlc3Npb24nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3VsdC51cmwpIHtcbiAgICAgICAgICAgIHJlZGlyZWN0KHJlc3VsdC51cmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnQ291bGQgbm90IGNyZWF0ZSBwb3J0YWwgc2Vzc2lvbi4nIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgcG9ydGFsIHNlc3Npb24uJyB9O1xuICAgIH1cbn1cblxuXG4vLyAtLS0gQUkgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEZpbmFuY2lhbEluc2lnaHRzQWN0aW9uKCkge1xuICAvLyBUT0RPOiBBZGQgZmVhdHVyZSBnYXRpbmcuIEJlZm9yZSBydW5uaW5nLCBjaGVjayB0aGUgdXNlcidzIHBsYW5cbiAgLy8gYW5kIGN1cnJlbnQgQUkgcmVxdWVzdCBjb3VudCBhZ2FpbnN0IHRoZWlyIHN1YnNjcmlwdGlvbiBsaW1pdHMuXG4gIHRyeSB7XG4gICAgY29uc3QgW2ludm9pY2VzUmVzdWx0LCBwYXltZW50c1Jlc3VsdF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICBnZXRJbnZvaWNlc0FjdGlvbigpLFxuICAgICAgZ2V0UGF5bWVudHNBY3Rpb24oKSxcbiAgICBdKTtcblxuICAgIGlmICghaW52b2ljZXNSZXN1bHQuc3VjY2VzcyB8fCAhcGF5bWVudHNSZXN1bHQuc3VjY2Vzcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZmluYW5jaWFsIGRhdGEgZm9yIGFuYWx5c2lzLicpO1xuICAgIH1cblxuICAgIGNvbnN0IGluc2lnaHRzID0gYXdhaXQgZ2VuZXJhdGVGaW5hbmNpYWxJbnNpZ2h0cyh7XG4gICAgICBpbnZvaWNlRGF0YTogSlNPTi5zdHJpbmdpZnkoaW52b2ljZXNSZXN1bHQuZGF0YSksXG4gICAgICBwYXltZW50RGF0YTogSlNPTi5zdHJpbmdpZnkocGF5bWVudHNSZXN1bHQuZGF0YSksXG4gICAgfSlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnNpZ2h0cyB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBmaW5hbmNpYWwgaW5zaWdodHM6JywgZXJyb3IpXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnRmFpbGVkIHRvIGdlbmVyYXRlIGZpbmFuY2lhbCBpbnNpZ2h0cy4nIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbnZvaWNlRnJvbVRleHRBY3Rpb24odGV4dDogc3RyaW5nKSB7XG4gIC8vIFRPRE86IEFkZCBmZWF0dXJlIGdhdGluZy4gQmVmb3JlIHJ1bm5pbmcsIGNoZWNrIHRoZSB1c2VyJ3MgcGxhblxuICAvLyBhbmQgY3VycmVudCBBSSByZXF1ZXN0IGNvdW50IGFnYWluc3QgdGhlaXIgc3Vic2NyaXB0aW9uIGxpbWl0cy5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBnZW5lcmF0ZUludm9pY2VGcm9tVGV4dCh0ZXh0KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIGludm9pY2UgZnJvbSB0ZXh0OicsIGVycm9yKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgaW52b2ljZSBmcm9tIHRleHQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVUYXhBY3Rpb24oYWRkcmVzczogc3RyaW5nLCBzdWJ0b3RhbDogbnVtYmVyKSB7XG4gIC8vIFRPRE86IEFkZCBmZWF0dXJlIGdhdGluZy4gQmVmb3JlIHJ1bm5pbmcsIGNoZWNrIHRoZSB1c2VyJ3MgcGxhblxuICAvLyBhbmQgY3VycmVudCBBSSByZXF1ZXN0IGNvdW50IGFnYWluc3QgdGhlaXIgc3Vic2NyaXB0aW9uIGxpbWl0cy5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjYWxjdWxhdGVUYXgoeyBhZGRyZXNzLCBzdWJ0b3RhbCB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXN1bHQgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyB0YXg6JywgZXJyb3IpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ZhaWxlZCB0byBjYWxjdWxhdGUgdGF4IHdpdGggQUkuJyB9O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFTQThMc0IifQ==
}}),
"[project]/src/components/invoices/invoices-table.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InvoicesTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-ssr] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-ssr] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invoices$2f$delete$2d$invoice$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/invoices/delete-invoice-dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$8667bc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:8667bc [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$9484a2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:9484a2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const statusVariantMap = {
    paid: 'default',
    pending: 'secondary',
    overdue: 'destructive'
};
function InvoicesTable({ invoices: initialInvoices }) {
    const [invoices, setInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialInvoices);
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedInvoice, setSelectedInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updatingId, setUpdatingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remindingId, setRemindingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setInvoices(initialInvoices);
    }, [
        initialInvoices
    ]);
    const handleDeleteClick = (invoice)=>{
        setSelectedInvoice(invoice);
        setDialogOpen(true);
    };
    const handleSuccess = (deletedInvoiceId)=>{
        setInvoices((currentInvoices)=>currentInvoices.filter((inv)=>inv.id !== deletedInvoiceId));
        setDialogOpen(false);
    };
    const handleStatusChange = async (invoiceId, status)=>{
        setUpdatingId(invoiceId);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$8667bc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInvoiceStatusAction"])(invoiceId, status);
        if (result.success) {
            toast({
                title: 'Success!',
                description: result.message
            });
            // The revalidation should handle the update, but we can optimistically update here too
            setInvoices((current)=>current.map((inv)=>inv.id === invoiceId ? {
                        ...inv,
                        status: status
                    } : inv));
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error
            });
        }
        setUpdatingId(null);
    };
    const handleSendReminder = async (invoiceId)=>{
        setRemindingId(invoiceId);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$9484a2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendInvoiceReminderAction"])(invoiceId);
        if (result.success) {
            toast({
                title: 'Success!',
                description: result.message
            });
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result.error
            });
        }
        setRemindingId(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Invoice #"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Client"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Due Date"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "text-right",
                                    children: "Actions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: invoices.map((invoice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "font-medium",
                                        children: invoice.invoiceNumber
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: invoice.client.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: [
                                            "$",
                                            invoice.total.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(invoice.dueDate), 'MMM d, yyyy')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: updatingId === invoice.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        className: "p-0 h-auto focus-visible:ring-1 focus-visible:ring-ring rounded-md",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: statusVariantMap[invoice.status],
                                                            className: "capitalize cursor-pointer",
                                                            children: invoice.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                        lineNumber: 126,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                            children: "Change status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 23
                                                        }, this),
                                                        [
                                                            'paid',
                                                            'pending',
                                                            'overdue'
                                                        ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                                disabled: invoice.status === status,
                                                                onSelect: ()=>handleStatusChange(invoice.id, status),
                                                                className: "capitalize",
                                                                children: status
                                                            }, status, false, {
                                                                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 25
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                            lineNumber: 124,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        className: "h-8 w-8 p-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sr-only",
                                                                children: "Open menu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                                                                className: "h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/dashboard/invoices/${invoice.id}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                        lineNumber: 160,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " View"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/dashboard/invoices/${invoice.id}/edit`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                                        className: "mr-2 h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " Edit"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            disabled: invoice.status === 'paid' || remindingId === invoice.id,
                                                            onSelect: ()=>handleSendReminder(invoice.id),
                                                            children: [
                                                                remindingId === invoice.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                                    className: "mr-2 h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                    lineNumber: 175,
                                                                    columnNumber: 27
                                                                }, this),
                                                                "Send Reminder"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            className: "text-destructive focus:text-destructive focus:bg-destructive/10",
                                                            onClick: ()=>handleDeleteClick(invoice),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                                    className: "mr-2 h-4 w-4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Delete"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 180,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 149,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, invoice.id, true, {
                                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            selectedInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invoices$2f$delete$2d$invoice$2d$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: dialogOpen,
                onOpenChange: setDialogOpen,
                invoiceId: selectedInvoice.id,
                invoiceNumber: selectedInvoice.invoiceNumber,
                onSuccess: handleSuccess
            }, void 0, false, {
                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=src_c2a0a61c._.js.map