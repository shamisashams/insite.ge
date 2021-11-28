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
          <div className="title">ვაკანსიები</div>
          <p className="op06">
              ჩვენ ყოველთვის ვეძებთ ნიჭიერ ადამიანებს! თუ ციფრული სამყაროში მუშაობა არის თქვენი მოწოდება, მაშინ თქვენ სწორ ადგილას ხართ! ჩვენთან გელოდებათ საინტერესო ამოცანები, მეგობრული გუნდი და პროფესიული განვითარება! არსებული ვაკანსიების სანახავად გადახედეთ ვაკანსიების ჩამონათვალს.
          </p>
          <Button2 href="/vacancies" text="მეტი" />
        </div>
      </div>
      <div className="column right">
        <div className="row text">
          <div className="title">სიახლეები</div>
          <p className="op06">
              არ გამოტოვოთ ყველაზე მნიშვნელოვანი სიახლეები ციფრული სამყაროში! გაეცანით თქვენს ირგვლივ განვითარებულ მოვლენებს. თქვენ ყოველთვის იპოვით საინტერესო მასალას ჩვენს სიახლეებში..
          </p>
          <Button2 href="/news" text="მეტი" />
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
