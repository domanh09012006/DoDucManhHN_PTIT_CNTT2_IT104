"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weekDays;
(function (weekDays) {
    weekDays[weekDays["thu2"] = 0] = "thu2";
    weekDays[weekDays["thu3"] = 1] = "thu3";
    weekDays[weekDays["th4"] = 2] = "th4";
    weekDays[weekDays["thu5"] = 3] = "thu5";
    weekDays[weekDays["thu6"] = 4] = "thu6";
    weekDays[weekDays["thu7"] = 5] = "thu7";
    weekDays[weekDays["chunhat"] = 6] = "chunhat";
})(weekDays || (weekDays = {}));
for (let i = weekDays.thu2; i < weekDays.chunhat; i++) {
    console.log(weekDays[i]);
}
