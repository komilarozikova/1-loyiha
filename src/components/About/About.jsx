import React from 'react'
import '../About/About.css'
import mainimg from '../../img/overtoun-jenda-ohjackie16.jpg'

const About = () => {
  return (
    <div>
      <div className="mainimg">
        <img src={mainimg} alt="" />
      </div>

      <div className="maintext">
        <h1>Обо мне</h1>
        <p>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Чтобы удалить этот текст, нажмите один раз и выберите значок «Корзина».</p>
      </div>
    </div>
  )
}

export default About
