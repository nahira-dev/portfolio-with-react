import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyGallery() {
  const [dataGallery, setGallery] = useState();
  const getApiGallery = async () => {
    const response = await fetch(
      "https://65116bce829fa0248e400797.mockapi.io/gallery"
    );
    const data = await response.json();
    if (data) {
      setGallery(data);
    }
  };
  useEffect(() => {
    getApiGallery();
  }, []);
  return (
    <div className="w-full">
      <main className="bg-primary-gray grow overflow-y-auto">
        <div
          id="modal-overlay"
          className="hidden bg-black h-full w-full absolute top-0 left-0 opacity-90"
        ></div>
        <div className="p-4 h-[calc(100vh-67.33px)]">
          <div>
            <h1 className="text-2xl font-semibold">Gallery</h1>
          </div>
          <div className="p-4">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
              <div className="relative overflow-x-auto">
                <table className="w-full overflow-x-auto border-collapse  rounded-lg text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        No
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Nama
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Label
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Create date
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-center">
                        Image
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-center">
                        Options
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataGallery ? (
                      <>
                        {dataGallery.map((glr, index) => (
                          <tr key={glr.id}>
                            <td>{index + 1}</td>
                            <td>{glr.name}</td>
                            <td>{glr.content}</td>
                            <td>{glr.date}</td>
                            <td>
                              <center>
                                <img
                                  src={glr.image}
                                  alt="gallery image"
                                  width="100px"
                                />
                              </center>
                            </td>
                            <td>
                              <center>
                                <Link to={"/gallery/edit/" + glr.id}>
                                  <button
                                    title="edit"
                                    className="bg-yellow-400 text-white active:bg-yellow-400 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  >
                                    <i className="ri-file-edit-line text-white"></i>
                                  </button>
                                </Link>
                              </center>
                            </td>
                          </tr>
                        ))}
                      </>
                    ) : (
                      <tr></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
