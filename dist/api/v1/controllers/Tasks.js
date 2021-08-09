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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopTrackingTask = exports.createNewTask = exports.getSingleTask = exports.getAllTasks = void 0;
const Task_1 = __importDefault(require("../models/Task"));
const Time_1 = require("../helpers/Time");
//@desc get all tasks
//@route GET/api/v1/tasks
//@public
const getAllTasks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield Task_1.default.find();
        let taskObject;
        const tasks = yield response.map((task) => (taskObject = {
            _id: task._id,
            title: task.title,
            description: task.description,
            inProgress: task.inProgress,
            startTime: Time_1.ToUTCTime(task.startTime),
            taskDuration: Time_1.elapsedTime(task.startTime),
        }));
        console.log(tasks);
        res.status(201).json({ success: true, data: tasks });
    }
    catch (error) {
        console.log(error);
        res.status(404).json({ success: false, data: error });
    }
});
exports.getAllTasks = getAllTasks;
//@desc get single task
//@route GET/api/v1/tasks/:id
//@public
const getSingleTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id, title, description, inProgress, startTime } = yield Task_1.default.findById(req.params.id);
        const task = yield {
            _id,
            title,
            description,
            inProgress,
            startTime: Time_1.ToUTCTime(startTime),
            taskDuration: Time_1.elapsedTime(startTime),
        };
        if (!task) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: task });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: error });
    }
});
exports.getSingleTask = getSingleTask;
//@desc create new task
//@route POST/api/v1/tasks
//@public
const createNewTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTask = yield {
            title: req.body.title,
            description: req.body.description,
            inProgress: true,
            startTime: Time_1.ToUTCTime(Time_1.currentTime),
        };
        const task = yield Task_1.default.create(newTask);
        res.status(201).json({ success: true, data: task });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: error });
    }
});
exports.createNewTask = createNewTask;
//@desc stop tracking task
//@route PUT/api/v1/tasks/:id
//@public
const stopTrackingTask = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTask = yield Object.assign(Object.assign({}, req.body), { inProgress: false });
        const task = yield Task_1.default.findByIdAndUpdate(req.params.id, updatedTask, {
            new: true,
            runValidators: true,
        });
        if (!task) {
            return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: task });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ success: false, data: error });
    }
});
exports.stopTrackingTask = stopTrackingTask;
