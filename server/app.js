const express = require('express');
const cors = require('cors')
const request = require('request');
const app = express().use('*', cors());

// creating Node Server and running it on 3001 port
const server = require('http').createServer(app);
server.listen(3001);


// API Endpoint to get List of members
app.get('/members', (req, res) => {
    const options = {
        url: 'https://api.propublica.org/congress/v1/115/senate/members.json',
        headers: {
            'content-type': 'application/json',
            'x-api-key': '8nxiD771T6MQtkLhd1YBsgcmSskeYhfouvan6R1v'
        }
    }
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const importedJSON = JSON.parse(body);
            res.json({ data: importedJSON })
        }
    })
})


// API Endpoint to get List of Bills submitted by member
app.get('/bills/:id', (req, res) => {
    const id = req.params.id
    const options = {
        url: `https://api.propublica.org/congress/v1/members/${id}/bills/introduced.json`,
        headers: {
            'content-type': 'application/json',
            'x-api-key': '8nxiD771T6MQtkLhd1YBsgcmSskeYhfouvan6R1v'
        }
    }
    console.log("Url is", options.url)
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const importedJSON = JSON.parse(body);
            res.json({ data: importedJSON })
        }
    })
})


// API Endpoint to get List of Votes submitted by member
app.get('/votes/:id', (req, res) => {
    const id = req.params.id
    const options = {
        url: `https://api.propublica.org/congress/v1/members/${id}/explanations/110/votes.json`,
        headers: {
            'content-type': 'application/json',
            'x-api-key': '8nxiD771T6MQtkLhd1YBsgcmSskeYhfouvan6R1v'
        }
    }
    console.log("Url is", options.url)
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const importedJSON = JSON.parse(body);
            res.json({ data: importedJSON })
        }
    })
})


// API Endpoint to get List of Statements submitted by member
app.get('/statements/:id', (req, res) => {
    const id = req.params.id
    const options = {
        url: `https://api.propublica.org/congress/v1/members/${id}/statements/113.json`,
        headers: {
            'content-type': 'application/json',
            'x-api-key': '8nxiD771T6MQtkLhd1YBsgcmSskeYhfouvan6R1v'
        }
    }
    console.log("Url is", options.url)
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const importedJSON = JSON.parse(body);
            res.json({ data: importedJSON })
        }
    })
})



console.log('server started')