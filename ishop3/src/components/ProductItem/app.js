import React from 'react';
import DOM from 'react-dom-factories';
import PropTypes from 'prop-types';
import './style.css';

class ProductItem extends React.Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    picUrl: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    selectedProduct: PropTypes.string,
    highlightProduct: PropTypes.func,
    deleteProduct: PropTypes.func
  };

  static defaultProps = {
    deleteBtn: 'Удалить'
  };

  deleteProduct = (e) => {
    e.stopPropagation();
    this.props.cbDeleted(this.props);
  };

  highlightProduct = () => {
    this.props.cbSelected(this.props.id);
  };

  render() {

    return DOM.tr({className: `product__item ${this.props.id === this.props.selectedProduct ? `highlight` : ``}`, onClick: this.highlightProduct},
        DOM.td({className: 'product__pic'},
            DOM.img({src: `img/${this.props.picUrl}`, alt: this.props.name})
        ),
        DOM.td({className: 'product__name'}, this.props.name),
        DOM.td({className: 'product__price'}, this.props.price),
        DOM.td({className: 'product__balance'}, this.props.balance),
        DOM.td({className: 'product__delete'},
            DOM.button({className: 'btn delete-btn', onClick: this.deleteProduct}, this.props.deleteBtn)
        )
    )
  }
}

export default ProductItem;