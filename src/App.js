import Header from "./components/Header";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [form, setForm] = useState({});

  const [data, setData] = useState([]);

  function addData() {
    setData([...data, form]);
    setForm(form);
  }

  function removeData(index) {
    let temparr = data;
    temparr.splice(index, 1);
    setData([...temparr]);
  }

  return (
    <div className="App">
      <Header />
      {/* form */}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>
      </div>

      {/* data */}
      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((ele, index) => {
          return (
            <div key={index} className="data_val">
              <h4>{ele.name}</h4>
              <h4>{ele.email}</h4>
              <Stack>
                <Button
                  onClick={() => removeData(index)}
                  variant="contained"
                  color="error"
                >
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
