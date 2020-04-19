
export const generateRandon = () =>{
  let num = Math.floor(Math.random()*100);
  return num;
}

export const urlImg = ({path,extension}) =>{
  let url = "http://i.annihil.us/u/prod/marvel/i/mg/";
  let portal = "portrait_incredible";
  let inicio = url.length;
  let fin = path.length;

  let idImagen = path.substring(inicio,fin);

  return url+idImagen+"/"+portal+"."+extension;

}

export const urlImgComic = (url) =>{
  let medium = "/portrait_medium.jpg"
 return url+ medium 
}