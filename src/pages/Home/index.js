import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Button from '../../components/Button';
import Card from '../../components/Card';
import productsList from '../../data';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const HomeWrapper = styled.section`
  .btnAdd {
  background: transparent;
  padding: 4px 12px;
  outline: none;
  border: 1px solid gray;
  color: gray;
  border-radius: 10px;
  &:hover {
    color: black;
    border: 1px solid black;
  }
  }
`

const Home = () => {
  const productContext = useContext(UserContext);
  let productsList = productContext.products;
  const [products, setProducts] = useState(productsList);
  const navigate = useNavigate();

  function add() {
    navigate('/add');
  }
  function deleteItem(id) {
    productsList.map((product) => {
      if (product.id == id) productsList.splice(productsList.indexOf(product), 1);
    })
    productContext.changeProducts([...productsList]);
    setProducts([...productsList])
  }
  return (
    <HomeWrapper>
      <h1 className='text-center main-title'>Mahsulotlar</h1>
      <p className='text-center mb-5'>
        <button className='btnAdd' onClick={add}><FontAwesomeIcon icon={faPlus} /></button>
      </p>
      <div className="row">
        {
          products.map((product) => {
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 mb-3' key={product.id}>
                <Card
                  productId={product.id}
                  productName={product.name}
                  productPrice={product.price}
                  imgLink={product.imgLink}
                  delete={(() => deleteItem(product.id))}
                />
              </div>
            )
          })
        }
      </div>
    </HomeWrapper>
  );
}

export default Home;