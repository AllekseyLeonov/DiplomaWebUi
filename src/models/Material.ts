export interface Material{
  id: string,
  name: string,
  description: string,
  children: Material[],
  isSectionParent: boolean,
  IsAvailable: boolean,
  practiceId: string,
  theoryId: string,
}

export interface MaterialPreview{
  id: string,
  name: string,
  description: string,
  practiceId: string,
  theoryId: string,
}
