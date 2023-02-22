import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/model/model";
import Layout from "../../components/Layout/Layout";
import Input from "../../components/UI/Input/Input";
import { Container, Row, Col } from "react-bootstrap";
import linearCategories from "../../helpers/linearCategories";
import { useSelector, useDispatch } from "react-redux";
import { createPage } from "../../actions/page.action";

const NewPage = (props) => {
  const [createModal, setCreateModal] = useState(false);
  const [title, setTitle] = useState("");
  const category = useSelector((state) => state.category);
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);


  useEffect(() => {
    setCategories(linearCategories(category.categories));
}, [category]);
//if category dependency is used above then it works as comp did mount
//it re render the comp whenever changed in category
  const renderCreatePageModal = () => {
    return (
      <Modal
        show={createModal}
        modalTitle={"Create New Page"}
        handleClose={() => setCreateModal(false)}
        // onSubmit={submitPageForm}
      >
        <Row>
          <Col>
            <Input
              type="select"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              //   options={categories}
              placeholder={"Select Category"}
            />
          </Col>
        </Row>
      </Modal>
    );
  };

  return (
      <Layout sidebar>
        {renderCreatePageModal()}
        <button onClick={(e) => setCreateModal(true)}>click</button>
      </Layout>
    
  );
};
export default NewPage