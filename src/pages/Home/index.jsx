import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';

import colors from '../../styles/colors';
import {formatPrice} from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  Tittle,
  ScrollContainer,
  CardScrollContainer,
  CardContainer,
  CardBox,
  CardImage,
  CardText,
  CardPrice,
  CardButton,
  CardButtonText,
  CardQuatityContainer,
  CardQuatity,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`products`);

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ScrollContainer>
        <Tittle>RUNNING</Tittle>

        <CardScrollContainer
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <CardContainer key={product.id}>
              <CardBox>
                <CardImage source={{uri: product.image}} />
                <CardText>{product.title}</CardText>
                <CardPrice>{product.priceFormatted}</CardPrice>
                <CardButton onPress={() => handleAddToCart(product.id)}>
                  <CardQuatityContainer>
                    <Icon name="shopping-cart" size={20} color={colors.white} />
                    <CardQuatity>{amount[product.id] || 0}</CardQuatity>
                  </CardQuatityContainer>
                  <CardButtonText>ADICIONAR</CardButtonText>
                </CardButton>
              </CardBox>
            </CardContainer>
          )}
        />

        <Tittle>CAMINHADA</Tittle>

        <CardScrollContainer
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <CardContainer key={product.id}>
              <CardBox>
                <CardImage source={{uri: product.image}} />
                <CardText>{product.title}</CardText>
                <CardPrice>{product.priceFormatted}</CardPrice>
                <CardButton onPress={() => handleAddToCart(product.id)}>
                  <CardQuatityContainer>
                    <Icon name="shopping-cart" size={20} color={colors.white} />
                    <CardQuatity>{amount[product.id] || 0}</CardQuatity>
                  </CardQuatityContainer>
                  <CardButtonText>ADICIONAR</CardButtonText>
                </CardButton>
              </CardBox>
            </CardContainer>
          )}
        />

        <Tittle>TRILHA</Tittle>

        <CardScrollContainer
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <CardContainer key={product.id}>
              <CardBox>
                <CardImage source={{uri: product.image}} />
                <CardText>{product.title}</CardText>
                <CardPrice>{product.priceFormatted}</CardPrice>
                <CardButton onPress={() => handleAddToCart(product.id)}>
                  <CardQuatityContainer>
                    <Icon name="shopping-cart" size={20} color={colors.white} />
                    <CardQuatity>{amount[product.id] || 0}</CardQuatity>
                  </CardQuatityContainer>
                  <CardButtonText>ADICIONAR</CardButtonText>
                </CardButton>
              </CardBox>
            </CardContainer>
          )}
        />
      </ScrollContainer>
    </Container>
  );
}
