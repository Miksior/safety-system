# SafetySystem

Safety system nx monorepo with Angular frontend and nestjs backend.

## Start the app

Start the postgres database with dockerfile:

```
docker build -t custom-postgres . ; docker run -p 5432:5432 --name postgresdb2 -d custom-postgres
```

Inside the project's root folder, run:

``` 
npm i --legacy-peer-deps ; npx nx run-many -t serve
```
## Swagger

There is Swagger UI available at `http://localhost:3000/api`

## Testing

Example tests for both frontend and backend are included. Run them with:

```
npx nx test backend 
npx nx test frontend
```

## Notes

I know there the code have not seen much best practices, but I ran out of time. Here are some of them:
- Methods can lack types
- There are some 'magic strings' 
- No .env files
- Sorry for the inconvenience with setup, had some issues with docker-compose and nx
- Time has no mercy 💀
