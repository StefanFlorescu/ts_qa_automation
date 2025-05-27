type User = {
    userName: string;
    userPass: string;
};

function printUsers(users: User[]): void {
    users.forEach(user => {
        console.log(`Username: ${user.userName}, Password: ${user.userPass}`);
    });
}

// Example usage:
const users: User[] = [
    { userName: 'alice', userPass: 'pass123' },
    { userName: 'bob', userPass: 'qwerty' }
];

printUsers(users);

function printObjectEntries(obj: Record<string, any>): void {
    Object.entries(obj).forEach(([key, value]) => {
        console.log(`Key: ${key}, Value: ${value}`);
    });
}

// Example usage:
const sampleUser: User = { userName: 'charlie', userPass: 'abc123' };
printObjectEntries(sampleUser);


enum UserRole {
    Admin,
    User,
    Guest
}

// Iterate over enum fields
Object.keys(UserRole)
    .filter(key => isNaN(Number(key))) // filter out reverse mappings
    .forEach(key => {
        console.log(`UserRole: ${key} = ${UserRole[key as keyof typeof UserRole]}`);
    });

// Example usage:
const role: UserRole = UserRole.Admin;
console.log(`Role: ${UserRole[role]}`); // Output: Role: Admin