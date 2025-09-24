import { Enrollment } from './enrollment.model';

describe('Enrollment Model', () => {

  fit('frontend_enrollment model should create an instance', () => {
    // Create a sample user object
    const enrollment: Enrollment = {
        status:'Pending'
    };

    expect(enrollment).toBeTruthy();
    expect(enrollment.status).toBe('Pending');

  });
});
