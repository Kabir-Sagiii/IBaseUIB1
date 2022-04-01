var Student = {
  name: "Kabir",
  email: "Kabir@gmail.com",
  phone: 9999999999,
  address: {
    city: "Hyd",
    state: "TS",
    pin: 50018,
    deg: {
      lat: 78099766.99,
      log: 78872632728812.889,
    },
  },
};

console.log(Student.address.state);

Student.address.city = "Vizag";
console.log(Student);

console.log(Student.address.deg.log);
