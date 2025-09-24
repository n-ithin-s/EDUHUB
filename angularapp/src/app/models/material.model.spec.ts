import { Material } from './material.model';

describe('Material Model', () => {

  fit('frontend_material model should create an instance', () => {
    // Create a sample user object
    const material: Material = {
      title: "java"
    };

    expect(material).toBeTruthy();
    expect(material.title).toBe("java");

  });
});
