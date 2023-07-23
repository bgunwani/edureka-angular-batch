import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';
import { of } from 'rxjs';

describe('UsersService', () => {
  // let service: UsersService;
  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(UsersService);
  // });

  let service: UsersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    })
    service = TestBed.get(UsersService);
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('service created', inject([UsersService], (userService: UsersService) => {
    expect(userService).toBeTruthy();
  }))

  describe('Test Mock Data', () => {

    let spy: any;

    it('all', () => {
      const userResponse: any = [
        {
          "id": 101,
          "name": "King Kochhar",
          "age": 23
        },
        {
          "id": 102,
          "name": "Sarah Bowling",
          "age": 43
        },
        {
          "id": 103,
          "name": "Gautam Bhalla",
          "age": 33
        }
      ];
      let response;
      spy = spyOn(service, 'all').and.returnValue(of(userResponse));

      service.all().subscribe(result => {
        response = result;
      });
      expect(response).toEqual(userResponse);
    })
  })

});

