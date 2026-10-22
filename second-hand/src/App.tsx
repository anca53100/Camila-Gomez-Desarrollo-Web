import { Header } from './components/header';
import { Footer } from './components/Footer';

const NOMBRE_SITIO = 'Café Andino';
const ANIO_ACTUAL = new Date().getFullYear(); // se calcula una vez, fuera del componente

/**
 * COMPONENTE RAÍZ: define el layout general (encabezado, página y pie)
 * y envía a cada componente sus datos por props.
 */
function App() {
  return (
    // Fragmento <> </>: agrupa varios elementos sin agregar un <div> extra
    <>
      <Header
        nombreSitio={NOMBRE_SITIO}
        version="2.0"
        enlaces={[
          { texto: 'Inicio', href: '#inicio' },
          { texto: 'Menú', href: '#menu' },
          { texto: 'Contacto', href: '#contacto' },
        ]}
      />
      <body>
        
      </body>

      <Footer
        nombreSitio={NOMBRE_SITIO}
        version="2.0"
        enlaces={[
          { texto: 'Aviso de privacidad', href: '#privacidad' },
          { texto: 'Términos y condiciones', href: '#terminos' },
          { texto: `© ${ANIO_ACTUAL} Café Andino`, href: '#copyright' },
        ]}
      />
      
    </>
  );
}

export default App;