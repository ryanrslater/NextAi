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
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
var OpenAi_1 = require("./OpenAi");
var Rekognition_1 = require("./AWS/Rekognition");
var Routes;
(function (Routes) {
    Routes["OPENAI"] = "openai";
    Routes["REKOGNITION"] = "rekognition";
})(Routes = exports.Routes || (exports.Routes = {}));
var AiProvider = function (config, req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!Array.isArray(req.query.nextai)) return [3 /*break*/, 7];
                if (!(req.query.nextai[0] === Routes.OPENAI)) return [3 /*break*/, 3];
                if (!config.OpenAi) return [3 /*break*/, 2];
                return [4 /*yield*/, (0, OpenAi_1.default)(config.OpenAi, req, res)];
            case 1:
                _a.sent();
                return [3 /*break*/, 3];
            case 2:
                res.status(500).json({ message: "Internal Server Error" });
                _a.label = 3;
            case 3:
                if (!(req.query.nextai[0] === Routes.REKOGNITION)) return [3 /*break*/, 6];
                if (!config.AWS) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, Rekognition_1.default)(config.AWS, req, res)];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                res.status(500).json({ message: "Internal Server Error" });
                _a.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                res.status(404).json({ message: "Not Found" });
                _a.label = 8;
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.default = AiProvider;
