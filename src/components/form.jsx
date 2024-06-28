import React, { useState } from "react";
import { useRef } from 'react';
import {useReactToPrint} from "react-to-print";
import "./style1.css"; // Import your CSS file here
import gandhiLogo from "./gandhi.jpeg";
function GovernmentForm() {
  const [formData, setFormData] = useState({
    gramPanchayat: "पिंपळस",
    taluka: "निफाड",
    district: "नाशिक",
    ownerName: "अभयकुमार माणिकचंद गांधी",
    wifeName: "लता अभयकुमार गांधी",
    mobile: "९८७६५४३२१०",
    holderName: "स्वतः",
    aadharNumber: "११२२-३३४४-५५६६",
    female: "02",
    male:"02",
    handicap:"00",
    milakatNumber: "१०७",
    surveyNumber: "००",
    wardNumber: "०",
    plotNumber: "४५",
    groupNumber: "गावठाण",
    roadName: "राम मंदिर शेजारी (गाव  रस्ता)",
    occupation: "स्वतः",
    landType: "गावठाण /गायरान /सार्वजनिक प्रशासकीय विभाग",
    milakatPrakar: "निवासी",
    sauchalay: "आहे /नाही ",
    nalConnection: "आहे /नाही ",
    gasConnection: "आहे /नाही ",
    bijConnection: "आहे /नाही ",
    // Add more form fields as needed
  });
  const [tableData, setTableData] = useState([
    {
      specification:"मालमत्तेचे वर्णन",
      description: "दगड वीट माती बांधकाम",
      currentStatus: "दगड वीट माती बांधकाम",
      constructionYear: "१९७०",
    },
    {
      specification:"इतर",
      description: "दुमजली",
      currentStatus: "खण दुमजली (दुकान)",
      constructionYear: "",
    },
    {
      specification:"बांधकाम किती मजली आहे",
      description: "तळमजला",
      currentStatus: "खालील निवडा",
      constructionYear: " ",
    },

    {
      specification:"इमारतीचे क्षेत्रफळ",
      description: "२३*२६.६",
     currentStatus: "१९*२७", 
     constructionYear: "" },

    {
      specification:"जमिनीचे क्षेत्रफळ",
      description: "०*०",
     currentStatus: "५ *२७",
      constructionYear: "" },
  ]);
  const [tableData2, setTableData2] = useState([
    {
      id: 1,
      lengthWidth: "१९*२७",
      areaSquareFeet: "५१३",
      areaSquareMeter: "४७.६७६६",
    },
    {
      id: 2,
      lengthWidth: "७*२७",
      areaSquareFeet: "१३५",
      areaSquareMeter: "१२.५४६५",
    },
    { id: 3, lengthWidth: "", areaSquareFeet: "", areaSquareMeter: "" }, // Initial empty row
  ]);

  const handleTableChange2 = (event, id) => {
    const { name, value } = event.target;
    const updatedTableData = tableData2.map((row) =>
      row.id === id ? { ...row, [name]: value } : row
    );
    setTableData2(updatedTableData);
  };

  const handleTableChange = (e, index, key) => {
    const newData = [...tableData];
    newData[index][key] = e.target.value;
    setTableData(newData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any actions with the form data, like sending it to a server
    console.log(formData);
  };

  // const [selectedOption, setSelectedOption] = useState(null);

  // const handleClick = (option) => {
  //   setSelectedOption(option);
  // };

  // const getStrikethroughStyle = (option) => {
  //   if (selectedOption && selectedOption !== option) {
  //     return { textDecoration: 'line-through' };
  //   }
  //   return {};
  // };

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    };}

  const handleSubmit2 = async (e) => {
      e.preventDefault();
      if (selectedImage) {
        const formData = new FormData();
        formData.append('image', selectedImage);
  
        try {
          // Replace the URL with your server endpoint for uploading images
          const response = await fetch('https://your-server-endpoint/upload', {
            method: 'POST',
            body: formData,
          });
  
          if (response.ok) {
            alert('Image uploaded successfully!');
            // Reset the form after successful upload
            setSelectedImage(null);
            setPreview(null);
          } else {
            alert('Failed to upload image.');
          }
        } catch (error) {
          console.error('Error uploading image:', error);
          alert('Error uploading image.');
        }
      } else {
        alert('No image selected');
      }
    };
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

    const [selectedTitle, setSelectedTitle] = useState('');

  const handleTitleChange = (event) => {
    setSelectedTitle(event.target.value);
  };

  return (
    <>

    
    <button onClick={handlePrint}>Print Form</button>

   
    <div ref={componentRef} className="print-page">
      
    
    <form className="form-container" onSubmit={handleSubmit} >

    <div className="first-page">
      {/* Form Header */}
      <div className="header-container">
        <div>
          <img src={gandhiLogo} alt="Gandhi" />
        </div>
        <div>
          <h3>
            ऑनलाईन <br /> फेर रिव्हिजन सर्व्ह फॉर्म{" "}
          </h3>
          <p>
            शासन अधिसूचना क्र. व्ही पी य म २०१५ / प्र क्र दिनांक - ३१/१२/२०१५
          </p>
          <p>
            महाराष्ट्र ग्रामपंचायत व फी नियम २०१५ च्या आधारे कर आरकणी करावयाचे
            प्रपत्र{" "}
          </p>
        </div>
        <div>
          <img src={gandhiLogo} alt="Gandhi " />
        </div>
      </div>

      <hr
        style={{
          fontWeight: "bold",
          color: "grey",
          border: "solid",
          borderWidth: "1px",
          width:"100%"
        }}
      />
      
      

      <div className="main-container">
        {/* Form fields */}
        
        <div className="row1">
       
        <div>
            <label htmlFor="gramPanchayat"><b>१)</b>ग्रामपंचायत -:</label>
              <input
                type="text"
                id="gramPanchayat"
                name="gramPanchayat"
                value={formData.gramPanchayat}
                onChange={handleChange}
                required
              />
       </div>

       <div>
              <label htmlFor="taluka">तालुका -:</label>
              <input
                type="text"
                id="taluka"
                name="taluka"
                value={formData.taluka}
                onChange={handleChange}
                required
              />
      </div>

      <div>
              <label htmlFor="district">जिल्हा -:</label>
              <input
                type="text"
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                required
              />
              </div>
        </div>

        <div className="row2">
          <label htmlFor="ownerName"> 
          <label htmlFor="ownerName">मालकाचे पूर्ण नाव </label>

          <select id="title" value={selectedTitle} onChange={handleTitleChange}>
        <option value="">श्री.</option>
        <option value="Mr.">श्री.</option>
        <option value="Miss.">सौ.</option>
        <option value="Mrs.">श्रीमती.</option>
      </select>

            
          </label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="row3">
          <label htmlFor="wifeName">पत्नीचे पूर्ण नाव 

          <select id="title" value={selectedTitle} onChange={handleTitleChange}>
        <option value="">श्री.</option>
        <option value="Mr.">श्री.</option>
        <option value="Miss.">सौ.</option>
        <option value="Mrs.">श्रीमती.</option>
      </select>
          </label>

          <input
            type="text"
            id="wifeName"
            name="wifeName"
            value={formData.wifeName}
            onChange={handleChange}
            required
          />
        </div>


        <div className="row5">
          
          <label htmlFor="occupation">भोगवटा धारकाचे नाव:</label>
      <select id="title" value={selectedTitle} onChange={handleTitleChange}>
        <option value="">श्री.</option>
        <option value="Mr.">श्री.</option>
        <option value="Miss.">सौ.</option>
        <option value="Mrs.">श्रीमती.</option>
      </select>
    
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />

  <label htmlFor="mobile">मो नं -:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
     </div>
          
         

       
        <div class="row6">
          <label htmlFor="aadharNumber">आधार क्र -:</label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
  
          <label htmlFor="familyCount">कुटुंबातील संख्या -: </label>
         <label > स्री </label>  
          <input
            className="female"         
            type="text"
            id="female"
            name="Female"
            value={formData.female}
            onChange={handleChange}
            required
          />

        <label > पुरुष </label>  
          <input  
            className="male"       
            type="text"
            id="male"
            name="male"
            value={formData.male}
            onChange={handleChange}
            required
          />

       <label > अपंग </label>  
          <input
            className="handicap"         
            type="text"
            id="handicap"
            name="handicap"
            value={formData.handicap}
            onChange={handleChange}
            required
          />
</div>


      <hr
        style={{
          fontWeight: "bold",
          color: "grey",
          border: "solid",
          borderWidth: "1px",
          width:"100%"
        }}
      />

        <div class="row7">

        <label htmlFor="milakatNumber"><b>२)</b>मिळकत क्र -:</label>
        <input
          type="text"
          id="milakatNumber"
          name="milakatNumber"
          value={formData.milakatNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="citySurveyNumber">सिटी सर्वे क्र -:</label>
        <input
          type="text"
          id="citySurveyNumber"
          name="citySurveyNumber"
          value={formData.citySurveyNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="wardNumber">वार्ड क्र -:</label>
        <input
          type="text"
          id="wardNumber"
          name="wardNumber"
          value={formData.wardNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="plotNumber">प्लॉट नं -:</label>
        <input
          type="text"
          id="plotNumber"
          name="plotNumber"
          value={formData.plotNumber}
          onChange={handleChange}
          required
        />

        <label htmlFor="groupNumber">गट नं -:</label>
        <input
          type="text"
          id="groupNumber"
          name="groupNumber"
          value={formData.groupNumber}
          onChange={handleChange}
          required
        />
        </div>

       <div class="row8">
        <label htmlFor="roadName">रस्त्याचे नाव -:</label>
        <input
          type="text"
          id="roadName"
          name="roadName"
          value={formData.roadName}
          onChange={handleChange}
          required
        />
        </div>
       
       <hr
        style={{
          fontWeight: "bold",
          color: "grey",
          border: "solid",
          borderWidth: "1px",
          width:"100%"
        }}
      />

      <div className="row9">
      
        <label htmlFor="landType"><b>३)</b>जमिनीचा प्रकार -:</label>
        <input
          type="text"
          id="landType"
          name="landType"
          value={formData.landType}
          onChange={handleChange}
        />
       </div>

        <table>
          <tr>
            <th className="table-cell"></th>
            <th className="table-cell">ग्राम. रजिस्टर नुसार</th>
            <th className="table-cell">सध्या स्थिती नुसार </th>
            <th className="table-cell">बांधकाम वर्ष </th>
          </tr>
          {tableData.map((row, index) => (
            <tr key={index}>
              <th>{row.specification} </th>
              <td>
                <input
                  type="text"
                  value={row.description}
                  onChange={(e) => handleTableChange(e, index, "description")}
                />
              </td>

              <td>
                <input
                  type="text"
                  value={row.currentStatus}
                  onChange={(e) => handleTableChange(e, index, "currentStatus")}
                />
              </td>

              <td>
                <input
                  type="text"
                  value={row.constructionYear}
                  onChange={(e) =>
                    handleTableChange(e, index, "constructionYear")
                  }
                />
              </td>
            </tr>
          ))}
        </table>

        <div className="row9"> 
          <label htmlFor="milakatPrakar"> मिळकत वापर प्रकार -:</label>
          <input
            id="milakatPrakar"
            name="milakatPrakar"
            value={formData.milakatPrakar}
            onChange={handleChange}
            required
            style={{ width: "100px" }}
          />
          </div>
                    
         <div class="row10">
          <label htmlFor="sauchalay"> शौचालय -:</label>
          <input
            id="sauchalay"
            name="sauchalay"
            value={formData.sauchalay}
            onChange={handleChange}
            required
          />

          <label htmlFor="nalConnection">नळ कनेक्शन -:</label>
          <input
            type="text"
            id="nalConnection"
            name="nalConnection"
            value={formData.nalConnection}
            onChange={handleChange}
            required           
          />

          <label htmlFor="gasConnection">गॅस कनेक्शन-:</label>
          <input
            type="text"
            id="gasConnection"
            name="gasConnection"
            value={formData.gasConnection}
            onChange={handleChange}
            required
          />

          <label htmlFor="bijConnection">वीज कनेक्शन -:</label>
          <input
            type="text"
            id="bijConnection"
            name="bijConnection"
            value={formData.bijConnection}
            onChange={handleChange}
            required
          />
          </div>
    
          <p>
            (टीप -: मालमत्तेच्या वर्णन क्षेत्रफळामध्ये व्हरांडा / ओटा / पडवी
            यांचा समावेश करावा ){" "}
          </p>

       <div class="table2">
          <table>
            <thead>
              <tr className="table-row header">
                <th className="table-cell">अ. न. </th>
                <th className="table-cell">इमारतीचे जमिनीचे क्षेत्रफळ(लांबी*रुंदी)</th>
                <th className="table-cell">क्षेत्रफळ(चौ फूट)</th>
                <th className="table-cell">क्षेत्रफळ(चौ फूट/१०.७६)= चौ मीटर </th>
              </tr>
            </thead>
            <tbody>
              {tableData2.map((row) => (
                <tr className="table-row" key={row.id}>
                  <td className="table-cell">{row.id}</td>
                  <td className="table-cell">
                    <input
                      type="text"
                      name="lengthWidth"
                      value={row.lengthWidth}
                      onChange={(e) => handleTableChange2(e, row.id)}
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      type="text"
                      name="areaSquareFeet"
                      value={row.areaSquareFeet}
                      onChange={(e) => handleTableChange2(e, row.id)}
                    />
                  </td>
                  <td className="table-cell">
                    <input
                      type="text"
                      name="areaSquareMeter"
                      value={row.areaSquareMeter}
                      onChange={(e) => handleTableChange2(e, row.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <p>
          महा.अधिनियम १९५७ च्या कलम ५२ नुसार नवीन इमारत बांधकाम अगर दुरुस्ती
          करणेकामी आवश्यक त्या सर्वे दस्तऐवजांची पूर्तता करून ग्राम. ची पूर्व
          परवानगी घेणे मिळकत धारकावर बंधनकारक आहे{" "}
        </p>
        </div>
        </div>

        <div className="footer-container">             

              <div onSubmit={handleSubmit2}>
      
              <input type="file" accept="image/*" onChange={handleImageChange} />
              {preview && <img src={preview} alt=" Preview"  />}
            
              </div>
       
         </div>

         <div className="certificate">
              <p  style={{ textAlign: "center" }}>प्रमाणपत्र </p>
              <p>
                प्रमाणित करण्यात येते की ग्रामपंचायतने उपरोक्त मालमत्तेचे (इमारत /खुली
                जागा ) मोजमाप माझ्या समक्ष केले असून ते मला मान्य आहे तसेच इमारतीचे
                बांधकाम वर्ष व इमारतीचे वय मी स्वतः सांगत असून ते ग्रामपंचायत
                कार्यालयात दिलेल्या नोंदी प्रमाणे बरोबर आहे. उपरोक्त माहितीच्या बाबतीत
                माझी कोणत्याही प्रकारे तक्रार नाही. सदर माहितीस मी स्वतः जबाबदार
                राहील.{" "}
              </p>
              

                    <div className="witness">
                            <p><b>५)</b> समक्ष </p>
                            <p>1)<input type="text" name="" id=""/></p>
                            <p>2)<input type="text" name="" id=""/></p>
                    </div>

                    <div >
                            <p>खातेदाराची नाव व स्वाक्षरी </p>
                            <input type="text" />
                    </div>
          </div>   
      
      
    </form>
    </div>
    </>
  );
}

export default GovernmentForm;
