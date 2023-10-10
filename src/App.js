import React, { useEffect, useState } from "react";
import './App.css'


const App = () => {
    const [data, setData] = useState([])

    

    useEffect(() => {
        // fetch('1234556789').then((el) => el.json()).then(el => setData(el))
        setData([
              {
                "header": "Заголовок 1",
                "options": ["элемент списка 1", "элемент списка 2", "элемент списка 3"],
                "text": "какой-то текст 1 текст какой-то 1 какой-то"
              }
            ])
    }, [])

    console.log(data)

    return <>
            {data.map(el => (
                <div className="container">
                    <h1>{el.header}</h1>
                    <ul>{el.options.map(item => <li key={el.header}>{item}</li>)}</ul>
                    <p>{el.text}</p>
                </div>
            ))}
            {data.map(el => (
                <div className="container">
                    <h1>{el.header}</h1>
                    <ul>{el.options.map(item => <li key={el.header}>{item}</li>)}</ul>
                    <p>{el.text}</p>
                </div>
            ))}
            {data.map(el => (
                <div className="container">
                    <h1>{el.header}</h1>
                    <ul>{el.options.map(item => <li key={el.header}>{item}</li>)}</ul>
                    <p>{el.text}</p>
                </div>
            ))}
    </>
}

export default App