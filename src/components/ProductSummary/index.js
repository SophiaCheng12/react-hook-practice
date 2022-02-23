import React, {useContext} from 'react';
import Img from 'gatsby-image';
import {Item, Label, Button} from 'semantic-ui-react';
import AddToCart from '../AddToCart';
// import {FavContext} from '../Fav';
import {FavContext, FavProvider, useFav} from '../Fav';

export default ({id, name, meta, sku, mainImage}) => {
  // const {add, remove, favList} = React.useContext(FavContext);
  const {add, remove, favList} = useContext(FavContext);
  console.log('favlIst = ', favList);
  const {isInFavList, toggleFav} = useFav();
  return (
    <Item.Group>
      <Item style={{alignItems: 'center'}}>
        {/* border: '1px solid red' */}
        <Item.Image size="medium">
          <Img
            style={{width: '250px'}}
            fluid={mainImage.childImageSharp.sizes}
            alt={name}
          />
        </Item.Image>
        <Item.Content>
          <Item.Header>{name}</Item.Header>
          <Item.Description>
            <p>{meta.display_price.with_tax.formatted}</p>
            <Label>{`SKU: ${sku}`}</Label>
          </Item.Description>
          <Item.Extra>
            <AddToCart productId={id} />
          </Item.Extra>
          <Item.Extra>
            {/* <Button onClick={() => toggleFav(id)}>
              {isInFavList(id) ? 'Remove from Fav' : 'Add to Fav'}
            </Button> */}
            <Button onClick={() => toggleFav(id)}>
              {isInFavList(id) ? 'Remove from Fav' : 'Add to Fav'}
            </Button>

            {/* <Button
              onClick={() => add(id)}
              disabled={favList.indexOf(id) !== -1}>
              Add to Fav
            </Button>
            <Button
              onClick={() => remove(id)}
              disabled={favList.indexOf(id) === -1}>
              Remove from Fav
            </Button> */}
          </Item.Extra>
        </Item.Content>
      </Item>
    </Item.Group>
  );
};
