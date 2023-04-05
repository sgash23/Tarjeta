import Tarjeta from "./componentes/Tarjeta/Tarjeta";

function App() {

const datos = [{
    "id": 1,
    "producto": "Togg",
    "precio": "$25.000.000",
    "imagen": "https://www.elcarrocolombiano.com/wp-content/uploads/2019/12/Portada-38.jpg"
  },
  {
    "id": 2,
    "producto": "Kia",
    "precio": "$20.000.000",
    "imagen": "https://www.kia.cl/adobe/dynamicmedia/deliver/dm-aid--4707bb9a-18c2-4eae-a915-beb627ba1f87/naranjo-citrico-desktop-1280x508.jpg?quality=85&preferwebp=true&width=1600"
  },
  {
    "id": 3,
    "producto": "Chevrolet",
    "precio": "$50.000.000",
    "imagen": "https://www.elcarrocolombiano.com/wp-content/uploads/2022/09/20220919-CHEVROLET-SEEKER-SUV-COUPE-CHINA-PRECIOS-CARACTERISTICAS-01.jpg"
  },
  {
    "id": 4,
    "producto": "Chevi",
    "precio": "$30.000.000",
    "imagen": "https://www.rutamotor.com/wp-content/uploads/2021/12/Chevrolet-S10-Max-2023-Rutamotor-1.jpg"
  },

  {
    "id": 5,
    "producto": "Mitsubishi",
    "precio": "$25.000.000",
    "imagen": "https://mitsubishi-motors.cl/wp-content/uploads/2021/11/vehiculos-diesel.png"
  },
  {
    "id": 6,
    "producto": "Hyundai",
    "precio": "$2.000.000",
    "imagen": "https://s1.eestatic.com/2022/08/30/motor/699440178_226740069_1706x960.jpg"
  },
  {
    "id": 7,
    "producto": "Toyota",
    "precio": "$5.000.000",
    "imagen": "https://www.revistaturbo.com/wp-content/uploads/2021/06/toyota_corolla_cross_4.jpg"
  },
  {
    "id": 8,
    "producto": "Electric",
    "precio": "$30.000.000",
    "imagen": "https://blogs.iadb.org/sostenibilidad/wp-content/uploads/sites/26/2015/06/eletrico.jpg"
  }
  ]

  return (
    <>
    <h3>Venta de Vehiculos</h3>
     <section className="section">
       {
          datos.map(producto => {
          return <Tarjeta producto={producto} />
        })
       } 
      </section>
    </>
  );
}
export default App;
