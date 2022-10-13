import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  constructor(private data: UserProps) {
    this.data = data;
  }
  get(propName: string): number | string {
    return this.data[propName as keyof UserProps]!;
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    console.log("this.get('id'):", this.get("id"));
    axios.get(`http://localhost:3000/users/${this.get("id")}`).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    const id = this.get("id");
    console.log({ id });

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
