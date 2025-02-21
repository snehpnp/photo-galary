import { useEffect, useState } from "react";

const HtmlPage = () => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    fetch("/index.html")
      .then((res) => res.text())
      .then((data) => setHtmlContent(data));
  }, []);

  return (
    <>
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}

      <div className="container">
        <div className="carousel">

<div className="card" style={{ width: "70rem",height:"45rem",backgroundColor:"black" ,borderRadius:"10px"}}>

<iframe 
      src="http://127.0.0.1:5500/src/Galary/Magic.html" 
      width="100%" 
      height="1000rem" 
      style={{ border: "none" }}
      title="Embedded HTML Page"
    />  

</div>

        </div>
      </div>
    </>
  );
};

export default HtmlPage;
