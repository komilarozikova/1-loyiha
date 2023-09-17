import React from 'react';
import contact from '../../img/contactt.png';
import '../Contact/Contact.css';


const Contact = () => {
  return (
    <div className='contact'>
       <div className="imagec">
       <img src={contact}  />
       </div>
       <h1>Свяжитесь мо мной</h1>
       <p>info@mysite.com | Телефон: +7 (945) 000-00-00</p>
       <form>
        <input type="text" placeholder="Имя" name="" id=""/>
        <input type="text" placeholder="Эл.почта" name="" id=""/>
        <input type="text" placeholder="Телефон" name="" id=""/>
        <textarea placeholder='Добавьте сообщение..' name="" id="" cols="30" rows="10"></textarea>
       </form>
       <button><a href="">Отправить</a></button>
</div>
  )
}

export default Contact
