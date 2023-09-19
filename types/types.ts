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
  });

export type Department = {
  name: string;
  id: string;
};

export type MentorInfo = {
  id: number;
  name: string;
  department: Department;
};
export type Mentor = MentorInfo & {
  id: number;
  name: string;
  department: Department;
  mentees: Mentee[];
};

export type Mentee = {
  register_number: string;
  name: string;
  year: number;
  section: string;
  batch: number;
  department: Department;
  mentor: MentorInfo;
  personal_info: Partial<{
    blood_group: string;
    mobile_number: string;
    whatsapp_number: string;
    date_of_birth: Date;
    gender: string;
    email_id: string;
    father: Partial<ParentInfo>;
    mother: Partial<ParentInfo>;
  }>;
  past: {
    sslc: {
      institution: string;
      board_of_study: string;
      year_of_study: string;
      percentage: string;
    };
    hsc: {
      institution: string;
      board_of_study: string;
      year_of_study: string;
      percentage: string;
    };
    jee: {
      rank: number;
      score: string;
    };
  };
  achievements: Partial<{
    positions_of_responsibility: string;
    scholarships: string;
    competitions: string;
    special_talents: string;
    role_model: string;
    objectives: string;
    extra_curricular: string;
  }>;
  reassessment_info?: string;
  placement_studies?: string;
  student_comments?: string;
  academics: {
    special?: string;
    clubs?: string;
    academic?: string;
    disciplinary_actions?: string;
    odd_sem: SemResult;
    even_sem: SemResult;
  }[];
};

type SemResult = {
  semester: number;
  academic_year?: string;
  hostel?: string;
  subjects: SubjectResult[];
};

type SubjectResult = {
  name: string;
  grade: string;
};

type ParentInfo = {
  name: string;
  occupation: string;
  mobile_number: string;
  whatsapp_number: string;
  email_id: string;
  address: string;
};

export type Meeting = {
  id: number;
  date: Date;
  discussion: string;
  mentee: Mentee;
  mentor: MentorInfo;
};
