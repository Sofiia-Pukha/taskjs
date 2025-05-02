import _ from "lodash";


export function getActiveUsers(users) {
  return _.filter(users, { active: true });
}


export function getSortedUsersByAge(users) {
  return _.sortBy(users, "age");
}


export function getUserNames(users) {
  return _.map(users, "name");
}


export function getUserById(users, id) {
  return _.find(users, { id }) || null;
}


export function addUser(users, newUser) {
  return [...users, newUser];
}


export function removeUserById(users, id) {
  return _.filter(users, (user) => user.id !== id);
}


export function updateUser(users, updatedUser) {
  const index = _.findIndex(users, { id: updatedUser.id });
  if (index === -1) {
    return users;
  }

  const updatedUsers = [...users];
  updatedUsers[index] = { ...updatedUsers[index], ...updatedUser };
  return updatedUsers;
}
