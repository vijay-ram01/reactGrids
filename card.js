import React from 'react'
import './card.css'

const Card = () => {

    const cardData1 = [
        {
            "id": "1",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
            "title": "Fresh Graduate or IT professional Looking for a..",
            "author": "Amran Ahamed",
            "date": "05 Jul 2019",
            "description": "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology.."
        },
        {
            "id": "2",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
            "title": "Introducing you all to EdYoda - www.edyoda.com",
            "author": "Amran Ahamed",
            "date": "05 Jul 2019",
            "description": "Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.."
        },
        {
            "id": "3",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
            "title": "From identity crisis to the Success Story - The",
            "author": "Kalyan Mahalingam",
            "date": "05 Jul 2019",
            "description": "DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in.."
        }
    ];

    const cardData2 = [
        {
            "id": "4",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
            "title": "Typical day of Data Scientist - An insider story!",
            "author": "Saurav Ghosh",
            "date": "06 Jul 2020",
            "description": "I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that are emerging in the world."
        },
        {
            "id": "5",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
            "title": "Amazon Web Services (AWS) Cloud Day -",
            "author": "Kalyan Mahalingam",
            "date": "05 Jul 2019",
            "description": "It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so..."
        },
        {
            "id": "6",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
            "title": "edYoda Meetup #01 : A Date with Cloud",
            "author": "Ashish Pandey",
            "date": "05 Jul 2019",
            "description": "I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by.."
        }
    ];
    const cardData3 = [
        {
            "id": "1",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
            "title": "Fresh Graduate or IT professional Looking for a..",
            "author": "Amran Ahamed",
            "date": "05 Jul 2019",
            "description": "If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to assess technology.."
        },
        {
            "id": "2",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg",
            "title": "Introducing you all to EdYoda - www.edyoda.com",
            "author": "Amran Ahamed",
            "date": "05 Jul 2019",
            "description": "Really ecstatic and immensely proud to introduce you all to our latest attempt of adding value and making an impact to the world we are a part of.."
        },
        {
            "id": "3",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg",
            "title": "From identity crisis to the Success Story - The",
            "author": "Kalyan Mahalingam",
            "date": "05 Jul 2019",
            "description": "DevOps is a paradigm shift in the way how software products are being built in the modern day Information Technology (IT) organizations. It is becoming the de-facto component in.."
        }
    ];

    const cardData4 = [
        {
            "id": "4",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg",
            "title": "Typical day of Data Scientist - An insider story!",
            "author": "Saurav Ghosh",
            "date": "06 Jul 2020",
            "description": "I’ve been a Data Scientist for three years now and I can only say that Chris Lynch was right - “ Big Data and Data Science are the foundation of all the trends that are emerging in the world."
        },
        {
            "id": "5",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg",
            "title": "Amazon Web Services (AWS) Cloud Day -",
            "author": "Kalyan Mahalingam",
            "date": "05 Jul 2019",
            "description": "It was indeed a hectic day with back to back session sandwiched by good food and tea (on a lighter note, need to investigate the tactics behind the 5-star hotels keeping the plates so..."
        },
        {
            "id": "6",
            "img": "https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg",
            "title": "edYoda Meetup #01 : A Date with Cloud",
            "author": "Ashish Pandey",
            "date": "05 Jul 2019",
            "description": "I recently had the opportunity to lead the initiative to organize the first Cloud meetup for edYoda. Here, I recount my experience in organizing the very first in the series of meetups planned by.."
        }
    ];

    const cardStructure = (props) => {
        return (
        <a className="card">
    
        <div className="crad-image">
        <img src={props.img} alt="card1" />
        </div>
    
        <div className="card-details">
            <h3 className="card-title">{props.title}</h3>
            <p className="author">{props.author}
            <span className="date"> | {props.date}</span>
            </p>
            <p className="description">{props.description}</p>
        </div>
            
        </a>
        );
    }


    return (
        <div>
            <div className="cards-container">
            {cardData1.map((data) => cardStructure(data))}
            </div>
            <div className="cards-container">
            {cardData2.map((data) => cardStructure(data))}
            </div>
            <div className="cards-container">
            {cardData3.map((data) => cardStructure(data))}
            </div>
            <div className="cards-container">
            {cardData4.map((data) => cardStructure(data))}
            </div>
        </div>
        
    );
}

export default Card;    