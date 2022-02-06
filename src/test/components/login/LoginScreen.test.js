import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import LoginScreen from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("Pruebas en LoginScreen", () => {
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        },
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={["/login"]}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    test("Debe de hacer match con el snapshot", () => {
        expect(wrapper).toMatchSnapshot();
    });

    test("Debe de realizar el dispatch y la navegacion", () => {
        wrapper.find("button").prop("onClick")();
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: "Arturo" },
        });
        expect(mockNavigate).toHaveBeenCalledWith("/", { replace: true });

        localStorage.setItem("lastPath", "/dc");

        wrapper.find("button").prop("onClick")();
        expect(mockNavigate).toHaveBeenCalledWith("/dc", { replace: true });

    });
});
