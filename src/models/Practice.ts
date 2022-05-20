export interface Practice{
  id: string,
  title: string,
  theoryId: string,
  description: string,
  staticCode: string;
}

export interface CheckCodeRequest{
  innerCode: string,
  outerCode: string,
  practiceId: string,
}

export interface CheckCodeResponse{
  isValid: boolean,
  messages: string[],
}
