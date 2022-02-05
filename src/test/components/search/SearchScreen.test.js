import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();

//Mocku es una simulación de algo
jest.mock('react-router-dom',()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=>mockNavigate,
}))

describe("Pruebas en <SerchScren />", () => {
    test("Debe mostrarse correctamente", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search"]}>
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find(".alert-info").text().trim()).toBe("Heros...");
    });

    test("Debe de mostrar a batman y el input cone valor del queryString", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=batman"]}>
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper.find("input").prop("value")).toBe("batman");
    });
    test("Debe de mostrar un error si no se encuentra el hero", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=123124"]}>
                <SearchScreen />
            </MemoryRouter>
        );
        expect(wrapper.find(".alert-danger").text().trim()).toBe('0 heros found')
    });

    test('Debe de llamar el navigate a la nueva pantalla ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/search?q=123124"]}>
                <SearchScreen />
            </MemoryRouter>
        );


        wrapper.find('input').simulate('change', {
            target: {name: 'searchText',value:'batman'}

        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault:()=>{},
        })
        expect(mockNavigate).toHaveBeenCalled();
        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');

    });
    
});
