import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

// console.log("test");

const user = new User();
console.log({ user });

const company = new Company();
console.log({ company });

const customMap = new CustomMap("map");
console.log({ customMap });

customMap.addMarker(user);
customMap.addMarker(company);
