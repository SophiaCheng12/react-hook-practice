/* eslint-disable camelcase */
import React from 'react';
import {Header, Divider, Table} from 'semantic-ui-react';

export default ({description, material, max_watt, bulb_qty, finish, bulb}) => (
  <div>
    <Header as="h3">商品細節</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header style={{background: '#f9fafb'}}>
        <Table.Row>
          <Table.HeaderCell colSpan="2">商品資訊</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>材質</Table.Cell>
          <Table.Cell>{material}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>最大瓦數</Table.Cell>
          <Table.Cell>{max_watt}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>燈泡數</Table.Cell>
          <Table.Cell>{bulb_qty}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>作者</Table.Cell>
          <Table.Cell>{finish}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>規格</Table.Cell>
          <Table.Cell>{bulb}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
);
