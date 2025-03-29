export const formatPhoneNumber = (phoneNumber) => {
    // Remove spaces, parentheses, and dashes
    return phoneNumber.replace(/[\s()-]/g, "");
  };