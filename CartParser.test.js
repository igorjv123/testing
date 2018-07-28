import CartParser from './CartParser';

let parser;

beforeEach(() => {
    parser = new CartParser();
});

describe("CartParser - unit tests", () => {
    it('should returns JSON object with cart items and total price.', ()=>{
      expect(typeof(parser.parse('./samples/cart.csv'))).toEqual('object');
    });

});

describe("CartParser - integration tests", () => {
    // Add your integration tests here.

});
