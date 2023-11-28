import { Box, Container, Input, Typography, Button } from '@mui/material'
import React, { useState } from 'react'
import { useGetNewsQuery } from '../redux/slice'
import { Col, Row, Select, InputNumber, Card } from 'antd'
import { Link } from 'react-router-dom'
import newsImg from '../images/absolutvision-WYd_PkCa1BY-unsplash.jpg'
import moment from 'moment'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

const variant_titles = {
    initial : {
        y : '-100vh'
    },
    animate : {
        y : 0,
        transition : {
            delay : 0.1,
            type : 'spring',
            stiffness: 200,
        }
    }
}

const variant_input = {
    initial : {
        x : '-100vw'
    },
    animate : {
        x : 0,
        transition : {
            delay : 0.2,
            type : 'spring',
            stiffness : 400
        }
    }
}


const { Option } = Select
function News() {
    const [limitnews, setLimitNews] = useState(null)
    const [categoryNews, setCategoryNews] = useState('World')

    const { data, isLoading } = useGetNewsQuery({ category : categoryNews, number_news : limitnews })
    console.log(data)
    return (
        <Container style={{display : 'grid', gap:'40px', background : '#FFFBF5'}}>
            <motion.div 
                variants={variant_titles}
                initial='initial'
                animate='animate'
                className='title flex justify-around items-center mt-4'
            >
                <Link to={'/'}>
                    <Button variant='outlined'>
                        <ArrowLeftOutlined/>
                        See Weather
                    </Button>
                </Link>
                <Typography variant='h4' className='text-center'>News, Media APIs</Typography>
            </motion.div>
            <motion.div 
                className="input-container"
                variants={variant_input}
                initial='initial'
                animate='animate'
            >
                <Row gutter={30}>
                    <Col span={12} >
                        <Select
                            style={{width : '100%', height : '30px'}} 
                            value={categoryNews} 
                            onChange={(e) => setCategoryNews(e)}
                            placeholder='Search category news...'
                        >
                            <Option value='world'>World</Option>
                            <Option value='business'>Business</Option>
                            <Option value='entertainment'>Entertainment</Option>
                            <Option value='health'>Health</Option>
                            <Option value='sport'>Sport</Option>
                            <Option value='science_and_technology'>Science_and_Technology</Option>
                            <Option value='education'>Education</Option>
                            <Option value='travel'>Travel</Option>
                        </Select>
                    </Col>
                    <Col span={12}>
                        <InputNumber
                            placeholder='The number of news'
                            style={{width : '100%'}}
                            value={limitnews}
                            onChange={(e) => setLimitNews(e)}
                            type='number'
                        />
                    </Col>
                </Row>
            </motion.div>
            {
                !isLoading ? 
                    <Box className="news-container">
                        <Row gutter={6}>
                            {
                                data.map((item) => (
                                    <Col key={item._id} span={8}>
                                        <Link to={item.link} target='_blank'>
                                            <Card hoverable>
                                                <div className="image-container">
                                                    <img 
                                                        style={{borderRadius:'20px'}}
                                                        src={item.image ? item.image : newsImg} 
                                                        width={300} 
                                                        height={300}
                                                        alt="" 
                                                    />
                                                </div>
                                                <Typography variant='h6'>{item.title}</Typography>
                                                <p>Published at : <strong>{item.publishedAt}</strong></p>
                                                <p>Source name : <strong>{item.sourceName}</strong></p>
                                            </Card>
                                        </Link>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Box> : 
                    'loading....'
            }
        </Container>
    )
}

export default News