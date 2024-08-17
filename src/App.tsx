
import './App.css'
import ClassCard from './Components/ClassCard/ClassCard'

function App() {


  return (
    <div className='card-container'>
      <ClassCard classTitle ={'Math'}/>
      <ClassCard classTitle ={'Computer Science'}/>
      <ClassCard classTitle ={'Math'}/>
      <ClassCard classTitle ={'Math'}/>
      <ClassCard classTitle ={'Math'}/>
    </div>
  )
}

export default App
