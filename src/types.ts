export interface Person {
  id: number;
  avatar: string;
  first_name: string;
  last_name: string;
  email: string;
}

export interface ApiGetPeopleResponse {
  data: Person[];
}
