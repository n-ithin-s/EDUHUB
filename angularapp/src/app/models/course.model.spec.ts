import { Course } from './course.model';

describe('Course Model', () => {

  fit('frontend_course model should create an instance', () => {
    // Create a sample user object
    const course: Course = {
        title :'Java'
    };

    expect(course).toBeTruthy();
    expect(course.title).toBe('Java');

  });
});
