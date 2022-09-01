import api from "./api";

export interface ILinkeDevResponse {
  name: string;
  email: string;
  password: string;
  empresa: string;
  social: string;
  avatar_URL: string;
  recruiter: boolean;
  role: string;
  level: string;
  stacks: string[];
  bio: string;
  typeUser: string;
}

export async function getLinkeDev(): Promise<ILinkeDevResponse> {
  const { data } = await api.get<ILinkeDevResponse>("/users");

  return data;
}
