import { useEffect, useState } from 'react'
import './App.scss'
import { NameShower } from './components/NameShower'
import { Header } from './components/Header'
import { ProjectsShower } from './components/ProjectsShower';
import { StackShower } from './components/StackShower';
import { Footer } from './components/Footer';

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
          return 
      }
      if(entry.target.classList.contains('hidden')){
        if(entry.isIntersecting){

          entry.target.classList.add('show')
        }
        else{
          entry.target.classList.remove('show')
        }
      }
    })
     });

    useEffect(() => {
      const screenTop = document.querySelector('#top') as Element;
      const hidden = document.querySelectorAll('.hidden') as NodeListOf<Element>;
      try{
        
        hidden.forEach((el) => observer.observe(el))
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
      <Footer />
    </div>
    
  )


  
}

export default App
