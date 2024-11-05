// Написание теста с использованием утилиты Angular TestBed
// Angular TestBed - создает тестовое окружение для работы тестов

import {SimpleService} from './simple.service';
import {CheckValueService} from './check-value.service';
import {TestBed} from '@angular/core/testing';

// xdescribe - отключает врменно группу тестов
// fdescribe - заставляет работать только эту группу тестов
describe('Простой сервис', () => {
  let service: SimpleService;
  const fakeCheckValueService = { check: () => true };

  // beforeEach - запускает перед выполенением каждого теста
  beforeEach(() => {
    TestBed.configureTestingModule({  // создается мок ангуляр модуля
      providers: [
        SimpleService,
        { provide: CheckValueService, useValue: fakeCheckValueService },
      ],
    });

    service = TestBed.inject(SimpleService); // Получаем экземпляр класса SimpleService. TestBed.get() - в старой версии
  })

  it('должен создавать экземпляр класса', () => {
    expect(service).toBeTruthy();
  });

  // fit - так будет работать только один тест, а остальные будет игнорироваться. Например, если нужно что-то отдебажить
  // xit - так мы отключаем тест
  it('должен суммировать два числа', () => {
    const sum = service.sum(1, 2);

    expect(sum).toBe(3);
  })

  it('Должен возвращать undefined, если не передан второй аргумент', () => {
    const sum = service.sum(1);

    expect(sum).toBeUndefined();
  })

  it('Должен возвращать 21, если не передан первый аргумент', () => {
    const sum = service.sum(undefined, 2);

    expect(sum).toBe(22);
  })

  it('должен проверять значение ', () => {
    const value = service.check();

    expect(value).toBeTruthy();
  });
})
