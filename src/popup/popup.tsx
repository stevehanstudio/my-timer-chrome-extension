import React, { useState, useRef, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
// import { Box, Grid, TextField, Typography } from '@mui/material'
import './popup.css'

const App: React.FC<{}> = () => {
  const [totalTimer, setTotalTimer] = useState<number>(7200)

  const hourFocus = () => console.log('Hour has focus')
  const minFocus = () => console.log('Min has focus')
  const secFocus = () => console.log('Sec has focus')

  const hour = Math.floor(totalTimer / 3600)
  const min = Math.floor((totalTimer - hour * 3600) / 60)
  const sec = totalTimer % 60

  const displayHour = String(hour).padStart(2, '0')
  const displayMin = String(min).padStart(2, '0')
  const displaySec = String(sec).padStart(2, '0')

  console.log('totalTimer', totalTimer)
  console.log('hour', hour, displayHour)
  console.log('min', min, displayMin)
  console.log('sec', sec, displaySec)

  return (
		<main className='main-container'>
			<div className='container'>
				<div className='timer-item'>
					<input
						onFocus={hourFocus}
						className='timer-digit'
						type='text'
						value={displayHour}
					/>
					<span className='timer-digit-sep'>h</span>
				</div>
				<div className='timer-item'>
					<input
						onFocus={minFocus}
						className='timer-digit'
						type='text'
						value={displayMin}
					/>
					<span className='timer-digit-sep'>m</span>
				</div>
				<div className='timer-item'>
					<input
						onFocus={secFocus}
						className='timer-digit'
						type='text'
						value={displaySec}
					/>
					<span className='timer-digit-sep'>s</span>
				</div>
			</div>
			<div className='container'>
				<button id='start-button'>START</button>
				<button id='reset-button'>RESET</button>
			</div>
		</main>
  )
}

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
