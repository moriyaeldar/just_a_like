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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
// const uri = "mongodb://localhost/just_a_like";
const uri = process.env.MONGO_ATLAS || "mongodb://localhost/just_a_like";
// const uri = process.env.MONGO_ATLAS;
/**
 *
 * @returns db connection
 */
module.exports = function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        mongoose.connect(uri, {});
        const connection = mongoose.connection;
        connection.once("open", () => {
            console.log("MongoDB database connect");
        });
    });
};
//# sourceMappingURL=db.js.map