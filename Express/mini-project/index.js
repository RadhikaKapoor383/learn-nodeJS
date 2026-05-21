const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

//Routes
app.get("/users", (req, res) => {
    const html = `
    <ul>
        ${users.map((user) => `
            <ul><h4>First Name: ${user.first_name}</h4>
                <li>Last Name: ${user.last_name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            
        `).join("")}
    </ul>
    `;
    res.send(html)
});
app.get("/api/users", (req, res) => {
    return res.json(users);
})
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user)
})

app.post("/api/users", (req, res) => {
    return res.json({status: "pending..."});
})

// app.put("/api/users", (req, res) => {
//     return res.json({status: "pending..."});
// })

app.patch("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json({status: "pending..."});
})

app.delete("/api/users", (req, res) => {
    return res.json({status: "pending..."});
})
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));