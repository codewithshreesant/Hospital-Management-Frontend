
import React, { useState } from 'react'
import Point from './Point';


const ServiceDetails = ({ title, description, showCheckUp, showBloodBank, showTesting, showCardiogram }) => {

  // console.log("title ", title);
  switch (title) {
    case "Free Checkup":
      console.log("showCheckup inside  switch ", showCheckUp);
      {
        return showCheckUp &&
          <div>
            <h1 className='font-semibold text-3xl'>{title}</h1>
            <p className='text-[1.1rem] text-justify h-[60vh] overflow-hidden'>{description}</p>
          </div>
      }
    case "DNA Testing":
      {
        return showTesting &&
          <div>
            <h1 className='font-semibold text-3xl'>{title}</h1>
            <p className='text-[1.1rem] text-justify h-[60vh] overflow-hidden'>{description}</p>
          </div>
      }
    case "Blood Bank":
      {
        return showBloodBank &&
          <div>
            <h1 className='font-semibold text-3xl'>{title}</h1>
            <p className='text-[1.1rem] text-justify h-[60vh] overflow-hidden'>{description}</p>
          </div>
      }
      case "Cardiogram":
        {
          return showCardiogram &&
            <div>
              <h1 className='font-semibold text-3xl'>{title}</h1>
              <p className='text-[1.1rem] text-justify h-[60vh] overflow-hidden'>{description}</p>
            </div>
        }
      default:
        return null
  }
}

function HomeServices() {

  let [showCheckUp, setShowCheckUp] = useState(true);
  let [showTesting, setShowTesting] = useState(false);
  let [showBloodBank, setShowBloodBank] = useState(false);
  let [showCardiogram, setShowCardiogram] = useState(false);

  const servicesData = [
    {
      title: 'Free Checkup',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptate quibusdam dicta ad corrupti ullam fugit atque veritatis ipsum error? Autem fugiat perspiciatis qui tempora porro quisquam? Accusamus earum modi sequi odio quaerat provident inventore numquam est doloribus obcaecati cumque deleniti, placeat soluta recusandae ea harum eligendi consequatur dicta voluptas facere delectus excepturi quisquam. Eum cum minus et, culpa laboriosam mollitia dolor natus pariatur animi exercitationem quaerat at laborum ab nulla incidunt error, quam perferendis veniam expedita nisi. Ut, aut recusandae. Nam rerum, quod, dolore vero quam commodi, accusamus dolorem optio perferendis sapiente unde quaerat hic a sed neque officia.',
      icon: '', // Replace with actual icon path
      iconBgColor: 'bg-blue-500',
    },
    {
      title: 'DNA Testing',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptate quibusdam dicta ad corrupti ullam fugit atque veritatis ipsum error? Autem fugiat perspiciatis qui tempora porro quisquam? Accusamus earum modi sequi odio quaerat provident inventore numquam est doloribus obcaecati cumque deleniti, placeat soluta recusandae ea harum eligendi consequatur dicta voluptas facere delectus excepturi quisquam. Eum cum minus et, culpa laboriosam mollitia dolor natus pariatur animi exercitationem quaerat at laborum ab nulla incidunt error, quam perferendis veniam expedita nisi. Ut, aut recusandae. Nam rerum, quod, dolore vero quam commodi, accusamus dolorem optio perferendis sapiente unde quaerat hic a sed neque officia.',
      icon: '', // Replace with actual icon path
      iconBgColor: 'bg-green-500',
    },
    {
      title: 'Blood Bank',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptate quibusdam dicta ad corrupti ullam fugit atque veritatis ipsum error? Autem fugiat perspiciatis qui tempora porro quisquam? Accusamus earum modi sequi odio quaerat provident inventore numquam est doloribus obcaecati cumque deleniti, placeat soluta recusandae ea harum eligendi consequatur dicta voluptas facere delectus excepturi quisquam. Eum cum minus et, culpa laboriosam mollitia dolor natus pariatur animi exercitationem quaerat at laborum ab nulla incidunt error, quam perferendis veniam expedita nisi. Ut, aut recusandae. Nam rerum, quod, dolore vero quam commodi, accusamus dolorem optio perferendis sapiente unde quaerat hic a sed neque officia.',
      icon: '', // Replace with actual icon path
      iconBgColor: 'bg-red-500',
    },
    {
      title: 'Cardiogram',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero voluptate quibusdam dicta ad corrupti ullam fugit atque veritatis ipsum error? Autem fugiat perspiciatis qui tempora porro quisquam? Accusamus earum modi sequi odio quaerat provident inventore numquam est doloribus obcaecati cumque deleniti, placeat soluta recusandae ea harum eligendi consequatur dicta voluptas facere delectus excepturi quisquam. Eum cum minus et, culpa laboriosam mollitia dolor natus pariatur animi exercitationem quaerat at laborum ab nulla incidunt error, quam perferendis veniam expedita nisi. Ut, aut recusandae. Nam rerum, quod, dolore vero quam commodi, accusamus dolorem optio perferendis sapiente unde quaerat hic a sed neque officia.',
      icon: '', // Replace with actual icon path
      iconBgColor: 'bg-red-500',
    },
  ];

  const handleCheckup = ()=>{
    setShowCheckUp(!showCheckUp);
    setShowBloodBank(false);
    setShowTesting(false);
    setShowCardiogram(false);
  }

  const handleTesting = ()=>{
    setShowTesting(!showTesting);
    setShowCheckUp(false);
    setShowBloodBank(false);
    setShowCardiogram(false);
  }

  const handleBloodBank = ()=>{
    setShowBloodBank(!showBloodBank);
    setShowTesting(false);
    setShowCheckUp(false);
    setShowCardiogram(false);
  }

  const handleCardiogram = ()=>{
    setShowCardiogram(!showCardiogram);
    setShowCheckUp(false);
    setShowTesting(false);
    setShowBloodBank(false);
  }

  return (
    <div className='flex flex-col items-center gap-[5rem] my-[4rem]'>
      <div className='flex flex-col items-center'>
        <p className='uppercase font-bold text-blue-400 text-[1.2rem] tracking-wider'>care you can believe in</p>
        <h1 className='capitalize text-3xl font-semibold text-[#092e6b]'>our services</h1>
      </div>
      <div className=' w-[60vw] flex gap-[5rem]'>
        <div className='flex flex-col shadow-lg bg-white'>
          <button onClick={handleCheckup} className={showCheckUp ? 'checkup' : 'px-[3rem] py-[3rem]'}>Free Checkup</button>
          <button onClick={handleTesting} className={showTesting ? 'testing' : 'px-[3rem] py-[3rem]'}>DNA Testing</button>
          <button onClick={handleBloodBank} className={showBloodBank ? 'bloodbank' : 'px-[3rem] py-[3rem]'}>Blood Bank</button>
          <button onClick={handleCardiogram} className={showCardiogram ? 'cardiogram' : 'px-[3rem] py-[3rem]'}>Cardiogram</button>
          <button className='px-[3rem] bg-[#092e6b] text-white rounded'>View All</button>
        </div>
        <div className='flex flex-col gap-[2rem]'>
        <Point />
          {
            servicesData.map((service, index) => {
              return <ServiceDetails key={index} {...service} showBloodBank={showBloodBank} showTesting={showTesting} showCheckUp={showCheckUp} showCardiogram={showCardiogram} />
            })
          }
        </div>
      </div>
      <style jsx>
        {`
          .checkup {
            background-color: #092e6b;
            padding:3rem 3rem;
            color:white;
          }
          .testing {
            background-color: #092e6b;
            padding:3rem 3rem;
            color:white;
          }
          .bloodbank {
            background-color: #092e6b;
            padding:3rem 3rem;
            color:white;
          }
          .cardiogram{
            background-color: #092e6b;
            padding:3rem 3rem;
            color:white;
          }
        `}
      </style>
    </div>
  )
}

export default HomeServices


