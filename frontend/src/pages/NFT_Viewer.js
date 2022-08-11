import React from "react";
import { Item } from "semantic-ui-react";
import '../index.css';

const ItemExampleHeaders = () => (
  <Item.Group>
    <Item>
      <Item.Image size="tiny" src="/images/wireframe/image.png" />
      <Item.Content verticalAlign="middle" color="blue">
        <Item.Header as="a" color="blue">
          <div style={{ color: "#BCBEC0" }}>12 Years a Slave</div>
        </Item.Header>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="tiny" src="/images/wireframe/image.png" />
      <Item.Content verticalAlign="middle">
        <Item.Header as="a" content="My Neighbor Totoro" />
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size="tiny" src="/images/wireframe/image.png" />
      <Item.Content header="Watchmen" verticalAlign="middle" />
    </Item>
  </Item.Group>
);

export default ItemExampleHeaders;
