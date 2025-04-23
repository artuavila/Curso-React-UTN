import React from 'react'
import Productos from './assets/Components/Productos/Productos'
import BotonComprar from './assets/Components/BotonComprar/BotonComprar'

function App() {
  
  return (
      <div className='contenedor'>
        <Productos 
        img ={'https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/2-Pc-Armada-AMD_600.jpg'} 
        titulo={'PC Armada AMD Ryzen 3 5300G 8GB 480GB'} 
        precio={'$310.800'} precioFinal={'$281.400'} 
        descuento={'25% OFF'} cantidadDisponible={'Stock: 10'}/>
        <BotonComprar />
      </div>
  )
}

export default App
