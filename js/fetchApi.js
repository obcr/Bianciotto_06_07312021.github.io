const fetchData = async () => {
  return await fetch("../data.json").then((reponse) => reponse.json());
}

