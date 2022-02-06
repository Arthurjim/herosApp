import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import PrivateRoute from "../../routes/PrivateRoute";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    Navigate: ()=> <span>Saliendo de aqui</span>
}))

describe("Pruebas en <PrivateRoute />", () => {
    Storage.prototype.setItem = jest.fn();
    test("Dbe de mostrar el componente si está autenticado y guardar en el localStorage", () => {
        const contextValue = {
            user: {
                logged: true,
                name: "Juan",
            },
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/"]}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
            console.log(wrapper.html());
        expect(wrapper.find("h1").text()).toBe("Private Component");
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/');
    });

    test("Dbe de redireccionar al login si no está autenticado", () => {
        const contextValue = {
            user:{
                logged: false,
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={["/"]}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper.find("span").text()).toBe("Saliendo de aqui");
    })
});
