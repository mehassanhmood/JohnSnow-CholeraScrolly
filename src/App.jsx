import "./App.css"
import SideStickyThing from './components/SideStickyThing';

function App() {



  return (
    <div className="relative h-[100vh]">
       <div className="sticky top-0">
        <SideStickyThing />
      </div>
    </div>    
  )
}

export default App
