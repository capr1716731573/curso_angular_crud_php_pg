export class Hospital {

    constructor(
        public pk_hospital?: number,
        public nombre_hospital?: string,
        public pk_provincia?: number,
        public ciudad_hospital?: string,
        public foto_hospital?: string
    ) { }
}
