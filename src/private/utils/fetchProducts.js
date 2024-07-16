import aishaFetch from "../axios/config";

const fetchProducts = async (page, size, query) => {
  try {
    const url = `/product/${ query === '' ? 'crud/read' : 'search/title'}`;
    const response = await aishaFetch.get(
      url, 
      {headers: { size: size, page: page, title: query}}
    );
    return response;
  } catch (error) {
    return error;
  }
};

export default fetchProducts;