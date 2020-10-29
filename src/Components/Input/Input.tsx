import React, { ReactElement, useState } from 'react'

interface Props {
  handleAddDog: any
}

export default function Input(props: Props): ReactElement {

  const [input, setInput] = useState('');

  const handleChange = (e: any) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.handleAddDog({
      name: input,
      age: 1,
      image: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/dog.png'
    })
    setInput('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' onChange={handleChange} value={input}></input>
      </form>
    </div>
  )
}
