"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmneziaWarpError = void 0;
class AmneziaWarpError extends Error {
    isAmneziaWarpError = true;
    sdk = 'AmneziaWarp';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.AmneziaWarpError = AmneziaWarpError;
//# sourceMappingURL=AmneziaWarpError.js.map