import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe('Button', () => {
  test('renderizar o texto na label', () => {
    render(<Button text="Teste" />);
    const linkElement = screen.getByText(/teste/i);

    expect(linkElement).toBeInTheDocument();
  });

  test('clicar no botão', () => {
    const click = jest.fn();
    render(<Button text="Teste" onClick={click} />);
    const linkElement = screen.getByText(/teste/i);
    fireEvent.click(linkElement);

    expect(click).toHaveBeenCalled();
  });
})
