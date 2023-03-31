const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require('@mailchimp/mailchimp_marketing'); 
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

mailchimp.setConfig({
    apiKey: 'Your API Key',
    server: 'Your Server',
});

app.post('/', (req, res) => {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const email = req.body.email;

    

    const list_id = 'Your List ID';


    async function run() {
        const response = await mailchimp.lists.addListMember(list_id, {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName
            }
        }).then((value) => {
            console.log(`Successfully added contact as an audience member.`);
            res.sendFile(__dirname + '/success.html');
        },
        (reason) => {
            console.log(`Error: ${reason}`);
            res.sendFile(__dirname + '/failure.html');
        });

        
    };

        run();
});

app.post('/failure', (req, res) => {
    res.redirect('/');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

