
import {fetchHero} from '../controller/fech';


const myStorage = window.localStorage;


export const getFavoritos = () => {
  return myStorage.getItem('favoritosMarvel');
}

export const addFavoritos = (id) =>{

    let storage = getFavoritos();
    let favoritos = [storage];
    
    favoritos.push(id);
    myStorage.setItem('favoritosMarvel', favoritos)

}

export const arrayStorage = (dato) =>{
  if(dato){
    let array = dato.split(",");
    return array;

  }
}
