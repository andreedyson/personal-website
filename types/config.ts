export type ProjectType = {
  title: string;
  description: string;
  imgUrl: string;
  stacks: {
    name: string;
    imgPath: string;
  }[];
  repoUrl?: string;
  demoUrl?: string;
};
