import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditSkill() {
  const navigate = useNavigate();
  const { ids } = useParams();
  useEffect(() => {
    fetch("https://65116bce829fa0248e400797.mockapi.io/skill/" + ids)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setId(resp.id);
        setTitle(resp.title);
        setContent(resp.content);
        setImage(resp.image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const handleUpdateSkill = (e) => {
    e.preventDefault();
    const prfData = {
      id,
      title,
      content,
      image,
    };

    fetch("https://65116bce829fa0248e400797.mockapi.io/skill/" + ids, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(prfData),
    })
      .then((res) => {
        alert("Update successfully.");
        navigate("/myskill");
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
              <h1 className="text-2xl font-semibold">Edit Skill</h1>
            </div>
            <div className="p-4">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
                <div className="relative overflow-x-auto">
                  <form onSubmit={handleUpdateSkill}>
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6 m-5">
                      <div className="md:col-span-3">
                        <label>Title</label>
                        <input
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          required
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Image (Path of Image SVG)</label>
                        <input
                          type="text"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                          placeholder="Email"
                        />
                      </div>
                      <div className="md:col-span-3">
                        <label>Content</label>
                        <textarea
                          type="text"
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          rows="5"
                          className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        ></textarea>
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
