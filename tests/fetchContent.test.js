const axios = require('axios');
const fetchContent = require('../utils/fetchContent');

jest.mock('axios');

describe('fetchContent Utility', () => {
  it('should fetch content from a given URL', async () => {
    const url = 'https://api.example.com/data';
    const mockData = { data: 'Mock data from API' };
    
    axios.get.mockResolvedValue({
      status: 200,
      data: mockData
    });
    
    const result = await fetchContent(url);
    
    expect(axios.get).toHaveBeenCalledWith(url);
    expect(result).toEqual({ content: mockData, contentType: expect.any(String) });
  });
});
