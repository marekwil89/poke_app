// it('render correctly text component', () => {  
//   const TextInputComponent = renderer.create(<TextInput />).toJSON();
//   expect(TextInputComponent).toMatchSnapshot();
// });

import React from 'react';
import { render } from '@testing-library/react';
import { PokeError } from './PokeError';

test('should display error bar if boolean is true', () => {
  const { getByText } = render(<PokeError error={true} />)

  const error = getByText(/Błąd wewnętrzny/i);
  expect(error).toHaveTextContent('Błąd wewnętrzny')
})
