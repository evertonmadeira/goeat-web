import Intl from 'intl';
import 'intl/locale-data/jsonp/en';

const formatValue = (value) =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
