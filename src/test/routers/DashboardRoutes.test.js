import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import DashboardRoutes from "../../routes/DashboardRoutes";

describe("Pruebas en <DashboardRoutes/>", () => {
    const contextValue = {
        user: {
            logged: true,
            name: "Juanito",
        },
    };
    test("Debe de mostrarse correctamente", () => {
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />

                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
