import React from 'react'

export const Q3 = () => {

  return (
    <div>
      <b>Question 3</b>
      <pre className='whitespace-pre-line'>
        Apply material-ui custom styles properly.
        Theme light.
        Color palette:
        Primary: #EBAFE, #5E7BFD, #3A53A2
        Secondary: #EBD4F7, #FFC5F6, #FF9FB1
      </pre>
      <div>
        <b>Answer:</b>
        <p>
          The theme has been configured with above color palette, and using light mode
        </p>
        {/* <div className='flex items-center' >
          <FormLabel htmlFor='toggle'>Toggle Theme Mode</FormLabel>
          <Switch id="toggle" value={darkMode} onChange={e=> {
            setDarkMode(e.target.checked);
          }}/>
        </div> */}
      </div>
    </div>
  )
}