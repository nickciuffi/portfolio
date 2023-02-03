import React, { useEffect, useState } from 'react'
import './App.scss'
import { KnowMore } from './components/KnowMore';
import { NameShower } from './components/NameShower'
const Header = React.lazy(() =>import('./components/Header'))
const ProjectsShower = React.lazy(() => import('./components/ProjectsShower'));
const StackShower = React.lazy(() => import('./components/StackShower'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {

  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [hasHeaderChanged, setHasHeaderChanged] = useState(false);
  const [knowMoreActive, setKnowMoreActive] = useState(false);
  const [hasKnowMoreChanged, setHasKnowMoreChanged] = useState(false);
  let TimeOutId: number

  function showKnowMore(){
    setKnowMoreActive(true)
    setHasKnowMoreChanged(true)
  }

  function countToKnowMore(){
    if(typeof TimeOutId === "number") clearTimeout(TimeOutId);
    TimeOutId = setTimeout(showKnowMore, 3500)
    
  }

  const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
      if(entry.target.id === 'top'){

        if(entry.isIntersecting) countToKnowMore()
        if(!entry.isIntersecting) {
          setKnowMoreActive(false);
          console.log(TimeOutId)
          for(let i = 0; i < TimeOutId; i++){
          clearTimeout(TimeOutId);
          }
        }

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
      <NameShower HasKnowMoreChanged={hasKnowMoreChanged} KnowMoreActive={knowMoreActive} />
      <KnowMore />
      <StackShower />
      <ProjectsShower />
      <Footer />
    </div>
    
  )


  
}

export default App
