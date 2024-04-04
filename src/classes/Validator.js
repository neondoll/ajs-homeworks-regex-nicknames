export default class Validator {
  constructor(value) {
    this.value = value;
  }

  /**
   * Проверка имени пользователя с помощью регулярных выражений на соответствие следующим правилам:
   *
   * 1. Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
   *
   * 2. Имя не должно содержать подряд более трёх цифр, а также начинаться и заканчиваться цифрами,
   * символами подчёркивания или тире.
   * */
  validateUsername() {
    const validSymbols = /^[a-z-_\d]+$/i;
    const noMoreThanThreeDigitsInRow = /^(?:(?!\d{4}).)*$/;
    const mustNotStartWithNumbersAndSymbols = /^[^-_\d]/;
    const mustNotEndWithNumbersAndSymbols = /[^-_\d]$/;

    return validSymbols.test(this.value)
      && noMoreThanThreeDigitsInRow.test(this.value)
      && mustNotStartWithNumbersAndSymbols.test(this.value)
      && mustNotEndWithNumbersAndSymbols.test(this.value);
  }
}
