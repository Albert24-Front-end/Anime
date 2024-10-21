const mainData = () => {
    fetch("https://test-e7390-default-rtdb.firebaseio.com/anime.json").then((response) => {
        return response.json()
    })
    .then((data)=> {
        console.log(data);
    })
};

mainData();