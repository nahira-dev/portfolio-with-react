import { useState } from "react";
export default function SendMessage() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    const messageData = {
      name,
      subject,
      email,
      message,
      phone,
    };
    fetch("https://65117935829fa0248e402842.mockapi.io/message", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(messageData),
    })
      .then((res) => {
        alert("Saved successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="animate_top w-full nn/5 vo/3 vk sg hh sm yh tq">
        <form onSubmit={handlesubmit}>
          <div className="tc sf yo ap zf ep qb">
            <div className="vd to/2">
              <label className="rc ac">Full name</label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Abdul Ghofur"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>

            <div className="vd to/2">
              <label className="rc ac">Email address</label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>
          </div>

          <div className="tc sf yo ap zf ep qb">
            <div className="vd to/2">
              <label className="rc ac">Phone number</label>
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+6281234567890"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>

            <div className="vd to/2">
              <label className="rc ac">Subject</label>
              <input
                type="text"
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Type your subject"
                className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 xi mi"
              />
            </div>
          </div>

          <div className="fb">
            <label className="rc ac">Message</label>
            <textarea
              placeholder="Message"
              rows="4"
              onChange={(e) => setMessage(e.target.value)}
              className="vd ph sg zk xm _g ch pm hm dm dn em pl/50 ci"
            ></textarea>
          </div>

          <div className="tc xf">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
