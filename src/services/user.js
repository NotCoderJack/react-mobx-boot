import { axios } from '../utils';

export const getUserList = ({ page = 1, tab = 'all', limit = 10 }) => (axios.get('/topics', {
  params: {
    page,
    tab,
    limit,
  }
}));
