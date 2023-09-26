import { useEffect, useState } from "react";

export default function MyProfil() {
  useEffect(() => {
    fetch("https://65117935829fa0248e402842.mockapi.io/profil/1")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
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
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [tweeter, setTweeter] = useState("");
  const [facebook, setFacebook] = useState("");
  const [linkidn, setLinkidn] = useState("");
  const [github, setGithub] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const handleUpdate = (e) => {
    e.preventDefault();
    const prfData = {
      id,
      name,
      phone,
      email,
      address,
      tweeter,
      facebook,
      linkidn,
      github,
      description,
      image,
    };

    fetch("https://65117935829fa0248e402842.mockapi.io/profil/1", {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(prfData),
    })
      .then((res) => {
        alert("Update successfully.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div className="w-full">
        <main className="bg-primary-gray grow overflow-y-auto">
          <div
            id="modal-overlay"
            className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
          ></div>
          <div className="p-4 h-[calc(100vh-67.33px)]">
            <div>
              <h1 className="text-2xl font-semibold">MyProfil</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handleUpdate}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Full Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Full Name"
                          required
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Phone</label>
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="+6281514566915"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Email</label>
                        <input
                          type="text"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Email"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Facebook</label>
                        <input
                          type="text"
                          value={facebook}
                          onChange={(e) => setFacebook(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Facebook"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Tweeter</label>
                        <input
                          type="text"
                          value={tweeter}
                          onChange={(e) => setTweeter(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Tweeter"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label>Linkidn</label>
                        <input
                          type="text"
                          value={linkidn}
                          onChange={(e) => setLinkidn(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Linkidn"
                        />
                      </div>

                      <div className="md:col-span-3">
                        <label>Address</label>
                        <textarea
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="md:col-span-3">
                        <label>Description</label>
                        <textarea
                          type="text"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          rows="4"
                        ></textarea>
                      </div>
                      <div className="md:col-span-3">
                        <label>Github</label>
                        <input
                          type="text"
                          value={github}
                          onChange={(e) => setGithub(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Image (path of image)</label>
                        <input
                          type="text"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                        />
                      </div>
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
