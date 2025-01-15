import React, { useState } from 'react'
import Vektor from '/assets/star.png'

export default function Footer() {
  const [formData, setFormData] = useState({
    username: '',
    review: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.username,
          review: formData.review,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Feedback submitted successfully! ID: ${data.id}`);
        setFormData({ username: '', review: '' }); // Reset form
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit feedback.');
    }
  };
  return (
    <div className="flex flex-col justify-between">
        <div className="relative flex justify-center items-center">
        <section className="bg-[#314632] text-white py-8 px-4 z-30 mt-12 absolute -top-56 w-[1200px] shadow-2xl shadow-gray-950">
          <h4 className="text-lg font-bold font-Cormorant text-center mb-4">Green Vision</h4>
          <div className="flex items-center justify-center mb-4">
            <img src={Vektor} alt="" />
          </div>
          <h2 className="text-4xl font-bold text-center mb-4 font-Cormorant text-th_text">
            Add Application Review
          </h2>
          <p className="text-center mb-6 text-sm font-light">Give your best review</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center mt-12">
            <div className="flex items-center justify-center gap-8">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="p-2 border font-Cormorant border-[#F5EFDB] bg-transparent"
              />
              <input
                type="text"
                name="review"
                value={formData.review}
                onChange={handleChange}
                placeholder="Review"
                className="p-2 border font-Cormorant border-[#F5EFDB] bg-transparent"
              />
            </div>
            <button
              type="submit"
              className="bg-th_text text-black w-24 px-4 py-2 mt-8 rounded font-bold font-Cormorant"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      {/* Footer Section */}
      <footer className="bg-[url('/assets/Background2.png')] bg-cover bg-center h-[650px] text-white py-12">
        <div className="flex items-center justify-around container mx-auto mt-64">
          <div className="text-center">
            <h3 className="text-4xl text-aksen_text font-bold font-Cormorant">Contact Us</h3>
            <p className="mt-8 text-lg w-48 font-light mb-2">
              If you have questions, don't hesitate to take me<br />
            </p>
            <p className='text-sm text-th_text'>capstone05@gmail.com</p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl text-th_text font-Cormorant font-bold">GreenVision</h3>
            <p className="mt-8 text-lg font-light w-96">"The best way to find agricultural solutions is to use our application"</p>
            <div className="flex mt-2 gap-4 justify-center">
              <a href="#" className="hover:underline">Facebook</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>

          </div>

          <div className="text-center">
            <h3 className="text-4xl text-aksen_text font-bold font-Cormorant">Head Office</h3>
            <p className="mt-8 text-lg w-56 font-light">
              Jl. Cemp. Gg. 3 No.14, Kejambon, Kec. Tegal Timur,<br />
              Kota Tegal, Jawa Tengah 52124
            </p>
          </div>
        </div>
        < div className="text-center mt-12 mr-8 text-sm">
          &copy; 2025 GreenVision | All rights reserved.
        </div>

      </footer>
    </div>
  )
}
