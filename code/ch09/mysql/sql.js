module.exports = {
  customerList: `select * from customer;`,
  customerInsert: `insert into customer set ?`,
  customerUpdate: `update customer set ? where customer_id=?`,
  customerDelete: `delete from customer where customer_id=?`,
};
