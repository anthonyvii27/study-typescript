enum Permission {
    ADMIN,
    USER,
    READONLY
}

console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);

enum Permission2 {
    ADMIN = 1,
    USER = "USER",
    READONLY = "READONLY"
}

console.log(Permission2.ADMIN);
console.log(Permission2.USER);
console.log(Permission2.READONLY);

console.log(Permission2[1]);
console.log(Permission2["USER"]);
console.log(Permission2["READONLY"]);