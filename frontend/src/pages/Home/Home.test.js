import { render, screen } from '@testing-library/react';
import { API_URL } from '../../utils/constants';
import axios from 'axios';
import Home from '.';

describe('Test Home', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Test Render - success response', async () => {
    const mockGet = jest.spyOn(axios, 'get');

    mockGet.mockImplementation((url) => {
      switch (url) {
        case `${API_URL}/api/category/?format=json`:
          return Promise.resolve({
            data: {
              status: 'success',
              data: [
                {
                  id: 1,
                  name: 'Handhelds',
                  description: "So big, you don't need thumbs.",
                },
                {
                  id: 2,
                  name: 'Appeteasers',
                  description: 'Tease the hangry hippo, he get hangrier',
                },
              ],
            },
          });
        default:
          return Promise.resolve({
            data: { status: 'fail' },
          });
      }
    });

    render(<Home />);

    expect(await screen.findAllByTestId(/category-item/i)).toHaveLength(2);
    expect(await screen.findByText('Appeteasers')).toBeInTheDocument();
  });

  test('Test Render - fail response', async () => {
    const mockGet = jest.spyOn(axios, 'get');

    mockGet.mockResolvedValue({
      data: { status: 'fail' },
    });

    render(<Home />);

    // Expect zero categories when API fails
    expect(await screen.queryAllByTestId(/category-item/i)).toHaveLength(0);
  });
});

