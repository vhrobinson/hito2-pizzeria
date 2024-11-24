import Header from "./components/Header"
import CardPizza from "./components/CardPizza"

import "./Home.css"
function Home() {
  const price=6950
    return (
      <>
       <div>
      <Header />
      </div>
      <div className="grid-container"> 
      
      <CardPizza
        imagecrc="./public/pizza3quesos.png"
        title="Pizza Tres Quesos"
        description="Excelente Pizza,Ingredientes · masa para pizza · salsa de jitomate · 200 g de queso mozzarella rallado · 100 g de queso de cabra con ceniza, desmoronado · 50 g de queso azul ."        
        price={6990}
        />
        <CardPizza
        imagecrc="./public/pizzaAceiutunas.png"
        title="Pizza Aceitunas Negras"
        description="Maravillosa Pizza. Ingredientes · masa a la piedra · salsa de tomate · queso mozzarella rallado · 100 g de Aceitunas Negras con ceniza, desmoronado y Aceite de Oliva."        
        price={7890}
        />
        <CardPizza
        imagecrc="./public/pizzaclasica.png"
        title="Pizza Clasica"
        description="Esquisita Pizza. Ingredientes · masa a la piedra · salsa de tomate · queso mozzarella rallado, Oregano y  Aceite de Oliva."        
        price={6990}
        />
          <CardPizza
        imagecrc="./public/pizzaMargarita.png"
        title="Pizza Margarita"
        description="La pizza margarita (en italiano pizza Margherita) es una típica pizza napolitana elaborada con tomate, mozzarella (tradicionalmente se usa el Fior di latte), albahaca fresca, sal y aceite. Se trata de la pizza napolitana más popular, junto con la marinera."
        price={8750}
         />
         <CardPizza
        imagecrc="./public/pizzaPeperonni.png"
        title="Pizza Pepperoni"
        description="La pizza pepperoni tiene su origen en América del Norte. Se trata de una pizza con base de salsa de tomate, mozzarella y pepperoni, un tipo de salami curado hecho a base de carne de cerdo y de vaca mezclados y sazonados con pimentón"
        price={7990}
         />
           <CardPizza
        imagecrc="./public/pizzapomodoro.png"
        title="Pizza Pomodoro"
        description="Pizza Pomodoro, la mas simple y deliciosa pisa de masa aireada y esponjosa con abundante salsa de tomates, cebolla y aceite de oliva."
        price={5990}
         />
         </div>
        </>
    )
  }
  
  export default Home