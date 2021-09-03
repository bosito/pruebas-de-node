import { getPokemons } from '../services';

describe("comparando async/await con jest", () => {

    test("deberia traer un arreglo al hacer la peticion", async () => {
        //Assert

        //Act
        const response = await getPokemons();

        expect(response).toEqual(expect.any(Array));
    });

    test("debería regresar el pokemon pikachu", async () => {
        //Assert
        const pokemon = "bulbasaur";
        //Act
        const response = await getPokemons();

        expect(response).toEqual(
            expect.arrayContaining([
                { name: pokemon, url: expect.any(String) }
            ])
        );

    });

});
