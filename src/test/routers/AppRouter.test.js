import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import AppRouter from "../../routes/AppRouter";

describe("Pruebas en el AppRouter", () => {
  
    test("Debe de mostrar el login si no esta autenticado", () => {
        const contextValue = {
            user: {
                logged: false,
            },
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login Screen')
    });

    test("Debe de mostrar el componente de marvel si esta autenticado", () => {
        const contextValue = {
            user: {
                logged: true,
                name:'Arturo'
            },
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBeTruthy();
        
        
    });
});
