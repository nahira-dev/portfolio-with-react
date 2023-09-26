export default function ListMessage({ dataMessage }) {
  //   const Removefunction = (id) => {
  //     if (window.confirm("Do you want to remove?")) {
  //       fetch("https://65117935829fa0248e402842.mockapi.io/message/" + id, {
  //         method: "DELETE",
  //       })
  //         .then((res) => {
  //           alert("Removed successfully.");
  //           window.location.reload();
  //         })
  //         .catch((err) => {
  //           console.log(err.message);
  //         });
  //     }
  //   };

  return (
    <>
      {dataMessage ? (
        <>
          {dataMessage.map((msg, index) => (
            <tr key={msg.id}>
              <td>{index + 1}</td>
              <td>{msg.name}</td>
              <td>{msg.phone}</td>
              <td>{msg.email}</td>
              <td>{msg.subject}</td>
              <td>{msg.message}</td>
            </tr>
          ))}
        </>
      ) : (
        <tr></tr>
      )}
    </>
  );
}
