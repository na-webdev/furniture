import styled from "styled-components";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { faArrowAltCircleLeft, faSave } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { UserContext } from "../../App";

const EditWrapper = styled.section`
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


const Edit = () => {
  const url = new URL(window.location.href);
  const Id = parseInt(url.searchParams.get("group_Id"));
  const productContext = useContext(UserContext);
  let productsList = productContext.products;
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      imgLink: productsList[Id].imgLink,
      name: productsList[Id].name,
      price: productsList[Id].price,
    }
  }
  );
  const navigate = useNavigate();

  const onSubmit = data => {
    data['id'] = Id;
    productsList[Id] = data;
    productContext.changeProducts([...productsList]);
    console.log(data);
    navigate('/');
  };

  function goBack(e) {
    console.log('hello')
    e.preventDefault();
    navigate('/');
  }

  return (
    <EditWrapper>
      <h1 className='text-center main-title'>O’zgartirish</h1>
      <form onSubmit={handleSubmit(onSubmit)} id="editForm">
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
        <button type="submit" form="editForm">Saqlash</button>
      </div>
    </EditWrapper>

  );
}

export default Edit;