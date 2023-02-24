Feature('integration');

const expect = require('chai').expect;
const {I} = inject();

require('dotenv').config()
const backendURL = process.env.VITE_BACKEND_URL 


Scenario('Verify a successful call', async () => {
	const res = await I.sendGetRequest(backendURL);
	expect(res.status).to.eql(200);
});


Scenario('Title of the page', ({ I }) => {
    I.amOnPage(backendURL);
    I.see('To Do List'); 
});

Scenario('Deletes all todos',({ I }) => {
    
    I.amOnPage(backendURL);
    I.click('Delete All');
    I.see('All your tasks have been successfully deleted');
});

Scenario('Creates ToDos', ({I}) => {
   
    I.amOnPage(backendURL);
    I.fillField('Titlessss','Title Test');
    I.fillField('Description','Description Test');
    I.click('Add Task');
    I.clearField('Title');
    I.clearField('Description');
    I.see('Title Test');
    I.see('Description Test');
    I.click('Delete All');
    

});