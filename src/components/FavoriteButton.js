import React from 'react';
import { Path, Svg } from 'react-native-svg';

const colors = {
  primary: '#FF5555',
  second: '#F40000',
  defaultValue: '#fff',
  stroke: 'black',
};

function FavoriteButton({ isFavorite }) {
  return (
    <Svg height={'32'} width={'32'} viewBox={'-4 -4 520 520'}>
      <Path
        strokeWidth={'8'}
        stroke={isFavorite ? colors.primary : colors.stroke}
        fill={isFavorite ? colors.primary : colors.defaultValue}
        d={'M376.951,28.507h-0.899 c-66.027,0-102.942,48.32-120.049,81.033 c-17.408-32.714-54.022-81.033-120.049-81.033h-1.199C63.324,29.108,3.792,90.032,0.191,167.164 c-4.503,94.538,70.937,158.164,183.782,254.204c19.509,16.807,40.218,34.515,62.126,53.423l9.905,8.703l9.905-8.703 c21.608-18.908,42.617-36.616,62.126-53.423c112.844-96.04,188.278-159.666,183.775-254.204 C508.206,90.031,448.381,29.107,376.951,28.507z'}
      />

      <Path
        fill={isFavorite ? colors.second : colors.defaultValue}
        d={'M508.808,167.164 c7.503,94.538-70.93,158.164-183.775,254.204 c-35.509,16.807-40.518,34.515-62.126,53.423l-1.905,8.703 V120.54 c37.107-32.714,54.022-81.033,120.049-81.033 h0.899 C418.381,29.107,508.206,90.031,508.808,167.164'}
      />
    </Svg>
  );
}

export default FavoriteButton;
