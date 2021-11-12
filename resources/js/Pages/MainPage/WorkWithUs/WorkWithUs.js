import React from "react";
import "./WorkWithUs.css";
import Button2 from "../../../Components/Button2/Button2";

const WorkWithUs = () => {
  return (
    <div className="blocks flex">
      <div className="column left">
        <div
          className="row image"
          style={{
            background: "url(images/home/work/1.png) ",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="row text">
          <div className="title">Вакансии</div>
          <p className="op06">
              Нам всегда нужны таланты! Если цифровая сфера — это твоё призвание, тогда ты в правильном месте! Интересные задачи, дружный коллектив и профессиональное развитие жду тебя! Загляни в список вакансий дабы посмотреть доступные вакансии.
          </p>
          <Button2 href="/vacancies" text="Learn more" />
        </div>
      </div>
      <div className="column right">
        <div className="row text">
          <div className="title">Новости и События</div>
          <p className="op06">
              Не пропусти самые важные новости в цифровой сфере! Будь в курсе окружающих тебя событий. В нашей новостной ленте ты всегда найдёшь что почитать.
          </p>
          <Button2 href="/news" text="Learn more" />
        </div>
        <div
          className="row image"
          style={{
            background: "url(images/home/work/2.png) ",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default WorkWithUs;
