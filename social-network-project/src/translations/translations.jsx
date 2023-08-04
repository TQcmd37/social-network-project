
export const Translations = (par) =>{
   
    if (par.language === 'en'){ return{
    birthday:"Birthday",
    gender: "Gender"
}}

if (par.language === 'es'){
   return {
    birthday:"Fecha de nacimiento",
    gender:"Género"
    }
}
}