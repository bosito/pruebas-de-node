//funcion que te diga si el avlor pasado por argumento en un numro entero

const checkInteger = (data) => {
    if (typeof data === "number") return true;
    if (typeof data === "boolean") return false;
    if (typeof data === "object") return false;
    if (typeof data === "string") return false;
};

describe("ejemplos de pruebas con jest", () => {

    test("true si el valor es number", () => {
        //AAA

        //Arrange (Ordenar)
        const value = 5
        //Act (Actuar)
        const result = checkInteger(value);
        //Assert (Afirmar)

        expect(result).toBe(true);

    });

    test("false si el valor es string", () => {
        //AAA

        //Arrange (Ordenar)
        const value = "hola que hay"
        //Act (Actuar)
        const result = checkInteger(value);
        //Assert (Afirmar)

        expect(result).toBe(false);
    });

    test("false si el valor es string", () => {
        //AAA

        //Arrange (Ordenar)
        const value = {}
        //Act (Actuar)
        const result = checkInteger(value);
        //Assert (Afirmar)

        expect(result).toBe(false);
    });
});


