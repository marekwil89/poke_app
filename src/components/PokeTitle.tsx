import React from 'react';

interface Props {
  title: string,
}

export const PokeTitle: React.FC<Props> = ({title}) => {
  return (
    <h2 className="poke=title mb-3">{title}</h2>
  ) 
};
