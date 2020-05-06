export type SubjectModel = {
  SubjectId: number;
  Subject: string;
};
export type TContactUsState = {
  isLoading: boolean;
  subjectsList: SubjectModel[];
};
