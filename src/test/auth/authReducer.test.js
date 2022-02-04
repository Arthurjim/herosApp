import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
    test("Debe de retonar el estado por defecto", () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test("Debe de auntenticar y colocar el name del usuario", () => {
        const action = {
            type: types.login,
            payload: {
                name: "Arturo",
            },
        };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            name: "Arturo",
        });
    });

    test("Debe de borrar el name del usaurio y logged en false", () => {
        const action = {
            type: types.logout,
        };
        const state = authReducer({ logged: true, name: "Arturo" }, action);
        expect(state).toEqual({
            logged: false,
        });
    });
});
