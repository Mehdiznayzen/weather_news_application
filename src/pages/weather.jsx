import React, { useState } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useGetWeatherQuery } from '../redux/slice'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'


// The varuant of the element
const variant_input_search = {
    initial : {
        y : "-100vh"
    },
    animate : {
        y : 0,
        transition : {
            delay: 0,
            type : 'spring',
            stifness : 700
        }
    }
}

const variant_weather_container = {
    initial : {
        x : '-100vw'
    },
    animate : {
        x : 0,
        transition : {
            delay : 0.4,
            type : 'spring',
            stifness : 700
        }
    },
}

const variantButton = {
    initial : {
        x : '100vw'
    },
    animate : {
        x : 0,
        transition : {
            delay : 0.7,
            type : 'spring',
            stifness : 700
        }
    }
}

function Weather() {
    const [cityName, setCityName] = useState('Casablanca')
    const { data, isLoading } = useGetWeatherQuery(cityName)

    return (
        <section className='section-weather'>
            <motion.div 
                className="input-search" 
                variants={variant_input_search}
                initial='initial'
                animate='animate'
            >
                <TextField 
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    className='input'
                    type='text' 
                    placeholder='Enter a city....'
                    variant='outlined'
                />
            </motion.div>
            {
                !isLoading 
                    ?
                    <>
                        <motion.div className="globale-weather" variants={variant_weather_container} initial='initial' animate='animate'>
                            <div className="icon">
                                <img 
                                    width={360}
                                    src={data?.current?.condition?.icon} 
                                    alt="" 
                                />
                            </div>
                            <div className="info">
                                <Typography variant='h6'>{data?.location?.country}</Typography>
                                <Typography variant='h2'>{data?.location?.name}</Typography>
                                <h4>{data?.location?.localtime}</h4>
                                <p><strong>Temperature_C : </strong>{data?.current?.temp_c}</p>
                                <p><strong>Temperature_F : </strong>{data?.current?.temp_f}</p>
                                <p><strong>Humidity : </strong>{data?.current?.humidity}</p>
                                <p><strong>Cloud : </strong>{data?.current?.cloud}</p>
                                <label htmlFor="">{data?.current?.condition?.text}</label>
                            </div>
                        </motion.div>
                        <motion.div className="btn-container" variants={variantButton} initial='initial' animate='animate'>
                            <Button variant='outlined' color='primary'>
                                <Link to={'/news'}>See news</Link>
                            </Button>
                        </motion.div>
                    </>
                    :
                    'Loading....'
            }
            
        </section>   
    )
}

export default Weather