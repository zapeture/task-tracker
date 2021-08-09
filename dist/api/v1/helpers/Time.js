"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.elapsedTime = exports.ToUTCTime = exports.currentTime = void 0;
//current time
exports.currentTime = new Date().getTime().toString();
const ToUTCTime = (time) => {
    const result = new Date(Number(time));
    return result;
};
exports.ToUTCTime = ToUTCTime;
const elapsedTime = (time) => {
    const result = new Date().getTime() - parseInt(time);
    var minutes = Math.floor(result / 60000);
    var seconds = ((result % 60000) / 1000).toFixed(0);
    return String(`${minutes}min:${seconds < 10 ? '0' : ''}${seconds}sec`);
};
exports.elapsedTime = elapsedTime;
