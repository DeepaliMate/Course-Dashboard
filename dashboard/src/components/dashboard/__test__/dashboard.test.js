import React from 'react';
import ReactDOM from 'react-dom'
import { cleanup, waitFor, getByTestId, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios"
import Dashboard from '../dashboard'
import fetchData from './fetchDataAPI'

import axios from 'axios';
jest.mock('axios');
afterEach(cleanup)

it("render withou crashing", async () => {
    const div = document.createElement("div")

    ReactDOM.render(<Dashboard />, div)
    const { } = render()

});
it("before fetching data its loading", async () => {
    const { getByTestId } = render(<Dashboard />)
    expect(getByTestId('loading')).toHaveTextContent("Loading.....")
});

describe('fetchData', () => {
    it('fetches successfully data from an API (Student Performance)', async () => {
        [
            {
                "id": 1,
                "title": "Students",
                "type": "profiles",
                "line1": 62
            },
            {
                "id": 2,
                "title": "Average Markes",
                "type": "calculation",
                "line1": 6.8
            },
            {
                "id": 3,
                "title": "Underperforming students",
                "type": "calculation",
                "line1": 9,
                "line2": "(14%)"
            }
        ]
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
    });
    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';

        axios.get.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
        );
    });
});