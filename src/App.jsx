import { useState, useEffect, useRef } from "react";
import axios from "axios";

import Users from "./components/Users";

function App() {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://api.github.com";

  useEffect(() => {
    const getData = setTimeout(() => {
      if (!query) return;
      setIsLoading(true);
      axios
        .get(`${API_URL}/search/users?q="${query}`)
        .then((response) => {
          setResult(response.data.items || []);
          // console.log(response.data.items);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    return () => clearTimeout(getData);
  }, [query]);

  return (
    <main>
      <h2>GitHub User Search</h2>
      <div className="container">
        <form>
          <div className="form-control">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
            />
          </div>
        </form>
        {isLoading ? <h2>Loading...</h2> : <Users result={result} />}
      </div>
    </main>
  );
}

export default App;
