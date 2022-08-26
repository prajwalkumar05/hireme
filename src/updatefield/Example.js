import React, { useState } from "react";

const Example = ({name,content}) => {
  const [change, setChange] = useState(true);
  const [details, setDetails] = useState({
    industry: "prajwal",
    Headquatars: "email.com",
    Headquatars: "email.com",
    WebsiteLink: "email.com",
    Benifits: "email.com",
    specialities: "email.com",
  });
  console.log(change);


//   const { name, email } = details;

  const onSubmit = () => {
    console.log("run");
  };

  const arr = [
    {
      name: "overview",
      content:
        "computing, computer software, quantum computing, e-commerce, artificial intelligence,[9] and consumer electronics. It has been referred to as the most powerful company in the world and one of the world's most valuable brands due to its market dominance, data collection, and technological advantages in the area of artificial intelligence.[11][12][13] It is considered one of the Big Five American information technology companies, alongside Amazon, Apple, Meta, and Microsoft.",
    },
    { name: "indusrty", content: "indusrty" },
    { name: "hedquatars", content: "sagar karnataka" },
    { name: "specialities", content: "www.example.com" },
    { name: "benifits", content: "coffe,movies,money,gym" },
    { name: "work type", content: "offline" },
  ];

  const onChange = (e) => {
    setDetails((p) => ({
      ...p,
      [e.target.id]: e.target.value,
    }));
  };
  return (
    <>
      <>
        <h6
          style={{fontSize: "18px", fontWeight: 700, padding: "5px 0px 15px 0px" }}
        >
          {name}
        </h6>
        <input
        style={{fontSize:"16px",width:"100%"}}
          id="name"
          onChange={onChange}
          className={!change ? "new" : "newone"}
          disabled={!change}
          type="text"
          value={content}
        />
      </>
      
    </>
  );
};

export default Example;
