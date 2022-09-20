// ALL COMMANDS FROM NESTJS COURSE

// Detect what version of Node is installed
node --version


// Install NestJS CLI -globally
npm i -g @nestjs/cli


// Check your Nest version (once installed)
nest --version


// 💡TIP💡 Output all Nest commands
nest --help


// Create our ILUVCOFFEE Application
nest new iluvcoffee


// Start Nest application
npm run start


// Development mode:
npm run start:dev


// Generate a Controller
nest generate controller
// shorthand: $ nest g co


// Generate a Service with the Nest CLI
nest generate service {name}
// shorthand: nest g s {name}


// Generate a Nest Module with the Nest CLI
nest g module {name}
// shorthand: nest g mo {name}


/**
 * Generate a DTO class with the Nest CLI 
 * --no-spec (no test file needed for DTO's)
 */
nest g class coffees/dto/create-coffee.dto --no-spec

// Using the Nest CLI let’s create this DTO by entering (in your terminal)
nest g class common/dto/pagination-query.dto --no-spec

// Using the Nest CLI let’s create this Event Entity by entering
nest g class events/entities/event.entity --no-spec

// Nest CLI - Generate a new CoffeeRatingModule
nest g mo coffee-rating

// Nest CLI - Generate a new CoffeeRatingService 
nest g s coffee-rating

// Generate Filter with Nest CLI 
nest g filter common/filters/http-exception

// Generate ApiKeyGuard with Nest CLI
nest g guard common/guards/api-key

// Generate WrapResponseInterceptor with Nest CLI 
nest g interceptor common/interceptors/wrap-response

// Generate LoggingMiddleware with Nest CLI
nest g middleware common/middleware/logging

// Generate ParseIntPipe with Nest CLI
nest g pipe common/pipes/parse-int

// Install needed dependencies
npm i class-validator class-transformer

// Install neccessary TypeORM dependencies
npm install @nestjs/typeorm typeorm pg


/* YAML docker-compose.yml configuration file */
version: "3"
services:
  db:
    image:  postgres
    restart: always 
    ports:
      - "5432:5432"
    environment:
       POSTGRES_PASSWORD: pass123

// Start containers in detached / background mode
docker-compose up -d

// Stop containers
docker-compose down


// Creating a TypeOrm Migration
npx typeorm migration:create src/migrations/CoffeeRefactor
// CoffeeRefactor being the NAME we are giving "this" migration

/* RUNNING MIGRATIONS */

/**
 * 💡 Remember 💡
 * You must BUILD your Nest project (so that everything is output to the `/dist/` folder,
 * before a Migration can run, it needs compilated files.
 */
 
// Compile project first 
npm run build

// Run migration(s) 
npx typeorm migration:run -d dist/typeorm-cli.config

// REVERT migration(s)
npx typeorm migration:revert -d dist/typeorm-cli.config

// Let TypeOrm generate migrations (for you)
npx typeorm migration:generate src/migrations/SchemaSync -d dist/typeorm-cli.config


// Generate a DatabaseModule
nest g mo database

// Initial attempt at creating "CONNECTION" provider, and utilizing useValue for values */
{
  provide: 'CONNECTION',
  useValue: new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432
  }).initialize(),
}


// Install @nestjs/config
npm i @nestjs/config

// .env file in root directory
DATABASE_USER=postgres
DATABASE_PASSWORD=pass123
DATABASE_NAME=postgres
DATABASE_PORT=5432
DATABASE_HOST=localhost

// Make sure .env file is in .gitignore file and NOT tracked by git */
# Env
*.env

/* AppModule updated to use process.env variables */
TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: true,
}),


// Install neccessary dependencies
$ npm install @hapi/joi
$ npm install --save-dev @types/hapi__joi

// Use Joi validation
ConfigModule.forRoot({
  validationSchema: Joi.object({
    DATABASE_HOST: Joi.required(),
    DATABASE_PORT: Joi.number().default(5432),
  }),
}),


/**
 * Installing @nestjs/swagger
 * & Swagger UI for Express.js (which our application uses)
 * 💡 Note: If your application is using Fastiy, install `fastify-swagger` instead
 */
npm install --save @nestjs/swagger swagger-ui-express

// Setting up Swagger document 
const options = new DocumentBuilder()
  .setTitle('Iluvcoffee')
  .setDescription('Coffee application')
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, options);

SwaggerModule.setup('api', app, document);

/** 
 * With the App running (npm run start:dev if not)
 * To view the Swagger UI go to:
 * http://localhost:3000/api
 */


// For unit tests
npm run test 

// For unit tests + collecting testing coverage
npm run test:cov

// For e2e tests
npm run test:e2e

// Run a unit test for a -specific- file pattern
npm run test:watch -- coffees.service

// Run e2e tests for a -specific- file pattern
npm run test:e2e -- coffees


-------------------------------------------------


// Install mongoose dependencies
npm i mongoose @nestjs/mongoose

// Generate PaginationQueryDto (without test file)
nest g class common/dto/pagination-query.dto --no-spec

// Generate Event Entity (without test file)
nest g class events/entities/event.entity --no-spec