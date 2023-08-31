import React, { useState, useEffect } from 'react';

export default function TechCards() {
    const [containers, setContainers] = useState([]);

    const fetchData = () =>{
        fetch("http://localhost:8080/containers")
            .then(response => {
                return response.json();
            }).then(data =>{
                setContainers(data)
        })
    }

    useEffect(() =>{
        fetchData()
    },[])

    return (
        <div>
            <h1>Container List sss</h1>
            <ul>
                {containers.map(container => (
                    <li key={container.id}>{container.title}</li>
                ))}
            </ul>
        </div>
    );
}
