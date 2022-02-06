import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import HeroScreen from "../../../components/heroe/HeroScreen";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("Pruebas en el HeroScreen", () => {
    test("No debe de mostrar el HeroScreen si no hay un heroe ", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero"]}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen     />} />
                    <Route path="/" element={<h1>No hero Page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.find("h1").text().trim()).toBe("No hero Page");
        
    });


    test("Debe de mostrar el HeroScreen si existe ", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen     />} />
                    <Route path="/" element={<h1>No hero Page</h1>} />
                </Routes>
            </MemoryRouter>
        );
        expect(wrapper.find('.img-thumbnail').exists()).toBe(true)
        // console.elog(wrapper.html()
    });

    test('Debe de regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spider"]}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen     />} />
                    <Route path="/" element={<h1>No hero Page</h1>} />
                </Routes>
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click')
        expect(mockNavigate).toHaveBeenCalledWith(-1)
    });

    test("Debe de mostrar el no heo page ", () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={["/hero/marvel-spifsdf1der"]}>
                <Routes>
                    <Route path="/hero/:heroId" element={<HeroScreen     />} />
                    <Route path="/" element={<h1>No hero Page</h1>} />
                </Routes>
            </MemoryRouter>
        );

        expect(wrapper.text()).toBe("No hero Page");
    });
    
});
