import {CheckValueService} from './check-value.service';
import {TestBed} from '@angular/core/testing';

describe('Сервис проверки значения', () => {
  let service: CheckValueService;
  const fakeCheckValueService = { check: () => true };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckValueService,
      ],
    });

    service = TestBed.inject(CheckValueService);
  })

  it('должен создавать экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  it('должен проверять значение ', () => {
    const value = service.check();

    expect(value).toBeTruthy();
  });
})
