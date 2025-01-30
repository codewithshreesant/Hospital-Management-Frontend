
import React from 'react' 
import TopComp from '../TopComp'
import ContactForm from '../ContactForm'
import HomeNews from '../HomeNews'

function Contact() {
  return (
    <div className='flex flex-col gap-[4rem]'>
      <TopComp name='Contacts' path='/images/top.jpg' desc='Our Contacts'/>
      <div className='flex justify-center'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31713620462!2d85.28493288341947!3d27.708954252167064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1738076550322!5m2!1sen!2snp" width="600" height="450" style={{border:0, width:'80vw'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <ContactForm />
      <HomeNews />
    </div>
  )
}


export default Contact 