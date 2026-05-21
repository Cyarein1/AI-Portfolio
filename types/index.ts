export type SkillGroup = {
  title: string;
  skills: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  status: string;
  githubUrl: string;
  liveUrl: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};