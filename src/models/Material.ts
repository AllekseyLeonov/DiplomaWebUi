export interface Material{
  name: string,
  children: Material[],
  isSectionParent: boolean,
  IsAvailable: boolean,
}
