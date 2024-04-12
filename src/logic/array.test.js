import { drinkAll } from "./array";
describe("drinkAll", () => {
  test("drinks something lemon-flavoured", () => {
    const drink = jest.fn(); // mock-function - tao ra mot ham gian diep
    drinkAll(drink);
    expect(drink).toHaveBeenCalled();
  });
});
