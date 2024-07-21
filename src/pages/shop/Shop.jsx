import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductItem from '../../component/productitem/ProductItem';
import { BiCategoryAlt } from "react-icons/bi";
import './shop.css'
import { CartContext } from '../../context/AppContext';
import Loading from '../../component/loading/Loading';

const Shop = () => {
    const {data,setData}=useContext(CartContext);
    const [filterData, setFilterData] = useState(data);
    const [search, setSerach] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setData(res.data);
                setFilterData(res.data)
                setIsLoading(false);
            });
    }, [])

    const changeFilter = (e) => {
        axios.get(`https://fakestoreapi.com/products/category/${e.target.value}`)
            .then(res => setFilterData(res.data));
    }


    return (
        <>
            <Container fluid>
                <div className="searchbox mt-3">
                    <input type="search" placeholder='search...' onChange={(e) => setSerach(e.target.value)} />
                </div>
                <Row>
                    <Col sm={3}>
                        <div className="category">
                            <div className="catTitle">
                                <BiCategoryAlt size='20px' color='purple' /> Category
                            </div>
                            <div className="catBody">
                                <ul className='list-unstyled'>
                                    <li><input type="radio" name="category" value='all' onChange={() => setFilterData(data)} /> <label>all</label></li>
                                    <li><input type="radio" name="category" value="women's clothing" onChange={(e) => changeFilter(e)} /> <label>women</label></li>
                                    <li><input type="radio" name="category" value="men's clothing" onChange={(e) => changeFilter(e)} /> <label>men</label></li>
                                    <li><input type="radio" name="category" value="electronics" onChange={(e) => changeFilter(e)} /> <label>electronics</label></li>
                                    <li><input type="radio" name="category" value="jewelery" onChange={(e) => changeFilter(e)} /> <label>jewelery</label></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Row className='g-4'>
                            {
                             isLoading?(<Loading />):filterData.filter(val => {
                                    if (search == '')
                                        return val;
                                    else if (val.title.toLowerCase().includes(search.toLowerCase()))
                                        return val;
                                }).map(
                                    product =>
                                        <ProductItem
                                            key={product.id}
                                            {...product} />
                                )
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Shop;
