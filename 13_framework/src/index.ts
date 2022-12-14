import { UserList } from "./views/UserList";
import { Collection } from "./model/Collection";
import { UserProps, User } from "./model/User";

const users = new Collection("http://localhost:3000/users", (json: UserProps) => {
  return User.buildUser(json);
});

users.on("change", () => {
  const root = document.getElementById("root");

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

//* Old versions
// import { UserEdit } from "./views/UserEdit";
// import { User } from "./model/User";

// const user = User.buildUser({ name: "NAME", age: 20 });

// * Options 1 and 2
// const userForm = new UserForm(document.getElementById("root") as HTMLElement, user);
// const userForm = new UserForm(document.getElementById("root")!, user);
// userForm.render();

//* Option 3
// const root = document.getElementById("root");

// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();
//   console.log({ userEdit });
// } else {
//   throw new Error("Root element not found");
// }

// const user = new User({ id: 1 });
// user.fetch();
// console.log({ user });
// user.set({ name: "John Doe", age: 27 });
// user.save();
// const user = new User({ name: "New Record", age: 0 });
// // user.save();
// console.log(user.get("name"));
// user.on("change", () => {
//   console.log("User was changed, HTML should be changed");
// });

// user.events.on("change", () => {
//   console.log("Change!");
// });

// // user.events.trigger("change");
// user.set({ name: "New Name" });

// const user2 = new User({ id: 1, name: "newer name", age: 0 });
// user.on("save", () => {
//   console.log({ user2 });
// });
// user2.save();

// const collection = User.buildUserCollection();

// collection.on("change", () => {
//   console.log(collection);
// });

// collection.fetch();
//* Older versions

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
