
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

export const deconstructId = (urlImg) =>{
  let url = "http://gateway.marvel.com/v1/public/comics/";
  let inicio = url.length;
  let fin = urlImg.length;
  let idComic = urlImg.substring(inicio,fin);
  
  return idComic;
}

export const urlImgBig = ({path,extension}) =>{
  let url = "http://i.annihil.us/u/prod/marvel/i/mg/";
  let portal = "portrait_uncanny";
  let inicio = url.length;
  let fin = path.length;

  let idImagen = path.substring(inicio,fin);

  return url+idImagen+"/"+portal+"."+extension;
}