import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/model/model';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from "react-router-dom";
import Input from '../../components/UI/Input/Input';
import { Container, Row, Col } from 'react-bootstrap';
import linearCategories from '../../helpers/linearCategories';
import { useSelector, useDispatch } from 'react-redux';
import { createPage } from '../../actions/page.action';


const NewPage = (props) => {


    const renderCreatePageModal = () => {
        return (
                <h1>hiii</h1>   
            )
    }

    
 
    return (
       <Layout sidebar>
       page
       </Layout>
    )

};

export default NewPage ;
