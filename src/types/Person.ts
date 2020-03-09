import RelationshipType from "../enums/RelationshipType";

type Person = {
    name: string;
    relationship: RelationshipType;
    shareholding: number;
}

export default Person;