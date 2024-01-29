import React from 'react'
import "./charts.css";
import { LineChart, Line, XAxis,CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Charts = ({title,data,dataKey}) => {
    return (
        <div className='charts'>
            <h3 className='chatTitle'>{title}</h3>
            <ResponsiveContainer width={"100%"} aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd' />
                    <Line type="monotone" dataKey={dataKey} stroke='#5550bd' />
                    <Tooltip/>
                    <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>
                </LineChart>
                
            </ResponsiveContainer>

        </div>
    )
}

export default Charts