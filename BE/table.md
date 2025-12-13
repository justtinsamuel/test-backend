employees
npx sequelize-cli model:generate --name Employee --attributes name:string,age:integer,city:string,email:string,phone:string,employerId:integer,jobId:integer,departmentId:integer

jobs
npx sequelize-cli model:generate --name Job --attributes name:string,category:string,maxSalary:integer,minSalary:integer

employers
npx sequelize-cli model:generate --name Employer --attributes name:string,type:string,city:string,totalEmployees:integer

departments
npx sequelize-cli model:generate --name Department --attributes name:string,floor:integer,employerId:integer

benefits
npx sequelize-cli model:generate --name Benefit --attributes name:string,description:text
