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
  it('should return a error', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('error'));
    try {
      await getDataApi('mockedURL');
    } catch (error) {
      expect(error.message).toBe('error');
    }
  });
})
