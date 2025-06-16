import { render, screen, waitFor } from '@testing-library/react'
import * as services from '../utils/Services'
import TestWithAPICall from '../components/TestWithAPICall';

test("Testing api call", async () => {
    const mockFetchData = jest.spyOn(services, 'fetchData')
        .mockImplementation(async () => {
            return [{
                name: 'kunal'
            }];
        })

    render(<TestWithAPICall />)
    expect(mockFetchData).toHaveBeenCalled();

    await waitFor(() => {
        expect(screen.getByText(/kunal/i)).toBeInTheDocument();
    })
})