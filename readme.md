
#Project Structure
```
|-- root
    |-- .gitignore
    |-- package.json
    |-- swagger.yaml
    |-- tsconfig.json
    |-- tslint.json
    |-- yarn-error.log
    |-- yarn.lock
    |-- dist
    |   |-- app.js
    |   |-- app.js.map
    |   |-- config
    |   |   |-- config.js
    |   |   |-- config.js.map
    |   |-- controller
    |   |   |-- searchController.js
    |   |   |-- searchController.js.map
    |   |-- models
    |   |   |-- index.js
    |   |   |-- index.js.map
    |   |   |-- searchResult.js
    |   |   |-- searchResult.js.map
    |   |   |-- serachInput.js
    |   |   |-- serachInput.js.map
    |   |-- router
    |   |   |-- api.js
    |   |   |-- api.js.map
    |   |   |-- services
    |   |       |-- search.js
    |   |       |-- search.js.map
    |   |-- services
    |   |   |-- clearCacheService.js
    |   |   |-- clearCacheService.js.map
    |   |   |-- searchService.js
    |   |   |-- searchService.js.map
    |   |-- utils
    |       |-- logger.js
    |       |-- logger.js.map
    |       |-- responseFormatter.js
    |       |-- responseFormatter.js.map
    |       |-- cache
    |       |   |-- redisClient.js
    |       |   |-- redisClient.js.map
    |       |-- httpClient
    |           |-- index.js
    |           |-- index.js.map
    |-- src
        |-- app.ts
        |-- config
        |   |-- config.ts
        |-- controller
        |   |-- searchController.ts
        |-- models
        |   |-- index.ts
        |   |-- searchResult.ts
        |   |-- serachInput.ts
        |-- router
        |   |-- api.ts
        |   |-- services
        |       |-- search.ts
        |-- services
        |   |-- clearCacheService.ts
        |   |-- searchService.ts
        |-- utils
            |-- logger.ts
            |-- responseFormatter.ts
            |-- cache
            |   |-- redisClient.ts
            |-- httpClient
                |-- index.ts
```