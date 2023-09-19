export type User =
  & { id: number; username: string; password: string }
  & ({
    level: 0;
    mentee: Mentee;
  } | {
    level: 1;
    mentor: Mentor;
  } | {
    level: 2;
    mentor: Mentor;
  } | {
    level: 3;
    mentor: Mentor;
  }
);

export type Department = {
  name: string;
  id: string
}

  export type MentorInfo = {
    id: number;
    name: string;
    department: Department;
  }
  export type Mentor = MentorInfo & {
    id: number;
    name: string;
    department: Department;
    mentees: Mentee[];
  }

  export type Mentee = {
    register_number: string;
    name: string;
    year: number;
    section: string;
    batch: number;
    department: Department;
    mentor: MentorInfo
  }

export type Meeting = {
  id: number;
  date: Date;
  discussion: string;
  mentee: Mentee;
  mentor: MentorInfo;
};