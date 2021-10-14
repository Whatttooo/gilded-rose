export interface GildedRoseItem {
  id: string;
  name: string;
  quality: number;
  sellIn: number;
  legendary?: boolean;
  conjured?: boolean;
}

export interface BackstagePassItem extends Omit<GildedRoseItem, 'sellIn'> {
  daysToConcert: number;
}
