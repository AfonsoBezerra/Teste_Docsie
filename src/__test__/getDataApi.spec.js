import axios from "axios";
import { getDataApi } from "../services/getDataApi";

jest.mock('axios');

const mockedAxios = axios;

describe('../services/getDataApi', () => {
  it('should return a object', async () => {
    const mockedResponse = {
      data: { name: 'Afonso' }
    };
    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    const { data } = await getDataApi('mockedURL');
    expect(data).toEqual({ name: 'Afonso' });
  });
})
