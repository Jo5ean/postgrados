const Card = ({ codcar, codare, nombre, modo, duracion }) => {
    const nombreClasses =
      nombre && nombre.split(" ").length > 4 ? "text-xs" : "text-md";
  
    return (
        <div className="flex justify-center mx-auto" style={{ transform: 'scale(0.8)' }}>
          <div className="max-w-lg w-[220px] h-[280px] lg:w-[250px] lg:h-[360px] rounded-2xl overflow-hidden shadow-lg relative transition-transform hover:scale-105 hover:shadow-xl border-2">
            <a href={`../${codcar}`}>
            {/* Parte 1: Imagen */}
            <div className="relative h-32 lg:h-52">
              <img src={`/landing/public/cards/${codcar}.webp`} alt={`${nombre}`} className="absolute w-full h-full object-cover object-center" />
            </div>
            {/* Parte 2: Icono */}
            <img
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[75%] lg:-translate-y-[5%] w-16 h-12 lg:w-20 lg:h-14"
              src={`../iconoCarrera/${codare ? (codare === "30" ? "13" : codare) : "default"}.svg`}
              alt="icono carta"
            />
            {/* Parte 3: Título */}
            <div className="px-2 pt-8 bg-white flex items-center justify-center h-20">
              <div className={`font-bold text-center mb-5 ${nombreClasses}`}>
                {nombre || ""}
              </div>
            </div>
            {/* Parte 4: Datos */}
            <div className="p-2 bg-[#ee1818] w-full h-full">
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="text-white flex flex-col col-span-1">
                  <span className="rounded-full px-1 text-xs font-light">
                    Modalidad
                  </span>
                  <span className="rounded-full px-1 text-xs font-bold">
                    {modo?.includes("7")
                      ? "Digital"
                      : modo?.includes("1")
                      ? "Presencial"
                      : "Presencial y Digital"}
                  </span>
                </div>
                <div className="text-white flex flex-col col-span-1 border-l-2">
                  <span className="rounded-full px-1 text-xs font-light">
                    Duración
                  </span>
                  <span className="rounded-full px-1 text-sm font-bold">
                    {duracion}
                  </span>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>
    );
  };
  
  export default Card;