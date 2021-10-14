import React from 'react';
import styled from 'styled-components';
import { GildedRoseItem } from '../../src/data/gildedRose-types';

interface StoreItem {
  item: GildedRoseItem;
}

const ItemPageWrapper = styled.div`
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;
`;

const StoreItem = ({ item }: StoreItem) => (
  <ItemPageWrapper>
    <h1>You have selected the: {item.name}</h1>
    <hr />
    <h3>Things to know:</h3>
    <ul>
      <li>Quality: {item.quality}</li>
      <li>Needs to be sold in: {item.sellIn} days</li>
      {item.legendary ? <li>The item is legendary</li> : null}
      {item.conjured ? <li>This is a conjoured item</li> : null}
    </ul>
  </ItemPageWrapper>
);

export async function getServerSideProps({ params, req, res }) {
  const response = await fetch(
    `http://localhost:3000/api/storeItems/${params.id}`
  );

  if (!response) {
    res.writeHead(302, {
      Location: '/store',
    });
    res.end();
    return {
      props: {},
    };
  }

  const { data } = await response.json();

  return {
    props: { item: data },
  };
}

export default StoreItem;
