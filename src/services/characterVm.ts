export type CharacterVm = {
  id: string;              // using filename as stable id
  displayName: string;
  imageUrl: string | null;
  author: string | null;
  filename: string;
  name: string;
};