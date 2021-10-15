export const getState = () => {
    try {
      const s = localStorage.getItem("employees");
      if (s  === null) return undefined;
      return JSON.parse(s);
    }catch(e){
      return undefined;
    }
};
export const checkEmailExist = async (email, id) => {
  const employees = getState();
  const isExist = employees.find(item => item.email.toLowerCase() === email.toLowerCase() && id != item.id);
  return isExist;
}