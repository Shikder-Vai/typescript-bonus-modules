//pick

interface Person {
  name: string;
  email: string;
  contactNo: number;
}
type Email = Pick<Person, "email">;
// i can pick multyple type
type Name = Pick<Person, "name" | "email">;

//Omit
type ContactInfo = Omit<Person, "name">;

interface Books {
  name: string;
  page: number;
  writer?: string;
}

//Partial type = make all propertis be optional
type Optional = Partial<Books>;
//Required type = make all propertis be require
type Require = Required<Books>;

//ReadOnly type = don't take variable new value
const book: Readonly<Books> = {
  name: "jadid",
  page: 521,
  writer: "kashem",
};

//index signature
// type MyObj = {
//     a: string;
//     b: string;
//     c:string
// }
// type MyObj = {
//   [key: string]: string;
// };

// Record type =
type MyObj = Record<"a" | "b" | "c", string>;
const obj: MyObj = {
  a: "1",
  b: "2",
  c: "3",
};
