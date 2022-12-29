CNPJ -
getById: 'localhost:3001/CNPJ/:id'
params id

update: 'localhost:3001/CNPJ/:id'
params id
body { cnpj, companyType }

delete: 'localhost:3001/CNPJ/:id'
params id

create: 'localhost:3001/CNPJ/'
body { cnpj, companyType }

getAll: 'localhost:3001/CNPJ/'

USER -

create: 'localhost:3001/user/'
{ name, email, phoneNumber,
mobile, departament, verificationCode,
emailCheked, cashForceAdm }