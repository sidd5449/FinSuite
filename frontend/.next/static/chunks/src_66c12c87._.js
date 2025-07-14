(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Table = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
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
_c1 = Table;
Table.displayName = "Table";
const TableHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, this));
_c3 = TableHeader;
TableHeader.displayName = "TableHeader";
const TableBody = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this));
_c5 = TableBody;
TableBody.displayName = "TableBody";
const TableFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 43,
        columnNumber: 3
    }, this));
_c7 = TableFooter;
TableFooter.displayName = "TableFooter";
const TableRow = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 58,
        columnNumber: 3
    }, this));
_c9 = TableRow;
TableRow.displayName = "TableRow";
const TableHead = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 73,
        columnNumber: 3
    }, this));
_c11 = TableHead;
TableHead.displayName = "TableHead";
const TableCell = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c12 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 88,
        columnNumber: 3
    }, this));
_c13 = TableCell;
TableCell.displayName = "TableCell";
const TableCaption = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c14 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-4 text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/table.tsx",
        lineNumber: 100,
        columnNumber: 3
    }, this));
_c15 = TableCaption;
TableCaption.displayName = "TableCaption";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Table$React.forwardRef");
__turbopack_context__.k.register(_c1, "Table");
__turbopack_context__.k.register(_c2, "TableHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "TableHeader");
__turbopack_context__.k.register(_c4, "TableBody$React.forwardRef");
__turbopack_context__.k.register(_c5, "TableBody");
__turbopack_context__.k.register(_c6, "TableFooter$React.forwardRef");
__turbopack_context__.k.register(_c7, "TableFooter");
__turbopack_context__.k.register(_c8, "TableRow$React.forwardRef");
__turbopack_context__.k.register(_c9, "TableRow");
__turbopack_context__.k.register(_c10, "TableHead$React.forwardRef");
__turbopack_context__.k.register(_c11, "TableHead");
__turbopack_context__.k.register(_c12, "TableCell$React.forwardRef");
__turbopack_context__.k.register(_c13, "TableCell");
__turbopack_context__.k.register(_c14, "TableCaption$React.forwardRef");
__turbopack_context__.k.register(_c15, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/badge.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Badge": (()=>Badge),
    "badgeVariants": (()=>badgeVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/badge.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-alert-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
const AlertDialog = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"];
const AlertDialogTrigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"];
const AlertDialogPortal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"];
const AlertDialogOverlay = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
        ...props,
        ref: ref
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this));
_c = AlertDialogOverlay;
AlertDialogOverlay.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"].displayName;
const AlertDialogContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c1 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlertDialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/alert-dialog.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: ref,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", className),
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
_c2 = AlertDialogContent;
AlertDialogContent.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"].displayName;
const AlertDialogHeader = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 52,
        columnNumber: 3
    }, this);
_c3 = AlertDialogHeader;
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({ className, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 66,
        columnNumber: 3
    }, this);
_c4 = AlertDialogFooter;
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c5 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 80,
        columnNumber: 3
    }, this));
_c6 = AlertDialogTitle;
AlertDialogTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"].displayName;
const AlertDialogDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c7 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 92,
        columnNumber: 3
    }, this));
_c8 = AlertDialogDescription;
AlertDialogDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"].displayName;
const AlertDialogAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c9 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 105,
        columnNumber: 3
    }, this));
_c10 = AlertDialogAction;
AlertDialogAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Action"].displayName;
const AlertDialogCancel = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c11 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
            variant: "outline"
        }), "mt-2 sm:mt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/alert-dialog.tsx",
        lineNumber: 117,
        columnNumber: 3
    }, this));
_c12 = AlertDialogCancel;
AlertDialogCancel.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$alert$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cancel"].displayName;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;
__turbopack_context__.k.register(_c, "AlertDialogOverlay");
__turbopack_context__.k.register(_c1, "AlertDialogContent$React.forwardRef");
__turbopack_context__.k.register(_c2, "AlertDialogContent");
__turbopack_context__.k.register(_c3, "AlertDialogHeader");
__turbopack_context__.k.register(_c4, "AlertDialogFooter");
__turbopack_context__.k.register(_c5, "AlertDialogTitle$React.forwardRef");
__turbopack_context__.k.register(_c6, "AlertDialogTitle");
__turbopack_context__.k.register(_c7, "AlertDialogDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "AlertDialogDescription");
__turbopack_context__.k.register(_c9, "AlertDialogAction$React.forwardRef");
__turbopack_context__.k.register(_c10, "AlertDialogAction");
__turbopack_context__.k.register(_c11, "AlertDialogCancel$React.forwardRef");
__turbopack_context__.k.register(_c12, "AlertDialogCancel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:067950 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"4066f80a7232432b5df31846680b397374d0ae1c48":"deleteInvoiceAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "deleteInvoiceAction": (()=>deleteInvoiceAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteInvoiceAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4066f80a7232432b5df31846680b397374d0ae1c48", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteInvoiceAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMgfSBmcm9tICdAL2FpL2Zsb3dzL2dlbmVyYXRlLWZpbmFuY2lhbC1pbnNpZ2h0cydcbmltcG9ydCB7IGdlbmVyYXRlSW52b2ljZUZyb21UZXh0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbnZvaWNlLWZyb20tdGV4dCdcbmltcG9ydCB7IGNhbGN1bGF0ZVRheCB9IGZyb20gJ0AvYWkvZmxvd3MvY2FsY3VsYXRlLXRheCdcbmltcG9ydCB7IGludm9pY2VTY2hlbWEsIGNsaWVudFNjaGVtYSB9IGZyb20gJ0AvbGliL3R5cGVzJ1xuaW1wb3J0IHsgcGxhbkxpbWl0cyB9IGZyb20gJ0AvbGliL3N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGknO1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEsICdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG59KTtcblxuY29uc3Qgc2lnbnVwU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXG4gICAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDgsICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy4nKSxcbiAgICBjb25maXJtUGFzc3dvcmQ6IHouc3RyaW5nKClcbn0pLnJlZmluZShkYXRhID0+IGRhdGEucGFzc3dvcmQgPT09IGRhdGEuY29uZmlybVBhc3N3b3JkLCB7XG4gICAgbWVzc2FnZTogXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2hcIixcbiAgICBwYXRoOiBbXCJjb25maXJtUGFzc3dvcmRcIl0sXG59KTtcblxuXG4vLyAtLS0gSGVscGVyIGZ1bmN0aW9uIGZvciBBUEkgY2FsbHMgLS0tXG5hc3luYyBmdW5jdGlvbiBhcGlGZXRjaCh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7fSkge1xuICBjb25zdCBzZXNzaW9uVG9rZW4gPSBjb29raWVzKCkuZ2V0KCdzZXNzaW9uJyk/LnZhbHVlO1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3VybH1gLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi4oc2Vzc2lvblRva2VuICYmIHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7c2Vzc2lvblRva2VufWAgfSksXG4gICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBtZXNzYWdlOiBgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXMuc3RhdHVzfWAgfSkpO1xuICAgICAgLy8gRm9yIDQwMyBGb3JiaWRkZW4sIHdlIHdhbnQgdG8gc2hvdyBhIHNwZWNpZmljIG1lc3NhZ2UgZnJvbSB0aGUgQVBJXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yQm9keS5tZXNzYWdlIHx8ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLiBQbGVhc2UgdXBncmFkZSB5b3VyIHBsYW4uJyk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JCb2R5Lm1lc3NhZ2UgfHwgJ0FuIEFQSSBlcnJvciBvY2N1cnJlZCcpO1xuICAgIH1cblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDQpIHsgLy8gTm8gQ29udGVudFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBBUEkgRXJyb3IgZmV0Y2hpbmcgJHt1cmx9OmAsIGVycm9yKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBuZXR3b3JrIGVycm9yIG9jY3VycmVkJztcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5BY3Rpb24oZGF0YTogei5pbmZlcjx0eXBlb2YgbG9naW5TY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBsb2dpblNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBkYXRhIHByb3ZpZGVkLlwifVxuICB9XG5cbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHBhcnNlZERhdGEuZGF0YTtcblxuICAvLyBNb2NrIGF1dGhlbnRpY2F0aW9uIGxvZ2ljIC0gaW4gYSByZWFsIGFwcCwgdGhpcyB3b3VsZCBjYWxsIGEgL2xvZ2luIEFQSSBlbmRwb2ludFxuICAvLyB0aGF0IHZhbGlkYXRlcyBoYXNoZWQgcGFzc3dvcmRzLlxuICBpZiAocGFzc3dvcmQgPT09ICdwYXNzd29yZCcpIHsgLy8gU2ltcGxpZmllZCBjaGVjayBmb3IgYW55IGtub3duIHVzZXJcbiAgICAvLyBGb3IgdGhpcyBkZW1vLCB3ZSB1c2UgdGhlIHVzZXIncyBlbWFpbCBhcyB0aGVpciBzZXNzaW9uIFwidG9rZW5cIi5cbiAgICAvLyBUaGlzIGFsbG93cyB0aGUgYmFja2VuZCB0byBpZGVudGlmeSB0aGUgdXNlciBmb3IgZWFjaCByZXF1ZXN0LlxuICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBlbWFpbCwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICBwYXRoOiAnLycsXG4gICAgICAvLyBSZW1vdmVkIG1heEFnZSB0byBtYWtlIGl0IGEgc2Vzc2lvbiBjb29raWVcbiAgICB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMuJyB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ251cEFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBzaWdudXBTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IHNpZ251cFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgZGF0YSBwcm92aWRlZC5cIiB9XG4gICAgfVxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBwYXJzZWREYXRhLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL3VzZXJzL3NpZ251cCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQXV0b21hdGljYWxseSBsb2cgaW4gdGhlIHVzZXIgYWZ0ZXIgc3VjY2Vzc2Z1bCBzaWduIHVwXG4gICAgICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBlbWFpbCwge1xuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHNpZ24gdXAuJyB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWN0aW9uKCkge1xuICBjb29raWVzKCkuZGVsZXRlKCdzZXNzaW9uJylcbiAgcmVkaXJlY3QoJy9sb2dpbicpXG59XG5cbi8vIC0tLSBVc2VyIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckFjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpRmV0Y2goJy91c2Vycy9tZScpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuXG4vLyAtLS0gSW52b2ljZSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXNBY3Rpb24ocGFyYW1zPzogeyBjbGllbnRJZD86IHN0cmluZyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gcGFyYW1zPy5jbGllbnRJZCA/IGAvaW52b2ljZXM/Y2xpZW50SWQ9JHtwYXJhbXMuY2xpZW50SWR9YCA6ICcvaW52b2ljZXMnO1xuICAgIGNvbnN0IGludm9pY2VzID0gYXdhaXQgYXBpRmV0Y2godXJsKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlcyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGludm9pY2VzLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZUFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBpbnZvaWNlU2NoZW1hPikge1xuICBjb25zdCBwYXJzZWREYXRhID0gaW52b2ljZVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgbmV3SW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcbiAgICBcbiAgICAvLyBUaGUgYmFja2VuZCB3aWxsIG5vdyBjaGVjayB0aGUgdXNlcidzIHBsYW4gYW5kIGludm9pY2UgY291bnQgYmVmb3JlIGNyZWF0aW5nLlxuICAgIGF3YWl0IGFwaUZldGNoKCcvaW52b2ljZXMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0ludm9pY2VEYXRhKSxcbiAgICB9KTtcbiAgICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKTsgLy8gVG8gdXBkYXRlIHVzYWdlIGRpc3BsYXlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnSW52b2ljZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseSEnIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIGludm9pY2UuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZvaWNlQnlJZEFjdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52b2ljZSBub3QgZm91bmQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJbnZvaWNlQWN0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IHouaW5mZXI8dHlwZW9mIGludm9pY2VTY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBpbnZvaWNlU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIGRhdGEgcHJvdmlkZWQuJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgdXBkYXRlZEludm9pY2VEYXRhID0geyAuLi5wYXJzZWREYXRhLmRhdGEsIHN1YnRvdGFsLCB0YXgsIHRvdGFsIH07XG5cbiAgICBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRJbnZvaWNlRGF0YSksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2ludm9pY2VzLyR7aWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH0vZWRpdGApO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYEludm9pY2UgJHtkYXRhLmludm9pY2VOdW1iZXJ9IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IWAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2VBY3Rpb24oaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wYXltZW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdJbnZvaWNlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludm9pY2VTdGF0dXNBY3Rpb24oaWQ6IHN0cmluZywgc3RhdHVzOiAncGFpZCcgfCAncGVuZGluZycgfCAnb3ZlcmR1ZScpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aWR9L3N0YXR1c2AsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXR1cyB9KSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2ludm9pY2VzLyR7aWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTsgLy8gRm9yIHRoZSBzdGF0cyBjYXJkc1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYEludm9pY2Ugc3RhdHVzIHVwZGF0ZWQgdG8gJHtzdGF0dXN9LmAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgaW52b2ljZSBzdGF0dXMuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kSW52b2ljZVJlbWluZGVyQWN0aW9uKGludm9pY2VJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2ludm9pY2VJZH0vcmVtaW5kYCwgeyBtZXRob2Q6ICdQT1NUJyB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSB8fCAnUmVtaW5kZXIgc2VudCBzdWNjZXNzZnVsbHkhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNlbmQgcmVtaW5kZXIuJyB9O1xuICB9XG59XG5cbi8vIC0tLSBDbGllbnQgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsaWVudHNBY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50cyA9IGF3YWl0IGFwaUZldGNoKCcvY2xpZW50cycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjbGllbnRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY2xpZW50cy4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50QnlJZEFjdGlvbihpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7aWR9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsaWVudCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NsaWVudCBub3QgZm91bmQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNsaWVudEFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgZGF0YSBwcm92aWRlZC5cIn1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpRmV0Y2goJy9jbGllbnRzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvY2xpZW50cycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQ2xpZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgY2xpZW50LicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGllbnRBY3Rpb24oaWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2YgY2xpZW50U2NoZW1hPikge1xuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBjbGllbnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICAgIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyc2VkRGF0YS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2NsaWVudHMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvY2xpZW50cy8ke2lkfWApO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9jbGllbnRzLyR7aWR9L2VkaXRgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENsaWVudCAke2RhdGEubmFtZX0gdXBkYXRlZCBzdWNjZXNzZnVsbHkhYCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudEFjdGlvbihpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDbGllbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuY29uc3Qgbm90ZUZvcm1TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbnRlbnQ6IHouc3RyaW5nKCkubWluKDEsICdOb3RlIGNvbnRlbnQgY2Fubm90IGJlIGVtcHR5LicpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDbGllbnROb3RlQWN0aW9uKGNsaWVudElkOiBzdHJpbmcsIGRhdGE6IHouaW5mZXI8dHlwZW9mIG5vdGVGb3JtU2NoZW1hPikge1xuICBjb25zdCBwYXJzZWREYXRhID0gbm90ZUZvcm1TY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nIH07XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCB1cGRhdGVkQ2xpZW50ID0gYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7Y2xpZW50SWR9L25vdGVzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2NsaWVudHMvJHtjbGllbnRJZH1gKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnTm90ZSBhZGRlZCBzdWNjZXNzZnVsbHkhJywgZGF0YTogdXBkYXRlZENsaWVudCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFkZCBub3RlLicgfTtcbiAgfVxufVxuXG4vLyAtLS0gUGF5bWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudHNBY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bWVudHMgPSBhd2FpdCBhcGlGZXRjaCgnL3BheW1lbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBheW1lbnRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcGF5bWVudHMuJyB9O1xuICAgIH1cbn1cblxuLy8gLS0tIFN0cmlwZSAvIFN1YnNjcmlwdGlvbiBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBheW1lbnRJbnRlbnRBY3Rpb24oYW1vdW50OiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N0cmlwZS9jcmVhdGUtcGF5bWVudC1pbnRlbnQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW1vdW50LCBjdXJyZW5jeSB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsaWVudFNlY3JldDogcmVzdWx0LmNsaWVudFNlY3JldCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBwYXltZW50IGludGVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZmlybVN0cmlwZVBheW1lbnRBY3Rpb24oaW52b2ljZUlkOiBzdHJpbmcsIHBheW1lbnRJbnRlbnRJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZEludm9pY2UgPSBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aW52b2ljZUlkfS9jb25maXJtLXBheW1lbnRgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGF5bWVudEludGVudElkIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpbnZvaWNlSWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdQYXltZW50IGNvbmZpcm1lZCBzdWNjZXNzZnVsbHkhJywgZGF0YTogdXBkYXRlZEludm9pY2UgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjb25maXJtIHBheW1lbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrb3V0U2Vzc2lvbkFjdGlvbihwcmljZUlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N1YnNjcmlwdGlvbnMvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJpY2VJZCB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdChyZXN1bHQudXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NvdWxkIG5vdCBjcmVhdGUgY2hlY2tvdXQgc2Vzc2lvbi4nIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgY2hlY2tvdXQgc2Vzc2lvbi4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9ydGFsU2Vzc2lvbkFjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N1YnNjcmlwdGlvbnMvY3JlYXRlLXBvcnRhbC1zZXNzaW9uJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdChyZXN1bHQudXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NvdWxkIG5vdCBjcmVhdGUgcG9ydGFsIHNlc3Npb24uJyB9O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIHBvcnRhbCBzZXNzaW9uLicgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIEFJIEFjdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQWlVc2FnZUxpbWl0KCkge1xuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSBhd2FpdCBnZXRVc2VyQWN0aW9uKCk7XG4gICAgaWYgKCF1c2VyUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaWRlbnRpZnkgdXNlci4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nKTtcbiAgICB9XG4gICAgY29uc3QgdXNlciA9IHVzZXJSZXN1bHQuZGF0YTtcbiAgICBjb25zdCBsaW1pdHMgPSBwbGFuTGltaXRzW3VzZXIucGxhbiBhcyBrZXlvZiB0eXBlb2YgcGxhbkxpbWl0c10gfHwgcGxhbkxpbWl0cy5mcmVlO1xuXG4gICAgaWYgKHVzZXIuYWlSZXF1ZXN0Q291bnQgPj0gbGltaXRzLmFpUmVxdWVzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSByZWFjaGVkIHlvdXIgbW9udGhseSBsaW1pdCBvZiAke2xpbWl0cy5haVJlcXVlc3RzfSBBSSByZXF1ZXN0cy4gUGxlYXNlIHVwZ3JhZGUgeW91ciBwbGFuLmApO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5jcmVtZW50QWlVc2FnZSgpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL3VzZXJzL21lL2luY3JlbWVudC1haScsIHsgbWV0aG9kOiAnUFVUJyB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGluY3JlbWVudCBBSSB1c2FnZSBjb3VudDpcIiwgZXJyb3IpO1xuICAgICAgICAvLyBXZSBkb24ndCB0aHJvdyBoZXJlIHRvIG5vdCBmYWlsIHRoZSBtYWluIG9wZXJhdGlvbiwgYnV0IHdlIGxvZyB0aGUgZXJyb3IuXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmluYW5jaWFsSW5zaWdodHNBY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2hlY2tBaVVzYWdlTGltaXQoKTtcblxuICAgIGNvbnN0IFtpbnZvaWNlc1Jlc3VsdCwgcGF5bWVudHNSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0SW52b2ljZXNBY3Rpb24oKSxcbiAgICAgIGdldFBheW1lbnRzQWN0aW9uKCksXG4gICAgXSk7XG5cbiAgICBpZiAoIWludm9pY2VzUmVzdWx0LnN1Y2Nlc3MgfHwgIXBheW1lbnRzUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGZpbmFuY2lhbCBkYXRhIGZvciBhbmFseXNpcy4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnNpZ2h0cyA9IGF3YWl0IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMoe1xuICAgICAgaW52b2ljZURhdGE6IEpTT04uc3RyaW5naWZ5KGludm9pY2VzUmVzdWx0LmRhdGEpLFxuICAgICAgcGF5bWVudERhdGE6IEpTT04uc3RyaW5naWZ5KHBheW1lbnRzUmVzdWx0LmRhdGEpLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGluc2lnaHRzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBmaW5hbmNpYWwgaW5zaWdodHM6JywgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgZmluYW5jaWFsIGluc2lnaHRzLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW52b2ljZUZyb21UZXh0QWN0aW9uKHRleHQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IGNoZWNrQWlVc2FnZUxpbWl0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVJbnZvaWNlRnJvbVRleHQodGV4dCk7XG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgaW52b2ljZSBmcm9tIHRleHQ6JywgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgaW52b2ljZSBmcm9tIHRleHQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlVGF4QWN0aW9uKGFkZHJlc3M6IHN0cmluZywgc3VidG90YWw6IG51bWJlcikge1xuICB0cnkge1xuICAgIGF3YWl0IGNoZWNrQWlVc2FnZUxpbWl0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsY3VsYXRlVGF4KHsgYWRkcmVzcywgc3VidG90YWwgfSk7XG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGN1bGF0aW5nIHRheDonLCBlcnJvcik7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjYWxjdWxhdGUgdGF4IHdpdGggQUkuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiIrUkFpTnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/invoices/delete-invoice-dialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DeleteInvoiceDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/alert-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$067950__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:067950 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function DeleteInvoiceDialog({ isOpen, onOpenChange, invoiceId, invoiceNumber, onSuccess }) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const handleDelete = async ()=>{
        setLoading(true);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$067950__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteInvoiceAction"])(invoiceId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialog"], {
        open: isOpen,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogTitle"], {
                            children: "Are you absolutely sure?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogDescription"], {
                            children: [
                                "This action cannot be undone. This will permanently delete invoice",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogCancel"], {
                            disabled: loading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/invoices/delete-invoice-dialog.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$alert$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlertDialogAction"], {
                            asChild: true,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
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
_s(DeleteInvoiceDialog, "K6e72H9awRVucOkMbxUXY5pRs/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = DeleteInvoiceDialog;
var _c;
__turbopack_context__.k.register(_c, "DeleteInvoiceDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:eca707 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"60a4fd60462b6366e024c1e2491087433bf16dc8ac":"updateInvoiceStatusAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "updateInvoiceStatusAction": (()=>updateInvoiceStatusAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateInvoiceStatusAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60a4fd60462b6366e024c1e2491087433bf16dc8ac", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateInvoiceStatusAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMgfSBmcm9tICdAL2FpL2Zsb3dzL2dlbmVyYXRlLWZpbmFuY2lhbC1pbnNpZ2h0cydcbmltcG9ydCB7IGdlbmVyYXRlSW52b2ljZUZyb21UZXh0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbnZvaWNlLWZyb20tdGV4dCdcbmltcG9ydCB7IGNhbGN1bGF0ZVRheCB9IGZyb20gJ0AvYWkvZmxvd3MvY2FsY3VsYXRlLXRheCdcbmltcG9ydCB7IGludm9pY2VTY2hlbWEsIGNsaWVudFNjaGVtYSB9IGZyb20gJ0AvbGliL3R5cGVzJ1xuaW1wb3J0IHsgcGxhbkxpbWl0cyB9IGZyb20gJ0AvbGliL3N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGknO1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEsICdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG59KTtcblxuY29uc3Qgc2lnbnVwU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXG4gICAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDgsICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy4nKSxcbiAgICBjb25maXJtUGFzc3dvcmQ6IHouc3RyaW5nKClcbn0pLnJlZmluZShkYXRhID0+IGRhdGEucGFzc3dvcmQgPT09IGRhdGEuY29uZmlybVBhc3N3b3JkLCB7XG4gICAgbWVzc2FnZTogXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2hcIixcbiAgICBwYXRoOiBbXCJjb25maXJtUGFzc3dvcmRcIl0sXG59KTtcblxuXG4vLyAtLS0gSGVscGVyIGZ1bmN0aW9uIGZvciBBUEkgY2FsbHMgLS0tXG5hc3luYyBmdW5jdGlvbiBhcGlGZXRjaCh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7fSkge1xuICBjb25zdCBzZXNzaW9uVG9rZW4gPSBjb29raWVzKCkuZ2V0KCdzZXNzaW9uJyk/LnZhbHVlO1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3VybH1gLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi4oc2Vzc2lvblRva2VuICYmIHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7c2Vzc2lvblRva2VufWAgfSksXG4gICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBtZXNzYWdlOiBgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXMuc3RhdHVzfWAgfSkpO1xuICAgICAgLy8gRm9yIDQwMyBGb3JiaWRkZW4sIHdlIHdhbnQgdG8gc2hvdyBhIHNwZWNpZmljIG1lc3NhZ2UgZnJvbSB0aGUgQVBJXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yQm9keS5tZXNzYWdlIHx8ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLiBQbGVhc2UgdXBncmFkZSB5b3VyIHBsYW4uJyk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JCb2R5Lm1lc3NhZ2UgfHwgJ0FuIEFQSSBlcnJvciBvY2N1cnJlZCcpO1xuICAgIH1cblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDQpIHsgLy8gTm8gQ29udGVudFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBBUEkgRXJyb3IgZmV0Y2hpbmcgJHt1cmx9OmAsIGVycm9yKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBuZXR3b3JrIGVycm9yIG9jY3VycmVkJztcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5BY3Rpb24oZGF0YTogei5pbmZlcjx0eXBlb2YgbG9naW5TY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBsb2dpblNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBkYXRhIHByb3ZpZGVkLlwifVxuICB9XG5cbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHBhcnNlZERhdGEuZGF0YTtcblxuICAvLyBNb2NrIGF1dGhlbnRpY2F0aW9uIGxvZ2ljIC0gaW4gYSByZWFsIGFwcCwgdGhpcyB3b3VsZCBjYWxsIGEgL2xvZ2luIEFQSSBlbmRwb2ludFxuICAvLyB0aGF0IHZhbGlkYXRlcyBoYXNoZWQgcGFzc3dvcmRzLlxuICBpZiAocGFzc3dvcmQgPT09ICdwYXNzd29yZCcpIHsgLy8gU2ltcGxpZmllZCBjaGVjayBmb3IgYW55IGtub3duIHVzZXJcbiAgICAvLyBGb3IgdGhpcyBkZW1vLCB3ZSB1c2UgdGhlIHVzZXIncyBlbWFpbCBhcyB0aGVpciBzZXNzaW9uIFwidG9rZW5cIi5cbiAgICAvLyBUaGlzIGFsbG93cyB0aGUgYmFja2VuZCB0byBpZGVudGlmeSB0aGUgdXNlciBmb3IgZWFjaCByZXF1ZXN0LlxuICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBlbWFpbCwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICBwYXRoOiAnLycsXG4gICAgICAvLyBSZW1vdmVkIG1heEFnZSB0byBtYWtlIGl0IGEgc2Vzc2lvbiBjb29raWVcbiAgICB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMuJyB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ251cEFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBzaWdudXBTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IHNpZ251cFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgZGF0YSBwcm92aWRlZC5cIiB9XG4gICAgfVxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBwYXJzZWREYXRhLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL3VzZXJzL3NpZ251cCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQXV0b21hdGljYWxseSBsb2cgaW4gdGhlIHVzZXIgYWZ0ZXIgc3VjY2Vzc2Z1bCBzaWduIHVwXG4gICAgICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBlbWFpbCwge1xuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHNpZ24gdXAuJyB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWN0aW9uKCkge1xuICBjb29raWVzKCkuZGVsZXRlKCdzZXNzaW9uJylcbiAgcmVkaXJlY3QoJy9sb2dpbicpXG59XG5cbi8vIC0tLSBVc2VyIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckFjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpRmV0Y2goJy91c2Vycy9tZScpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuXG4vLyAtLS0gSW52b2ljZSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXNBY3Rpb24ocGFyYW1zPzogeyBjbGllbnRJZD86IHN0cmluZyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gcGFyYW1zPy5jbGllbnRJZCA/IGAvaW52b2ljZXM/Y2xpZW50SWQ9JHtwYXJhbXMuY2xpZW50SWR9YCA6ICcvaW52b2ljZXMnO1xuICAgIGNvbnN0IGludm9pY2VzID0gYXdhaXQgYXBpRmV0Y2godXJsKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlcyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGludm9pY2VzLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZUFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBpbnZvaWNlU2NoZW1hPikge1xuICBjb25zdCBwYXJzZWREYXRhID0gaW52b2ljZVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgbmV3SW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcbiAgICBcbiAgICAvLyBUaGUgYmFja2VuZCB3aWxsIG5vdyBjaGVjayB0aGUgdXNlcidzIHBsYW4gYW5kIGludm9pY2UgY291bnQgYmVmb3JlIGNyZWF0aW5nLlxuICAgIGF3YWl0IGFwaUZldGNoKCcvaW52b2ljZXMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0ludm9pY2VEYXRhKSxcbiAgICB9KTtcbiAgICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKTsgLy8gVG8gdXBkYXRlIHVzYWdlIGRpc3BsYXlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnSW52b2ljZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseSEnIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIGludm9pY2UuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZvaWNlQnlJZEFjdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52b2ljZSBub3QgZm91bmQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJbnZvaWNlQWN0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IHouaW5mZXI8dHlwZW9mIGludm9pY2VTY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBpbnZvaWNlU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIGRhdGEgcHJvdmlkZWQuJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgdXBkYXRlZEludm9pY2VEYXRhID0geyAuLi5wYXJzZWREYXRhLmRhdGEsIHN1YnRvdGFsLCB0YXgsIHRvdGFsIH07XG5cbiAgICBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRJbnZvaWNlRGF0YSksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2ludm9pY2VzLyR7aWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH0vZWRpdGApO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYEludm9pY2UgJHtkYXRhLmludm9pY2VOdW1iZXJ9IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IWAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2VBY3Rpb24oaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wYXltZW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdJbnZvaWNlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludm9pY2VTdGF0dXNBY3Rpb24oaWQ6IHN0cmluZywgc3RhdHVzOiAncGFpZCcgfCAncGVuZGluZycgfCAnb3ZlcmR1ZScpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aWR9L3N0YXR1c2AsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXR1cyB9KSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2ludm9pY2VzLyR7aWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTsgLy8gRm9yIHRoZSBzdGF0cyBjYXJkc1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYEludm9pY2Ugc3RhdHVzIHVwZGF0ZWQgdG8gJHtzdGF0dXN9LmAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgaW52b2ljZSBzdGF0dXMuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kSW52b2ljZVJlbWluZGVyQWN0aW9uKGludm9pY2VJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2ludm9pY2VJZH0vcmVtaW5kYCwgeyBtZXRob2Q6ICdQT1NUJyB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSB8fCAnUmVtaW5kZXIgc2VudCBzdWNjZXNzZnVsbHkhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNlbmQgcmVtaW5kZXIuJyB9O1xuICB9XG59XG5cbi8vIC0tLSBDbGllbnQgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsaWVudHNBY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50cyA9IGF3YWl0IGFwaUZldGNoKCcvY2xpZW50cycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjbGllbnRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY2xpZW50cy4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50QnlJZEFjdGlvbihpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7aWR9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsaWVudCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NsaWVudCBub3QgZm91bmQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNsaWVudEFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgZGF0YSBwcm92aWRlZC5cIn1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpRmV0Y2goJy9jbGllbnRzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvY2xpZW50cycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQ2xpZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgY2xpZW50LicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGllbnRBY3Rpb24oaWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2YgY2xpZW50U2NoZW1hPikge1xuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBjbGllbnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICAgIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyc2VkRGF0YS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2NsaWVudHMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvY2xpZW50cy8ke2lkfWApO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9jbGllbnRzLyR7aWR9L2VkaXRgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENsaWVudCAke2RhdGEubmFtZX0gdXBkYXRlZCBzdWNjZXNzZnVsbHkhYCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudEFjdGlvbihpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDbGllbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuY29uc3Qgbm90ZUZvcm1TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbnRlbnQ6IHouc3RyaW5nKCkubWluKDEsICdOb3RlIGNvbnRlbnQgY2Fubm90IGJlIGVtcHR5LicpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDbGllbnROb3RlQWN0aW9uKGNsaWVudElkOiBzdHJpbmcsIGRhdGE6IHouaW5mZXI8dHlwZW9mIG5vdGVGb3JtU2NoZW1hPikge1xuICBjb25zdCBwYXJzZWREYXRhID0gbm90ZUZvcm1TY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nIH07XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCB1cGRhdGVkQ2xpZW50ID0gYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7Y2xpZW50SWR9L25vdGVzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2NsaWVudHMvJHtjbGllbnRJZH1gKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnTm90ZSBhZGRlZCBzdWNjZXNzZnVsbHkhJywgZGF0YTogdXBkYXRlZENsaWVudCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFkZCBub3RlLicgfTtcbiAgfVxufVxuXG4vLyAtLS0gUGF5bWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudHNBY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bWVudHMgPSBhd2FpdCBhcGlGZXRjaCgnL3BheW1lbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBheW1lbnRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcGF5bWVudHMuJyB9O1xuICAgIH1cbn1cblxuLy8gLS0tIFN0cmlwZSAvIFN1YnNjcmlwdGlvbiBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBheW1lbnRJbnRlbnRBY3Rpb24oYW1vdW50OiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N0cmlwZS9jcmVhdGUtcGF5bWVudC1pbnRlbnQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW1vdW50LCBjdXJyZW5jeSB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsaWVudFNlY3JldDogcmVzdWx0LmNsaWVudFNlY3JldCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBwYXltZW50IGludGVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZmlybVN0cmlwZVBheW1lbnRBY3Rpb24oaW52b2ljZUlkOiBzdHJpbmcsIHBheW1lbnRJbnRlbnRJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZEludm9pY2UgPSBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aW52b2ljZUlkfS9jb25maXJtLXBheW1lbnRgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGF5bWVudEludGVudElkIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpbnZvaWNlSWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdQYXltZW50IGNvbmZpcm1lZCBzdWNjZXNzZnVsbHkhJywgZGF0YTogdXBkYXRlZEludm9pY2UgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjb25maXJtIHBheW1lbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrb3V0U2Vzc2lvbkFjdGlvbihwcmljZUlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N1YnNjcmlwdGlvbnMvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJpY2VJZCB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdChyZXN1bHQudXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NvdWxkIG5vdCBjcmVhdGUgY2hlY2tvdXQgc2Vzc2lvbi4nIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgY2hlY2tvdXQgc2Vzc2lvbi4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9ydGFsU2Vzc2lvbkFjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N1YnNjcmlwdGlvbnMvY3JlYXRlLXBvcnRhbC1zZXNzaW9uJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdChyZXN1bHQudXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NvdWxkIG5vdCBjcmVhdGUgcG9ydGFsIHNlc3Npb24uJyB9O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIHBvcnRhbCBzZXNzaW9uLicgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIEFJIEFjdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQWlVc2FnZUxpbWl0KCkge1xuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSBhd2FpdCBnZXRVc2VyQWN0aW9uKCk7XG4gICAgaWYgKCF1c2VyUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaWRlbnRpZnkgdXNlci4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nKTtcbiAgICB9XG4gICAgY29uc3QgdXNlciA9IHVzZXJSZXN1bHQuZGF0YTtcbiAgICBjb25zdCBsaW1pdHMgPSBwbGFuTGltaXRzW3VzZXIucGxhbiBhcyBrZXlvZiB0eXBlb2YgcGxhbkxpbWl0c10gfHwgcGxhbkxpbWl0cy5mcmVlO1xuXG4gICAgaWYgKHVzZXIuYWlSZXF1ZXN0Q291bnQgPj0gbGltaXRzLmFpUmVxdWVzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSByZWFjaGVkIHlvdXIgbW9udGhseSBsaW1pdCBvZiAke2xpbWl0cy5haVJlcXVlc3RzfSBBSSByZXF1ZXN0cy4gUGxlYXNlIHVwZ3JhZGUgeW91ciBwbGFuLmApO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5jcmVtZW50QWlVc2FnZSgpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL3VzZXJzL21lL2luY3JlbWVudC1haScsIHsgbWV0aG9kOiAnUFVUJyB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGluY3JlbWVudCBBSSB1c2FnZSBjb3VudDpcIiwgZXJyb3IpO1xuICAgICAgICAvLyBXZSBkb24ndCB0aHJvdyBoZXJlIHRvIG5vdCBmYWlsIHRoZSBtYWluIG9wZXJhdGlvbiwgYnV0IHdlIGxvZyB0aGUgZXJyb3IuXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmluYW5jaWFsSW5zaWdodHNBY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2hlY2tBaVVzYWdlTGltaXQoKTtcblxuICAgIGNvbnN0IFtpbnZvaWNlc1Jlc3VsdCwgcGF5bWVudHNSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0SW52b2ljZXNBY3Rpb24oKSxcbiAgICAgIGdldFBheW1lbnRzQWN0aW9uKCksXG4gICAgXSk7XG5cbiAgICBpZiAoIWludm9pY2VzUmVzdWx0LnN1Y2Nlc3MgfHwgIXBheW1lbnRzUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGZpbmFuY2lhbCBkYXRhIGZvciBhbmFseXNpcy4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnNpZ2h0cyA9IGF3YWl0IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMoe1xuICAgICAgaW52b2ljZURhdGE6IEpTT04uc3RyaW5naWZ5KGludm9pY2VzUmVzdWx0LmRhdGEpLFxuICAgICAgcGF5bWVudERhdGE6IEpTT04uc3RyaW5naWZ5KHBheW1lbnRzUmVzdWx0LmRhdGEpLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGluc2lnaHRzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBmaW5hbmNpYWwgaW5zaWdodHM6JywgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgZmluYW5jaWFsIGluc2lnaHRzLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW52b2ljZUZyb21UZXh0QWN0aW9uKHRleHQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IGNoZWNrQWlVc2FnZUxpbWl0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVJbnZvaWNlRnJvbVRleHQodGV4dCk7XG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgaW52b2ljZSBmcm9tIHRleHQ6JywgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgaW52b2ljZSBmcm9tIHRleHQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlVGF4QWN0aW9uKGFkZHJlc3M6IHN0cmluZywgc3VidG90YWw6IG51bWJlcikge1xuICB0cnkge1xuICAgIGF3YWl0IGNoZWNrQWlVc2FnZUxpbWl0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsY3VsYXRlVGF4KHsgYWRkcmVzcywgc3VidG90YWwgfSk7XG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGN1bGF0aW5nIHRheDonLCBlcnJvcik7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjYWxjdWxhdGUgdGF4IHdpdGggQUkuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0E0TnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/data:5cc8b7 [app-client] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ [{"405152ff3a40a196d9214e38e0856a4a810ec7ffd5":"sendInvoiceReminderAction"},"src/app/actions.ts",""] */ __turbopack_context__.s({
    "sendInvoiceReminderAction": (()=>sendInvoiceReminderAction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var sendInvoiceReminderAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("405152ff3a40a196d9214e38e0856a4a810ec7ffd5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendInvoiceReminderAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IHsgeiB9IGZyb20gJ3pvZCdcbmltcG9ydCB7IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMgfSBmcm9tICdAL2FpL2Zsb3dzL2dlbmVyYXRlLWZpbmFuY2lhbC1pbnNpZ2h0cydcbmltcG9ydCB7IGdlbmVyYXRlSW52b2ljZUZyb21UZXh0IH0gZnJvbSAnQC9haS9mbG93cy9nZW5lcmF0ZS1pbnZvaWNlLWZyb20tdGV4dCdcbmltcG9ydCB7IGNhbGN1bGF0ZVRheCB9IGZyb20gJ0AvYWkvZmxvd3MvY2FsY3VsYXRlLXRheCdcbmltcG9ydCB7IGludm9pY2VTY2hlbWEsIGNsaWVudFNjaGVtYSB9IGZyb20gJ0AvbGliL3R5cGVzJ1xuaW1wb3J0IHsgcGxhbkxpbWl0cyB9IGZyb20gJ0AvbGliL3N1YnNjcmlwdGlvbnMnO1xuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycydcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tICduZXh0L2NhY2hlJ1xuXG5jb25zdCBBUElfQkFTRV9VUkwgPSBwcm9jZXNzLmVudi5BUElfQkFTRV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9hcGknO1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDEsICdQYXNzd29yZCBpcyByZXF1aXJlZCcpXG59KTtcblxuY29uc3Qgc2lnbnVwU2NoZW1hID0gei5vYmplY3Qoe1xuICAgIGVtYWlsOiB6LnN0cmluZygpLmVtYWlsKCksXG4gICAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDgsICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy4nKSxcbiAgICBjb25maXJtUGFzc3dvcmQ6IHouc3RyaW5nKClcbn0pLnJlZmluZShkYXRhID0+IGRhdGEucGFzc3dvcmQgPT09IGRhdGEuY29uZmlybVBhc3N3b3JkLCB7XG4gICAgbWVzc2FnZTogXCJQYXNzd29yZHMgZG9uJ3QgbWF0Y2hcIixcbiAgICBwYXRoOiBbXCJjb25maXJtUGFzc3dvcmRcIl0sXG59KTtcblxuXG4vLyAtLS0gSGVscGVyIGZ1bmN0aW9uIGZvciBBUEkgY2FsbHMgLS0tXG5hc3luYyBmdW5jdGlvbiBhcGlGZXRjaCh1cmw6IHN0cmluZywgb3B0aW9uczogUmVxdWVzdEluaXQgPSB7fSkge1xuICBjb25zdCBzZXNzaW9uVG9rZW4gPSBjb29raWVzKCkuZ2V0KCdzZXNzaW9uJyk/LnZhbHVlO1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFX1VSTH0ke3VybH1gLCB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAuLi4oc2Vzc2lvblRva2VuICYmIHsgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7c2Vzc2lvblRva2VufWAgfSksXG4gICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgY29uc3QgZXJyb3JCb2R5ID0gYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoeyBtZXNzYWdlOiBgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXMuc3RhdHVzfWAgfSkpO1xuICAgICAgLy8gRm9yIDQwMyBGb3JiaWRkZW4sIHdlIHdhbnQgdG8gc2hvdyBhIHNwZWNpZmljIG1lc3NhZ2UgZnJvbSB0aGUgQVBJXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAzKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yQm9keS5tZXNzYWdlIHx8ICdZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBwZXJmb3JtIHRoaXMgYWN0aW9uLiBQbGVhc2UgdXBncmFkZSB5b3VyIHBsYW4uJyk7XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JCb2R5Lm1lc3NhZ2UgfHwgJ0FuIEFQSSBlcnJvciBvY2N1cnJlZCcpO1xuICAgIH1cblxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDQpIHsgLy8gTm8gQ29udGVudFxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGBBUEkgRXJyb3IgZmV0Y2hpbmcgJHt1cmx9OmAsIGVycm9yKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnQW4gdW5rbm93biBuZXR3b3JrIGVycm9yIG9jY3VycmVkJztcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW5BY3Rpb24oZGF0YTogei5pbmZlcjx0eXBlb2YgbG9naW5TY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBsb2dpblNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiSW52YWxpZCBkYXRhIHByb3ZpZGVkLlwifVxuICB9XG5cbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHBhcnNlZERhdGEuZGF0YTtcblxuICAvLyBNb2NrIGF1dGhlbnRpY2F0aW9uIGxvZ2ljIC0gaW4gYSByZWFsIGFwcCwgdGhpcyB3b3VsZCBjYWxsIGEgL2xvZ2luIEFQSSBlbmRwb2ludFxuICAvLyB0aGF0IHZhbGlkYXRlcyBoYXNoZWQgcGFzc3dvcmRzLlxuICBpZiAocGFzc3dvcmQgPT09ICdwYXNzd29yZCcpIHsgLy8gU2ltcGxpZmllZCBjaGVjayBmb3IgYW55IGtub3duIHVzZXJcbiAgICAvLyBGb3IgdGhpcyBkZW1vLCB3ZSB1c2UgdGhlIHVzZXIncyBlbWFpbCBhcyB0aGVpciBzZXNzaW9uIFwidG9rZW5cIi5cbiAgICAvLyBUaGlzIGFsbG93cyB0aGUgYmFja2VuZCB0byBpZGVudGlmeSB0aGUgdXNlciBmb3IgZWFjaCByZXF1ZXN0LlxuICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBlbWFpbCwge1xuICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICBwYXRoOiAnLycsXG4gICAgICAvLyBSZW1vdmVkIG1heEFnZSB0byBtYWtlIGl0IGEgc2Vzc2lvbiBjb29raWVcbiAgICB9KVxuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgY3JlZGVudGlhbHMuJyB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ251cEFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBzaWdudXBTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IHNpZ251cFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgZGF0YSBwcm92aWRlZC5cIiB9XG4gICAgfVxuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBwYXJzZWREYXRhLmRhdGE7XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL3VzZXJzL3NpZ251cCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gQXV0b21hdGljYWxseSBsb2cgaW4gdGhlIHVzZXIgYWZ0ZXIgc3VjY2Vzc2Z1bCBzaWduIHVwXG4gICAgICAgIGNvb2tpZXMoKS5zZXQoJ3Nlc3Npb24nLCBlbWFpbCwge1xuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHNpZ24gdXAuJyB9O1xuICAgIH1cbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9nb3V0QWN0aW9uKCkge1xuICBjb29raWVzKCkuZGVsZXRlKCdzZXNzaW9uJylcbiAgcmVkaXJlY3QoJy9sb2dpbicpXG59XG5cbi8vIC0tLSBVc2VyIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckFjdGlvbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgYXBpRmV0Y2goJy91c2Vycy9tZScpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXIgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdVc2VyIG5vdCBmb3VuZC4nIH07XG4gIH1cbn1cblxuXG4vLyAtLS0gSW52b2ljZSBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SW52b2ljZXNBY3Rpb24ocGFyYW1zPzogeyBjbGllbnRJZD86IHN0cmluZyB9KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gcGFyYW1zPy5jbGllbnRJZCA/IGAvaW52b2ljZXM/Y2xpZW50SWQ9JHtwYXJhbXMuY2xpZW50SWR9YCA6ICcvaW52b2ljZXMnO1xuICAgIGNvbnN0IGludm9pY2VzID0gYXdhaXQgYXBpRmV0Y2godXJsKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlcyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGZldGNoIGludm9pY2VzLicgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW52b2ljZUFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBpbnZvaWNlU2NoZW1hPikge1xuICBjb25zdCBwYXJzZWREYXRhID0gaW52b2ljZVNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52YWxpZCBkYXRhIHByb3ZpZGVkLicgfTtcbiAgfVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgbmV3SW52b2ljZURhdGEgPSB7IC4uLnBhcnNlZERhdGEuZGF0YSwgc3VidG90YWwsIHRheCwgdG90YWwgfTtcbiAgICBcbiAgICAvLyBUaGUgYmFja2VuZCB3aWxsIG5vdyBjaGVjayB0aGUgdXNlcidzIHBsYW4gYW5kIGludm9pY2UgY291bnQgYmVmb3JlIGNyZWF0aW5nLlxuICAgIGF3YWl0IGFwaUZldGNoKCcvaW52b2ljZXMnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld0ludm9pY2VEYXRhKSxcbiAgICB9KTtcbiAgICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKTsgLy8gVG8gdXBkYXRlIHVzYWdlIGRpc3BsYXlcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnSW52b2ljZSBjcmVhdGVkIHN1Y2Nlc3NmdWxseSEnIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIGludm9pY2UuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbnZvaWNlQnlJZEFjdGlvbihpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBpbnZvaWNlIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnSW52b2ljZSBub3QgZm91bmQuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJbnZvaWNlQWN0aW9uKGlkOiBzdHJpbmcsIGRhdGE6IHouaW5mZXI8dHlwZW9mIGludm9pY2VTY2hlbWE+KSB7XG4gIGNvbnN0IHBhcnNlZERhdGEgPSBpbnZvaWNlU2NoZW1hLnNhZmVQYXJzZShkYXRhKTtcbiAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdJbnZhbGlkIGRhdGEgcHJvdmlkZWQuJyB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBzdWJ0b3RhbCA9IHBhcnNlZERhdGEuZGF0YS5saW5lSXRlbXMucmVkdWNlKChzdW0sIGl0ZW0pID0+IHN1bSArIGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnJhdGUsIDApO1xuICAgIGNvbnN0IHRheCA9IHBhcnNlZERhdGEuZGF0YS50YXggfHwgMDtcbiAgICBjb25zdCB0b3RhbCA9IHN1YnRvdGFsICsgdGF4O1xuXG4gICAgY29uc3QgdXBkYXRlZEludm9pY2VEYXRhID0geyAuLi5wYXJzZWREYXRhLmRhdGEsIHN1YnRvdGFsLCB0YXgsIHRvdGFsIH07XG5cbiAgICBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRJbnZvaWNlRGF0YSksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2ludm9pY2VzLyR7aWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpZH0vZWRpdGApO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYEludm9pY2UgJHtkYXRhLmludm9pY2VOdW1iZXJ9IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IWAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUludm9pY2VBY3Rpb24oaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IGFwaUZldGNoKGAvaW52b2ljZXMvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvaW52b2ljZXMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9wYXltZW50cycpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdJbnZvaWNlIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBkZWxldGUgaW52b2ljZS4nIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUludm9pY2VTdGF0dXNBY3Rpb24oaWQ6IHN0cmluZywgc3RhdHVzOiAncGFpZCcgfCAncGVuZGluZycgfCAnb3ZlcmR1ZScpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aWR9L3N0YXR1c2AsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHN0YXR1cyB9KSxcbiAgICB9KTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9pbnZvaWNlcycpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2ludm9pY2VzLyR7aWR9YCk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQnKTsgLy8gRm9yIHRoZSBzdGF0cyBjYXJkc1xuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYEludm9pY2Ugc3RhdHVzIHVwZGF0ZWQgdG8gJHtzdGF0dXN9LmAgfTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byB1cGRhdGUgaW52b2ljZSBzdGF0dXMuJyB9O1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kSW52b2ljZVJlbWluZGVyQWN0aW9uKGludm9pY2VJZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXBpRmV0Y2goYC9pbnZvaWNlcy8ke2ludm9pY2VJZH0vcmVtaW5kYCwgeyBtZXRob2Q6ICdQT1NUJyB9KTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiByZXN1bHQubWVzc2FnZSB8fCAnUmVtaW5kZXIgc2VudCBzdWNjZXNzZnVsbHkhJyB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHNlbmQgcmVtaW5kZXIuJyB9O1xuICB9XG59XG5cbi8vIC0tLSBDbGllbnQgQWN0aW9ucyAtLS1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENsaWVudHNBY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50cyA9IGF3YWl0IGFwaUZldGNoKCcvY2xpZW50cycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBjbGllbnRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggY2xpZW50cy4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2xpZW50QnlJZEFjdGlvbihpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7aWR9YCk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGNsaWVudCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NsaWVudCBub3QgZm91bmQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNsaWVudEFjdGlvbihkYXRhOiB6LmluZmVyPHR5cGVvZiBjbGllbnRTY2hlbWE+KSB7XG4gICAgY29uc3QgcGFyc2VkRGF0YSA9IGNsaWVudFNjaGVtYS5zYWZlUGFyc2UoZGF0YSk7XG4gICAgaWYgKCFwYXJzZWREYXRhLnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkludmFsaWQgZGF0YSBwcm92aWRlZC5cIn1cbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpRmV0Y2goJy9jbGllbnRzJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvY2xpZW50cycpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnQ2xpZW50IGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgY2xpZW50LicgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDbGllbnRBY3Rpb24oaWQ6IHN0cmluZywgZGF0YTogei5pbmZlcjx0eXBlb2YgY2xpZW50U2NoZW1hPikge1xuICAgIGNvbnN0IHBhcnNlZERhdGEgPSBjbGllbnRTY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICAgIGlmICghcGFyc2VkRGF0YS5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaChgL2NsaWVudHMvJHtpZH1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGFyc2VkRGF0YS5kYXRhKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2NsaWVudHMnKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvY2xpZW50cy8ke2lkfWApO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChgL2Rhc2hib2FyZC9jbGllbnRzLyR7aWR9L2VkaXRgKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENsaWVudCAke2RhdGEubmFtZX0gdXBkYXRlZCBzdWNjZXNzZnVsbHkhYCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIHVwZGF0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNsaWVudEFjdGlvbihpZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7aWR9YCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pO1xuICAgICAgICByZXZhbGlkYXRlUGF0aCgnL2Rhc2hib2FyZC9jbGllbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdDbGllbnQgZGVsZXRlZCBzdWNjZXNzZnVsbHkhJyB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGRlbGV0ZSBjbGllbnQuJyB9O1xuICAgIH1cbn1cblxuY29uc3Qgbm90ZUZvcm1TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIGNvbnRlbnQ6IHouc3RyaW5nKCkubWluKDEsICdOb3RlIGNvbnRlbnQgY2Fubm90IGJlIGVtcHR5LicpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRDbGllbnROb3RlQWN0aW9uKGNsaWVudElkOiBzdHJpbmcsIGRhdGE6IHouaW5mZXI8dHlwZW9mIG5vdGVGb3JtU2NoZW1hPikge1xuICBjb25zdCBwYXJzZWREYXRhID0gbm90ZUZvcm1TY2hlbWEuc2FmZVBhcnNlKGRhdGEpO1xuICBpZiAoIXBhcnNlZERhdGEuc3VjY2Vzcykge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0ludmFsaWQgZGF0YSBwcm92aWRlZC4nIH07XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCB1cGRhdGVkQ2xpZW50ID0gYXdhaXQgYXBpRmV0Y2goYC9jbGllbnRzLyR7Y2xpZW50SWR9L25vdGVzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXJzZWREYXRhLmRhdGEpLFxuICAgIH0pO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvZGFzaGJvYXJkL2NsaWVudHMvJHtjbGllbnRJZH1gKTtcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnTm90ZSBhZGRlZCBzdWNjZXNzZnVsbHkhJywgZGF0YTogdXBkYXRlZENsaWVudCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGFkZCBub3RlLicgfTtcbiAgfVxufVxuXG4vLyAtLS0gUGF5bWVudCBBY3Rpb25zIC0tLVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGF5bWVudHNBY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcGF5bWVudHMgPSBhd2FpdCBhcGlGZXRjaCgnL3BheW1lbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBheW1lbnRzIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZmV0Y2ggcGF5bWVudHMuJyB9O1xuICAgIH1cbn1cblxuLy8gLS0tIFN0cmlwZSAvIFN1YnNjcmlwdGlvbiBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVBheW1lbnRJbnRlbnRBY3Rpb24oYW1vdW50OiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N0cmlwZS9jcmVhdGUtcGF5bWVudC1pbnRlbnQnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYW1vdW50LCBjdXJyZW5jeSB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGNsaWVudFNlY3JldDogcmVzdWx0LmNsaWVudFNlY3JldCB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnRmFpbGVkIHRvIGNyZWF0ZSBwYXltZW50IGludGVudC4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZmlybVN0cmlwZVBheW1lbnRBY3Rpb24oaW52b2ljZUlkOiBzdHJpbmcsIHBheW1lbnRJbnRlbnRJZDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZEludm9pY2UgPSBhd2FpdCBhcGlGZXRjaChgL2ludm9pY2VzLyR7aW52b2ljZUlkfS9jb25maXJtLXBheW1lbnRgLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcGF5bWVudEludGVudElkIH0pLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoYC9kYXNoYm9hcmQvaW52b2ljZXMvJHtpbnZvaWNlSWR9YCk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL2ludm9pY2VzJyk7XG4gICAgICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3BheW1lbnRzJyk7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6ICdQYXltZW50IGNvbmZpcm1lZCBzdWNjZXNzZnVsbHkhJywgZGF0YTogdXBkYXRlZEludm9pY2UgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjb25maXJtIHBheW1lbnQuJyB9O1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrb3V0U2Vzc2lvbkFjdGlvbihwcmljZUlkOiBzdHJpbmcpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N1YnNjcmlwdGlvbnMvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24nLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJpY2VJZCB9KSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdChyZXN1bHQudXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NvdWxkIG5vdCBjcmVhdGUgY2hlY2tvdXQgc2Vzc2lvbi4nIH07XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjcmVhdGUgY2hlY2tvdXQgc2Vzc2lvbi4nIH07XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlUG9ydGFsU2Vzc2lvbkFjdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGlGZXRjaCgnL3N1YnNjcmlwdGlvbnMvY3JlYXRlLXBvcnRhbC1zZXNzaW9uJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXN1bHQudXJsKSB7XG4gICAgICAgICAgICByZWRpcmVjdChyZXN1bHQudXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ0NvdWxkIG5vdCBjcmVhdGUgcG9ydGFsIHNlc3Npb24uJyB9O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gY3JlYXRlIHBvcnRhbCBzZXNzaW9uLicgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIEFJIEFjdGlvbnMgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIGNoZWNrQWlVc2FnZUxpbWl0KCkge1xuICAgIGNvbnN0IHVzZXJSZXN1bHQgPSBhd2FpdCBnZXRVc2VyQWN0aW9uKCk7XG4gICAgaWYgKCF1c2VyUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgaWRlbnRpZnkgdXNlci4gUGxlYXNlIGxvZyBpbiBhZ2Fpbi4nKTtcbiAgICB9XG4gICAgY29uc3QgdXNlciA9IHVzZXJSZXN1bHQuZGF0YTtcbiAgICBjb25zdCBsaW1pdHMgPSBwbGFuTGltaXRzW3VzZXIucGxhbiBhcyBrZXlvZiB0eXBlb2YgcGxhbkxpbWl0c10gfHwgcGxhbkxpbWl0cy5mcmVlO1xuXG4gICAgaWYgKHVzZXIuYWlSZXF1ZXN0Q291bnQgPj0gbGltaXRzLmFpUmVxdWVzdHMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgaGF2ZSByZWFjaGVkIHlvdXIgbW9udGhseSBsaW1pdCBvZiAke2xpbWl0cy5haVJlcXVlc3RzfSBBSSByZXF1ZXN0cy4gUGxlYXNlIHVwZ3JhZGUgeW91ciBwbGFuLmApO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5jcmVtZW50QWlVc2FnZSgpIHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhcGlGZXRjaCgnL3VzZXJzL21lL2luY3JlbWVudC1haScsIHsgbWV0aG9kOiAnUFVUJyB9KTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoJy9kYXNoYm9hcmQvc2V0dGluZ3MnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGluY3JlbWVudCBBSSB1c2FnZSBjb3VudDpcIiwgZXJyb3IpO1xuICAgICAgICAvLyBXZSBkb24ndCB0aHJvdyBoZXJlIHRvIG5vdCBmYWlsIHRoZSBtYWluIG9wZXJhdGlvbiwgYnV0IHdlIGxvZyB0aGUgZXJyb3IuXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmluYW5jaWFsSW5zaWdodHNBY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY2hlY2tBaVVzYWdlTGltaXQoKTtcblxuICAgIGNvbnN0IFtpbnZvaWNlc1Jlc3VsdCwgcGF5bWVudHNSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0SW52b2ljZXNBY3Rpb24oKSxcbiAgICAgIGdldFBheW1lbnRzQWN0aW9uKCksXG4gICAgXSk7XG5cbiAgICBpZiAoIWludm9pY2VzUmVzdWx0LnN1Y2Nlc3MgfHwgIXBheW1lbnRzUmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGZpbmFuY2lhbCBkYXRhIGZvciBhbmFseXNpcy4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnNpZ2h0cyA9IGF3YWl0IGdlbmVyYXRlRmluYW5jaWFsSW5zaWdodHMoe1xuICAgICAgaW52b2ljZURhdGE6IEpTT04uc3RyaW5naWZ5KGludm9pY2VzUmVzdWx0LmRhdGEpLFxuICAgICAgcGF5bWVudERhdGE6IEpTT04uc3RyaW5naWZ5KHBheW1lbnRzUmVzdWx0LmRhdGEpLFxuICAgIH0pO1xuXG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGluc2lnaHRzIH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2VuZXJhdGluZyBmaW5hbmNpYWwgaW5zaWdodHM6JywgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgZmluYW5jaWFsIGluc2lnaHRzLic7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBtZXNzYWdlIH07XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlSW52b2ljZUZyb21UZXh0QWN0aW9uKHRleHQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIGF3YWl0IGNoZWNrQWlVc2FnZUxpbWl0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2VuZXJhdGVJbnZvaWNlRnJvbVRleHQodGV4dCk7XG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdlbmVyYXRpbmcgaW52b2ljZSBmcm9tIHRleHQ6JywgZXJyb3IpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdGYWlsZWQgdG8gZ2VuZXJhdGUgaW52b2ljZSBmcm9tIHRleHQuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlVGF4QWN0aW9uKGFkZHJlc3M6IHN0cmluZywgc3VidG90YWw6IG51bWJlcikge1xuICB0cnkge1xuICAgIGF3YWl0IGNoZWNrQWlVc2FnZUxpbWl0KCk7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgY2FsY3VsYXRlVGF4KHsgYWRkcmVzcywgc3VidG90YWwgfSk7XG4gICAgYXdhaXQgaW5jcmVtZW50QWlVc2FnZSgpO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNhbGN1bGF0aW5nIHRheDonLCBlcnJvcik7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ0ZhaWxlZCB0byBjYWxjdWxhdGUgdGF4IHdpdGggQUkuJztcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IG1lc3NhZ2UgfTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0E0T3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/invoices/invoices-table.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>InvoicesTable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/table.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-client] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invoices$2f$delete$2d$invoice$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/invoices/delete-invoice-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$eca707__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:eca707 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$5cc8b7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/data:5cc8b7 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const statusVariantMap = {
    paid: 'default',
    pending: 'secondary',
    overdue: 'destructive'
};
function InvoicesTable({ invoices: initialInvoices }) {
    _s();
    const [invoices, setInvoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialInvoices);
    const [dialogOpen, setDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedInvoice, setSelectedInvoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [updatingId, setUpdatingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [remindingId, setRemindingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InvoicesTable.useEffect": ()=>{
            setInvoices(initialInvoices);
        }
    }["InvoicesTable.useEffect"], [
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$eca707__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateInvoiceStatusAction"])(invoiceId, status);
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
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$data$3a$5cc8b7__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendInvoiceReminderAction"])(invoiceId);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Invoice #"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Client"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Amount"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Due Date"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    children: "Status"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: invoices.map((invoice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "font-medium",
                                        children: invoice.invoiceNumber
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: invoice.client.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: [
                                            "$",
                                            invoice.total.toLocaleString()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(invoice.dueDate), 'MMM d, yyyy')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: updatingId === invoice.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "h-4 w-4 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                            lineNumber: 122,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        className: "p-0 h-auto focus-visible:ring-1 focus-visible:ring-ring rounded-md",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                                                            children: "Change status"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 23
                                                        }, this),
                                                        [
                                                            'paid',
                                                            'pending',
                                                            'overdue'
                                                        ].map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "text-right",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                    asChild: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: "ghost",
                                                        className: "h-8 w-8 p-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "sr-only",
                                                                children: "Open menu"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                    align: "end",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/dashboard/invoices/${invoice.id}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            asChild: true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/dashboard/invoices/${invoice.id}/edit`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            disabled: invoice.status === 'paid' || remindingId === invoice.id,
                                                            onSelect: ()=>handleSendReminder(invoice.id),
                                                            children: [
                                                                remindingId === invoice.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                                    className: "mr-2 h-4 w-4 animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                                    lineNumber: 173,
                                                                    columnNumber: 27
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/invoices/invoices-table.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                            className: "text-destructive focus:text-destructive focus:bg-destructive/10",
                                                            onClick: ()=>handleDeleteClick(invoice),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
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
            selectedInvoice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$invoices$2f$delete$2d$invoice$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(InvoicesTable, "rFjHNIBvdFWj1XNOiAw1WY/IJTI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = InvoicesTable;
var _c;
__turbopack_context__.k.register(_c, "InvoicesTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_66c12c87._.js.map