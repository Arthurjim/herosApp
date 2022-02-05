import { mount } from "enzyme";
import { MemoryRouter,Route,Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/Navbar";

describe('Pruebas en el <Navbar />', () => {
 
  const contextValue = {
    dispatch:jest.fn(),
    user:{
      name:'Pedro',
      logged:true
    }
  }
  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Navbar/>} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );
  test('Debe de mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();


    expect(wrapper.find('.text-info').text().trim()).toBe('Pedro'); 
  }); 

});
