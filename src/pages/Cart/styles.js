import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.secondary};
  padding: 10px;
`;

export const CartContainer = styled.View`
  background: ${colors.white};
  border-radius: 4px;
  width: 100%;
  max-width: 360px;
  max-height: 620px;
  margin-top: 20px;
  padding: 10px;
`;

export const ScrollContainer = styled.ScrollView``;

export const CartItem = styled.View`
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 12px;
`;

export const CartItemTop = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const CartItemTopImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const CartItemTextContainer = styled.View`
  width: 193px;
`;

export const CartItemText = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 14px;
  color: ${colors.textDescription};
`;

export const CartItemPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.black};
`;

export const CartItemBotton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.lightGray};
  border-radius: 4px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 10px;
  padding-left: 35px;
`;

export const CartItemQuatity = styled.View`
  flex-direction: row;
  align-items: center;
  width: 56px;
  border-radius: 4px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${colors.white};
`;

export const CartItemSubTotal = styled.View``;

export const TotalContainer = styled.View`
  margin-top: 30px;
  align-items: center;
`;

export const TotalContainerText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.darkGray};
`;

export const TotalContainerPrice = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
  color: ${colors.black};
`;

export const Button = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${colors.primary};
  width: 100%;
  border-radius: 4px;
  padding: 13px;
  margin-top: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};
`;