import React from 'react'
import {data} from '../restApi.json'

const Menu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">POPULAR DISHES</h1>
                <p>Traditional foods are foods and dishes that are passed on through generations or which have been consumed for many generations.Traditional foods and dishes are traditional in nature, and may have a historic precedent in a national dish, regional cuisine or local cuisine. Traditional foods and beverages may be produced as homemade, by restaurants and small manufacturers, and by large food processing plant facilities.!</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                               
                               
                        </div>
                    ))
                }   
            </div>
        </div>
      </section>
    </>
  )
}

export default Menu