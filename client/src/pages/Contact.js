import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    message: "",
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (event) => {
    const stateProp = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [stateProp]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const url = "https://api.web3forms.com/submit";
    const access_key = "6b72aa73-bb33-4ff9-aa96-4b47eb403654";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          userName: "",
          email: "",
          message: "",
        });
        setShowConfirmation(true);

        setTimeout(() => setShowConfirmation(false), 3500);
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <h1 className="text-center">Contact Me</h1>

      {showConfirmation && (
        <p className="text-center confirmation">
          Thanks for your message! I'll get back to you soon.
        </p>
      )}

      <form onSubmit={handleSubmit} className="column">
        <input
          name="userName"
          onChange={handleInputChange}
          value={formData.userName}
          type="text"
          placeholder="Enter your name"
          className="mb-2"
        />
        <input
          name="email"
          onChange={handleInputChange}
          value={formData.email}
          type="email"
          placeholder="Enter your email address"
          className="mb-2"
        />
        <textarea
          name="message"
          onChange={handleInputChange}
          value={formData.message}
          cols="30"
          rows="10"
          placeholder="Enter your message"
          className="mb-2"
        ></textarea>
        <button className="mb-4 btn btn-dark">Submit</button>
      </form>
    </main>
  );
}

export default Contact;
