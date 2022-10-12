// console.log("test");

import { User } from "./model/User";

const user = new User({ name: "Michal", age: 20 });

// user.set({ name: "newName", age: 99 });

// console.log("user:", user);

user.on("change", () => {});
user.on("hover", () => {});

console.log("user:", user);
