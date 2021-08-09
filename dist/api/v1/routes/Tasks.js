"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Tasks_1 = require("../controllers/Tasks");
router.route('/').get(Tasks_1.getAllTasks).post(Tasks_1.createNewTask);
router.route('/:id').put(Tasks_1.stopTrackingTask).get(Tasks_1.getSingleTask);
exports.default = router;
