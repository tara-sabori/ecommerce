import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Hero from '../../component/hero/Hero';
import TabList from '../../component/tablist/TabList';
import SimpleCard from '../../component/simplecard/SimpleCard';
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { MdOutlineDesignServices } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { IoMdWifi } from "react-icons/io";

const Home = () => {
    const items = [
        {
            icon: <BiTransferAlt size='27px'/>,
            title: 'Initial Contact',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <MdOutlineConnectWithoutContact size='27px' />,
            title: 'Contracting',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <HiOutlineArrowRightOnRectangle size='27px' />,
            title: 'Fast Prototyping',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <IoMdWifi size='27px' />,
            title: 'Discovery Session',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <MdOutlineDesignServices size='27px' />,
            title: 'Design Phase',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        },
        {
            icon: <WiStars  size='27px'/>,
            title: 'Develop & Listing for sale',
            desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        }
    ]
    return (
        <>
            <Hero />
            <Container>
                <TabList />
                <div className='text-md-center py-5'>
                    <h3 className='text-center'>how simple works</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />Odio reiciendis impedit laudantium temporibus praesentium doloremque quod. Quos velit non provident.</p>
                    <Row xs={1} md={2} lg={3} className='g-3'>
                        {
                            items.map(item=><SimpleCard  {...item} />)
                        }
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Home;

