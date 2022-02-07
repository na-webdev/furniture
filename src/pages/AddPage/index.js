import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import Button from "../../components/Button";
import { UserContext } from "../../App";
const AddWrapper = styled.section`
  button {
    width: 200px;
    background: #282A30;
    padding: 10px 20px;
    color: white;
    border-radius: 10px;
    border: none;
    outline: none;
  }
  input {
    display: block;
    min-width: 200px;
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #C9C9C9;
  }
`


const Add = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      price: '$'
    }
  });
  const navigate = useNavigate();
  const productContext = useContext(UserContext);
  let products = productContext.products;
  function goBack(e) {
    console.log('hello')
    e.preventDefault();
    navigate('/')
  }

  const onSubmit = data => {
    data['id'] = products.length;
    products[products.length] = data;
    productContext.changeProducts([...products]);
    navigate('/')
  }

  return (
    <AddWrapper>
      <h1 className='text-center main-title'>Qo'shish</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="addForm">
        <div className="row">
          <div className="col-md-6 mb-3">
            <input {...register("imgLink", { required: true })} type="text" placeholder="Mahsulot rasmi" />
          </div>
          <div className="col-md-6 mb-3">
            <input {...register("name", { required: true })} type="text" placeholder="Mahsulot nomi" />
          </div>
          <div className="col-md-6 mb-3">
            <input {...register("price", { required: true })} type="text" placeholder="Mahsulot narxi" />
          </div>
        </div>
      </form>
      <div className="d-flex flex-wrap align-items-center justify-content-center gap-1">
        <button onClick={(e) => { goBack(e) }}>Ortga qaytish</button>
        <button type="submit" form="addForm">Saqlash</button>
      </div>
    </AddWrapper>

  );
}

export default Add;