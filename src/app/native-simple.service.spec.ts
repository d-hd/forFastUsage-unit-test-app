// Написание теста простым способом

import {SimpleService} from './simple.service';
import {CheckValueService} from './check-value.service';

describe('Простой сервис', () => {
  let service: SimpleService;
  const fakeCheckValueService = { check: () => true };

  // beforeEach - запускает перед выполенением каждого теста
  beforeEach(() => {
    // service = new SimpleService(new CheckValueService()); // new SimpleService(new CheckValueService()) - так создается зависимость одного сервиса от другого для корректной работы тестов. Но это плохая правктика, так как :
    // - у CheckValueService пмогут появиться свои зависимости, поэтому цепочка выстроится огромная
    // - это нарушает основной принцип написания тестов - тесты должны быть изолированы.
    //Все внешние зависимости должны мокаться

    service = new SimpleService(fakeCheckValueService as CheckValueService); // Так будет правильнее - мокаем данные
  })

  it('должен создавать экземпляр класса', () => {
      expect(service).toBeTruthy();
      // .toBe() - эквивалент ===
      // .toEqual() - сравнивает объекты со сложной структурой
      // .toBeDefined(), .toBeUndefined() - проверяет значение на defined
      // .toBeTruthy(), .toBeFalsy() - проверяет на лошические значения
      // .not. - отрицание можно применить к любому матчеру, перечисленному выше
  });

  it('должен суммировать два числа', () => {
    const sum = service.sum(1, 2);

    expect(sum).toBe(3);
  })

  it('Должен возвращать undefined, если не передан второй аргумент', () => {
    const sum = service.sum(1);

    expect(sum).toBeUndefined();
  })
})
