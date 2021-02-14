import express from 'express';
import { search, clearCache } from '../../controller/searchController'

const apiRouter = express.Router();

apiRouter.post('/search', (req, res) => {
  search(req, res)
})
apiRouter.get('/clear-cache', clearCache)

export default apiRouter;

