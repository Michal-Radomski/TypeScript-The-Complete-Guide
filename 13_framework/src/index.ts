// import axios from "axios";

import { User } from "./model/User";

// const user = new User({ id: 1 });
// user.fetch();
// console.log({ user });
// user.set({ name: "John Doe", age: 27 });
// user.save();
const user = new User({ name: "New Record", age: 0 });
// user.save();

user.events.on("change", () => {
  console.log("Change!");
});

user.events.trigger("change");

//* Old versions

// axios.post("http://localhost:3000/users", {
//   name: "Name_3",
//   age: 20,
// });

// axios.get("http://localhost:3000/users/3").then((response) => {
//   console.log("response.data:", response.data);
// });

// const user = new User({ name: "Michal", age: 20 });

// // user.set({ name: "newName", age: 99 });

// // console.log("user:", user);

// user.on("change", () => {
//   console.log("change");
// });
// user.on("hover", () => {
//   console.log("hover");
// });

// user.trigger("change");
// user.trigger("hover");

// console.log("user:", user);
