import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe('Form', () => {

  test('prop text sendo passada pro button', () => {
    render(<Form />);

    const linkElement = screen.getByT
    expect(linkElement).toBeInTheDocument();
  });
})
