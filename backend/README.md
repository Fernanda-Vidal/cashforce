CNPJ -
create: POST 'localhost:3001/CNPJ/'
body { cnpj, companyType }

getAll: GET 'localhost:3001/CNPJ/'

getById: GET 'localhost:3001/CNPJ/:id'
params id

update: PUT 'localhost:3001/CNPJ/:id'
params id
body { cnpj, companyType }

delete: DELETE 'localhost:3001/CNPJ/:id'
params id


USER -
create: 'localhost:3001/user/'
body { name, email, phoneNumber,
    mobile, departament, verificationCode,
    emailCheked, cashForceAdm }

getAll: GET 'localhost:3001/user/'

getById: GET 'localhost:3001/user/:id'
params id

update: PUT 'ocalhost:3001/user/:id'
params id
body { name, email, phoneNumber,
    mobile, departament, verificationCode,
    emailCheked, cashForceAdm }


BUYER -
create: POST 'localhost:3001/buyer/'
{ name, tradingName, cashForceTax, responsibleName, responsibleEmail, responsiblePosition, responsiblePhone, responsibleMobile, website, postalCode, address, number, complement, neighborhood, city, state, phoneNumber, situation, situationDate, cnpjId, confirm, email }

getAll: GET 'localhost:3001/buyer/:id'

getById - GET 'localhost:3001/buyer/'
params id

update - PUT 'localhost:3001/buyer/:id'
params id
{ name, tradingName, cashForceTax, responsibleName, responsibleEmail, responsiblePosition, responsiblePhone, responsibleMobile, website, postalCode, address, number, complement, neighborhood, city, state, phoneNumber, situation, situationDate, cnpjId, confirm, email }

delete - DELETE 'localhost:3001/buyer/:id'

PROVIDER -
create: POST 'localhost:3001/provider'
{ name, tradingName, cashForceTax, responsibleName, responsibleEmail, responsiblePosition, responsiblePhone, responsibleMobile, website, postalCode, address, number, complement, neighborhood, city, state, bank, bankAgency, account, documents, phoneNumber, situation, situationDate, cnpjId, email }

getAll: GET 'localhost:3001/provider'

getById: GET 'localhost:3001/provider/1'
params id

update: PUT 'localhost:3001/provider/:id'
params id
{ name, tradingName, cashForceTax, responsibleName, responsibleEmail, responsiblePosition, responsiblePhone, responsibleMobile, website, postalCode, address, number, complement, neighborhood, city, state, bank, bankAgency, account, documents, phoneNumber, situation, situationDate, cnpjId, email }

delete: DELETE 'localhost:3001/provider/:id'
params id


SPONSOR - 
create: POST 'localhost:3001/sponsor'
{ name, tradingName, cashForceTax, responsibleName, responsibleEmail, responsiblePosition, responsiblePhone, responsibleMobile, website, postalCode, address, number, complement, neighborhood, city, state, bank, bankAgency, account, phoneNumber, situation, situationDate, cnpjId, email } 

getAll: GET 'localhost:3001/sponsor'

getById: GET 'localhost:3001/sponsor/:id'
params id

update: PUT 'localhost:3001/sponsor/:id'
params id
{ name, tradingName, cashForceTax, responsibleName, responsibleEmail, responsiblePosition, responsiblePhone, responsibleMobile, website, postalCode, address, number, complement, neighborhood, city, state, bank, bankAgency, account, documents, phoneNumber, situation, situationDate, cnpjId, email }

delete: DELETE 'localhost:3001/sponsor/:id'
params id


ORDER -
create: POST 'localhost:3001/order/'
{ orderNFId, orderNumber, orderPath, orderFileName, orderOriginalName, emissionDate, pdfFile, emitedTo, nNF, CTE, value, cnpjId, userId, buyerId, providerId, orderStatusBuyer, orderStatusProvider, deliveryReceipt, cargoPackingList, deliveryCtrc }

getAll: GET 'localhost:3001/order/'

getById: GET 'localhost:3001/order/:id'
params id

update: PUT 'localhost:3001/order/:id'
params id
body { orderNFId, orderNumber, orderPath, orderFileName, orderOriginalName, emissionDate, pdfFile, emitedTo, nNF, CTE, value, cnpjId, userId, buyerId, providerId, orderStatusBuyer, orderStatusProvider, deliveryReceipt, cargoPackingList, deliveryCtrc }

delete: DELETE 'localhost:3001/order/:id'
params id