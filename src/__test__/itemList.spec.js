import React from 'react';
import axios from "axios";
import { getDataApi } from '../services/getDataApi';

jest.mock('axios');

describe('ItemList', () => {
  it('should render a product list', async () => {
    const mockedAxios = {
      data: [
        {
          id: '1',
          name: 'Verapamil',
          description: 'deliver one-to-one e-business',
          price: '$47'
        }
      ]
    }
    axios.get.mockResolvedValueOnce(mockedAxios);
    const { data } = await getDataApi('mockedURL');
    expect(data).toEqual([{ "description": "deliver one-to-one e-business", "id": "1", "name": "Verapamil", "price": "$47" }]);
  })
})