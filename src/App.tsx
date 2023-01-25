import { useEffect, useState } from 'react'
import './App.scss'
import { NameShower } from './components/NameShower'
import { Header } from './components/Header'
import { ProjectsShower } from './components/ProjectsShower';
import { StackShower } from './components/StackShower';

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [hasHeaderChanged, setHasHeaderChanged] = useState(false);

  const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
      
      if(entry.target.id === 'top'){
        
          setIsHeaderVisible(!entry.isIntersecting)
          if(!hasHeaderChanged && !entry.isIntersecting){
            setHasHeaderChanged(true)
          }

      }
    })
     });

    useEffect(() => {
      const screenTop = document.querySelector('#top') as Element;
      try{
        observer.observe(screenTop)
      }
      catch(e){
        console.log(e)
      }
    }, [])

  return (
    <div className="container">
       <div id='top'/>
      <Header isVisible={isHeaderVisible} hasHeaderChanged={hasHeaderChanged} />
      <NameShower />
      <StackShower />
      <ProjectsShower />
    </div>
  )


  
}

export default App
