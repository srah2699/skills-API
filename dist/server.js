"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var PORT = 5000 || '';
app_1.app.listen(PORT, function () { return console.log('listening on port'); });
