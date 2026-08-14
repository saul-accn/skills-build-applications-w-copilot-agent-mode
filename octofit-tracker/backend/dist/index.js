"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
require("./config/database");
const PORT = 8000;
server_1.default.listen(PORT, () => {
    console.log(`Octofit Tracker API server running on port ${PORT}`);
});
