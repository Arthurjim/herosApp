import {heroes} from '../../data/heroes';
export const getHerosByName =(name = '')=>{
    console.log('getHerosByName called');
    if(name.length === 0){
        console.log('getHerosByName called with empty name');
        return [];
    }
    return heroes.filter(hero => hero.superhero.toUpperCase().includes(name.toUpperCase()))

}