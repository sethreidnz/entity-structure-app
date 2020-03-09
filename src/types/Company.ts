import Person from "./Person";

type Company = {
  companyName: string;
  shareholding?: number;
  people: Person[];
  companies: Company[];
};

export default Company;
