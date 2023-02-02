import React, { useEffect, useState } from 'react'
import './App.scss'
import { NameShower } from './components/NameShower'
const Header = React.lazy(() =>import('./components/Header'))
const ProjectsShower = React.lazy(() => import('./components/ProjectsShower'));
const StackShower = React.lazy(() => import('./components/StackShower'));
const Footer = React.lazy(() => import('./components/Footer'));

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
