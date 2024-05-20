import { useEffect, useState } from "react";
import Charts from "./pages/Charts";
import axios from "axios";
import { Margin } from "@mui/icons-material";
function App() {
  const [data, setData] = useState<Data>({ training_data: [] }); // Set initial state with empty training_data
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://127.0.0.1:5000/api/get_data");
      setData(response.data.training_data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    // if (data > 0) data.map(([date, sales]: any) => console.log(date, sales));
    if (data.length == 0) console.log(true);
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div style={{ padding: "2rem" }}>{<Charts data={data} />}</div>;
}

export default App;
