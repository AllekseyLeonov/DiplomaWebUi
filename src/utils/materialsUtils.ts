import {Material} from "../models/Material";

export const foreachMaterial = (parent: Material, func: Function) => {
  console.log(parent);
  func(parent);
  parent.children.forEach(child => {
    console.log(child);
    if(child){
      foreachMaterial(child, func);
    }
  });
  return parent;
}
