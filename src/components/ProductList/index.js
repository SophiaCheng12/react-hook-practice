/* eslint-disable camelcase */
import React, {useEffect} from 'react';
import {Card, Image} from 'semantic-ui-react';
import Img from 'gatsby-image';
import {Link} from 'gatsby';
import {FavContext, useFav} from '../../components/Fav';

// import {render} from 'react-dom';
/*
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayItems: [],
    };
  }

  componentDidMount() {
    
  }

  render() {
    const {displayItems} = this.state;
    return <Card.Group items={displayItems} itemsPerRow={4} stackable />;
  }
}
export default ProductList;
*/
const ProductList = ({products}) => {
  const [items, setItems] = React.useState([]);
  const {favList} = React.useContext(FavContext);

  const {isInFavList} = useFav();

  useEffect(() => {
    // 在map裡做解構賦值 {node: {name, id, meta, mainImage}} 取出每個product裡面的name, id, meta, mainImage
    const displayItems = products.map(
      ({node: {name, id, meta, mainImage, mainImageHref}}) => {
        // console.log('name', name);
        // console.log('id', id);
        // console.log('meta', meta);
        // console.log('mainImage', mainImage);
        console.log('img', mainImage.childImageSharp.sizes);

        const price = meta.display_price.with_tax.formatted || null;
        return {
          as: Link,
          to: `/product/${id}/`,
          childKey: id,
          image: (
            <Image>
              <Img fluid={mainImage.childImageSharp.sizes} alt={name} />
            </Image>
          ),
          header: name,
          meta: (
            <Card.Meta
              style={{
                color: 'dimgray',
                // backgroundColor: isInFavList(id) ? 'pink' : 'white',
                backgroundColor: isInFavList(id) ? 'pink' : 'white',
              }}>
              {/* favList.indexOf(id) !== -1 ? "pink" : "white" */}
              {price}
            </Card.Meta>
          ),
        };
      },
    );

    setItems(displayItems);
  }, []);

  return <Card.Group items={items} itemsPerRow={5} stackable />;
};

export default ProductList;

/*
const mapProductsToItems = products =>
  products.map(({node: {name, id, meta, mainImage}}) => {
    const price = meta.display_price.with_tax.formatted || null;
    return {
      as: Link,
      to: `/product/${id}/`,
      childKey: id,
      image: (
        <Image>
          <Img fluid={mainImage.childImageSharp.sizes} alt={name} />
        </Image>
      ),
      header: name,
      meta: <Card.Meta style={{color: 'dimgray'}}>{price}</Card.Meta>,
    };
  });

export default ({products}) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
);
*/
