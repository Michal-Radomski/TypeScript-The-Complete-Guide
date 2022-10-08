const profile = {
  name1: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, name1 }: { age: number; name1: string } = profile;
console.log({ age, name1 });

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
console.log({ lat, lng });
