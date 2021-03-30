import "./Background.scss";
import { useEffect, useState } from "react";
import defaultBG from "../../defaultBG.jpeg";

const baseUrl = "https://api.pexels.com/v1";

const myHeaders = new Headers({
  Authorization: "563492ad6f91700001000001a2b86bd2936945118cca67370d6cdc4d",
});

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const Background = (props) => {
  const { city, children } = props;
  const url = `${baseUrl}/search?query=${city}&per_page=1`;

  const [data, setData] = useState();

  const getData = async () => {
    try {
      const response = await fetch(new Request(url, requestOptions));
      const newData = await response.json();
      setData(() => newData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (city) {
      getData();
    }
  }, [city]);

  return (
    <>
      <div
        className="background"
        onDragStart={(e) => e.preventDefault()}
        style={{
          backgroundImage:
            data && data.photos && data.photos.length
              ? `url(${data.photos[0].src.large2x})`
              : `url(${defaultBG})`,
        }}
      />
      {children}
    </>
  );
};

export default Background;
