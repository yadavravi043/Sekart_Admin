import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getAllCategory } from "../../actions";
import Input from "../../components/UI/Input/Input";
import Modal from "../../components/UI/model/model";
const Category = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState();
  const [categoryImage, setCategoryImage] = useState();
  const [parentCategoryId,setParentCategoryId] = useState();
  const category = useSelector((state) => state.category);
  useEffect(() => {
      if (!localStorage.getItem("user")) {
          navigate("/signin");
        }
    }, []);
    // useEffect(() => {
    //     dispatch(getAllCategory());
    // }, []);
    const handleShow = () => setShow(true);
    const handleClose = () => {
//    const cat={categoryName,categoryImage,parentCategoryId}
//    console.log("cat",cat)

     const form =new FormData()
     form.append('name',categoryName)
     form.append('categoryImage',categoryImage)
     form.append('parentId',parentCategoryId)
     dispatch(addCategory(form))
        setShow(false);
    }

  //recursive call to print category fron redux store
  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        <li key={category.name}>
          {category.name}
          {category.children.length > 0 ? (
            <ul>{renderCategories(category.children)}</ul>
          ) : null}
        </li>
      );
    }
    return myCategories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  const handleCategoryImage=(e)=>{
  setCategoryImage(e.target.files[0])
  }
  return (
    <div>
      <Layout sidebar>
        <Container>
          <Row>
            <Col md={12}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Category</h3>
                <Button onClick={handleShow}>Add</Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <ul>
                {renderCategories(category.categories)}
                {/*
            
              {JSON.stringify(createCategoryList(category.categories))}
            */}
              </ul>
            </Col>
          </Row>
        </Container>
        <Modal 
        show={show} 
        handleClose={handleClose}
        modalTitle={'add new category'}>
        <Input
        value={categoryName}
        placeholder="category name"
        onChange={(e) => setCategoryName(e.target.value)}
        />
      <select className="form-control"
      value={parentCategoryId}
      onChange={(e)=>setParentCategoryId(e.target.value)}
       >
        <option >Select Category</option>
        {createCategoryList(category.categories).map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <Input type="file" name="categoryImage" onChange={handleCategoryImage}/>
        </Modal>
      </Layout>
    </div>
  );
};

export default Category;
