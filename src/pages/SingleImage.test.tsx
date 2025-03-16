import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SingleImage from './SingleImage';
import { useGetSingleImage } from '../hooks/useGetSingleImage';
import '@testing-library/jest-dom';

jest.mock('../hooks/useGetSingleImage', () => ({
  useGetSingleImage: jest.fn(),
}));

const mockUseGetSingleImage = useGetSingleImage as jest.Mock;
const queryClient = new QueryClient();

const renderWithQueryClient = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
  );
};

describe('SingleImage Component', () => {
  beforeEach(() => {
    mockUseGetSingleImage.mockReturnValue({
      isLoading: false,
      data: { hits: [] },
    });
  });

  it('should render without crashing', () => {
    renderWithQueryClient(<SingleImage />);
  });

  it('should display skeleton loader initially', () => {
    mockUseGetSingleImage.mockReturnValue({ isLoading: true, data: null });
    renderWithQueryClient(<SingleImage />);
    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('should display image when data is loaded', async () => {
    mockUseGetSingleImage.mockReturnValue({
      isLoading: false,
      data: {
        hits: [
          {
            largeImageURL:
              'https://fastly.picsum.photos/id/430/200/300.jpg?hmac=souGSmvwQ6KlJgthGYBGSWB22Y7MpK5xlgLYwvtbXzg',
          },
        ],
      },
    });

    renderWithQueryClient(<SingleImage />);

    await waitFor(() =>
      expect(screen.getByTestId('single-image-pic')).toBeInTheDocument()
    );
  });
});
