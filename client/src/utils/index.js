export function getNames() {
  return JSON.parse(localStorage.getItem('student_names')) || [];
}

export function addName(student_name) {
  const names = getNames();

  names.push(student_name);

  localStorage.setItem('student_names', JSON.stringify(names));

  return names;
}