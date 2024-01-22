import React from 'react';

const RandomPhrase = ({quote}) => {
    const { author, phrase } = quote;
  return (
    <div className='phaseauthor'>
        <p>{phrase}</p>
        <p>Autor: {author}</p>
    </div>
  )
}

export default RandomPhrase