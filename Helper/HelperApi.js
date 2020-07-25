const CollectionAPI = async () => {
    const res = await fetch("https://wallserver.herokuapp.com/collection/category")
    const resData = await res.json()
    return resData;
}

const MostDownloaded = async () => {
  const res = await fetch("https://wallserver.herokuapp.com/mostDownloaded")
  const resData = await res.json()
  return resData;
}

const Latest = async () => {
    const res = await fetch("https://wallserver.herokuapp.com/well/latest")
    const resData = await res.json()
    return resData;
}

const TopRate = async () => {
    const res = await fetch("https://wallserver.herokuapp.com/well/toprated")
    const resData = await res.json()
    return resData;
}

const Keyowrd = async (key) => {
    const response = await fetch("https://wallserver.herokuapp.com/search", {
        method: "post",
        body: JSON.stringify({ keyword: key }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

    const datas = await response.json();
      return datas;
}

module.exports ={
    CollectionAPI,
    Latest,
    TopRate,
    Keyowrd,
    MostDownloaded
}