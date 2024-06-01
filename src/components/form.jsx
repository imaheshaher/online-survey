import React, { useState } from "react";
import "./style1.css"; // Import your CSS file here
import gandhiLogo from "./gandhi.jpeg";
import img2 from "./img2.jpg";
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
    familyCount: "00",
    milakatNumber: "१०७",
    surveyNumber: "००",
    wardNumber: "०",
    plotNumber: "४५",
    groupNumber: "गावठाण",
    roadName: "राम मंदिर शेजारी (गाव  रस्ता)",
    occupation: "स्वतः",
    aadharNumber: "११२२-३३४४-५५६६",
    familyCount: "00",
    milakatNumber: "१०७",
    citySurveyNumber: "००",
    wardNumber: "०",
    plotNumber: "४५",
    groupNumber: "गावठाण",
    roadName: "राम मंदिर शेजारी (गाव  रस्ता)",
    landType: "गावठाण /गायरान /सार्वजनिक प्रशासकीय विभाग",
    milakatPrakar: "निवासी",
    sauchalay: "आहे",
    nalConnection: "आहे",
    gasConnection: "आहे",
    bijConnection: "आहे",
    // Add more form fields as needed
  });
  const [tableData, setTableData] = useState([
    {
      description: "दगड वीट माती बांधकाम",
      currentStatus: "दगड वीट माती बांधकाम",
      constructionYear: "१९७०",
    },
    {
      description: "दुमजली",
      currentStatus: "खण दुमजली (दुकान)",
      constructionYear: "",
    },
    {
      description: "तळमजला",
      currentStatus: "खालील निवडा",
      constructionYear: " ",
    },
    { description: "२३*२६.६", currentStatus: "१९*२७", constructionYear: "" },
    { description: "०*०", currentStatus: "५ *२७", constructionYear: "" },
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

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      {/* Form Header */}
      <div className="form-header">
        <div>
          <img src={gandhiLogo} alt="" width="160px" />
        </div>
        <div>
          <h3>
            ऑनलाईन
            <br /> फेर रिव्हिजन सर्व्ह फॉर्म{" "}
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
          <img src={gandhiLogo} alt="" width="160px" />
        </div>
      </div>

      <hr
        style={{
          fontWeight: "bold",
          color: "grey",
          border: "solid",
          borderWidth: "1px",
        }}
      />

      <div className="container">
        {/* Form fields */}
        <div>
          <label htmlFor="gramPanchayat">ग्रामपंचायत -:</label>
          <input
            type="text"
            id="gramPanchayat"
            name="gramPanchayat"
            value={formData.gramPanchayat}
            onChange={handleChange}
            required
          />

          <label htmlFor="taluka">तालुका -:</label>
          <input
            type="text"
            id="taluka"
            name="taluka"
            value={formData.taluka}
            onChange={handleChange}
            required
          />

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
        <div>
          <label htmlFor="ownerName">
            मालकाचे पूर्ण नाव श्री / सौ / श्रीमती -:
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
        <div>
          <label htmlFor="wifeName">पत्नीचे पूर्ण नाव सौ / श्रीमती -:</label>
          <input
            type="text"
            id="wifeName"
            name="wifeName"
            value={formData.wifeName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
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
        <div>
          <label htmlFor="occupation">
            भोगवटा धारकाचे नाव श्री / सौ / श्रीमती -:
          </label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </div>
        <div>
          <label htmlFor="aadharNumber">आधार क्र -:</label>
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleChange}
            required
          />
          <br />
          <br />

          <label htmlFor="familyCount">कुटुंबातील संख्या -:</label>
          <input
            type="text"
            id="familyCount"
            name="familyCount"
            value={formData.familyCount}
            onChange={handleChange}
            required
          />
          <br />
          <br />
        </div>
        <hr />

        <label htmlFor="milakatNumber">मिळकत क्र -:</label>
        <input
          type="text"
          id="milakatNumber"
          name="milakatNumber"
          value={formData.milakatNumber}
          style={{ width: "100px" }}
          onChange={handleChange}
          required
        />

        <label htmlFor="citySurveyNumber">सिटी सर्वे क्र -:</label>
        <input
          type="text"
          id="citySurveyNumber"
          name="citySurveyNumber"
          value={formData.citySurveyNumber}
          style={{ width: "100px" }}
          onChange={handleChange}
          required
        />

        <label htmlFor="wardNumber">वार्ड क्र -:</label>
        <input
          type="text"
          id="wardNumber"
          name="wardNumber"
          value={formData.wardNumber}
          style={{ width: "100px" }}
          onChange={handleChange}
          required
        />

        <label htmlFor="plotNumber">प्लॉट नं -:</label>
        <input
          type="text"
          id="plotNumber"
          name="plotNumber"
          value={formData.plotNumber}
          style={{ width: "100px" }}
          onChange={handleChange}
          required
        />

        <label htmlFor="groupNumber">गट नं -:</label>
        <input
          type="text"
          id="groupNumber"
          name="groupNumber"
          value={formData.groupNumber}
          style={{ width: "100px" }}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="roadName">रस्त्याचे नाव -:</label>
        <input
          type="text"
          id="roadName"
          name="roadName"
          value={formData.roadName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <hr />

        <label htmlFor="landType">जमिनीचा प्रकार -:</label>
        <input
          type="text"
          id="landType"
          name="landType"
          value={formData.landType}
          style={{ width: "300px" }}
          onChange={handleChange}
        />
        <br />
        <br />

        <table>
          <tr>
            <th></th>
            <th>ग्राम. रजिस्टर नुसार</th>
            <th>सध्या स्थिती नुसार </th>
            <th>बांधकाम वर्ष </th>
          </tr>
          {tableData.map((row, index) => (
            <tr key={index}>
              <th>मालमत्तेचे वर्णन </th>
              <td>
                <input
                  type="text"
                  value={row.description}
                  style={{ width: "150px" }}
                  onChange={(e) => handleTableChange(e, index, "description")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.currentStatus}
                  style={{ width: "150px" }}
                  onChange={(e) => handleTableChange(e, index, "currentStatus")}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={row.constructionYear}
                  style={{ width: "150px" }}
                  onChange={(e) =>
                    handleTableChange(e, index, "constructionYear")
                  }
                />
              </td>
            </tr>
          ))}
        </table>
        <div>
          <br />
          <label htmlFor="milakatPrakar"> मिळकत वापर प्रकार -:</label>
          <input
            id="milakatPrakar"
            name="milakatPrakar"
            value={formData.milakatPrakar}
            onChange={handleChange}
            required
            style={{ width: "100px" }}
          />
          <br />
          <br />

          <label htmlFor="sauchalay"> शौचालय -:</label>
          <input
            id="sauchalay"
            name="sauchalay"
            value={formData.sauchalay}
            onChange={handleChange}
            required
            style={{ width: "100px" }}
          />

          <label htmlFor="nalConnection">नळ कनेक्शन -:</label>
          <input
            type="text"
            id="nalConnection"
            name="nalConnection"
            value={formData.nalConnection}
            onChange={handleChange}
            required
            style={{ width: "100px" }}
          />

          <label htmlFor="gasConnection">गॅस कनेक्शन-:</label>
          <input
            type="text"
            id="gasConnection"
            name="gasConnection"
            value={formData.gasConnection}
            onChange={handleChange}
            required
            style={{ width: "100px" }}
          />

          <label htmlFor="bijConnection">वीज कनेक्शन -:</label>
          <input
            type="text"
            id="bijConnection"
            name="bijConnection"
            value={formData.bijConnection}
            onChange={handleChange}
            required
            style={{ width: "100px" }}
          />
          <br />
          <br />

          <p>
            (टीप -: मालमत्तेच्या वर्णन क्षेत्रफळामध्ये व्हरांडा / ओटा / पडवी
            यांचा समावेश करावा ){" "}
          </p>

          <table>
            <thead>
              <tr>
                <th>अ. न. </th>
                <th>इमारतीचे जमिनीचे क्षेत्रफळ(लांबी*रुंदी)</th>
                <th>क्षेत्रफळ(चौ फूट)</th>
                <th>क्षेत्रफळ(चौ फूट/१०.७६)= चौ मीटर </th>
              </tr>
            </thead>
            <tbody>
              {tableData2.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>
                    <input
                      type="text"
                      name="lengthWidth"
                      value={row.lengthWidth}
                      onChange={(e) => handleTableChange2(e, row.id)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="areaSquareFeet"
                      value={row.areaSquareFeet}
                      onChange={(e) => handleTableChange2(e, row.id)}
                    />
                  </td>
                  <td>
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
        <p style={{ textAlign: "center" }}>प्रमाणपत्र </p>
        <p>
          प्रमाणित करण्यात येते की ग्रामपंचायतने उपरोक्त मालमत्तेचे (इमारत /खुली
          जागा ) मोजमाप माझ्या समक्ष केले असून ते मला मान्य आहे तसेच इमारतीचे
          बांधकाम वर्ष व इमारतीचे वय मी स्वतः सांगत असून ते ग्रामपंचायत
          कार्यालयात दिलेल्या नोंदी प्रमाणे बरोबर आहे. उपरोक्त माहितीच्या बाबतीत
          माझी कोणत्याही प्रकारे तक्रार नाही. सदर माहितीस मी स्वतः जबाबदार
          राहील.{" "}
        </p>

        <div className="footer-container">
          <div>
            <p>
              <b>चतु:सीमा:</b>
              <br />
              <p>ऊ ऊत्तर </p>
              <p>द -दक्षिण</p>
              <p>पू -पूर्व </p>
              <p>प -पश्चिम </p>
            </p>
          </div>

          <div>
            <img src={img2} alt="Shop Image" style={{ width: "450px" }} />
          </div>

          <div>
            <input type="text" />
            <br />
            <p>खातेदाराची नाव व स्वाक्षरी </p>
            <br />
            <p>समक्ष </p>
            <p>
              1)
       
            </p>
            <p>2)</p>
            <p>3)</p>
          </div>
        </div>
      </div>
    </form>
  );
}

export default GovernmentForm;
