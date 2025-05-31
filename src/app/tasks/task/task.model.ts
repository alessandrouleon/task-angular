export interface Task {
  id: string;
  userId: string;
  title: string;
  sumary: string;
  dueDate: string;
}

export interface NewTeskDate {
  title: string;
  summary: string;
  date: string;
}