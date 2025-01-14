import { ActividadEconomica } from "./ActividadEconomica";

export interface Empresa {
  actividadEconomica: ActividadEconomica;
    idempleador: number;
    rut: string;
    razonSocial: string;
    contacto: string;
    fono: string;
    correo: string;
    tipo: string;
    direccion: string;
    region: string;
    comuna: string;
    codigoAE: string;
    vigente: string;
  }
  