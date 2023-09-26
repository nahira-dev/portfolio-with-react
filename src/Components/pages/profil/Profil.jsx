import MySkill from "./MySkill";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Gallery from "./Gallery";
import Contact from "./Contact";
import "../../../index.css";
import { useEffect, useState } from "react";
export default function Profil() {
  useEffect(() => {
    fetch("https://65117935829fa0248e402842.mockapi.io/profil/1")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setName(resp.name);
        setEmail(resp.email);
        setAddress(resp.address);
        setPhone(resp.phone);
        setTweeter(resp.tweeter);
        setFacebook(resp.facebook);
        setLinkidn(resp.linkidn);
        setDescription(resp.description);
        setImage(resp.image);
        setGithub(resp.github);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [tweeter, setTweeter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkidn, setLinkidn] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [github, setGithub] = useState("");
  return (
    <>
      <Header />
      <Main description={description} phone={phone} image={image} name={name} />
      <MySkill />
      <Gallery />
      <Contact
        email={email}
        phone={phone}
        address={address}
        tweeter={tweeter}
        facebook={facebook}
        linkidn={linkidn}
        github={github}
      />
      <Footer />
    </>
  );
}
