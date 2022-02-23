import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
// StaticQuery;
import get from 'lodash/get';
import {Header} from 'semantic-ui-react';
import ProductList from '../components/ProductList';
import SEO from '../components/SEO';
import Banner from '../images/apple-1868496_1280.jpg';
import Layout from '../components/Layout';

/* eslint max-classes-per-file: ["error", 2] */

// class StoreIndexWithData extends React.Component {
//   render() {
//     return (
//       <StaticQuery
//         query={graphql`
//           query IndexQuery {
//             site {
//               siteMetadata {
//                 title
//               }
//             }
//             allMoltinProduct {
//               edges {
//                 node {
//                   id
//                   name
//                   description
//                   mainImageHref
//                   meta {
//                     display_price {
//                       with_tax {
//                         amount
//                         currency
//                         formatted
//                       }
//                     }
//                   }
//                   mainImage {
//                     childImageSharp {
//                       sizes(maxWidth: 600) {
//                         ...GatsbyImageSharpSizes
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         `}
//         render={data => {
//           const siteTitle = get(data, 'site.siteMetadata.title');
//           const products = get(data, 'allMoltinProduct.edges');
//           const filterProductsWithoutImages = products.filter(
//             v => v.node.mainImageHref,
//           );
//           return (
//             <HomeComp
//               siteTitle={siteTitle}
//               filterProductsWithoutImages={filterProductsWithoutImages}
//             />
//           );
//         }}
//       />
//     );
//   }
// }

// class StoreIndex extends React.Component {
//   render() {
//     return (
// <Layout location={location}>
//   <SEO title={this.props.siteTitle} />
//   <Header
//     as="h3"
//     icon
//     textAlign="center"
//     style={{
//       marginBottom: '2em',
//     }}>
//     <Header.Content
//       style={{
//         width: '60%',
//         margin: '0 auto',
//       }}>
//       <img src={Banner} style={{width: '100%'}} alt="logo" />
//       燈飾隨選，點亮生活 !
//     </Header.Content>
//   </Header>
//   <ProductList products={this.props.filterProductsWithoutImages} />
// </Layout>
//     );
//   }
// }

// export default StoreIndexWithData;

// _____________________________________________________________________
function useFetchProductListData() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMoltinProduct {
        edges {
          node {
            id
            name
            description
            mainImageHref
            meta {
              display_price {
                with_tax {
                  amount
                  currency
                  formatted
                }
              }
            }
            mainImage {
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log('data', data);

  const siteTitle = get(data, 'site.siteMetadata.title');
  const products = get(data, 'allMoltinProduct.edges');
  const filterProductsWithoutImages = products.filter(
    //filter出v裡面v.node.mainImageHref不是null的
    v => v.node.mainImageHref,
  );

  console.log('filterProductsWithoutImages', filterProductsWithoutImages);
  return {siteTitle, filterProductsWithoutImages};
}

const StoreIndex = ({location}) => {
  const {siteTitle, filterProductsWithoutImages} = useFetchProductListData();
  return (
    <Layout location={location}>
      <SEO title={siteTitle} />
      <Header
        as="h3"
        icon
        textAlign="center"
        style={{
          marginBottom: '2em',
        }}>
        <Header.Content
          style={{
            width: '60%',
            margin: '0 auto',
          }}>
          <img src={Banner} style={{width: '100%'}} alt="logo" />
          燈飾隨選，點亮生活
        </Header.Content>
      </Header>
      <ProductList products={filterProductsWithoutImages} />
    </Layout>
  );
};

export default StoreIndex;
