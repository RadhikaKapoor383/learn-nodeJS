const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: false}))
// app.use(express.json()); 

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
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user)
    })
    .put((req, res) => {
        
        return res.json({status: "pending..."});
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const body = req.body;

        const userIndex = users.findIndex((user) => user.id === id);

        if (userIndex === -1) {
            return res.status(404).json({ status: "User not found" });
        }

        users[userIndex] = { ...users[userIndex], ...body };

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
            if (err) {
                return res.status(500).json({ status: "Error writing file" });
            }

            return res.json({ status: "Success", user: users[userIndex] });
        });
    })
    .delete((req, res) => {
        return res.json({status: "pending..."});
    })

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({id: users.length +1, ...body});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        console.log("Data appended")
        return res.json({status: "Success", id: users.length});
    })
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));