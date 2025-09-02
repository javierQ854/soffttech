import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { ChartBarIcon } from "@heroicons/react/24/solid";
export const especialidades = [
    {id: 1, logo: <GlobeAltIcon className="w-8 h-8 text-teal-600" />, titulo: "Desarrollo Web",descipcion:"Creación de sitios web y aplicaciones robustas y escalables con las últimas tecnologías."},
    {id: 2, logo: <DevicePhoneMobileIcon className="w-8 h-8 text-teal-600" />, titulo: "Aplicaciones Móviles",descipcion:"Soluciones móviles nativas e híbridas para iOS y Android."},
    {id: 3, logo: <ChartBarIcon className="w-8 h-8 text-teal-600" />, titulo: "Análisis de Datos",descipcion:"Recopilación, procesamiento y visualización de datos para obtener información valiosa."}
]