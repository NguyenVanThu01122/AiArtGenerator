import { sum } from "./sum";


describe("Kiem tra ham sum", () => {
  test("Kiem tra 1 + 1 co bang 2 khong", () => {
    const ham_gian_diep = jest.fn(); // mock-function (Ham gian diep)

    
    let value = sum(1, 1, ham_gian_diep);
    expect(ham_gian_diep).toHaveBeenCalled();
    expect(value).toEqual(2);
  });

  // test("Kiem tra 1 + 1 co khac 3 hay khong", () => {
  //   expect(sum(1, 1)).not.toEqual(3);
  // });

  // test("Kiem tra 1 + 1 khac null", () => {
  //   expect(sum(1, 2)).not.toBeNull();
  // });
});

// value bên trong expect là thực tế, ngoài expect là mong muốn
// hiểu đơn giản là, nếu bạn expect (mong muốn cái gì)
// Thực tế ra xảy ra đúng như bạn mong muốn => test case đó pass
// Thực tế xảy ra khác những gì bạn mong muốn => test case đó fail
