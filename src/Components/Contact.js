import React, { useState } from 'react';
import './styles.css';

const Contact = () => {
const[contact,setContact]=useState({name:"",email:"",message:""})
let name,value
const handleChange=(e)=>{
name=e.target.name
value=e.target.value
setContact({...contact,[name]:value})
}

// const handleSubmit=async(e)=>{
//   e.preventDefault()
//   const{name,email,message}=contact
//   let res= await fetch("https://form-for-react-default-rtdb.firebaseio.com/contact.json",
//   {method:"POST",headers:{ContentType:"contact/json"},
//   body:JSON.stringify({name,email,message})
// })
//   if(res){
//     alert("message sent")
//   }else{
//     alert("Please Fill out the fields")
//   }
// }

const handleSubmit = async (e) => {
  e.preventDefault();
  const { name, email, message } = contact;

  // Check if any field is empty
  if (!name || !email || !message) {
    alert("Please fill out the entire form");
    return;
  }

  try {
    let res = await fetch(
      "https://form-for-react-default-rtdb.firebaseio.com/contact.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      }
    );

    if (res.ok) {
      alert("Message sent");
    } else {
      const data = await res.json();
      alert(`Error: ${data.error || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
};


  return (
    <div className="contact-container">
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>Feel free to reach out for any inquiries or just to say  hello!</p>

        <form>
          <label  htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={contact.name} autoComplete='off' placeholder="Your Name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} value={contact.email} autoComplete='off' placeholder="Your Email" required />
<br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" onChange={handleChange} value={contact.message} placeholder="Your Message" rows="4" required></textarea>

          <button onClick={handleSubmit} type="submit" className="animated-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
