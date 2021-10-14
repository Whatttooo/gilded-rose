import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Card from '../../src/components/Card';

import {
  GildedRoseItem,
  BackstagePassItem,
} from '../../src/data/gildedRose-types';

interface StorePageProps {
  items: GildedRoseItem[];
  backstagePasses: BackstagePassItem[];
}

const StorePageWrapper = styled.div`
  width: 1140px;
  max-width: 100%;
  margin: 0 auto;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;

const StorePage = ({ items, backstagePasses }: StorePageProps) => (
  <StorePageWrapper>
    <h1>Welcome to our store</h1>
    <ItemsContainer>
      {items.map((item) => (
        <Card item={item} />
      ))}
    </ItemsContainer>
  </StorePageWrapper>
);

export async function getServerSideProps() {
  const storeItems = await fetch(`http://localhost:3000/api/storeItems/`);
  const backstagePasses = await fetch(
    `http://localhost:3000/api/backstagePasses/`
  );
  const storeItemData = await storeItems.json();
  const backstagePassesData = await backstagePasses.json();
  return {
    props: {
      items: storeItemData.data,
      backstagePasses: backstagePassesData.data,
    },
  };
}

export default StorePage;
