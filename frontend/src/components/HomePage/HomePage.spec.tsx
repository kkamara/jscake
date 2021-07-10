import { 
  render, 
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import HomePage from './HomePage';

jest.mock('axios');

const fakeCakes = {
  "data": [
    {
      "id": 1,
      "name": "Test Cake 1",
      "comment": "A nice cake",
      "imageUrl": null,
      "yumFactor": 3,
    },
    {
      "id": 2,
      "name": "Test Cake 2",
      "comment": "A great cake",
      "imageUrl": null,
      "yumFactor": 5,
    },
    {
      "id": 3,
      "name": "Test Cake 3",
      "comment": "A not too bad cake",
      "imageUrl": null,
      "yumFactor": 2,
    },
  ],
};

describe('HomePage component', () => {
  beforeEach(() => {
    axios.get = jest.fn().mockResolvedValue({ status: 200, data: fakeCakes });
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  test('homepage renders', async () => {
      render(<HomePage />);

      const cakesList = await waitFor(() => screen.getByTestId('cakes-container'));
      expect(cakesList).toBeInTheDocument();
  });
  test('view modal renders', async () => {
    await act(async () => {
      render(<HomePage />);
    
      const cakeItem = await waitFor(() => screen.getByTestId(`cake-${fakeCakes.data[0].id}`));
      expect(cakeItem).toBeInTheDocument();

      fireEvent.click(screen.getByTestId(`cake-${fakeCakes.data[0].id}`));

      const viewModal = await waitFor(() => screen.getByTestId('view-modal'));
      expect(viewModal).toBeInTheDocument();
    });
  });
  test('edit modal renders', async () => {
    await act(async () => {
      render(<HomePage />);
    
      const cakeItem = await waitFor(() => screen.getByTestId(`cake-${fakeCakes.data[0].id}`));
      expect(cakeItem).toBeInTheDocument();

      fireEvent.click(screen.getByTestId(`cake-${fakeCakes.data[0].id}`));

      const viewModal = await waitFor(() => screen.getByTestId('view-modal'));
      expect(viewModal).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('edit-button'));

      const editModal = await waitFor(() => screen.getByTestId('edit-modal'));
      expect(editModal).toBeInTheDocument();
    });
  });
  test('delete modal renders', async () => {
    await act(async () => {
      render(<HomePage />);
    
      const cakeItem = await waitFor(() => screen.getByTestId(`cake-${fakeCakes.data[0].id}`));
      expect(cakeItem).toBeInTheDocument();

      fireEvent.click(screen.getByTestId(`cake-${fakeCakes.data[0].id}`));

      const viewModal = await waitFor(() => screen.getByTestId('view-modal'));
      expect(viewModal).toBeInTheDocument();

      fireEvent.click(screen.getByTestId('del-button'));

      const delModal = await waitFor(() => screen.getByTestId('del-modal'));
      expect(delModal).toBeInTheDocument();
    });
  });
})