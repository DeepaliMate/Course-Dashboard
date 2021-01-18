import React from 'react';
import ReactDOM from 'react-dom'
import { cleanup, waitFor, getByTestId, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios"
import StudentList from '../studentList'
import fetchData from './fetchDataAPI'

import axios from 'axios';
jest.mock('axios');
afterEach(cleanup)

it("render withou crashing", async () => {
    const div = document.createElement("div")

    ReactDOM.render(<StudentList />, div)
    const { } = render()

});
it("before fetching data its loading", async () => {
    const { getByTestId } = render(<StudentList />)
    expect(getByTestId('loading2')).toHaveTextContent("Loading...")
});

describe('fetchData', () => {
    it('fetches successfully data from an API (Student List)', async () => {
        [
            {
                "id": 1,
                "name": "Annete Watson",
                "marks": 9.3
            },
            {
                "id": 2,
                "name": "Calvin Steward",
                "marks": 8.9
            },
            {
                "id": 3,
                "name": "Ralph Richards",
                "marks": 8.7
            },
            {
                "id": 4,
                "name": "Bernard Murphy",
                "marks": 8.2
            },
            {
                "id": 5,
                "name": "Arlene Robertson",
                "marks": 8.2
            },
            {
                "id": 6,
                "name": "John Lane",
                "marks": 8.1
            },
            {
                "id": 7,
                "name": "Pat McKinney",
                "marks": 7.9
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