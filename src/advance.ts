interface IModel<TData, TMethods> {
  data: TData;
  methods: TMethods;
}
interface IUser {
  firstName: string;
  lastName: string;
}
interface IMethods {
  fullName(): string;
}

type Model = IModel<IUser, IMethods>;
class User implements Model {
  data: IUser;
  methods: IMethods;
  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName };
    this.methods = {
      fullName: () => `${firstName} ${lastName}`,
    };
  }
}

const user1 = new User("md", "muhiuddin");
const user2 = new User("ns", "web Developer");
console.log(user2.methods.fullName());
console.log(user1.methods.fullName());
