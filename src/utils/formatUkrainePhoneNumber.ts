const formattingGroupRegExp =
  /^(?<plus>\+{0,1})(?<part1>\d{0,2})(?<part2>\d{0,3})(?<part3>\d{0,3})(?<part4>\d{0,2})(?<part5>\d{0,})$/;

export const formatUkrainePhoneNumber = (phoneNumber: string) => {
  const matchedGroups = phoneNumber.match(formattingGroupRegExp)?.groups;

  if (!matchedGroups) return phoneNumber;

  const plus = matchedGroups?.plus;
  const partOne = matchedGroups?.part1;
  const partTwo = matchedGroups?.part2 && ` (${matchedGroups?.part2}`;
  const partThree = matchedGroups?.part3 && `) ${matchedGroups?.part3}`;
  const partFour = matchedGroups?.part4 && ` ${matchedGroups?.part4}`;
  const partFive = matchedGroups?.part5 && ` ${matchedGroups?.part5}`;

  return `${plus}${partOne}${partTwo}${partThree}${partFour}${partFive}`;
};
