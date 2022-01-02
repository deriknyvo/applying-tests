import { fireEvent, render, screen } from "@testing-library/react";
import Form from './Form'

describe('Form', () => {
  test('cadastrar um nome', () => {
    const clickButton = jest.fn();
    render(<Form handleButtonClick={clickButton} />);

    fireEvent.change(screen.getByLabelText(/nome/i), { target: { value: 'Derik' } });
    fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'derikoliveira18@nanna.com' } });
    fireEvent.click(screen.getByText(/cadastrar/i));

    expect(clickButton).toHaveBeenCalledWith('Derik', 'derikoliveira18@nanna.com');
  });
});