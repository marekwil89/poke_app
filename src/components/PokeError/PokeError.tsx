import React from 'react';

interface Props {
  error: boolean,
}

export const PokeError: React.FC<Props> = ({ error, children }) => {
  return (
    <>
      {error ? (
        <div className="alert alert-danger" role="alert">
          Błąd wewnętrzny
        </div>
      ) : children}
    </>
  ) 
};
