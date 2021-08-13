"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
var Permission2;
(function (Permission2) {
    Permission2[Permission2["ADMIN"] = 1] = "ADMIN";
    Permission2["USER"] = "USER";
    Permission2["READONLY"] = "READONLY";
})(Permission2 || (Permission2 = {}));
console.log(Permission2.ADMIN);
console.log(Permission2.USER);
console.log(Permission2.READONLY);
console.log(Permission2[1]);
console.log(Permission2["USER"]);
console.log(Permission2["READONLY"]);
//# sourceMappingURL=enum.js.map