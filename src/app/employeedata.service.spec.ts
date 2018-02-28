import { TestBed, inject } from '@angular/core/testing';
import { EmployeedataService } from './employeedata.service';

describe('EmployeedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeedataService]
    });
  });

  it('should be created', inject([EmployeedataService], (service: EmployeedataService) => {
    expect(service).toBeTruthy();
  }));
});
