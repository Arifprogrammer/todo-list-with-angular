export interface Note {
  id: number;
  title: string;
  text: string;
}
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Learn Angular',
    text: `Want to expert in Angular, I've to learn Angular daily`,
  },
  {
    id: 2,
    title: 'Shakespeare',
    text: 'To be, or not to be: that is the question.',
  },
];
