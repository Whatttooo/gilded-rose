import { GildedRoseItem, BackstagePassItem } from './gildedRose-types';

export const storeItems: GildedRoseItem[] = [
  {
    id: '1',
    name: 'Special Rose',
    quality: 20,
    sellIn: 4,
  },
  {
    id: '2',
    name: 'Pint of Mead',
    quality: 15,
    sellIn: 1,
  },
  {
    id: '3',
    name: 'Rope',
    quality: 20,
    sellIn: 5,
  },
  {
    id: '4',
    name: 'Aged Brie',
    quality: 20,
    sellIn: 2,
  },
  {
    id: '5',
    name: 'Legendary Sword',
    quality: 80,
    sellIn: 25,
    legendary: true,
  },
  {
    id: '6',
    name: 'Regular Crossbow',
    quality: 20,
    sellIn: 7,
  },
  {
    id: '7',
    name: 'Sulfuras',
    quality: 80,
    sellIn: 4,
    legendary: true,
  },
  {
    id: '8',
    name: 'Black Couldron',
    quality: 80,
    sellIn: 4,
    conjured: true,
  },
];

export const backstagePasses: BackstagePassItem[] = [
  {
    id: '9',
    name: 'Rolling Stones',
    quality: 40,
    daysToConcert: 2,
  },
  {
    id: '10',
    name: 'Three Days Grace',
    quality: 40,
    daysToConcert: 3,
  },
  {
    id: '11',
    name: 'Elton John',
    quality: 40,
    daysToConcert: 9,
  },
];
