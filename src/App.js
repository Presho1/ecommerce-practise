import React from 'react'
import './App.css'
import Box from './component/box/Box'

const App = () => {
  const styleObject = {
    display: 'flex',
    flexWrap: 'wrap',
  }
  const img1 = 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=600'
  const img2 = 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=600'
  const img3 = 'https://images.pexels.com/photos/3076787/pexels-photo-3076787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  const img4 = 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=600'
  const img5 = 'https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=800'
  const img6 = 'https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  const img7 = 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
  const img8 = 'https://images.pexels.com/photos/14824329/pexels-photo-14824329.jpeg?auto=compress&cs=tinysrgb&w=800'
  const img9 = 'https://images.pexels.com/photos/14113/pexels-photo-14113.jpeg?auto=compress&cs=tinysrgb&w=800'
  const img10 = 'https://images.pexels.com/photos/15493878/pexels-photo-15493878/free-photo-of-hands-on-samsung-galaxy-s23-ultra-5g-green-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=800'

  return (
    <div style={styleObject}>
      <Box name='Iphone 13 Pro' price='₦100,000' image={img1}/>
      <Box name='Bag Pack' price='₦20,000' image={img2}/>
      <Box name='Red Heels' price='₦100,000' image={img3}/>
      <Box name='Wristwatch' price='₦70,000' image={img4}/>
      <Box name='Macbook Pro' price='₦700,000' image={img5}/>
      <Box name='Diamond Stud' price='₦1,000,000' image={img6}/>
      <Box name='Sneakers' price='₦35,000' image={img7}/>
      <Box name='Play Station 5 Console' price='₦50,000' image={img8}/>
      <Box name='Bicycle' price='₦150,000' image={img9}/>
      <Box name='Samsung S23 Ultra' price='₦1,500,000' image={img10}/>
    </div>
  )
}

export default App
