import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { GildedRoseItem } from '../../data/gildedRose-types';

interface CardProps {
  item: GildedRoseItem;
}

const CardWrapper = styled.a`
  cursor: pointer;
  padding: 20px;
  margin: 10px;
  min-width: 200px;
  background-color: ${(props) => props.theme.cardBackgroundColor};
  border-radius: 20px;
  border: ${(props) => (props.legendary ? '2px solid #fafad2' : 'none')};
  box-shadow: ${(props) => (props.legendary ? '0 0 30px #fafad2' : 'none')};
`;

const Card = ({ item }: CardProps) => {
  return (
    <Link href="/store/[id]" as={`/store/${item.id}`}>
      <CardWrapper legendary={item.legendary}>
        <strong>{item.name}</strong>
      </CardWrapper>
    </Link>
  );
};

export default Card;
