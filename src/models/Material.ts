export interface Material{
  id: string,
  parentId: string,
  name: string,
  description: string,
  children: Material[],
  isSectionParent: boolean,
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
