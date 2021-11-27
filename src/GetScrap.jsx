function GetScrap() {
  function makeHttpObject() {
    try {
      return new XMLHttpRequest();
    } catch (error) {}

    throw new Error("Could not create HTTP request object.");
  }

  const onClickHandler = async () => {
    var request = makeHttpObject();
    request.open("GET", "https://backpack.tf/", true);
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState === 4) console.log(request.responseText);
    };
  };

  return (
    <>
      <button onClick={onClickHandler}>Click</button>
    </>
  );
}
export default GetScrap;
