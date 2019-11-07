
const add = (a,b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}`;

test("should add two numbers", () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test("Should return greeting with name", () => {
    const result = generateGreeting("Mike");
    expect(result).toBe("Hello Mikfe");
});

test("should generate greeting for no name", () => {
    const result = generateGreeting();
    expect(result).toBe("Hello Anonymous")
})