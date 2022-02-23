"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const schema = new Schema({
    hive: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'hive',
        required: true,
    },
    dateTime: {
        type: Date,
        default: Date.now(),
    },
    weight: {
        type: Number,
        required: true,
    },
});
//# sourceMappingURL=weight.js.map