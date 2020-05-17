// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

function callServer(id) {
  // console.log(':-)', id)
  fetch(`http://localhost:3000/api/fxes/${id}.json`)
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
    })
}

function showSunriseTime(e) {
  // до этого в скобках было e
  let data = {
    //city: e.target.value,
    latitude: e.target.value,
    longitude: e.target.value
  }

  fetch('http://localhost:3000/api/sunrise_time/show_sunrise_time', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch(error => {
      console.error('Error:', error)
    })
}

const Fx = props => {
  console.log(props)

  return (
    <div>
      <div onClick={() => callServer(props.id)}>{props.name}</div>
    </div>
  )
}

const Sunrise = props => {
  return <div></div>
}

const Rack = props => {
  //let fxElements = []

  let fxElements = props.fxes.map(function(fx, i) {
    //fxElements.push(<Fx fx={fx} />)
    //fxElements.push(<Fx {...fx} key={i} />)
    return <Fx {...fx} key={i} />
  })

  return (
    <div>
      <div>{fxElements}</div>
      <input onChange={showSunriseTime} />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  let props = document.getElementsByTagName('div')[0].dataset.props
  let testContent = JSON.parse(props)

  ReactDOM.render(
    <Rack fxes={testContent} />,
    document.body.appendChild(document.createElement('div'))
  )
})
