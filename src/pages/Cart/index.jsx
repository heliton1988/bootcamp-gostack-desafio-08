import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import colors from '../../styles/colors';
import {formatPrice} from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartContainer,
  ScrollContainer,
  CartItem,
  CartItemTop,
  CartItemDelete,
  CartItemTopImage,
  CartItemTextContainer,
  CartItemText,
  CartItemPrice,
  CartItemBotton,
  ButtonQunatity,
  ButtonContainer,
  CartItemQuatity,
  CartItemSubTotal,
  TotalContainer,
  TotalContainerText,
  TotalContainerPrice,
  ButtonText,
  Button,
  LogoSad,
} from './styles';

export default function Cart() {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      <CartContainer>
        <ScrollContainer>
          {cart.map(product => (
            <CartItem key={product.id}>
              <CartItemTop>
                <CartItemTopImage source={{uri: product.image}} />
                <CartItemTextContainer>
                  <CartItemText>{product.title}</CartItemText>
                  <CartItemPrice>{product.priceFormatted}</CartItemPrice>
                </CartItemTextContainer>
                <CartItemDelete
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }>
                  <Icon name="delete" size={20} color={colors.orange} />
                </CartItemDelete>
              </CartItemTop>
              <CartItemBotton>
                <ButtonContainer>
                  <ButtonQunatity onPress={() => decrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color={colors.orange}
                    />
                  </ButtonQunatity>
                  <CartItemQuatity>
                    <CartItemText>{product.amount}</CartItemText>
                  </CartItemQuatity>

                  <ButtonQunatity onPress={() => increment(product)}>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color={colors.orange}
                    />
                  </ButtonQunatity>
                </ButtonContainer>
                <CartItemSubTotal>
                  <CartItemPrice>{product.subtotal}</CartItemPrice>
                </CartItemSubTotal>
              </CartItemBotton>
            </CartItem>
          ))}
        </ScrollContainer>

        {cart.length !== 0 ? (
          <TotalContainer>
            <TotalContainerText>TOTAL</TotalContainerText>
            <TotalContainerPrice>{total}</TotalContainerPrice>
            <Button>
              <ButtonText>FINALIZAR PEDIDO</ButtonText>
            </Button>
          </TotalContainer>
        ) : (
          <TotalContainer>
            <LogoSad />
            <TotalContainerText>
              OPS! SEU CARRINHO ESTÁ VAZIO
            </TotalContainerText>
            <Button onPress={() => navigation.navigate('Home')}>
              <ButtonText>VOLTAR PARA HOME</ButtonText>
            </Button>
          </TotalContainer>
        )}
      </CartContainer>
    </Container>
  );
}
