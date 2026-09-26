"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ConfigurationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AMNEZIA_WARP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AMNEZIA_WARP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.AmneziaWarpSDK.test();
        const ent = testsdk.Configuration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AMNEZIA_WARP_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'configuration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "config": { "a": true, "h": "Config", "n": "config", "r": false, "t": "`$OBJECT`", "key$": "config", "index$": 0 }, "path": { "a": true, "h": "Path", "n": "path", "r": false, "t": "`$STRING`", "key$": "path", "index$": 1 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 2 } }, "name": "configuration", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/warp", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/warp", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "warp" }], "t": { "req": "`reqdata`", "res": "`body.config`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "configuration", "name__orig": "configuration", "Name": "Configuration", "name_": "configuration", "name-": "configuration", "NAME": "CONFIGURATION", "index$": 0 }, { "active": true, "entity": "configuration", "key$": "BasicConfigurationFlow", "kind": "basic", "name": "BasicConfigurationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "configuration_ref01", "srcdatavar": "configuration_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-configuration_ref01" } }], "index$": 0 }] }, 'Configuration', { "GET /api/warp": { "protocol": "http", "operationId": "getWarpConfig", "responses": { "200": { "description": "Successful response with warp configuration", "content": { "application/json": { "schema": { "type": "object", "properties": { "config": { "description": "Warp configuration object", "key$": "config", "type": "object" }, "path": { "description": "Path where configuration is saved", "key$": "path", "type": "string" }, "status": { "description": "Status of the configuration generation", "key$": "status", "type": "string" } } }, "example": { "config": { "interface": { "private_key": "example_private_key", "address": "10.0.0.1/32" }, "peer": { "public_key": "example_public_key", "endpoint": "example.endpoint.com:51820" } }, "status": "success", "path": "/configs/warp_config.conf" } }, "text/plain": { "schema": { "type": "string", "description": "Plain text configuration file content" } } } }, "500": { "description": "Internal server error - Error generating or saving config", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "status": { "type": "string", "example": "error" } } }, "example": { "error": "Error saving config", "status": "error" } } } }, "503": { "description": "Service unavailable - GitHub website or API is experiencing downtime", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message" }, "status": { "type": "string", "example": "unavailable" }, "suggestion": { "type": "string", "description": "Suggested action for the user" } } }, "example": { "error": "Service temporarily unavailable", "status": "unavailable", "suggestion": "Please try again later or check the GitHub status page" } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let configuration_ref01_data = Object.values(setup.data.existing.configuration)[0];
        // LOAD
        const configuration_ref01_ent = client.Configuration();
        const configuration_ref01_match_dt0 = {};
        const configuration_ref01_data_dt0 = (await configuration_ref01_ent.load(configuration_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != configuration_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/configuration/ConfigurationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.AmneziaWarpSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['configuration01', 'configuration02', 'configuration03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AMNEZIA_WARP_TEST_CONFIGURATION_ENTID': idmap,
        'AMNEZIA_WARP_TEST_LIVE': 'FALSE',
        'AMNEZIA_WARP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['AMNEZIA_WARP_TEST_CONFIGURATION_ENTID'];
    const live = 'TRUE' === env.AMNEZIA_WARP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AMNEZIA_WARP_TEST_CONFIGURATION_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.AmneziaWarpSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.AMNEZIA_WARP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ConfigurationEntity.test.js.map