import ListMessage from "./ListMessage";
import { useEffect, useState } from "react";

export default function MyMessage() {
  const [dataMessage, setMessage] = useState();
  useEffect(() => {
    fetch("https://65117935829fa0248e402842.mockapi.io/message")
      .then((res) => res.json())
      .then(setMessage);
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
            <h1 className="text-2xl font-semibold">Message</h1>
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
                        Email
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Phone
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Subject
                      </th>
                      <th className="border border-b-2 border-opacity-10 border-secondary-gray p-4 text-left">
                        Message
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <ListMessage dataMessage={dataMessage} />
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
