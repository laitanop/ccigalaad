import React from 'react'

function HomeImage () {
  return (
    <div>

      <svg
        width='50px'
        height='50px'
        aria-hidden='true'
        data-prefix='fas'
        data-icon='home'
        className='svg-inline--fa fa-home fa-w-18'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 576 512'
      >
        <path
          className='cls-1'
          stroke='#6A772A'
          stroke-width='8'
          fill='#6A772A'
          d='M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z'
        />
      </svg>

      <style jsx>{`
      .cls-1 {
     
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        animation: dash 30s linear alternate infinite;
        animation: stroke_fill 10s linear forwards;
      }
      
      @keyframes dash {
        from {
          stroke-dashoffset: 1000;
          // transition: fill .4s ease;
        }
        to {
          stroke-dashoffset: 0;
          transition: fill .4s ease;
        }
      }

      @keyframes stroke_fill {
        0% {
          fill: white;
        }
        50% {
          fill: white;
          stroke-dashoffset: 0;
        }
        100% {
          fill: #6A772A;
          stroke-dashoffset: 0;
        }
      }
     `}</style>
    </div>
  )
}

export default HomeImage