//LINK DE CONFIGURACIONES A API REST O WEB SERVICE
const PROTOCOL='http://'
const SERVER='localhost';
const PORT=':80'
const LINK='/api_hospitales_php/public/hospitales';
const LINK_IMG='/api_hospitales_php/app/hospitales/archivos_cargados';
export const URL_IMG=`${PROTOCOL}${SERVER}${PORT}${LINK_IMG}`;
export const API_REST=`${PROTOCOL}${SERVER}${PORT}${LINK}`;
