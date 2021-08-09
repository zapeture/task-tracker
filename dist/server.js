"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config/config");
const config_2 = require("./config/config");
const cors_1 = __importDefault(require("cors"));
const Tasks_1 = __importDefault(require("./api/v1/routes/Tasks")); /* Tasks routes */
const db_1 = __importDefault(require("../src/config/database/db"));
const morgan_1 = __importDefault(require("morgan"));
//connect to database
db_1.default();
const app = express_1.default();
// body parser
app.use(express_1.default.json());
// logging middleware
if (config_1.NODE_ENV === 'development') {
    app.use(morgan_1.default('dev'));
}
//allow cors
app.use(cors_1.default());
// Mount Router
app.use('/api/v1/tasks', Tasks_1.default);
// port setup
const PORT = parseInt(config_2.PORT, 10) || 5000;
app.listen(PORT, () => {
    console.log(`Server running in ${config_1.NODE_ENV} mode on port ${PORT}`);
});
