import { v4 as uuidv4 } from "uuid";

const sliderData = [
    {
        id: uuidv4(),
        title: "ჩვენ ვქმნით მომავალს! აღმოაჩინე თანამედროვე ტექნოლოგიები.",
        btn: "მეტი",
        btnLink: "/services/web-development",
    },
    {
        id: uuidv4(),
        title: "ჩვენი სამუშაო ხელოვნებაა.",
        btn: "მეტი",
        btnLink: "/services/design",
    },
    {
        id: uuidv4(),
        title: "გაამარტივეთ და გააიაფეთ თქვენი სამუშაო.",
        btn: "მეტი",
        btnLink: "/services/remote-work",
    },
];

export default sliderData;
