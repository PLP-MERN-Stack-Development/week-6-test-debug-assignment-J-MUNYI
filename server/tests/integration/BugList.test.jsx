import { render, screen, waitFor } from '@testing-library/react';
import BugList from '../../components/BugList';
import axios from 'axios';

jest.mock('axios');

test('loads and displays bugs', async () => {
  axios.get.mockResolvedValue({ data: [{ _id: 1, title: 'Test Bug' }] });

  render(<BugList />);
  await waitFor(() => expect(screen.getByText(/test bug/i)).toBeInTheDocument());
});
