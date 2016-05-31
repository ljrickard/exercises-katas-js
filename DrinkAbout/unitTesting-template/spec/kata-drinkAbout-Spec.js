describe("my function peopleWithAgeDrink", function() {

  it("should exist", function() {
    expect(peopleWithAgeDrink).toBeDefined();
  });

  it("should return 'drink toddy' when paramater 13 is passed",
   function() {
    expect(peopleWithAgeDrink(13)).toEqual("drink toddy");
  });

  it("should return 'drink coke' when paramater 17 is passed",
   function() {
    expect(peopleWithAgeDrink(17)).toEqual("drink coke");
  });

  it("should return 'drink beer' when paramater 18 is passed",
   function() {
    expect(peopleWithAgeDrink(18)).toEqual("drink beer");
  });

  it("should return 'drink beer' when paramater 20 is passed",
   function() {
    expect(peopleWithAgeDrink(20)).toEqual("drink beer");
  });

  it("should return 'drink whisky' when paramater 30 is passed",
   function() {
    expect(peopleWithAgeDrink(30)).toEqual("drink whisky");
  });

  it("should return 'drink toddy' when paramater 1 is passed",
   function() {
    expect(peopleWithAgeDrink(1)).toEqual("drink toddy");
  });

  it("should return 'drink coke' when paramater 14 is passed",
   function() {
    expect(peopleWithAgeDrink(14)).toEqual("drink coke");
  });

  it("should return 'drink toddy' when paramater 12 is passed",
   function() {
    expect(peopleWithAgeDrink(12)).toEqual("drink toddy");
  });

  it("should return 'drink beer' when paramater 19 is passed",
   function() {
    expect(peopleWithAgeDrink(19)).toEqual("drink beer");
  });

  it("should return 'drink whisky' when paramater 25 is passed",
   function() {
    expect(peopleWithAgeDrink(25)).toEqual("drink whisky");
  });

  it("should return 'drink whisky' when paramater 31 is passed",
   function() {
    expect(peopleWithAgeDrink(31)).toEqual("drink whisky");
  });

  it("should return 'InputNotValid' when negative parameter is passed",
   function() {
    expect(peopleWithAgeDrink(-25)).toEqual("InputNotValid");
  });

  it("should return 'InputNotValid' when null parameter is passed",
   function() {
    expect(peopleWithAgeDrink(null)).toEqual("InputNotValid");
  });

  it("should return 'InputNotValid' when parameter is not a number is passed",
   function() {
    expect(peopleWithAgeDrink("NotANumber")).toEqual("InputNotValid");
  });
});


















