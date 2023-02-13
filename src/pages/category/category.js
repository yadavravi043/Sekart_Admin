import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, getAllCategory, updateCategories } from "../../actions";
import Input from "../../components/UI/Input/Input";
import Modal from "../../components/UI/model/model";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  IoCheckboxOutline,
  IoCheckboxSharp,
  IoChevronForward,
  IoChevronDown,
} from "react-icons/io5";

const Category = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState();
  const [categoryImage, setCategoryImage] = useState();
  const [parentCategoryId, setParentCategoryId] = useState();
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
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

    const form = new FormData();
    form.append("name", categoryName);
    form.append("categoryImage", categoryImage);
    form.append("parentId", parentCategoryId);
    dispatch(addCategory(form));
    setShow(false);
  };

  //recursive call to print category fron redux store
  const renderCategories = (categories) => {
    let myCategories = [];
    for (let category of categories) {
      myCategories.push(
        {
          label: category.name,
          value: category._id,
          children:
            category.children.length > 0 && renderCategories(category.children),
        }

        // <li key={category.name}>
        //   {category.name}
        //   {category.children.length > 0 ? (
        //     <ul>{renderCategories(category.children)}</ul>
        //   ) : null}
        // </li>
      );
    }
    return myCategories;
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        parentId: category.parentId,
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  const handleCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const updateCategory = () => {
    setUpdateCategoryModal(true);
    const categories = createCategoryList(category.categories);
    const checkedArray = [];
    const expandedArray = [];
    checked.length > 0 &&
      checked.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId == category.value
        );
        category && checkedArray.push(category);
      });
    expanded.length > 0 &&
      expanded.forEach((categoryId, index) => {
        const category = categories.find(
          (category, _index) => categoryId == category.value
        );
        category && expandedArray.push(category);
      });
      setExpandedArray(expandedArray);
      setCheckedArray(checkedArray);
    console.log({ checked, expanded, categories, checkedArray, expandedArray });
  };
  const handleCategoryInput=(key,value,index,type)=>{
         if(type== 'checked'){
            const updatedCheckedArray=checkedArray.map((item,_index)=>index==_index ?{...item,[key]:value}:item)
            setCheckedArray(updatedCheckedArray)
         }
         else if(type=='expanded'){
          const updatedExpandedArray=expandedArray.map((item,_index)=>index==_index ?{...item,[key]:value}:item)
            setCheckedArray(updatedExpandedArray)
         }
  }
  const updateCategoriesForm = () => {
    const form = new FormData();

    expandedArray.forEach((item, index) => {
        form.append('_id', item.value);
        form.append('name', item.name);
        form.append('parentId', item.parentId ? item.parentId : "");
        form.append('type', item.type);
    });
    checkedArray.forEach((item, index) => {
        form.append('_id', item.value);
        form.append('name', item.name);
        form.append('parentId', item.parentId ? item.parentId : "");
        form.append('type', item.type);
    });
    dispatch(updateCategories(form));
    setUpdateCategoryModal(false)
}
  const renderUpdateCategoriesModal=()=>{
    return(
       <Modal
       show={updateCategoryModal}
       handleClose={updateCategoriesForm}
       modalTitle={"update categories"}
       size="lg"
     >
       <Row>
         <Col>
           <h5>Expanded</h5>
         </Col>
       </Row>
       {
         expandedArray.length > 0 &&
         expandedArray.map((item, index) => (
           <Row key={index}>
             <Col>
               <Input
                 value={item.name}
                 placeholder="category name"
                 onChange={(e)=>handleCategoryInput('name',e.target.value,index,'expanded')}
               />
             </Col>
             <Col>
               <select
                 className="form-control"
                 value={item.parentId}
                 onChange={(e)=>handleCategoryInput('parentId',e.target.value,index,'expanded')}
               >
                 <option>Select Category</option>
                 {createCategoryList(category.categories).map((option) => (
                   <option key={option.value} value={option.value}>
                     {option.name}
                   </option>
                 ))}
               </select>
             </Col>

             <Col>
               <select>
                 <option value="">select type</option>
                 <option value="store">Store</option>
                 <option value="product">Product</option>
                 <option value="page">Page</option>
               </select>
             </Col>
           </Row>
         ))}
         <h5>Checked Categories</h5>
       {
         checkedArray.length > 0 &&
         checkedArray.map((item, index) => (
           <Row key={index}>
             <Col>
               <Input
                 value={item.name}
                 placeholder="category name"
                 onChange={(e)=>handleCategoryInput('name',e.target.value,index,'checked')}
               />
             </Col>
             <Col>
               <select
                 className="form-control"
                 value={item.parentId}
                 // onChange={(e) => setParentCategoryId(e.target.value)}
                 onChange={(e)=>handleCategoryInput('parentId',e.target.value,index,'checked')}
               >
                 <option>Select Category</option>
                 {createCategoryList(category.categories).map((option) => (
                   <option key={option.value} value={option.value}>
                     {option.name}
                   </option>
                 ))}
               </select>
             </Col>

             <Col>
               <select>
                 <option value="">select type</option>
                 <option value="store">Store</option>
                 <option value="product">Product</option>
                 <option value="page">Page</option>
               </select>
             </Col>
           </Row>
         ))}
       {/* <Input
         type="file"
         name="categoryImage"
         onChange={handleCategoryImage}
       />*/}
     </Modal>
    );
  }

  const renderAddCategoryModal=()=>{
    return(
      <Modal
      show={show}
      handleClose={handleClose}
      modalTitle={"add new category"}
    >
      <Input
        value={categoryName}
        placeholder="category name"
        onChange={(e) => setCategoryName(e.target.value)}
      />
      <select
        className="form-control"
        value={parentCategoryId}
        onChange={(e) => setParentCategoryId(e.target.value)}
      >
        <option>Select Category</option>
        {createCategoryList(category.categories).map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <Input
        type="file"
        name="categoryImage"
        onChange={handleCategoryImage}
      />
    </Modal>
    );
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
              {/*
            <ul>
              {renderCategories(category.categories)}
            
              {JSON.stringify(createCategoryList(category.categories))}
              </ul>
            */}

              <CheckboxTree
                nodes={renderCategories(category.categories)}
                checked={checked}
                expanded={expanded}
                onCheck={(checked) => setChecked(checked)}
                onExpand={(expanded) => setExpanded(expanded)}
                icons={{
                  uncheck: <IoCheckboxOutline />,
                  check: <IoCheckboxSharp />,
                  halfCheck: <IoCheckboxOutline />,
                  expandClose: <IoChevronForward />,
                  expandOpen: <IoChevronDown />,
                  expandAll: <span className="rct-icon rct-icon-expand-all" />,
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button style={{ margin: "10px" }}>Delete</Button>
              <Button onClick={updateCategory}>Edit</Button>
            </Col>
          </Row>
        </Container>
    
       {renderAddCategoryModal()}
       {renderUpdateCategoriesModal()}
      </Layout>
    </div>
  );
};
export default Category;
