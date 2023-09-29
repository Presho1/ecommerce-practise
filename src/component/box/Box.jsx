// import React from 'react'
// import Person from './component/person/Person'


// const App = () => {
//   const img1 = 'https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   const img2 = 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800'
//   const img3 = 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800'
//   const img4 = 'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=800'
//   const img5 = 'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=800'

//   return (
//     <div>
//       <Person name='Olayinka' child={2} image={img1}/>
//       <Person name='Lekan' child={4} image={img2}/>
//       <Person name='Tomi' child={10} image={img3}/>
//       <Person name='Timo' child={20} image={img4}/>
//       <Person name='Paul' child={35} image={img5}/>
//     </div>
//   )
// }

// export default App




import React from 'react'
import './box.css'
import { FaStar, FaShoppingCart } from "react-icons/fa";

const Box = (props) => {
  return (
    <div className="box">
        <img src={props.image} alt="" className='boxImg'/>
        <h3 className='boxTitle'>{props.name}</h3>
        <p className='boxPrice'> {props.price}</p>
        <div className="boxRating">
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        <FaStar/>
        </div>
        <button>
            <span>Add to Cart</span>
            <FaShoppingCart className='boxIcon'/>
        </button>

    </div>

  )
}

export default Box