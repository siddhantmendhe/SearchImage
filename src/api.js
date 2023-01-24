import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.pexels.com/v1/search', {
    headers: {
      Authorization: 'cilUTTqXCxpDwTXt2fpZ6kkw1bFQ6H6SiQ19zETpUdpVrVEx82zKMDdm',
    },
    params: {
      query: term,
    },
  });


  return response.data.photos ;
};

export default searchImages;
