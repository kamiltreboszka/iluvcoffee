import { Injectable, Module, Scope } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import coffeesConfig from '../config/coffees.config';
import { Connection } from 'typeorm';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constans';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

// class MockCoffeeService {}
// class ConfigService {}
// class DevelopmentConfigServie {}
// class ProductionConfigService {}

@Injectable()
export class CoffeBrandsFactory {
  create() {
    // ... do something ...
    return ['buddy_brew', 'nescafe'];
  }
}

@Module({ 
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]), 
    ConfigModule.forFeature(coffeesConfig)
  ],
  controllers: [CoffeesController],
// ! Value Based Providers
  // providers: [{ provide: CoffeesService, useValue: new MockCoffeeService() }],

// ! Non class Based Provider Token
  // providers: [
  //   CoffeesService,
  //   { 
  //     provide: COFFEE_BRANDS, 
  //     useValue: ['buddy brew', 'nescafe'] 
  //   }
  // ],
  
// ! Class Providers
  // providers: [
  //   {
  //     provide: CoffeesService,
  //     useClass: process.env.NODE_ENV === 'development' 
  //       ? DevelopmentConfigServie 
  //       : ProductionConfigService,
  //   },
  //   { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] }
  // ],

  // providers: [
  //   CoffeesService,
  //   { provide: COFFEE_BRANDS, useFactory: () => ['buddy brew', 'nescafe'] }
  // ],

// ! Factory Providers
  // providers: [
  //   CoffeesService,
  //   CoffeBrandsFactory,
  //   { 
  //     provide: COFFEE_BRANDS, 
  //     useFactory: (brandsFactory: CoffeBrandsFactory) => 
  //       brandsFactory.create(), 
  //     inject: [CoffeBrandsFactory] 
  //   }
  // ],

  
// ! Leverage Async Providers
  // providers: [
  //   CoffeesService,
  //   { 
  //     provide: COFFEE_BRANDS, 
  //     useFactory: async (connection: Connection): Promise<string[]> => {
  //       // const coffeeBrands = await connection.query('SELECT * ...');
  //       const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe'])
  //       console.log('[!] Async Factory');
  //       return coffeeBrands;
  //     },
  //     inject: [Connection],
  //   }
  // ],
  providers: [
    CoffeesService,
    { provide: COFFEE_BRANDS, useFactory: () => ['buddy brew', 'nescafe']}
  ],
  exports: [CoffeesService] 
})
export class CoffeesModule {}
