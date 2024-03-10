export const formatUkrainePhoneNumber = (phoneNumber: string) => {
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  const countryCode = cleanedNumber.slice(0, 2);
  const operatorCode = cleanedNumber.slice(2, 5);
  const firstPart = cleanedNumber.slice(5, 8);
  const secondPart = cleanedNumber.slice(8, 10);
  const thirdPart = cleanedNumber.slice(10, 12);
  const extraPart = cleanedNumber.slice(12);

  const transformedNumber = `+${countryCode} (${operatorCode}) ${firstPart} ${secondPart} ${thirdPart}${extraPart && ' ' + extraPart}`;

  return transformedNumber;
};
