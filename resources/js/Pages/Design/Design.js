import React from "react";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import InLink from "../../Components/InLink";
import "./Design.css";
import Title1 from "../../Components/Title1";
import Process from "./Process/Process";
import Form from "../../Components/Form/Form";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from "react-document-meta";

const Design = () => {
    const meta = Meta(
        "Insite – UI/UX დიზაინი",
        "ვებსაიტის დიზაინი, ვებსაიტის დიზაინის შექმნა, საიტის დიზაინი, მობილური აპლიკაციის დიზაინი, დიზაინი ანდროიდისთვის, დიზაინი ios-ისთვის, android დიზაინი",
        "შეუკვეთეთ უნიკალური დიზაინი თქვენი ვებსაიტის ან მობილური აპლიკაციისთვის. ჩვენი ექსპერტები დაგეხმარებიან იდეალური დიზაინის შექმნაში არსებული UI/UX ნორმების გათვალისწინებით."
    );

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="design_page">
                    <div className="showcase ">
                        <div className="wrapper flex">
                            <Showcase2
                                title="UI/UX დეველოპმენტი"
                                subtitle="შეინარჩუნეთ კრეატიულობა ბრენდული ერთგვაროვნების მიუხედავად"
                                para1="ჩვენი კომპანია გთავაზობთ UI/UX დიზაინის შექმნისა და განვითარების სერვისს. ამ მიმართულების მთავარი მიზანი არის. ამ მიმართულების მთავარი მიზანია მომხმარებელთა კმაყოფილების გაზრდა საინტერესო და კრეატიული გადაწყვეტილებებით. UX დიზაინერები წამყვან როლს ასრულებენ ხარისხიანი საბოლოო პროდუქტის მიწოდებაში. ამიტომ ჩვენ ყველაფერს ვაკეთებთ იმისათვის, რომ შევქმნათ პროგრამები, რომლებიც ხიბლავს მომხმარებელს და მოუწოდებს მოქმედებისკენ. ჩვენი UI & UX მიმართულება ეხმარება უკვე არსებულ ბიზნესებს გაფართოვებაში, ხოლო სტარტაპებს თავის გამოჩენაში და მიიპყრონ ყურადღება. ჩვენ გთავაზობთ დიზაინის გადაწყვეტილებებს, რომლებიც იზიდავს მომხმარებლებს და ხდის თქვენს იდეას ცნობადს."
                                para2="UI/UX მიმართულება ჩვენი სერვისის ფარგლებში არ არის ცალკე მდგომი საგანი. ის მჭიდროდ არის ინტეგრირებული ბიზნესის ანალიზთან და მოთხოვნების ანალიზთან. ანალიტიკოსი დგამს პირველ ნაბიჯს UI/UX დიზაინერებისთვის."
                                para3="UI / UX სერვისების ღირებულება მეტწილად დამოკიდებულია აპლიკაციაში გვერდების და სხვადასხვა გრაფიკული გადაწყვეტილებების რაოდენობაზე და კლიენტის სპეციფიურ მოთხოვნებზე. UI/UX სერვისი საშუალო ღირებულების გამოსათვლელად, შეგიძლიათ გამოიყენოთ ჩვენი კალკულატორი ან შეგიძლიათ მოგვწეროთ და კომენტარების განყოფილებაში მიუთითოთ ის ფუნქციები, რომლებიც გსურთ რომ იხილოთ."
                                href="/contact"
                            />
                            <div className="expertise">
                                <h6>ვიზუალური დიზაინი მოიცავს:</h6>
                                <div className="grid">
                                    <InLink text="მედია" />
                                    <InLink text="მაკეტები" />
                                    <InLink text="გადასვლები გვერდებს შორის" />
                                    <InLink text="ანიმირებული გრაფიკის შაბლონები" />
                                    <InLink text="ტიპოგრაფია - შრიფტები, სტილები, სათაურები და ტექსტი" />
                                    <InLink text="სამომხმარებლო ინტერფეისის ჭკვიანი ელემენტები" />
                                </div>
                            </div>
                        </div>
                        <img className="bg" src="/images/design/1.png" alt="" />
                    </div>
                    <div className="process wrapper">
                        <Title1 head="იდეალური დიზაინის შექმნა" />
                        <div className="process_body">
                            <img
                                className="bg"
                                src="/images/design/2.png"
                                alt=""
                            />
                            <Process
                                mainClass="process_item left a"
                                headClass="head green"
                                head="ახალი პროექტის გაშვება"
                                description="შექმენით დიზაინი ნულიდან თუ გააუმჯობესეთ არსებული? UX დიზაინი არის პირველი ნაბიჯი, ხოლო UI - ვიზუალიზაცია. ეს ნაბიჯები დაგეხმარებათ გაიგოთ, როგორ გამოიყურება და ფუნქციონირებს მომავალი პროექტი."
                            />
                            <Process
                                mainClass="process_item right b"
                                headClass="head blue"
                                head="გარკვეული სექციები გაუმჯობესება"
                                description="არის შემთხვევები, როდესაც საიტის ზოგიერთი ნაწილი საჭიროებს შესწორებას ან განახლებას. უფრო მეტიც, შეიძლება საჭირო გახდეს ახალი გადაწყვეტილებების დანერგვა სწორად ფუნქციონირებისათვის. ჩვენი სერვისი ითვალისწინებს ყველა ამ პუნქტს და გვთავაზობთ პროექტის გაუმჯობესების ახალ გზებს."
                            />
                            <Process
                                mainClass="process_item left c"
                                headClass="head purple"
                                head="არსებული პროექტის სრული რედიზაინი"
                                description="არის სიტუაციები, როდესაც მომხმარებლები უკმაყოფილონი არიან მომსახურებით, რაც იწვევს უარყოფით უკუგებას. ამიტომ პროდუქტის მოდიფიკაცია ახლის შექმნის ტოლია. ერთადერთი განსხვავება ისაა, რომ დეველოპერები ითვალისწინებენ მომხმარებლების ამჟამინდელ პრეფერენციებს და წარმოადგენენ შესაბამის პროდუქტს."
                            />
                            <Process
                                mainClass="process_item right d"
                                headClass="head orange"
                                head="კლიენტთა ახალი ჯგუფი"
                                description="წარმოიდგინეთ, რომ გყავთ ახალი კლიენტები, მაგრამ საიტის დიზაინი ან მისი ფუნქციები მათთვის ძალიან რთულად აღსაქმელია. ეს ნიშნავს, რომ თქვენ უნდა შეცვალოთ ინტერფეისი ან სხვადასხვა კომპონენტები. აქ UI/UX პროექტები შეიძლება გახდეს იდეალური გადაწყვეტილება როგორც ფინანსური რესურსების დასაზოგავად ასევე სიახლის შესათავაზებელად თქვენი მომხმარებლებისთვის."
                            />
                        </div>
                        <Form title="დაგვიტოვეთ შეტყობინება" />
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Design;
