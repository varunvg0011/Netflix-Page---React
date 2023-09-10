import {stockData, fruit, episodeData} from "./data";
import React,{Component, useState} from 'react';



class LearnMapping extends React.Component{
    constructor(){
        super()


    }

    render(){
        return <div>
            <table>
                <thead>
                    <th>
                        Company Name
                    </th>
                    <th>
                        Ticker Name
                    </th>
                    <th>
                        Stock Price
                    </th>
                    <th>
                        TimeElapsed
                    </th>

                </thead>
                <tbody>
                    {
                    stockData.map(ele=>{
                        return <tr>
                            <td>{ele.company}</td>
                            <td>{ele.ticker}</td>
                            <td>{ele.stockPrice}</td>
                            <td>{ele.timeElapsed}</td>
                        </tr>
                    })
                    }
                </tbody>
            </table>

            <div>
                {fruit.map(ele=>{
                    return <p>{ele}</p>
                })}
            </div>

            <div>
                <table>
                    <thead>
                        <th>
                            ID
                        </th>
                        <th>
                            URL
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            Season
                        </th>
                        <th>
                            Number
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Airdate
                        </th>
                        <th>
                            Airstamp
                        </th>
                        <th>
                            runtime
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Summary
                        </th>


                    </thead>
                    <tbody>                        
                            <tr>
                                <td>{episodeData["id"]}</td>   
                                <td>{episodeData["url"]}</td>                             
                            </tr>
                    </tbody>
                </table>

            </div>
        </div>
        
    }
}


export default LearnMapping