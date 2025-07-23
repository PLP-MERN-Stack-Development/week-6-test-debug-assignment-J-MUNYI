import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';

test('renders bug form and submits data', () => {
  render(<BugForm refreshBugs={() => {}} />);

  const titleInput = screen.getByPlaceholderText(/enter bug title/i);
  fireEvent.change(titleInput, { target: { value: 'Test Bug' } });
  
  const submitButton = screen.getByText(/add bug/i);
  fireEvent.click(submitButton);

  expect(titleInput.value).toBe(''); // After submission, should reset
});
