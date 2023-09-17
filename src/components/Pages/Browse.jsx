import React, { useState, useEffect } from 'react';
import './styles.css';
const Browse = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/058dbada-3f7f-46c6-83d2-a3c5575b2c6a')
      .then((res) => res.json())
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <span>
        <h1 className='browse-text'>Browse Homes</h1>
        <p className='browser-text'>View your Dream Home</p>
      </span>
      <section id='section-center'>
        <div className='grid-container'>
          {data.map((item, index) => {
            return (
              <div className='grid-item' key={index}>
                <div>
                  <img
                    src={
                      'https://s3.us-west-1.wasabisys.com/redbuyers-main/properties/image-N6787038-1.jpg'
                    }
                    width={'300px'}
                    height={'180px'}
                  />
                  <h1>$ {item.list_price}</h1>
                  <p>{item.address}</p>
                  <hr></hr>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <p className='browser-text'>{item.bedrooms} Beds</p>
                    <p className='browser-text'>{item.bathrooms} Baths</p>
                    <p className='browser-text'>{item.garage_type} Garages</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Browse;