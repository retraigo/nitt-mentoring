export type User = {
  username: string;
  id: number;
  department: number;
  level: number;
};

export type Mentee = {
  regno: string;
  name: string;
  year: number;
  section: string;
  batch: string;
  department: number;
  mentor_id: number;
};

export type Meeting = {
  id: number;
  date: Date;
  discussion: string;
  mentee_id: string
};
