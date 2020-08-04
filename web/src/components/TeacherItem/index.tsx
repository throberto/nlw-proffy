import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/56898810?s=460&v=4"
          alt="Thiago Roberto"
        />
        <div>
          <strong>Thiago Roberto</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies
        eu mauris id euismod. Donec commodo, orci non tincidunt placerat, arcu
        magna sollicitudin nunc, eget vestibulum ipsum ipsum in lacus. Vivamus
        eu ipsum turpis.
        <br />
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Sed nec massa ac purus pulvinar bibendum a vel
        lorem. Morbi a libero posuere, bibendum sapien quis, ullamcorper neque.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
