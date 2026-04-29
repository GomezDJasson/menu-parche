const Footer = () => {
  return (
    <footer className="bg-white border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8">
        
        {/* Contenido */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo / Nombre */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold text-gray-800">
              Parche y Leña
            </h2>
            <p className="text-sm text-gray-500">
              El Rolo 🔥
            </p>
          </div>

          {/* Redes */}
          <div className="flex gap-4 text-gray-600 text-xl">
            <a
              href="https://instagram.com/parcheelrolo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-yellow-300 hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm4.25 5.5A4.75 4.75 0 1 0 16.75 12 4.75 4.75 0 0 0 12 7.5zm0 7.75A3 3 0 1 1 15 12a3 3 0 0 1-3 3.25zm5-8.88a1.12 1.12 0 1 1 1.12-1.12 1.12 1.12 0 0 1-1.12 1.12z"/>
              </svg>
            </a>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-right text-sm text-gray-500">
            <p>📍 Manaus, Brasil</p>
            <p>📞 <a href="https://wa.me/+559285185822">+55 92 8518-5822</a></p>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t mt-6 pt-4 text-center text-xs text-gray-400 space-y-1">
          <p>
            © {new Date().getFullYear()} Parche y Leña. Todos los derechos reservados.
          </p>

          <p>
            Desarrollado por{" "}
            <a
              href="https://portafolio-jasson.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-orange-300 hover:underline"
            >
              Jasson D. Gomez
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;