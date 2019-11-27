enum Role {
    ADMIN="ADMIN", READ_ONLY="READ_ONLY", AUTHOR="AUTHOR"
};

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    age: 30,
    name: "Scott",
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};

console.log(person.role);