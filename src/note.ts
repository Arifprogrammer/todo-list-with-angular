export interface Note {
  id: number;
  title: string;
  text: string;
}
export const NOTES: Note[] = [
  {
    id: 1,
    title: 'Learn Angular',
    text: `Want to be an expert in Angular that's why I've to spend at least 4 hours daily in Angular`,
  },
  {
    id: 2,
    title: `Shakespeare's Qoutes`,
    text: 'To be, or not to be: that is the question.',
  },
];
