const college = {
  name: "College of Technology",
  location: "New York",
  courses: ['11', '12', '13'],
  students: 1000,
  address: { street: "123 Main St", city: "Anytown", state: "NY" },
  events: ['science fair', 'bijoy fair', 'cultural fair'],
  unique: {
    color: 'blue',
    result: {
          gpa: 5,
          merit: 'top'
    }
  }

}

// console.log(college);
// console.log(college.unique.result.merit);
college.events[1]= "16 December"
console.log(college.events[1]);
delete college.students;
console.log(college);