
export type TRegisterDev = {
  email: string | null;
  formation: string | null;
} & TDev;

export type TDev = {
  _id: string | null;
  name: string | null;
  city: string | null;
  technologies: string | null;
  avatarURL: string | null;
  userGithub?: string | null;
};

export interface IGitHubDataUser {
  login: string,
  avatar_url: string,
  html_url: string,
  name: string,
  location: string,
  email: string,
}
