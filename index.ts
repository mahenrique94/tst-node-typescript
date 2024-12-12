enum Role {
  ADMIN,
  USER,
}

type Person = {
  name: string;
  age: number;
  role: Role;
};

const p: Person = {
  name: "Matheus",
  age: 123,
  role: Role.USER,
};

console.log(p);
