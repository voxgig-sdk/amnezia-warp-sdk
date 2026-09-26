import { Context } from './Context';
declare class AmneziaWarpError extends Error {
    isAmneziaWarpError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { AmneziaWarpError };
