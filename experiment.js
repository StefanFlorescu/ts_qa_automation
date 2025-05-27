function printUsers(users) {
    users.forEach(function (user) {
        console.log("Username: ".concat(user.userName, ", Password: ").concat(user.userPass));
    });
}
// Example usage:
var users = [
    { userName: 'alice', userPass: 'pass123' },
    { userName: 'bob', userPass: 'qwerty' }
];
printUsers(users);
function printObjectEntries(obj) {
    Object.entries(obj).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        console.log("Key: ".concat(key, ", Value: ").concat(value));
    });
}
// Example usage:
var sampleUser = { userName: 'charlie', userPass: 'abc123' };
printObjectEntries(sampleUser);
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["User"] = 1] = "User";
    UserRole[UserRole["Guest"] = 2] = "Guest";
})(UserRole || (UserRole = {}));
// Iterate over enum fields
Object.keys(UserRole)
    .filter(function (key) { return isNaN(Number(key)); }) // filter out reverse mappings
    .forEach(function (key) {
    console.log("UserRole: ".concat(key, " = ").concat(UserRole[key]));
});
// Example usage:
var role = UserRole.Admin;
console.log("Role: ".concat(UserRole[role])); // Output: Role: Admin
