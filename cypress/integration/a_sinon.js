// USING STUBS
import {api} from './my-api';
// api.getUSer()


//stub
cy.stub(api,'getUser')
.returns({name:'Bill'})
//or
.resolves({name:'Bill'})
//or
.rejects()


//spy
const mySpy=
cy.spy(api,'getUser');
expect(mySpy).to.be.called;