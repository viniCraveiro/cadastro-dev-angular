
export type TRegisterDev = {
  email: string | null;
  formation: string | null;
} & TDev;

export type TDev = {
  name: string | null;
  city: string | null;
  technologies: string[] | null;
  avatarURL: string | null;
  userGithub?: string | null;
};
