import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <h1>Custom app ! Shubham Shukla........</h1>
  )
}

/*
  const RecatElement = {
    type :'a',
    props:{
        href : 'https://google.com',
        target : '_blank' 
    },
    children : 'click me to visit google'
    this in not a vlid format to convert a html in jsx 
  }
*/


/*
  const anotherElement = (
  <a href="https//google.com" target='_blank'> visit google</a>
  )
*/


// Here is the proper formate to comvert a function into JSX

const recatElement = React.createElement(
  'a',
  {href:'https//google.com'},
  'Click here to visit to google'
)



ReactDOM.createRoot(document.getElementById('root')).render(
  /*
    MyApp()
    <MyApp/>  
    RecatElement ....This is valid format to call object but we are not access here object 
  */
  //anotherElement


  // Here is the proper formate to comvert a function into JSX
)
 