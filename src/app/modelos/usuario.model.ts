export class Usuario {

    constructor(
        public pk_user?: number,
        public cedula_user?: string,
        public nombres_user?: string,
        public apellidos_user?: string,
        public fecnac_user?: string,
        public fk_provincia?: number,
        public ciudad_user?: string,
        public usuario_user?: string,
        public contrasena_user?: string
    ) { }
}
